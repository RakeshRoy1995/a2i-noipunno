/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  class_room_info,
  get_common_info,
  teacher_dashboard,
  teacher_own_subject,
} from "../Request";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation/loading.json"
import { Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import BreadcumbHome from "../layout/BreadcumbHome";
import {
  formate_own_subject_data,
  section_name,
  shift_name,
  showReportDeleteEv,
  show_report_open_time_msg,
  teacher_name,
} from "../utils/Utils";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AcorongotoComponent from "./AcorongotoComponent";
import styles from "./Home.style.module.css";
import ParodorshitaComponent from "./ParodorshitaComponent";
import ShowAssesment from "./ShowAssesment";
import bookIcon from "../../src/assets/dashboard_materials/images/dashboard/bicon.svg";
import "../../src/assets/project_ca_html/css/dashboard.css";
import ReportForHeadTeacherDashboard from "./Dashboards/ReportForHeadTeacherDashboard";
import moment from 'moment';

export default function TeacherAttendance() {

  const [showLoadingErr, setshowLoadingErr] = useState("");
  let [numberOfRender, setnumberOfRender] = useState(1);
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
  const [classRoomId, setClassRoomId] = useState('');
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [loader, setloader] = useState(true);
  const [showSubjectname, seshowSubjectname] = useState("");
  const [showCompitance, seshowCompitance] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = moment(selectedDate).format('YYYY-MM-DD');
  const [students, setStudents] = useState([]);
  const [
    shikhonKalinMullayon_sannasik_barsik,
    setshikhonKalinMullayon_sannasik_barsik,
  ] = useState([]);
  // navigate
  const navigate = useNavigate()
  const fetchData = async () => {
    setshowLoadingErr("")


    try {
      const teacher_dash__: any =
        localStorage.getItem("teacher_dashboard") || "";
      const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

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

      const own_subjet_: any = localStorage.getItem("own_subjet") || "";
      let own_subjet = own_subjet_ ? JSON.parse(own_subjet_) : "";



      if (own_subjet == "") {
        own_subjet = await teacher_own_subject();

        // console.log(`own_subjet`, own_subjet);
        localStorage.setItem("own_subjet", JSON.stringify(own_subjet))
      }

      if (own_subjet?.success == false) {
        setshowLoadingErr(own_subjet.msg);
      } else {

        setown_data(own_subjet?.data?.data);
        setteacher(own_subjet.data.data.user);

        const all_subject: any = [];

        let compitnc_obj = {};
        own_subjet.data.data.subjects.map((d: any) => {
          data.data.subjects.map((d_2: any) => {
            if (d_2.subject_id === d.subject_id) {
              const obj: any = {
                subject: d_2.subject_info,
                own_subjet: d,
                teacher: d.class_room.class_teacher,
              };
              d.oviggota.map((competnc) => {
                compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc };
              });
              all_subject.push(obj);
            }
          });
        });

        setall_bis(own_subjet.data.data.bis);
        setallCompitance(compitnc_obj);
        setsubject(all_subject);
        setloader(false);

      }


    } catch (error) {
      setshowLoadingErr("");

      numberOfRender++;

      if (numberOfRender <= 10) {
        setnumberOfRender(numberOfRender);
        fetchData();
      } else {
        setshowLoadingErr(
          "দুঃখিত। তথ্য সঠিকভাবে লোড হয়নি। অনুগ্রহ করে সাইটটি আবার লোড করুন"
        );
      }
    }
  };

  const skill_behaibor_count = async (datas: any) => {
    setShowModal(true);
    // seshowSkillBehaibor(true);
     //seshowSubject(false);
    // setselected_subject(datas);
    // setshikhonKalinMullayon(datas.own_subjet.oviggota);
    // setshikhonKalinMullayon_sannasik_barsik(datas.own_subjet.competence);
    // setallassessmet(own_data.assessments[0].assessment_details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmitAttendance = (event) => {
    event.preventDefault();
    // // console.log(attendance);
    const datas = {
      ...attendance, class_room_id: classRoomId, date,
    };
     console.log(datas);
  };

  const handleCheckboxChange = (studentId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: !prevAttendance[studentId],
    }));
  };



  return (
    <>

      {!showReportDeleteEv() ? (
        <div className="content mb-5 teacher_compo_bg">
          {showLoadingErr ? (
            <p className="text-danger text-center">{showLoadingErr}</p>
          ) : (
            <>
              {loader && (
                <div className={loader && styles.loading_container}>
                  {/* {loader && <Spinner animation="border" />} */}
                  <Lottie animationData={loadingAnimation} />
                </div>
              )}
            </>
          )}

          {!ShowProfile && (
            <BreadcumbHome
              showSubjectname={showSubjectname}
              setShowProfile={setShowProfile}
              seshowSubject={seshowSubject}
              title={" পারদর্শিতা এবং আচরণগত মূল্যায়ন"}
              selected_subject={selected_subject}
            />
          )}



          {!loader && (
            <div className="dashboard-section ">
              <section className="np-breadcumb-section  pb-5"  style={{backgroundColor: "#F1F1F2"}}>
                <div className="container">
                  <div className="row">
                    {/* {ShowProfile && (location.pathname !== "/mollayon-koron")  && (
                <div className="col-md-3 mt-2">
                  <ProfileCard />
                </div>
              )} */}

                    <div
                      className={
                        // ShowProfile ?
                        // "col-md-9" :
                        "col-md-12"
                      }
                    >
                      <div
                        className={`row d-flex gap-2 ${styles.subject_container}`}
                      >
                        <div className="d-flex" style={{ cursor: "pointer" }}>
                          <h5
                            onClick={(e) => {
                              seshowSubject(true);
                              setShowProfile(true);
                            }}
                          >
                            {showSubject && subject.length > 0 && (
                              <>{/* বিষয়ভিত্তিক তথ্য ও মূল্যায়ন{" "} */}</>
                            )}
                            {subject.length == 0 && (
                              <>কোন বিষয় খুঁজে পাওয়া যায়নি</>
                            )}

                            {/* {showSkillBehaibor && <><MdArrowBackIosNew className="fs-3 text-secondary" /> পারদর্শিতা এবং আচরণগত মূল্যায়ন </>  } */}
                          </h5>
                        </div>
                      </div>

                      <div className="row">
                        <div className="container subject-container">
                          {ShowProfile && (
                            <h2 className="m-0" style={{fontWeight:"bolder"}}>
                              বিষয় ভিত্তিক তথ্য ও মূল্যায়ন  ****
                            </h2>
                          )}

                          {/* card collection */}


                          <div className="row">
                            {showSubject && (
                              <>
                                {subject.map((d: any, key: any) => (
                                  <div
                                    className="col-sm-12 col-md-12 col-lg-4 col-xl-4 g-2"
                                    style={{ cursor: "pointer" }}
                                    key={key}
                                    onClick={(e) => {
                                    
                                      skill_behaibor_count(d);
                                      seshowSubjectname(d.subject.name);
                                      

                                      const studnt =
                                        d?.own_subjet?.class_room?.students;

                                      studnt.sort(function (a, b) {
                                        return a.roll - b.roll;
                                      });

                                      setStudent(studnt);

                                      setteacher_uid(d?.own_subjet.teacher_id);
                                      setShowProfile(false);
                                      localStorage.setItem(
                                        "class_room_id",
                                        d.own_subjet.class_room_id
                                      );

                                      localStorage.setItem(
                                        "subject_id",
                                        d.own_subjet.subject_id
                                      );

                                      setpi_selection(
                                        d.own_subjet?.pi_selection
                                      );
                                    }}
                                  >
                                    <a className="subject-number">
                                      <div className="icon">
                                        <img src={bookIcon} alt="" />
                                      </div>
                                      <h2 className="mt-3">
                                        {" "}
                                        {d?.subject?.name}
                                      </h2>
                                      <div className="total-student">
                                        <p>
                                          {" "}
                                          {d?.subject?.class_uid == "6"
                                            ? "ষষ্ঠ "
                                            : <> {d?.subject?.class_uid == "7" ? "সপ্তম " : <>  {d?.subject?.class_uid == "8" ? "অষ্টম" : "নবম"}  </>} </>}{" "}
                                          শ্রেণি{" "}
                                        </p>
                                      </div>
                                      <div className="d-flex gap-1 ">
                                        <div className="total-student">
                                          <p> শ্রেণি শিক্ষক:</p>
                                        </div>
                                        <div className="total-student">
                                          <p>
                                            {d?.teacher?.name_bn ||
                                              d?.teacher?.name_en}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                                        <h6 className={styles.session}>
                                          {shift_name(
                                            d?.own_subjet?.class_room?.shift_id
                                          )}{" "}
                                          সেশন
                                        </h6>
                                        <h6 className={styles.horizontal_bar}>
                                          ।{" "}
                                        </h6>
                                        <h6 className={styles.branch}>
                                          {section_name(
                                            d?.own_subjet?.class_room?.section_id
                                          )}{" "}
                                          শাখা
                                        </h6>
                                      </div>

                                      <div className="total-student-show">
                                        <div className="bottom">
                                          <div className="text">
                                            মোট শিক্ষার্থী{" "}
                                          </div>
                                          <div className="badge">
                                            <div className="success">
                                              {
                                                d.own_subjet?.class_room
                                                  ?.students?.length
                                              }
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </>
                            )}
                          </div>
                        </div>

                        

                        {/* ShowAssesment , ParodorshitaComponent,   AcorongotoComponent*/}
                    

                      </div>
                    </div>
                  </div>
                </div>

            <div>


            <div
                className={`modal fade ${showModal ? 'show' : ''}`}
            
                style={{ display: showModal ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">শিক্ষার্থীর হাজিরা</h5>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={closeModal}
                    ></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmitAttendance}>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">শিক্ষার্থীর রোল</th>
                                    <th scope="col">শিক্ষার্থীর নাম</th>
                                    <th scope="col" className="text-center">উপস্থিতি</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {students?.map((student, key) => (
                                        <tr key={key}>
                                        <th scope="row" className="text-center" >{student?.roll}</th>
                                        <td>{student?.student_name_bn || student?.student_name_en}</td>
                                        <td className="text-center">
                                            <input
                                            style={{ height: "10px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}
                                            className="form-check-input "
                                            type="checkbox"
                                            name={`attendance-${student?.id}`}
                                            onChange={() => handleCheckboxChange(student?.uid)}
                                            />
                                        </td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                        <div className="d-flex justify-content-end align-items-center pt-1 pe-3">
                            <button
                            type="submit"
                            className="btn btn-primay px-5"
                            style={{ backgroundColor: "#428F92", color: "#fff" }}
                            >
                            জমা দিন <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem" }} />
                            </button>
                        </div>
                    </form>

                    </div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={closeModal}
                    >
                        বন্ধ করুন
                    </button>
                    </div>
                </div>
                </div>
            </div>
            {showModal && <div className="modal-backdrop fade show"></div>}
            
            </div>

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
      ) : (
        <>
          {showLoadingErr ? (
            <p className="text-danger text-center">{showLoadingErr}</p>
          ) : (
            <>
              {loader && (
                <div className={loader && styles.loading_container}>
                  {/* {loader && <Spinner animation="border" />} */}
                  {loader && <Lottie animationData={loadingAnimation} />}
                </div>
              )}

              {!loader && <ReportForHeadTeacherDashboard />}
            </>
          )}
        </>
      )}
    </>
  );
}
