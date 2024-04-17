/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  class_room_info,
  get_common_info,
  teacher_dashboard,
  teacher_own_subject,
  teacher_own_subject_redesign,
} from "../Request";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation/loading.json";
import { Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import BreadcumbHome from "../layout/BreadcumbHome";
import {
  formate_own_subject_data,
  section_name,
  shift_name,
  showReportDeleteEv,
  showReportEvBoth,
  show_report_open_time_msg,
  teacher_name,
} from "../utils/Utils";

import AcorongotoComponent from "./AcorongotoComponent";
import styles from "./Home.style.module.css";
import ParodorshitaComponent from "./ParodorshitaComponent";
import ShowAssesment from "./ShowAssesment";
import bookIcon from "../../src/assets/dashboard_materials/images/dashboard/bicon.svg";
import "../../src/assets/project_ca_html/css/dashboard.css";
import ReportForHeadTeacherDashboard from "./Dashboards/ReportForHeadTeacherDashboard";

export default function Teacher() {
  const [showLoadingErr, setshowLoadingErr] = useState("");
  const [showMainAssessments, setshowMainAssessments] = useState<any>(false);
  let [numberOfRender, setnumberOfRender] = useState(1);
  const [subject, setsubject] = useState([]);
  const [allCompitance, setallCompitance] = useState<any>({});
  const [element, setelement] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [breadcumbTitle, setbreadcumbTitle] = useState("");
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
  const [waitForMoreData, setwaitForMoreData] = useState(true);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);
  const [
    shikhonKalinMullayon_sannasik_barsik,
    setshikhonKalinMullayon_sannasik_barsik,
  ] = useState([]);
  // navigate
  const navigate = useNavigate();

  const fetchData = async () => {
    setshowLoadingErr("");

    // test 1

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

      console.log(`own_subjet`, own_subjet);

      if (own_subjet == "") {
        own_subjet = await teacher_own_subject_redesign();

        // console.log(`own_subjet`, own_subjet);
        localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
      }

      if (own_subjet?.success == false) {
        setshowLoadingErr(own_subjet.msg);
      } else {
        setown_data(own_subjet?.data?.data);
        setteacher(own_subjet.data.data.user);

        const all_subject: any = [];

        // let compitnc_obj = {};
        own_subjet.data.data.subjects.map((d: any) => {
          data.data.subjects.map((d_2: any) => {
            if (d_2.subject_id === d.subject_id) {
              const obj: any = {
                subject: d_2.subject_info,
                own_subjet: d,
                teacher: d.class_room.class_teacher,
              };
              // d?.oviggota.map((competnc) => {
              //   compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc };
              // });
              all_subject.push(obj);
            }
          });
        });

        // setall_bis(own_subjet.data.data.bis);
        // setallCompitance(compitnc_obj);
        setsubject(all_subject);
        setloader(false);

        await fetchData_for_restapi();
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

  const fetchData_for_restapi = async (d = "") => {
    setshowLoadingErr("");
    setwaitForMoreData(true);
    // seshowSubject(false)
    seshowSkillBehaibor(false);

    try {
      const teacher_dash__: any =
        localStorage.getItem("teacher_dashboard") || "";
      const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

      const data: any = teacher_dash;

      const own_subjet_: any = localStorage.getItem("own_subjet") || "";
      let own_subjet = own_subjet_ ? JSON.parse(own_subjet_) : "";

      console.log(`own_subjet`, own_subjet.data.data.bis);
      if (!own_subjet.data.data.bis) {
        own_subjet = await teacher_own_subject();
      }

      // console.log(`own_subjet`, own_subjet.data.data.bis);

      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));

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

        console.log(`2222222`, own_subjet);

        setall_bis(own_subjet.data.data.bis);
        setallCompitance(compitnc_obj);
        setsubject(all_subject);
        setloader(false);
      }
      //
      seshowSkillBehaibor(true);
      setwaitForMoreData(false);
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
    console.log("skill", datas);
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.oviggota);
    setshikhonKalinMullayon_sannasik_barsik(datas.own_subjet.competence);
    setallassessmet(own_data?.assessments[0]?.assessment_details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };

  // console.log(subject);

  return (
    <>
      {!showReportDeleteEv() || showReportEvBoth() ? (
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
              breadcumbTitle={Mullayon_name}
              seshowCompitance={seshowCompitance}
              setMullayon_name={setMullayon_name}
              selected_subject={selected_subject}
              setshowMainAssessments={setshowMainAssessments}
            />
          )}

          {!loader && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
            >
              <div className="dashboard-section ">
                <section
                  className="np-breadcumb-section  pb-5"
                  style={{ backgroundColor: "#F1F1F2" }}
                >
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
                              <h2
                                className="m-0"
                                style={{ fontWeight: "bolder" }}
                              >
                                বিষয় ভিত্তিক তথ্য ও মূল্যায়ন
                              </h2>
                            )}

                            {/* card collection */}
                            <div className="row">
                              {showSubject && (
                                <>
                                  {subject.map((d: any, key: any) => (
                                    <div
                                      className="col-sm-12 col-md-12 col-lg-4 col-xl-4 g-2"
                                      style={{
                                        cursor: !waitForMoreData && "pointer",
                                        background:'linearGradient(var(180deg), #92278f 0%, #662d91 100%)', 
                                        border: '0px solid rgba(0, 0, 0, 0)',
                                        transform: 'translateY(0px)',
                                        transition: 'all .75s cubic-bezier(0.72, 0.11, 0.22, 0.92'
                                      }}
                                      key={key}
                                      title={
                                        waitForMoreData
                                          ? "Loading. please Wait..."
                                          : ""
                                      }
                                      onClick={(e) => {
                                        {
                                          !waitForMoreData &&
                                            skill_behaibor_count(d);
                                          seshowSubjectname(d.subject.name);

                                          const studnt =
                                            d?.own_subjet?.class_room?.students;

                                          studnt.sort(function (a, b) {
                                            return a.roll - b.roll;
                                          });

                                          setStudent(studnt);

                                          setteacher_uid(
                                            d?.own_subjet.teacher_id
                                          );
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
                                        }
                                      }}
                                    >
                                      <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
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
                                              {d?.subject?.class_uid == "6" ? (
                                                "ষষ্ঠ "
                                              ) : (
                                                <>
                                                  {" "}
                                                  {d?.subject?.class_uid ==
                                                  "7" ? (
                                                    "সপ্তম "
                                                  ) : (
                                                    <>
                                                      {" "}
                                                      {d?.subject?.class_uid ==
                                                      "8"
                                                        ? "অষ্টম"
                                                        : "নবম"}{" "}
                                                    </>
                                                  )}{" "}
                                                </>
                                              )}{" "}
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
                                                d?.own_subjet?.class_room
                                                  ?.shift_id
                                              )}{" "}
                                              সেশন
                                            </h6>
                                            <h6
                                              className={styles.horizontal_bar}
                                            >
                                              ।{" "}
                                            </h6>
                                            <h6 className={styles.branch}>
                                              {section_name(
                                                d?.own_subjet?.class_room
                                                  ?.section_id
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
                                      </motion.div>
                                    </div>
                                  ))}
                                </>
                              )}
                            </div>
                          </div>

                          {/* ShowAssesment , ParodorshitaComponent,   AcorongotoComponent*/}
                          {ShowProfile === false && (
                            <>
                              {showSkillBehaibor && (
                                <>
                                  <ShowAssesment
                                    seshowCompitance={seshowCompitance}
                                    setassessment_uid={setassessment_uid}
                                    setMullayon_name={setMullayon_name}
                                    Mullayon_name={Mullayon_name}
                                    allassessmet={allassessmet}
                                    parodorshita_acoron_tab={
                                      parodorshita_acoron_tab
                                    }
                                    own_data={own_data}
                                    setallassessmet={setallassessmet}
                                    setparodorshita_acoron_tab={
                                      setparodorshita_acoron_tab
                                    }
                                    pi_selection={pi_selection}
                                    allCompitance={allCompitance}
                                    setShowcollaps={setShowcollaps}
                                    breadcumbTitle={Mullayon_name}
                                    showMainAssessments={showMainAssessments}
                                    setshowMainAssessments={
                                      setshowMainAssessments
                                    }
                                  />
                                </>
                              )}

                              {showCompitance && (
                                <>
                                  {parodorshita_acoron_tab === 0 && (
                                    <ParodorshitaComponent
                                      pi_selection={pi_selection}
                                      teacher_uid={teacher_uid}
                                      Student={Student}
                                      assessment_uid={assessment_uid}
                                      pi_attr={pi_attr}
                                      showDetailsshikhonKalinMullayon={
                                        showDetailsshikhonKalinMullayon
                                      }
                                      shikhonKalinMullayon_sannasik_barsik={
                                        shikhonKalinMullayon_sannasik_barsik
                                      }
                                      Showcollaps={Showcollaps}
                                      setShowcollaps={setShowcollaps}
                                      Mullayon_name={Mullayon_name}
                                      shikhonKalinMullayon={
                                        shikhonKalinMullayon
                                      }
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
                                      shikhonKalinMullayon_sannasik_barsik={
                                        shikhonKalinMullayon_sannasik_barsik
                                      }
                                      Showcollaps={Showcollaps}
                                      setShowcollaps={setShowcollaps}
                                      Mullayon_name={Mullayon_name}
                                      shikhonKalinMullayon={
                                        shikhonKalinMullayon
                                      }
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
                </section>
              </div>
            </motion.div>
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
