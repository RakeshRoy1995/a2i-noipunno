import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  teacher_dashboard,
  teacher_own_subject,
  get_pi_bi_evaluation_list,
  get_report_card,
  dimension_by_subject,
  clssWiseSubject,
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
  branch_name,
  all_students,
  convertToBanglaNumber,
  formate_report_data,
  subject_name,
} from "../utils/Utils";
// import {handleConvertToPdf} from "./Pdf"
import Breadcumb from "../layout/Breadcumb";
import Pdf from "./Pdf";
import ShikarthirReportCard from "./ShikarthirReportCard";
// import "../../src/styles/noipunno_custom_styles.css";

export default function StudentReport() {
  const [student_info_pdf, setStudent_info_pdf] = useState<any>("");
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
  const [data, setdata] = useState<any>({});
  const [selected_student, setselected_student] = useState<any>([]);
  const [all_subject, setall_subject] = useState<any>([]);
  const [allFelter, setallFelter] = useState<any>({});
  const [student, setstudent] = useState<any>({});
  const [loading, setLoading] = useState(false);
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
    setinstititute(teacher_dash?.data?.branches);
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

  const uniqueclass = [...new Set(subject.map((data) => data?.class))];

  const uniqueSections = [...new Set(subject.map((data) => data?.section))];
  const uniqueshift = [...new Set(subject.map((data) => data?.shift))];
  const uniquebranch = [
    ...new Set(subject.map((data) => data?.own_subjet?.class_room?.branch_id)),
  ];
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

  const fetchDataFromAPI = async () => {
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

      const clssWiseSub: any = await clssWiseSubject(allFelter.subject.split("-")[1]);
      setall_subject(clssWiseSub.data.data)

      let res :any = []

      report_data.data.report_card.map((d)=>{
         d.subject_result.map((s_d)=>{
          res.push(s_d)
         })
      })

      const data = formate_report_data(
        res,
        dimentions.data.data
      );
      const student_data = all_students(student_name);
      const subject_data = subject_name(allFelter.subject.split("-")[0]);

      setstudent(student_data);
      setsubject_name(subject_data);

      setselected_student(data);

      console.log(`data----`, data);

    } catch (error) {
      console.error("Error fetching data:", error);
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
      
      const subject = all_subject.find(
        (data) => data.uid == id
      );
      return subject?.name;
    }
  };

  return (
    <div className="report_page">
      {/* report end */}
      {/* expertness assessment start */}

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
                    <SlBookOpen className="me-1" /> শিক্ষার্থীদের রিপোর্ট কার্ড
                  </a>
                </li>
              </ul>
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
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ব্রাঞ্চ নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          name="branch"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ব্রাঞ্চ নির্বাচন করুন</option>
                          {uniquebranch?.map((data, index) => (
                            <option key={index} value={data}>
                              {branch_name(data)} ব্রাঞ্চ
                            </option>
                          ))}

                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">সেশন নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          name="shift"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>সেশন নির্বাচন করুন</option>
                          {uniqueshift?.map((data, index) => (
                            <option key={index} value={data}>
                              {shift_name(data)} সেশন
                            </option>
                          ))}
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ভার্সন নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          name="version"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ভার্সন নির্বাচন করুন</option>
                          {version?.map((data, index) => (
                            <option key={index} value={data.uid}>
                              {data?.version_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">শাখা নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="section"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>শাখা নির্বাচন করুন</option>

                          {uniqueSections?.map((data, index) => (
                            <option key={index} value={data}>
                              {section_name(data)} শাখা
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          বিষয় নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="subject"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>বিষয় নির্বাচন করুন</option>
                          {subject?.map((data, index) => (
                            <option
                              key={index}
                              value={
                                data?.subject?.subject_info?.uid +
                                "-" +
                                data?.subject?.subject_info?.class_uid +
                                "-" +
                                (data?.own_subjet.class_room.class_teacher
                                  .name_bn ||
                                  data?.own_subjet.class_room.class_teacher
                                    .name_en)
                              }
                            >
                              {data?.subject?.subject_info?.name}{" "}
                              {data?.subject?.subject_info?.class_uid == 6 &&
                                "ষষ্ঠ"}
                              {data?.subject?.subject_info?.class_uid == 7 &&
                                "সপ্তম"}{" "}
                              {" শ্রেণী"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {allFelter.branch &&
                      allFelter.subject &&
                      allFelter.section &&
                      allFelter.shift &&
                      allFelter.version && (
                        <>
                          <div className="col-6 col-sm-4 col-md-3">
                            <div className="mb-3" style={{ fontSize: "12px" }}>
                              <label className="form-label">
                                শিক্ষার্থী নির্বাচন করুন
                              </label>
                              <select
                                className="form-select p-2"
                                aria-label="Default select example"
                                style={{ fontSize: "12px" }}
                                onChange={(e) =>
                                  setstudent_name(e.target.value)
                                }
                              >
                                <option value={""}> সকল শিক্ষার্থী </option>

                                {new_student?.map((data: any, index) => (
                                  <option key={index} value={data?.uid}>
                                    {data?.student_name_bn ||
                                      data?.student_name_en}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </>
                      )}
                    <div className="col-6 col-sm-4 col-md-3 pointer">
                      {allFelter.branch &&
                        allFelter.subject &&
                        allFelter.section &&
                        allFelter.shift &&
                        allFelter.version &&
                        student_name && (
                          <div className="mb-3">
                            <label className="form-label ">
                              আপনার নির্বাচন সম্পূর্ণ করুন
                            </label>
                            <div className="">
                              <button
                                type="button"
                                disabled={submittingLoading}
                                onClick={fetchDataFromAPI}
                                className="form-control py-1 border-right-0 border-0"
                                defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                                id="example-search-input"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              >
                                নিম্নে মূল্যায়ন প্রতিবেদন দেখুন{" "}
                                {submittingLoading && "......"}
                                <div
                                  className="btn btn-outline-secondary py-1 border-0"
                                  style={{
                                    backgroundColor: "#428F92",
                                  }}
                                >
                                  <i className="fa fa-search" />
                                </div>
                              </button>
                              <span
                                className=" "
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              ></span>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="behaviour"
                  role="tabpanel"
                  aria-labelledby="behaviour-tab"
                >
                  <div className="row p-5">
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          শ্রেণী নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="class"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>শ্রেণী নির্বাচন করুন</option>
                          {uniqueclass?.map((data, index) => (
                            <option key={index} value={data}>
                              {convertToBanglaNumber(data)} শ্রেণী
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">সেশন নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          name="shift"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>সেশন নির্বাচন করুন</option>
                          {uniqueshift?.map((data, index) => (
                            <option key={index} value={data}>
                              {shift_name(data)} সেশন
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ভার্সন নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          name="version"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ভার্সন নির্বাচন করুন</option>
                          {version?.map((data, index) => (
                            <option key={index} value={data.uid}>
                              {data?.version_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          মূল্যায়ন শিরোনাম নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="mullayon"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option selected>
                            {" "}
                            মূল্যায়ন শিরোনাম নির্বাচন করুন
                          </option>
                          {assesment?.map((data: any, index) => (
                            <option key={index} value={data?.uid}>
                              {data?.assessment_details_name_bn ||
                                data?.assessment_details_name_en}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">সেশন নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          name="shift"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>সেশন নির্বাচন করুন</option>
                          {uniqueshift?.map((data, index) => (
                            <option key={index} value={data}>
                              {shift_name(data)} সেশন
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {allFelter.branch &&
                      allFelter.class &&
                      allFelter.section &&
                      allFelter.shift &&
                      allFelter.version &&
                      allFelter.mullayon && (
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শিক্ষার্থী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                              onChange={(e) => setstudent_name(e.target.value)}
                            >
                              <option value={""}>শিক্ষার্থী </option>

                              {new_student?.map((data: any, index) => (
                                <option key={index} value={data?.uid}>
                                  {data?.student_name_bn ||
                                    data?.student_name_en}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}
                    <div className="col-6 col-sm-4 col-md-3 pointer">
                      <div className="mb-3">
                        <label className="form-label "></label>
                        <div className="input-group">
                          <button
                            type="button"
                            onClick={fetchDataFromAPI}
                            className="form-control py-1 border-right-0 border-0"
                            defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                            id="example-search-input"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          >
                            নিম্নে মূল্যায়ন প্রতিবেদন দেখুন
                            <div
                              className="btn btn-outline-secondary py-1 border-0"
                              style={{
                                backgroundColor: "#428F92",
                              }}
                            >
                              <i className="fa fa-search" />
                            </div>
                          </button>
                          <span
                            className="input-group-append rounded-end"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selected_student.length > 0 && (
        <ShikarthirReportCard
          selected_student={selected_student}
          student={student}
          allFelter={allFelter}
          instititute={instititute ? instititute[0] : {}}
          sub_name={sub_name}
          subject_name={subject_name}
        />
      )}
    </div>
  );
}
