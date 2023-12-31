import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  teacher_dashboard,
  teacher_own_subject,
  get_pi_bi_evaluation_list,
  get_pi_bi,
  get_pi_bi_by_student_student,
  get_bi_report,
  bi_info,
} from "../Request";
import html2pdf from "html2pdf.js";
import { RotatingLines } from "react-loader-spinner";
import { BsCheckCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { PiBookOpenTextBold } from "react-icons/pi";
import { BsFillFileEarmarkArrowDownFill, BsFiletypePdf } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import styles from "./Home.style.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import {
  section_name,
  shift_name,
  teacher_name,
  branch_name,
  subject_name,
  make_group_by,
  all_students,
  convertToBanglaNumber,
  formate_teanscript_data,
  formate_Bi_teanscript_dataBy_single_student,
  accessBIandReport,
  version_name,
  showReportDeleteEv,
  show_report_open_time_msg,
  showPiBiSubject,
} from "../utils/Utils";

import Breadcumb from "../layout/Breadcumb";
import Pdf from "./Pdf";
// import { toPng } from "html-to-image";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import DownloadPDF_component from "./DownloadPDF";
import PDFMakerBiTranscript from "./PDFMaker/PDFMakerBi";
import TableComp from "./TableComp";
import { Spinner } from "react-bootstrap";

