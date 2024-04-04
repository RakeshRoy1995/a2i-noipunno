import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  convertToBanglaNumber,
  show_compitance,
  show_shannasik_barsik,
} from "../utils/Utils";

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

import BreadcumbHome from "../layout/BreadcumbHome";
import {
  formate_own_subject_data,
  section_name,
  shift_name,
  showReportDeleteEv,
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
import { PiBookOpenText } from 'react-icons/pi';
import DetailsShikhonMullayonShikhonKalin from './DetailsShikhonMullayonShikhonKalin';
import DetailsShikhonMullayonSannasikBarshik from './DetailsShikhonMullayonSannasikBarshik';

// ss

const AssesDuringLearningData: React.FC = () => {
  const location = useLocation();

  console.log(location);
  const { name } = location.state || "no props";
  console.log(name);
  // Handle missing userData
  const [ShowProfile, setShowProfile] = useState(true);
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [showCompitance, seshowCompitance] = useState(false);
  const [assessment_uid, setassessment_uid] = useState("");
  const [Mullayon_name, setMullayon_name] = useState<any>("");
  const [allassessmet, setallassessmet] = useState([]);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);
  const [own_data, setown_data] = useState<any>([]);
  const [showSubjectname, seshowSubjectname] = useState("");
  const [pi_selection, setpi_selection] = useState([]);
  const [allCompitance, setallCompitance] = useState<any>({});
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [subject, setsubject] = useState([]);
  const [Student, setStudent] = useState<any>([]);
  const [teacher_uid, setteacher_uid] = useState<any>("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [element, setelement] = useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [selected_subject, setselected_subject] = useState<any>("");
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [all_bis, setall_bis] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };
  const [loadingspinner, setloadingspinner] = useState(false);
  const [
    shikhonKalinMullayon_sannasik_barsik,
    setshikhonKalinMullayon_sannasik_barsik,
  ] = useState([]);
  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.oviggota);
    setshikhonKalinMullayon_sannasik_barsik(datas.own_subjet.competence);
    setallassessmet(own_data.assessments[0].assessment_details);
  };
  return (
    <div>
      <h1>শিখনকালীন মূল্যায়ন</h1>
      <div>
        <p>Name: {name}</p>
        <p>sss</p>

        <div className="py-2">
          <div className="row">
            <div className="text-center">
              {loadingspinner && <><Spinner animation="border" /> Data is loading...</>}
            </div>

            {show_shannasik_barsik() == false ? (
              <>
                {shikhonKalinMullayon.map((d: any, key: any) => (
                  <div key={key}>
                    {show_compitance(d.uid) && (
                      <>
                        <div
                          onClick={(e: any) => {
                            setshowDetailsshikhonKalinMullayon(d);
                            setShowcollaps({
                              ...Showcollaps,
                              [key]: Showcollaps[key] ? !Showcollaps[key] : true,
                            });
                          }}
                          style={{ cursor: "pointer" }}
                          className="col-sm-12 col-md-12"
                        >
                          <div
                            className={`d-flex align-items-center custom-py-2 gap-2`}
                          >
                            <div
                              className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                            >
                              <div className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between align-items-center w-100 px-1">
                                  <div
                                    className="py-2"
                                    style={{
                                      color: "#428F92",
                                      fontSize: "16px",
                                      fontWeight: "700",
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    <PiBookOpenText className="me-2" />
                                    {convertToBanglaNumber(key + 1)}.{" "}
                                    {/* <PiBookOpenText className="me-2" /> */}
                                    {d.oviggota_title}
                                  </div>
                                  <div className="px-2 rounded ">
                                    <img
                                      src="/assets/images/arrow-down.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={
                            Showcollaps[key] && Showcollaps[key] == true
                              ? "collapse show"
                              : "collapse"
                          }
                        >
                          <div className="card card-body">
                            <DetailsShikhonMullayonShikhonKalin
                              showDetailsshikhonKalinMullayon={d}
                              assessment_uid={assessment_uid}
                              pi_attr={pi_attr}
                              Student={Student}
                              teacher_uid={teacher_uid}
                              setloadingspinner={setloadingspinner}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <div className="card card-body mx-2">
                {shikhonKalinMullayon_sannasik_barsik.map((d: any, key: any) => (
                  <div key={key}>
                    <div
                      onClick={(e: any) => {
                        setshowDetailsshikhonKalinMullayon(d);
                      }}
                    >
                      <DetailsShikhonMullayonSannasikBarshik
                        showDetailsshikhonKalinMullayon={d}
                        assessment_uid={assessment_uid}
                        pi_attr={pi_attr}
                        Student={Student}
                        teacher_uid={teacher_uid}
                        setloadingspinner={setloadingspinner}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssesDuringLearningData;
