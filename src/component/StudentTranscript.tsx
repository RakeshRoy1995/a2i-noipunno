import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  teacher_dashboard,
  teacher_own_subject,
  get_pi_bi_evaluation_list,
  get_pi_bi,
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
} from "../utils/Utils";

import Breadcumb from "../layout/Breadcumb";
import Pdf from "./Pdf";
// import { toPng } from "html-to-image";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";


export default function StudentTranscript() {
  const [student_info_pdf, setStudent_info_pdf] = useState<any>("");
  const [subject, setsubject] = useState([]);
  const [student_name, setstudent_name] = useState<any>("");
  const [version, setversion] = useState<any>([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const [assesment, setassesment] = useState<any>([]);
  const [teacher, setteacher] = useState<any>('');
  const [loader, setloader] = useState(true);
  const [selectedSunject, setselectedSunject] = useState<any>("");
  const [instititute, setinstititute] = useState<any>("");
  const [data, setdata] = useState<any>({});
  const [selected_student, setselected_student] = useState<any>([]);
  const [allFelter, setallFelter] = useState<any>({});
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

    console.log(`own_subjet`, own_subjet);

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

    console.log(`all_subject`, all_subject);
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

  // console.log("allFelter=====>", allFelter.subject.split("-")[2]);
  console.log(teacher);


  const fetchDataFromAPI = async () => {

    setsubmittingLoading(true);
    try {
      setteacher(allFelter.subject.split("-")[2])
      setselected_student([])
      const pi_bi_data = await get_pi_bi(
        allFelter.subject.split("-")[0],
        allFelter.branch,
        allFelter.version,
        allFelter.shift,
        allFelter.subject.split("-")[1],
        allFelter.section,
        student_name,

      );
      const data = formate_teanscript_data(pi_bi_data.data.transcript);

      setselected_student(data);

      console.log(`data`, data);
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

  const handleConvertToPdf = (student: any, multiple = false) => {
    setsubmittingLoading(true);
    if (!multiple) {
      const filename =
        student.student_name_bn ||
        student.student_name_en + "-roll-" + student.roll + ".pdf";

      const id = "contentToConvert_" + student.uid;
      const element = document.getElementById(id);

      const options = {
        margin: 5,
        filename: filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      const pdf = html2pdf().from(element).set(options).outputPdf();
      pdf.save();
    } else {
      for (let index = 0; index < selected_student.length; index++) {
        const el = selected_student[index];
        const Stu_data: any = all_students(el.student_data.uid);

        const id = "contentToConvert_" + el.student_data.uid;
        const element = document.getElementById(id);

        const filename =
          Stu_data.student_name_bn ||
          Stu_data.student_name_en + "-roll-" + Stu_data.roll + ".pdf";

        const options = {
          margin: 5,
          filename,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        setTimeout(() => {
          const pdf = html2pdf().from(element).set(options).outputPdf();
          pdf.save();
          console.log("element", element);
        }, 700);
      }
      // console.log("student", student);
    }
    setsubmittingLoading(false);
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
                    <SlBookOpen className="me-1" /> পারদর্শিতার মূল্যায়ন
                    প্রতিবেদন(PI)
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className={`nav-link link-secondary ${styles.nav_tab_bottom_border}`}
                    id="behaviour-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#behaviour"
                    href="#"
                  >
                    <SlBookOpen className="me-1" /> আচরণগত মূল্যায়ন
                    প্রতিবেদন(BI)
                  </a>
                </li> */}
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
                                (data?.own_subjet.class_room.class_teacher.name_bn ||
                                  data?.own_subjet.class_room.class_teacher.name_en)

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
                        allFelter.version && (
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
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    {/* <div className="col-6 col-sm-4 col-md-3">
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
                    </div> */}
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
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
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
                    {/* <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3">
                        <label className="form-label mt-3"></label>
                        <div className="input-group">
                          <input
                            className="form-control py-1 border-right-0 border-0"
                            type="search"
                            defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                            id="example-search-input"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          />
                          <span
                            className="input-group-append rounded-end"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          >
                            <button
                              className="btn btn-outline-secondary py-1 border-0"
                              type="button"
                              style={{
                                backgroundColor: "#428F92",
                              }}
                            >
                              <i className="fa fa-search" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {selected_student?.length > 0 && (
                <div className="d-flex justify-content-between flex-md-row flex-column align-items-center border custom-px-2 ">
                  <div className=" d-flex ">
                    <div className="form-label p-4 ms-4 fw-bold ">
                      সকল শিক্ষার্থী মূল্যায়ন ডাউনলোড করুন
                    </div>
                    <div className="d-flex justify-content-between flex-md-row flex-column align-items-center flex-end">
                      <button
                        className={`${styles.download_btn}`}
                        defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                        id="example-search-input"
                        data-bs-toggle="modal"
                        data-bs-target="#allstaticBackdrop"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        <BsFiletypePdf className="fs-4 me-2 " />
                        ডাউনলোড করুন
                      </button>

                      <Link to="pdf-maker" target="_blank"><button>Download</button></Link>

                      {/* <span
                          className="input-group-append rounded-end"
                          style={{
                            fontSize: "12px",
                            backgroundColor: "white",
                          }}
                        ></span> */}
                    </div>
                  </div>
                </div>
              )}

              <Accordion>
                {selected_student?.length > 0 ? (
                  selected_student?.map((data: any, index) => (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header className="px-4 " key={index}>
                        <>
                          <div className="d-flex justify-content-between flex-md-row flex-column align-items-center custom-px-2">
                            <button
                              type="button"
                              className={`${styles.download_btn}`}
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={(e) => {
                                handleConvertToPdf(data.student_data, false);
                                setdata(data);
                                setStudent_info_pdf(data.student_data);
                              }}
                            >
                              <BsFiletypePdf className="fs-4 me-2" />
                            </button>
                            <h5 className="px-2">
                              শিক্ষার্থীর নাম:{" "}
                              {data.student_data.student_name_bn ||
                                data.student_data.student_name_en}
                              <br />
                              রোল নম্বর #{" "}
                              {convertToBanglaNumber(data.student_data.roll)}
                            </h5>
                          </div>
                        </>
                      </Accordion.Header>
                      <Accordion.Body>
                        {data.all_PI_array.map((data: any, key: number) => (
                          <div className="container border" key={key}>
                            <div className="row pb-5 pt-2">
                              <div className="col-sm-6 col-md-3 py-2">
                                <div className="border-0 p-2 h-100">
                                  <div className="d-flex">
                                    <div>
                                      <h6>
                                        পারদর্শিতা সূচক{" "}
                                        {convertToBanglaNumber(
                                          data.pi_data.pi_no
                                        )}{" "}
                                      </h6>
                                      <h6 style={{ fontSize: "14px" }}>
                                        {data.pi_data.name_bn ||
                                          data.pi_data.name_en}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {data.pi_data.pi_attribute.map(
                                (pi_attribute_data: any, k: any) => (
                                  <div
                                    className="col-sm-6 col-md-3 py-2"
                                    key={k}
                                  >
                                    <div
                                      className="card h-100 shadow-lg border-0 p-2"
                                      style={{
                                        backgroundColor:
                                          data.weight_uid ==
                                            pi_attribute_data.weight_uid
                                            ? "#F0FAE9"
                                            : "#FFF",
                                      }}
                                    >
                                      <div className="d-flex">
                                        {data.weight_uid ==
                                          pi_attribute_data.weight_uid && (
                                            <div>
                                              <TiTick
                                                className={`${styles.tick_mark}`}
                                              />
                                            </div>
                                          )}

                                        <div>
                                          <h6 style={{ fontSize: "14px" }}>
                                            {pi_attribute_data.title_bn ||
                                              pi_attribute_data.title_en}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))
                ) : (
                  <p className="m-5">শিক্ষার্থীর মূল্যায়ন পাওয়া যায়নি ।</p>
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="allstaticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="allstaticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="allstaticBackdropLabel">
                <button
                  type="button"
                  onClick={(e) => handleConvertToPdf(selected_student, true)}
                  className={`${styles.download_btn}`}
                  defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <BsFiletypePdf className="fs-4 me-2 " />
                  ডাউনলোড করুন
                </button>
              </h5>
              {!submittingLoading && (
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              )}
            </div>
            <div className="modal-body">
              {
                submittingLoading && <p>Loading...</p>
              }
              {loading ? (
                <p>Loading...</p>
              ) : selected_student?.length > 0 ? (
                selected_student?.map((data: any, index) => (
                  <Pdf
                    data={data}
                    selectedSunject={selectedSunject}
                    allFelter={allFelter}
                    student_info_pdf={data.student_data}
                    unique_id={data.student_data.uid}
                    handleConvertToPdf={handleConvertToPdf}
                    instititute={instititute ? instititute[0] : {}}
                    teacher={teacher}

                  />
                ))
              ) : (
                "No Students"
              )}
            </div>
            {!submittingLoading && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                <h5>
                  শিক্ষার্থীর নাম:
                  {student_info_pdf.student_name_bn}{" "}
                </h5>

                <p>
                  রোল নম্বর # {convertToBanglaNumber(student_info_pdf.roll)}
                </p>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Pdf
                data={data}
                selectedSunject={selectedSunject}
                allFelter={allFelter}
                unique_id={student_info_pdf.uid}
                student_info_pdf={student_info_pdf}
                handleConvertToPdf={handleConvertToPdf}
                instititute={instititute ? instititute[0] : {}}
                teacher={teacher}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
