/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  teacher_dashboard,
  teacher_own_subject
} from "../Request";

import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BreadcumbHome from "../layout/BreadcumbHome";
import { section_name, shift_name, teacher_name } from "../utils/Utils";
import AcorongotoComponent from "./AcorongotoComponent";
import styles from "./Home.style.module.css";
import ParodorshitaComponent from "./ParodorshitaComponent";
import ShowAssesment from "./ShowAssesment";
import bookIcon from '../../src/assets/dashboard_materials/images/dashboard/bicon.svg';

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

    const own_subjet: any = await teacher_own_subject();
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));

    console.log(`own_subjet----`, own_subjet);
    // if (own_SUbjects) {
    //   own_subjet = own_SUbjects;
    // } else {
    //   own_subjet = await teacher_own_subject();

    // }

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

    let compitnc_obj = {}
    own_subjet.data.data.subjects.map((d: any) => {
      data.data.subjects.map((d_2: any) => {
        if (d_2.uid === d.subject_id) {
          data.data.teachers.map((al_tech: any) => {
            if (d.teacher_id == al_tech.uid) {

              const obj: any = {
                subject: d_2,
                own_subjet: d,
                teacher: al_tech,
              };
              d.oviggota.map((competnc) => {
                compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc }
              })
              all_subject.push(obj);
            }
          });
        }
      });
    });


    setall_bis(own_subjet.data.data.bis);
    setallCompitance(compitnc_obj)
    setsubject(all_subject);
    setloader(false);
  };

  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.oviggota);
    setallassessmet(own_data.assessments[0].assessment_details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };



  return (
    <div className="content mb-5">
      {loader && (
        <div className={loader && styles.loading_container}>
          {loader && <Spinner animation="border" />}
        </div>
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
          <section className="np-breadcumb-section pt-2 pb-5">
            <div className="container">
              <div className="row mt-1">
                {/* {ShowProfile && (location.pathname !== "/mollayon-koron")  && (
                  <div className="col-md-3 mt-2">
                    <ProfileCard />
                  </div>
                )} */}

                <div
                  className={
                    // ShowProfile ?
                    // "col-md-9" :
                    "col-md-12"} >
                  <div className={`row d-flex gap-2 ${styles.subject_container}`}>
                    <div className="d-flex" style={{ cursor: "pointer" }}>
                      <h5
                        onClick={(e) => {
                          seshowSubject(true);
                          setShowProfile(true);
                        }}
                      >
                        {showSubject && subject.length > 0 && (
                          <>
                            {/* বিষয়ভিত্তিক তথ্য ও মূল্যায়ন{" "} */}
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


                    {/* {showSubject && (
                      <>
                        {subject.map((d: any, key: any) => (
                          <div
                            className="col-sm-12 col-md-6 col-lg-3 col-xl-2 g-2"
                            style={{ cursor: "pointer" }}
                            key={key}
                            onClick={(e) => {
                              skill_behaibor_count(d);
                              seshowSubjectname(d.subject.name)
                              setStudent(d?.own_subjet?.class_room?.students)

                              setteacher_uid(d?.own_subjet.teacher_id)
                              setStudent(d?.own_subjet?.class_room?.students)
                              setShowProfile(false)
                              localStorage.setItem(
                                "class_room_id",
                                d.own_subjet.class_room_id
                              );

                              localStorage.setItem(
                                "subject_id",
                                d.own_subjet.subject_id
                              );

                              setpi_selection(d.own_subjet?.pi_selection)
                            }}
                          >
                            <div className="card shadow-sm border-0 p-1 p-lg-3 teacher-list-card h-100 rounded-sm">
                              <div className="gap-1 gap-lg-3 justify-content-center">
                                <div className={`d-flex justify-content-center py-2 pb-4 ${styles.subject_number}`}>

                                  <div className={styles.icon_sub}>
                                    <img src={bookIcon} alt="bookIcon" />
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
                    )} */}

                    <div className="container subject-container">
                      {
                        ShowProfile && <h2 className="m-0">বিষয় ভিত্তিক তথ্য ও মূল্যায়ন</h2>
                      }

                      <div className="row">
                        {showSubject && <>
                          {subject.map((d: any, key: any) => (
                            <div
                              className="col-sm-12 col-md-6 col-lg-3 col-xl-2 g-2"
                              style={{ cursor: "pointer" }}
                              key={key}
                              onClick={(e) => {
                                skill_behaibor_count(d);
                                seshowSubjectname(d.subject.name)
                                setStudent(d?.own_subjet?.class_room?.students)

                                setteacher_uid(d?.own_subjet.teacher_id)
                                setStudent(d?.own_subjet?.class_room?.students)
                                setShowProfile(false)
                                localStorage.setItem(
                                  "class_room_id",
                                  d.own_subjet.class_room_id
                                );

                                localStorage.setItem(
                                  "subject_id",
                                  d.own_subjet.subject_id
                                );

                                setpi_selection(d.own_subjet?.pi_selection)
                              }}
                            >
                              <a className="subject-number">
                                <div className="icon">
                                  <img src={bookIcon} alt="bookIcon" />
                                </div >
                                <h2 className="mt-3">  {d?.subject?.name}</h2>
                                <div className="total-student">
                                  <p> {d?.subject.class_uid == "6" ? "ষষ্ঠ " : "সপ্তম "} শ্রেণি </p>
                                </div>
                                <div className="total-student">
                                  <p>  শ্রেণি শিক্ষক : </p>
                                </div>
                                <div className="total-student">
                                  <p>
                                    {teacher_name(
                                      d.own_subjet.class_room.class_teacher_id
                                    )}
                                  </p>
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
                              </a >
                            </div >
                          ))
                          }
                        </>}

                      </div >
                    </div >

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
                            {
                              parodorshita_acoron_tab === 0 &&
                              <ParodorshitaComponent pi_selection={pi_selection} teacher_uid={teacher_uid} Student={Student} assessment_uid={assessment_uid} pi_attr={pi_attr} showDetailsshikhonKalinMullayon={showDetailsshikhonKalinMullayon} Showcollaps={Showcollaps} setShowcollaps={setShowcollaps} Mullayon_name={Mullayon_name} shikhonKalinMullayon={shikhonKalinMullayon} setshowDetailsshikhonKalinMullayon={setshowDetailsshikhonKalinMullayon} />
                            }


                            {
                              parodorshita_acoron_tab === 1 &&
                              <AcorongotoComponent teacher_uid={teacher_uid} teacher={teacher} Student={Student} all_bis={all_bis} assessment_uid={assessment_uid} pi_attr={pi_attr} showDetailsshikhonKalinMullayon={showDetailsshikhonKalinMullayon} Showcollaps={Showcollaps} setShowcollaps={setShowcollaps} Mullayon_name={Mullayon_name} shikhonKalinMullayon={shikhonKalinMullayon} setshowDetailsshikhonKalinMullayon={setshowDetailsshikhonKalinMullayon} />

                            }

                          </>
                        )}
                      </>
                    )}
                  </div >
                </div >
              </div >
            </div >
          </section >
        </div >
      )}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* Teachers List end */}
    </div >
  );
}