export default function StudentTranscriptBI() {
  const [err, seterr] = useState<any>("");
  const [subject, setsubject] = useState([]);
  const [teacher, setteacher] = useState<any>("");
  const [instititute, setinstititute] = useState<any>("");
  const [data, setdata] = useState<any>({});
  const [selected_student, setselected_student] = useState<any>([]);
  const [allFelter, setallFelter] = useState<any>({});
  const [submittingLoading, setsubmittingLoading] = useState(false);
  const [loader, setloader] = useState(true);
  let [numberOfRender, setnumberOfRender] = useState(1);
  const [showLoadingErr, setshowLoadingErr] = useState("");

  const fetchData = async () => {
    setloader(true);
    setshowLoadingErr("");

    const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
    const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

    const teacher_dash__: any = localStorage.getItem("teacher_dashboard") || "";
    const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

    try {
      let data: any = "";
      if (teacher_dash) {
        data = teacher_dash;
      } else {
        const data_dash: any = await teacher_dashboard();
        data = data_dash.data;
        localStorage.setItem(
          "teacher_dashboard",
          JSON.stringify(data_dash.data)
        );
      }

      let own_subjet: any = "";
      if (own_SUbjects) {
        own_subjet = own_SUbjects;
      } else {
        own_subjet = await teacher_own_subject();
        localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
      }

      // const al_teacher: any = await all_teachers();

      let all_subject: any = [];

      own_subjet.data.data.subjects.map((d: any) => {
        data.data.subjects.map((d_2: any) => {
          if (d_2.subject_id === d.subject_id) {
            data.data.teachers.map((al_tech: any) => {
              if (d.teacher_id == al_tech.uid) {
                let obj: any = {
                  subject: d_2,
                  own_subjet: d,
                  teacher: al_tech,
                  section: d.class_room.section_id,
                  class: d.class_room.class_id,
                  shift: d.class_room.shift_id,
                  students: d.class_room.students.student_name_bn,
                };

                all_subject.push(obj);
              }
            });
          }
        });
      });
      setinstititute(teacher_dash?.data?.institute);

      setsubject(all_subject);

      let all_Pi: any = [];
      own_subjet.data.data.subjects.map((d: any) => {
        d.oviggota.map((ovigota_data) => {
          ovigota_data.pis.map((pis_data) => {
            all_Pi.push(pis_data);
          });
        });
      });

      own_subjet.data.data.subjects.map((d: any) => {
        d.pi_selection.map((pi_selection) => {
          pi_selection.pi_list.map((pis_list_data) => {
            all_Pi.push(pis_list_data);
          });
        });
      });

      setloader(false);
    } catch (error) {
      setshowLoadingErr("");

      numberOfRender++;

      if (numberOfRender <= 10) {
        setnumberOfRender(numberOfRender);
        fetchData();
      } else {
        setloader(false);
        setshowLoadingErr(
          "দুঃখিত। তথ্য সঠিকভাবে লোড হয়নি। অনুগ্রহ করে সাইটটি আবার লোড করুন"
        );
      }
    }
  };

  useEffect(() => {
    setloader(true);
    fetchData();
  }, []);

  const uniquestudents = [
    ...new Set(subject.map((data) => data?.own_subjet?.class_room?.students)),
  ];

  const studnt: any = [];

  for (let index = 0; index < uniquestudents.length; index++) {
    const element = uniquestudents[index];

    for (let i = 0; i < element.length; i++) {
      const element2 = element[i];
      studnt.push(element2);
    }
  }

  const Stuent_result = Object.values(
    studnt.reduce((acc, obj) => ({ ...acc, [obj.uid]: obj }), {})
  );

  const fetchDataFromAPI = async (student_uid: any) => {
    setsubmittingLoading(true);
    seterr("");
    try {
      setteacher(allFelter.subject.split("-")[2]);
      setselected_student([]);

      const pi_bi_data = await get_bi_report(
        allFelter.subject.split("-")[0],
        allFelter.branch,
        allFelter.version,
        allFelter.shift,
        allFelter.subject.split("-")[1],
        allFelter.section,
        student_uid
      );

      const data = formate_Bi_teanscript_dataBy_single_student(
        pi_bi_data?.data?.trancript,
        student_uid
      );
      setselected_student(data);
    } catch (error) {
      seterr(
        "ডেটা লোড করার সময় আপনি একটি ত্রুটির সম্মুখীন হয়েছেন। ডেটা লোড করতে অনুগ্রহ করে আবার ক্লিক করুন"
      );
    }
    setsubmittingLoading(false);
  };

  const new_student = Stuent_result.filter((d: any) => {
    if (
      d.class == allFelter?.subject?.split("-")[1] &&
      d.branch == allFelter.branch &&
      allFelter.shift == d.shift &&
      allFelter.section == d.section &&
      allFelter.version == d.version
    ) {
      return true;
    }
  });

  return (
    <div className="report_page">
      {showReportDeleteEv() ? (
        <div className="container">
          <div className="row">
            {/* <DownloadPDF_component /> */}
            <Breadcumb title={"মূল্যায়ন প্রতিবেদন"} />
            <div className="d-flex align-items-center">
              <div className="card shadow-lg border-0 w-100 rounded">
                <ul className="nav d-flex mt-2 justify-content-around py-1">
                  <li className={`nav-item`}>
                    <a
                      className={`nav-link link-secondary ${styles.nav_tab_bottom_border} active`}
                      id="expertness-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#expertness"
                      href="#"
                    >
                      <SlBookOpen className="me-1" /> আচরণগত মূল্যায়ন
                      প্রতিবেদন(BI)
                    </a>
                  </li>
                </ul>

                {accessBIandReport() ? (
                  <>
                    <div
                      className="tab-content"
                      id="tabContent"
                      style={{ backgroundColor: "#E4FEFF" }}
                    >
                      <div
                        className="tab-pane fade show active"
                        id="expertness"
                        role="tabpanel"
                        aria-labelledby="expertness-tab"
                      >
                        <div className="row p-5">
                          <div className="col-6 col-sm-6 col-md-6">


                          {showLoadingErr ? (
                          <p className="text-danger text-center">
                            {showLoadingErr}
                          </p>
                        ) : (
                          <>
                            {loader && (
                              <div>
                                {loader && (
                                  <>
                                    <Spinner animation="border" /> ডেটা লোড
                                    হচ্ছে। দয়া করে অপেক্ষা করুন...
                                  </>
                                )}
                              </div>
                            )}
                          </>
                        )}


                            <div className="mb-3" style={{ fontSize: "12px" }}>
                              <label className="form-label">
                                বিষয় নির্বাচন করুন
                              </label>
                              <select
                                className="form-select p-2"
                                aria-label="Default select example"
                                style={{ fontSize: "12px" }}
                                onChange={(e) => {
                                  const value = e.target.value.split("-");

                                  let obj = {
                                    ...allFelter,
                                    ["subject"]:
                                      value[0] +
                                      "-" +
                                      value[1] +
                                      "-" +
                                      value[6],

                                    ["section"]: value[2],
                                    ["shift"]: value[3],
                                    ["version"]: value[4],
                                    ["branch"]: value[5],
                                  };

                                  setallFelter(obj);
                                }}
                              >
                                <option value={""}>বিষয় নির্বাচন করুন</option>

                                {subject.map((data) => (
                                  <>
                                    {showPiBiSubject(data) && (
                                      <option
                                        key={data.uid}
                                        value={
                                          data?.subject?.subject_info?.uid +
                                          "-" +
                                          data?.subject?.subject_info
                                            ?.class_uid +
                                          "-" +
                                          data?.own_subjet.class_room
                                            .section_id +
                                          "-" +
                                          data?.own_subjet.class_room.shift_id +
                                          "-" +
                                          data?.own_subjet.class_room
                                            .version_id +
                                          "-" +
                                          data?.own_subjet.class_room
                                            .branch_id +
                                          "-" +
                                          (data?.own_subjet.class_room
                                            .class_teacher.name_bn ||
                                            data?.own_subjet.class_room
                                              .class_teacher.name_en)
                                        }
                                      >
                                        {data?.subject?.subject_info
                                          ?.class_uid == 6 && "ষষ্ঠ"}{" "}
                                        {data?.subject?.subject_info
                                          ?.class_uid == 7 && "সপ্তম"}{" "}
                                        {" শ্রেণী"}
                                        {"-"}
                                        শাখা(
                                        {section_name(
                                          data?.own_subjet.class_room.section_id
                                        )}
                                        ){"-"}
                                        সেশন (
                                        {shift_name(
                                          data?.own_subjet.class_room.shift_id
                                        )}
                                        ) {"-"}
                                        ভার্সন (
                                        {version_name(
                                          data?.own_subjet.class_room.version_id
                                        )}
                                        )
                                      </option>
                                    )}
                                  </>
                                ))}
                              </select>
                            </div>

                            {subject.length == 0 && (
                            <label className="form-label text-danger">
                              আপনি কোনও বিষয় পাননি
                            </label>
                          )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {err && (
                      <p className="text-center text-danger p-2">{err}</p>
                    )}

                    <TableComp
                      new_student={new_student}
                      fetchDataFromAPI={fetchDataFromAPI}
                      setdata={setdata}
                      data={data}
                      pdf={
                        <PDFMakerBiTranscript
                          data={selected_student[0]}
                          instititute={
                            instititute[0] ? instititute[0] : instititute
                          }
                          allFelter={allFelter}
                          student_info_pdf={data}
                          unique_id={""}
                          teacher={teacher}
                        />
                      }
                    />
                  </>
                ) : (
                  <p className="text-center">
                    শুধুমাত্র শ্রেণি শিক্ষকই প্রবেশ করতে পারবেন
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <p className="text-center card-body">{show_report_open_time_msg}</p>
        </div>
      )}
    </div>
  );
}
