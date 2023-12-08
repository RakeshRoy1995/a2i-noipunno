/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
} from "../Request";

import styles from "./Home.style.module.css";
import { BiSidebar } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";

import { Spinner } from "react-bootstrap";
import ShowAssesment from "./ShowAssesment";
import ParodorshitaComponent from "./ParodorshitaComponent";
import AcorongotoComponent from "./AcorongotoComponent";
import BreadcumbHome from "../layout/BreadcumbHome";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FiAlertOctagon, FiAlertCircle } from "react-icons/fi";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineFileText } from "react-icons/ai";
import IcoImg from "../assets/images/ico.png";
import { section_name, shift_name, teacher_name } from "../utils/Utils";
import ClassRoutine from "./ClassRoutine";

export default function Teacher() {

  const [shift, setShift] = useState([]);
  const [subject, setsubject] = useState([]);
  const [allCompitance, setallCompitance] = useState<any>({});
  const [element, setelement] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [pi_selection, setpi_selection] = useState([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const [selected_subject, setselected_subject] = useState<any>("");
  const [Mullayon_name, setMullayon_name] = useState<any>("");
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [ShowProfile, setShowProfile] = useState(true);
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [teacher_uid, setteacher_uid] = useState<any>("");
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [loader, setloader] = useState(true);
  const [showSubjectname, seshowSubjectname] = useState("");
  const [showCompitance, seshowCompitance] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);

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

    const all_subject: any = [];

    let compitnc_obj = {};
    own_subjet.data.data.subjects.map((d: any) => {
      data.data.subjects.map((d_2: any) => {
        if (d_2.uid === d.subject_id) {
          data.data.teachers.map((al_tech: any) => {
            if (d.teacher_id == al_tech.uid) {
              setpi_selection(d.pi_selection);
              const obj: any = {
                subject: d_2,
                own_subjet: d,
                teacher: al_tech,
              };
              d.competence.map((competnc) => {
                compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc };
              });
              all_subject.push(obj);
            }
          });
        }
      });
    });

    setall_bis(own_subjet.data.data.bis);
    setallCompitance(compitnc_obj);
    setsubject(all_subject);
    setloader(false);
  };

  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.competence);
    setallassessmet(own_data.assessments[0].assessment_details);
  };


  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };

  const [all_student, set_All_student] = useState([]);
  const student_lsit = async () => {
    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem('own_subjet'));
    studentsData.data.data.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );
    set_All_student(uniqueObjectsArray);
  };

  const [all_teacher, set_all_teacher] = useState([]);
  const teacher_list = async () => {
    const teachersData = JSON.parse(localStorage.getItem('teacher_dashboard'));
    set_all_teacher(teachersData?.data?.teachers)
  };

  const [total_class, set_Total_class] = useState([]);
  const all_class = async () => {
    const local_storege_data = JSON.parse(localStorage.getItem('teacher_dashboard'));
    set_Total_class(local_storege_data?.data?.subjects);
  };

  useEffect(() => {
    fetchData();
    student_lsit();
    teacher_list();
    all_class();
  }, []);

  // console.log("all_student", all_student);
  // console.log("all_teacher", all_teacher);


  return (
    <div className="content mb-5">
      {loader && (
        <div className={loader && styles.loading_container}>
          {loader && <Spinner animation="border" />}
        </div>
      )}


      {!loader && (
        <div className="dashboard-section">
          <section className="np-breadcumb-section pt-2 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                
                </div>
                {/* Chart */}
                <div className="col-sm-6 col-md-4 col-lg-3">Chart</div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="card shadow-sm border-0">
                    <div className="d-flex align-items-center justify-content-around py-3 px-2">
                      <div>
                        <h6 className={`my-2 p-0 m-0 ${styles.total_student}`}>
                          সর্বমোট
                          <br />
                          <span>শিক্ষার্থী</span>
                        </h6>
                        <h6
                          className={`my-2 py-1 px-3 p-0 m-0 ${styles.classes_name}`}
                        >
                          শ্রেণী - ষষ্ঠ - সপ্তম
                        </h6>
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center ${styles.total_students_circle}`}
                      >
                        <h5 className={`p-0 m-0 ${styles.total_students}`}>
                          {/* "৯২৩" */}
                          {all_student?.length}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-sm border-0 my-2">
                    <div className="d-flex align-items-center justify-content-around py-3 px-2">
                      <div>
                        <h6 className={`my-2 p-0 m-0 ${styles.total_student}`}>
                          সর্বমোট
                          <br />
                          <span>শিক্ষক</span>
                        </h6>
                        <h6
                          className={`my-2 py-1 px-3 p-0 m-0 ${styles.classes_name}`}
                        >
                          আপনার স্কুল এ
                        </h6>
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center ${styles.total_class_rooms_circle}`}
                      >
                        <h5 className={`p-0 m-0 ${styles.total_students}`}>
                          {/* ৫২ */}
                          {all_teacher?.length}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-sm border-0 mb-1">
                    <div className="d-flex align-items-center justify-content-around py-3 px-2">
                      <div>
                        <h6 className={`my-2 p-0 m-0 ${styles.total_student}`}>
                          সর্বমোট
                          <br />
                          <span>শ্রেণী কক্ষ</span>
                        </h6>
                        <h6
                          className={`my-2 py-1 px-3 p-0 m-0 ${styles.classes_name}`}
                        >
                          আপনার স্কুল এ
                        </h6>
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center ${styles.total_class_rooms_circle}`}
                      >
                        <h5 className={`p-0 m-0 ${styles.total_students}`}>
                          {/* ৪১ */}
                          {total_class?.length}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="card shadow-sm border-0 py-3">
                    <div className="d-flex justify-content-between px-2">
                      <div>
                        <h5 className={`${styles.request}`}>অনুরোধ</h5>
                      </div>
                      <div>
                        <IoEllipsisVerticalSharp className="fs-4" />
                      </div>
                    </div>
                    <div className="">
                      <p className={`px-2 ${styles.request_paragraph}`}>
                        বিষয়গুলি আপনার পর্যালোচনা করা দরকার
                      </p>
                      <div className="">
                        <ul className="nav d-flex justify-content-between align-items-center px-2">
                          <li className="nav-item d-flex align-items-center">
                            <h6 className="p-0 m-0">
                              <FiAlertOctagon className="fs-5 text-dark" />
                            </h6>
                            <a
                              className="nav-link tab_nav text-dark fs-5 active"
                              id="application-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#application"
                              href="#"
                            >
                              আবেদন
                            </a>
                          </li>
                          <li className="nav-item d-flex align-items-center">
                            <h6 className="p-0 m-0">
                              <FiAlertCircle className="fs-5 text-dark" />
                            </h6>
                            <a
                              className="nav-link tab_nav text-dark fs-5"
                              id="notice-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#notice"
                              href="#"
                            >
                              বিজ্ঞপ্তি
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content" id="tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="application"
                            role="tabpanel"
                            aria-labelledby="application-tab"
                          >
                            <div className="border-bottom py-1">
                              <div className="d-flex gap-2 px-2 align-items-center">
                                <div>
                                  <img
                                    src={IcoImg}
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  className={`${styles.request_to_change_ph_no}`}
                                >
                                  ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন
                                </div>
                              </div>
                              <div
                                className={`px-2 ${styles.teacher_name_designation}`}
                              >
                                <div className="d-flex gap-2 pt-1">
                                  <div>সামিনা চৌধুরী</div>
                                  <div>|</div>
                                  <div>সহকারী শিক্ষক</div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between py-2 px-2">
                                <div className="d-flex gap-1">
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Class 6
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Day
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Section A
                                    </h6>
                                  </div>
                                </div>
                                <div>
                                  <p className={`m-0 ${styles.requested_date}`}>
                                    অনুরোধ করেছেন ৬ অক্টোবর ২০২৩
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="border-bottom py-1">
                              <div className="d-flex gap-2 px-2 align-items-center">
                                <div style={{ color: "#69CB1C" }}>
                                  <FaRegArrowAltCircleRight className="fs-5" />
                                </div>
                                <div
                                  className={`${styles.request_to_change_ph_no}`}
                                >
                                  বিষয় পরিবর্তনের অনুরোধ করেছেন
                                </div>
                              </div>
                              <div
                                className={`px-2 ${styles.teacher_name_designation}`}
                              >
                                <div className="d-flex gap-2 pt-1">
                                  <div>সামিনা চৌধুরী</div>
                                  <div>|</div>
                                  <div>সহকারী শিক্ষক</div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between py-2 px-2">
                                <div className="d-flex gap-1">
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Class 6
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Day
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Section A
                                    </h6>
                                  </div>
                                </div>
                                <div>
                                  <p className={`m-0 ${styles.requested_date}`}>
                                    অনুরোধ করেছেন ৬ অক্টোবর ২০২৩
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="notice"
                            role="tabpanel"
                            aria-labelledby="notice-tab"
                          >
                            <div className="border-bottom py-1">
                              <div className="d-flex gap-2 px-2 align-items-center">
                                <div>
                                  <img
                                    src={IcoImg}
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  className={`${styles.request_to_change_ph_no}`}
                                >
                                  ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন
                                </div>
                              </div>
                              <div
                                className={`px-2 ${styles.teacher_name_designation}`}
                              >
                                <div className="d-flex gap-2 pt-1">
                                  <div>সামিনা চৌধুরী</div>
                                  <div>|</div>
                                  <div>সহকারী শিক্ষক</div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between py-2 px-2">
                                <div className="d-flex gap-1">
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Class 6
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Day
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Section A
                                    </h6>
                                  </div>
                                </div>
                                <div>
                                  <p className={`m-0 ${styles.requested_date}`}>
                                    অনুরোধ করেছেন ৬ অক্টোবর ২০২৩
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="border-bottom py-1">
                              <div className="d-flex gap-2 px-2 align-items-center">
                                <div style={{ color: "#69CB1C" }}>
                                  <FaRegArrowAltCircleRight className="fs-5" />
                                </div>
                                <div
                                  className={`${styles.request_to_change_ph_no}`}
                                >
                                  বিষয় পরিবর্তনের অনুরোধ করেছেন
                                </div>
                              </div>
                              <div
                                className={`px-2 ${styles.teacher_name_designation}`}
                              >
                                <div className="d-flex gap-2 pt-1">
                                  <div>সামিনা চৌধুরী</div>
                                  <div>|</div>
                                  <div>সহকারী শিক্ষক</div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between py-2 px-2">
                                <div className="d-flex gap-1">
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Class 6
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Day
                                    </h6>
                                  </div>
                                  <div>
                                    <h6
                                      className={`m-0 ${styles.class_day_section}`}
                                    >
                                      Section A
                                    </h6>
                                  </div>
                                </div>
                                <div>
                                  <p className={`m-0 ${styles.requested_date}`}>
                                    অনুরোধ করেছেন ৬ অক্টোবর ২০২৩
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className={`btn d-flex justify-content-center mx-2 mt-3 ${styles.show_all_btn}`}
                    >
                      সব অনুরোধগুলি দেখুন
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="container py-5">
              <p className={`${styles.report_title}`}>রিপোর্ট</p>
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="card shadow-sm border-0 py-2 px-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className={`${styles.report_icon}`}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 13H12"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 17H16"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className={`m-0 ${styles.report}`}>
                        হাজিরা প্রতিবেদন
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card shadow-sm border-0 py-2 px-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className={`${styles.report_icon}`}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 13H12"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 17H16"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className={`m-0 ${styles.report}`}>
                        পারদর্শিতার মূল্যায়ন প্রতিবেদন (PI)
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card shadow-sm border-0 py-2 px-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className={`${styles.report_icon}`}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 13H12"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 17H16"
                            stroke="#FF4D4C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h6 className={`m-0 ${styles.report}`}>
                        আচরণগত মূল্যায়ন প্রতিবেদন (BI)
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="container">
              <div className="row">
                {!ShowProfile && (
                  <BreadcumbHome
                    showSubjectname={showSubjectname}
                    setShowProfile={setShowProfile}
                    seshowSubject={seshowSubject}
                    title={" পারদর্শিতা এবং আচরণগত মূল্যায়ন"}
                  />
                )}

                <div className={ShowProfile ? "col-md-9" : "col-md-12"}>
                  <div className="row d-flex gap-2">
                    <div></div>
                    <div className="d-flex" style={{ cursor: "pointer" }}>
                      <h5
                        onClick={(e) => {
                          seshowSubject(true);
                          setShowProfile(true);
                        }}
                      >
                        {showSubject && subject.length > 0 && (
                          <>
                            <BiSidebar /> বিষয়সমূহ{" "}
                          </>
                        )}
                        {subject.length == 0 && (
                          <>কোন বিষয় খুঁজে পাওয়া যায়নি</>
                        )}

                        {/* {showSkillBehaibor && <><MdArrowBackIosNew className="fs-3 text-secondary" /> পারদর্শিতা এবং আচরণগত মূল্যায়ন </>  } */}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    {showSubject && (
                      <>
                        {subject.map((d: any, key: any) => (
                          <div
                            className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"
                            style={{ cursor: "pointer" }}
                            key={key}
                            onClick={(e) => {
                              skill_behaibor_count(d);
                              seshowSubjectname(d.subject.name);
                              setStudent(d?.own_subjet?.class_room?.students);

                              setteacher_uid(d?.own_subjet.teacher_id);
                              setStudent(d?.own_subjet?.class_room?.students);
                              setShowProfile(false);
                              localStorage.setItem(
                                "class_room_id",
                                d.own_subjet.class_room_id
                              );
                            }}
                          >
                            <div className="card shadow-lg border-0 p-1 p-lg-3 teacher-list-card h-100">
                              <div className="gap-1 gap-lg-3 justify-content-center">
                                <div className="d-flex justify-content-center py-2 pb-4">
                                  <div
                                    className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                                  >
                                    <div className={styles.icons}>
                                      <SlBookOpen className="fs-3" />
                                    </div>
                                  </div>
                                </div>
                                <h5 className={styles.subject}>
                                  {d?.subject?.name}
                                </h5>

                                <h5 className={styles.std_class}>
                                  {d?.subject.class_uid == "6"
                                    ? "ষষ্ঠ "
                                    : "সপ্তম "}
                                  শ্রেণি
                                </h5>
                                <h5 className={styles.class_teacher}>
                                  শ্রেণি শিক্ষক :
                                  <span
                                    style={{
                                      display: "block",
                                    }}
                                  >
                                    {teacher_name(
                                      d.own_subjet.class_room.class_teacher_id
                                    )}
                                  </span>
                                </h5>
                              </div>
                              <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                                <h6 className={styles.session}>
                                  {shift_name(d.own_subjet.class_room.shift_id)}{" "}
                                  সেশন
                                </h6>
                                <h6 className={styles.horizontal_bar}>। </h6>
                                <h6 className={styles.branch}>
                                  {section_name(
                                    d.own_subjet.class_room.section_id
                                  )}{" "}
                                  শাথা
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {ShowProfile === false && (
                      <>
                        {showSkillBehaibor && (
                          <>
                            <ShowAssesment
                              seshowCompitance={seshowCompitance}
                              setassessment_uid={setassessment_uid}
                              setMullayon_name={setMullayon_name}
                              allassessmet={allassessmet}
                              parodorshita_acoron_tab={parodorshita_acoron_tab}
                              own_data={own_data}
                              setallassessmet={setallassessmet}
                              setparodorshita_acoron_tab={
                                setparodorshita_acoron_tab
                              }
                              pi_selection={pi_selection}
                              allCompitance={allCompitance}
                              setShowcollaps={setShowcollaps}
                            />
                          </>
                        )}

                        {showCompitance && (
                          <>
                            {parodorshita_acoron_tab === 0 && (
                              <ParodorshitaComponent
                                teacher_uid={teacher_uid}
                                Student={Student}
                                assessment_uid={assessment_uid}
                                pi_attr={pi_attr}
                                showDetailsshikhonKalinMullayon={
                                  showDetailsshikhonKalinMullayon
                                }
                                Showcollaps={Showcollaps}
                                setShowcollaps={setShowcollaps}
                                Mullayon_name={Mullayon_name}
                                shikhonKalinMullayon={shikhonKalinMullayon}
                                setshowDetailsshikhonKalinMullayon={
                                  setshowDetailsshikhonKalinMullayon
                                }
                              />
                            )}

                            {parodorshita_acoron_tab === 1 && (
                              <AcorongotoComponent
                                teacher_uid={teacher_uid}
                                teacher={teacher}
                                Student={Student}
                                all_bis={all_bis}
                                assessment_uid={assessment_uid}
                                pi_attr={pi_attr}
                                showDetailsshikhonKalinMullayon={
                                  showDetailsshikhonKalinMullayon
                                }
                                Showcollaps={Showcollaps}
                                setShowcollaps={setShowcollaps}
                                Mullayon_name={Mullayon_name}
                                shikhonKalinMullayon={shikhonKalinMullayon}
                                setshowDetailsshikhonKalinMullayon={
                                  setshowDetailsshikhonKalinMullayon
                                }
                              />
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <ClassRoutine />
          </section>
        </div>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* Teachers List end */}
    </div>
  );
}
