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

// ss

const AssesDuringLearningData: React.FC = () => {
  const location = useLocation();

  console.log(location);
  const { name } = location.state || "no props";
  console.log(name);
  // Handle missing userData


  return (
    <div>
      <h1>শিখনকালীন মূল্যায়ন</h1>
      <div>
        <p>Name: {name}</p>

        <>

        {/* {showCompitance && (
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
                                    shikhonKalinMullayon_sannasik_barsik={
                                      shikhonKalinMullayon_sannasik_barsik
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
                            )} */}

        </>

      </div>
    </div>
  );
};

export default AssesDuringLearningData;
