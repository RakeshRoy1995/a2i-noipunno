import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  teacher_dashboard,
  teacher_own_subject,
  get_pi_bi_evaluation_list,
  get_report_card,
  dimension_by_subject,
  clssWiseSubject,
  bi_report_card_by_student,
  bi_report_card_details,
} from "../Request";
import { useState, useEffect } from "react";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import {
  section_name,
  shift_name,
  all_students,
  formate_report_data,
  version_name,
  accessBIandReport,
  showReportDeleteEv,
  show_report_open_time_msg,
  showPiBiSubject,
} from "../utils/Utils";
// import {handleConvertToPdf} from "./Pdf"
import Breadcumb from "../layout/Breadcumb";
import Pdf from "./Pdf";
import ShikarthirReportCard from "./ShikarthirReportCard";
import BiRawPDFDownload from "./PDFMaker/ReportPdf";
import TableComp from "./TableComp";
// import "../../src/styles/noipunno_custom_styles.css";

export default function StudentReport() {
  const [err, seterr] = useState<any>("");
  const [subject, setsubject] = useState([]);
  const [student_name, setstudent_name] = useState<any>("");
  const [version, setversion] = useState<any>([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const [assesment, setassesment] = useState<any>([]);
  const [teacher, setteacher] = useState<any>("");
  const [sub_name, setsubject_name] = useState<any>("");
  const [loader, setloader] = useState(true);
  const [instititute, setinstititute] = useState<any>("");
  const [biData, setbiData] = useState<any>([]);
  const [selected_student, setselected_student] = useState<any>([]);
  const [all_subject, setall_subject] = useState<any>([]);
  const [allFelter, setallFelter] = useState<any>({});
  const [student, setstudent] = useState<any>({});
  const [data, setdata] = useState<any>({});
  const [submittingLoading, setsubmittingLoading] = useState(false);

  const fetchData = async () => {
    const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
    const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

    const teacher_dash__: any = localStorage.getItem("teacher_dashboard") || "";
    const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }
    let data: any = "";
    if (teacher_dash) {
      data = teacher_dash;
    } else {
      const data_dash: any = await teacher_dashboard();
      data = data_dash.data;
      localStorage.setItem("teacher_dashboard", JSON.stringify(data_dash.data));
    }

    // const al_teacher: any = await all_teachers();
    setown_data(own_subjet?.data?.data);
    setteacher(own_subjet.data.data.user);

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
    setall_bis(own_subjet.data.data.bis);
    setversion(teacher_dash?.data?.versions);
    setinstititute(teacher_dash?.data?.institute);
    setsubject(all_subject);
    setloader(false);
    setassesment(own_subjet?.data?.data?.assessments[0]?.assessment_details);

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
    // console.log("own_subjet", all_Pi);
  };

  useEffect(() => {
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

  const fetchDataFromAPI = async (student_name: any) => {
    setsubmittingLoading(true);
    try {
      setteacher(allFelter.subject.split("-")[2]);
      setselected_student([]);

      const dimentions = await dimension_by_subject(
        // allFelter.subject.split("-")[0]
        ""
      );

      const report_data = await get_report_card(
        "",
        allFelter.branch,
        allFelter.version,
        allFelter.shift,
        allFelter.subject.split("-")[1],
        allFelter.section,
        student_name
      );

      const get_bi_report_card = await bi_report_card_by_student(
        "",
        allFelter.branch,
        allFelter.version,
        allFelter.shift,
        allFelter.subject.split("-")[1],
        allFelter.section,
        student_name
      );

      const dimentions_details = await bi_report_card_details();
      const clssWiseSub: any = await clssWiseSubject(
        allFelter.subject.split("-")[1]
      );

      clssWiseSub.data.data.sort((a, b) => a.subject_no - b.subject_no);

      let res: any = [];

      report_data.data.report_card.map((d) => {
        d.subject_result.map((s_d) => {
          res.push(s_d);
        });
      });
      let bi_res: any = [];
      get_bi_report_card.data.report_card.map((data) => {
        bi_res.push(data);
      });

      const bi_data = formate_report_data(bi_res, dimentions_details.data.data);
      const data = formate_report_data(res, dimentions.data.data);
      const student_data = all_students(student_name);
      const subject_data = subject_name(allFelter.subject.split("-")[0]);
      // console.log("dimentions", dimentions, res, bi_data);

      const all_sub = clssWiseSub.data.data;

      const final_data = [];

      for (let index = 0; index < all_sub.length; index++) {
        const sub_data = all_sub[index];
        for (let z = 0; z < data.length; z++) {
          const report_data = data[z];

          if (sub_data.uid == report_data[0]) {
            final_data.push(report_data);
            break;
          }
        }
      }

      if (final_data.length) {
        setstudent(student_data);
        setsubject_name(subject_data);
        setbiData(bi_data);
        setall_subject(clssWiseSub.data.data);
        setselected_student(final_data);
      }
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

  const subject_name = (id: any) => {
    if (all_subject.length) {
      const subject = all_subject.find((data) => data.uid == id);
      return subject?.name;
    }
  };

  console.log(`biData`, biData);

  return (
    <div className="report_page">
      {showReportDeleteEv() ? (
        <div className="container">
          <div className="row">
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
                      <SlBookOpen className="me-1" /> শিক্ষার্থীদের রিপোর্ট
                      কার্ড
                    </a>
                  </li>
                </ul>

                {accessBIandReport() ? (
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
                                    value[0] + "-" + value[1] + "-" + value[6],

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
                                        data?.subject?.subject_info?.class_uid +
                                        "-" +
                                        data?.own_subjet.class_room.section_id +
                                        "-" +
                                        data?.own_subjet.class_room.shift_id +
                                        "-" +
                                        data?.own_subjet.class_room.version_id +
                                        "-" +
                                        data?.own_subjet.class_room.branch_id +
                                        "-" +
                                        (data?.own_subjet.class_room
                                          .class_teacher.name_bn ||
                                          data?.own_subjet.class_room
                                            .class_teacher.name_en)
                                      }
                                    >
                                      {data?.subject?.subject_info?.class_uid ==
                                        6 && "ষষ্ঠ"}{" "}
                                      {data?.subject?.subject_info?.class_uid ==
                                        7 && "সপ্তম"}{" "}
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
                            <BiRawPDFDownload
                              selected_student={selected_student}
                              student={data}
                              instititute={instititute ? instititute[0] : {}}
                              subject_name={subject_name}
                              biData={biData}
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
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
