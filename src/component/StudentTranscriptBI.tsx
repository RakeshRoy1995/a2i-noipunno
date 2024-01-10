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
  class_teacher_all_student_data,
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
  formate_Bi_teanscript_dataBy_single_student,
  accessBIandReport,
  version_name,
  showReportDeleteEv,
  show_report_open_time_msg,
} from "../utils/Utils";

import Breadcumb from "../layout/Breadcumb";
import PDFMakerBiTranscript from "./PDFMaker/PDFMakerBi";
import TableComp from "./TableComp";
import { Spinner } from "react-bootstrap";

export default function StudentTranscriptBI() {
  const [err, seterr] = useState<any>("");
  const [new_student, setnew_student] = useState<any>([]);
  const [teacher, setteacher] = useState<any>("");
  const [instititute, setinstititute] = useState<any>("");
  const [data, setdata] = useState<any>({});
  const [selected_student, setselected_student] = useState<any>([]);
  const [all_student_and_class, setall_student_and_class] = useState<any>([]);
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

    const class_teacher_student__: any =
      localStorage.getItem("class_teacher_student") || "";
    const class_teacher_student = class_teacher_student__
      ? JSON.parse(class_teacher_student__)
      : "";

    try {
      let class_teacher_student_data: any = "";
      if (class_teacher_student) {
        class_teacher_student_data = class_teacher_student;
      } else {
        const data_dash: any = await class_teacher_all_student_data();
        class_teacher_student_data = data_dash;
        localStorage.setItem(
          "class_teacher_student",
          JSON.stringify(class_teacher_student_data)
        );
      }

      if (class_teacher_student_data.data.data.students.length) {
        setall_student_and_class(class_teacher_student_data.data.data.students);
      }

      let data: any = "";
      if (teacher_dash) {
      } else {
        const data_dash: any = await teacher_dashboard();
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
     
      setinstititute(teacher_dash?.data?.institute);
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

      if (pi_bi_data?.data?.trancript.length > 0) {
        const data = formate_Bi_teanscript_dataBy_single_student(
          pi_bi_data?.data?.trancript,
          student_uid
        );
        setselected_student(data);
      } else {
        seterr(
          "আপনি এই শিক্ষার্থীর মূল্যায়ন করেননি"
        )
      }

      
    } catch (error) {
      seterr(
        "ডেটা লোড করার সময় আপনি একটি ত্রুটির সম্মুখীন হয়েছেন। ডেটা লোড করতে অনুগ্রহ করে আবার ক্লিক করুন"
      );
    }
    setsubmittingLoading(false);
  };



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
                                  setnew_student(
                                    all_student_and_class[value[0]].students
                                  );

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

                                {all_student_and_class.map(
                                  (data: any, key: number) => (
                                    <option
                                      key={key}
                                      value={
                                        key +
                                        "-" +
                                        data?.class_id +
                                        "-" +
                                        data?.section_id +
                                        "-" +
                                        data?.shift_id +
                                        "-" +
                                        data?.version_id +
                                        "-" +
                                        data?.branch_id +
                                        "-" +
                                        teacher_name(data?.class_teacher_id)
                                      }
                                    >
                                      {data?.class_id == 6 && "ষষ্ঠ"}{" "}
                                      {data?.class_id == 7 && "সপ্তম"}{" "}
                                      {" শ্রেণী"}
                                      {"-"}
                                      শাখা(
                                      {section_name(data?.section_id)}){"-"}
                                      সেশন ({shift_name(data?.shift_id)}) {"-"}
                                      ভার্সন ({version_name(data?.version_id)})
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
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
