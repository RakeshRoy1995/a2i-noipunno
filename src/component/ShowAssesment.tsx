import React, { useEffect, useState } from "react";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router-dom";
import { pis_list_func } from "../utils/Utils";
import { get_pi_bi_evaluation_list } from "../Request";

export default function ShowAssesment({
  seshowCompitance,
  setassessment_uid,
  setMullayon_name,
  allassessmet,
  own_data,
  setparodorshita_acoron_tab,
  parodorshita_acoron_tab,
  setallassessmet,
  pi_selection,
  allCompitance,
  setShowcollaps,
}: any) {
  const [ShowSecounderyTab, setShowSecounderyTab] = useState<any>({});
  const [class_id, setclass_id] = useState<any>('');
  // const [pi_selection, setpi_selection] = useState<any>([]);

  const fetchData = async () => {


    try {
      setassessment_uid(own_data?.assessments[0]?.assessment_details[0].uid);
      setclass_id(own_data.subjects[0].class_room.class_id)
      const pi_bi_evaluation_list__: any =
        localStorage.getItem("pi_bi_evaluation_list") || "";
      const pi_bi_evaluation_list = pi_bi_evaluation_list__
        ? JSON.parse(pi_bi_evaluation_list__)
        : "";

      let own_subjet: any = "";
      if (pi_bi_evaluation_list) {
        own_subjet = pi_bi_evaluation_list;
      } else {
        own_subjet = await get_pi_bi_evaluation_list(2);

        localStorage.setItem(
          "pi_bi_evaluation_list",
          JSON.stringify(own_subjet.data.data)
        );
      }


      seshowCompitance(true);
      setparodorshita_acoron_tab(0);
      setassessment_uid(allassessmet[0]?.uid);
      setShowSecounderyTab({
        ...ShowSecounderyTab,
        ["id"]: allassessmet[0].uid,
      });
      setMullayon_name(allassessmet[0]?.assessment_details_name_bn);
      pis_list_func(allCompitance, [] , false);
    } catch (error: any) {

      console.log(`error`, error);
    }
  };

  const tabAcorongoto = async (key: number) => {
    try {
      console.log(`own_data?.assessments`, own_data?.assessments[key]?.assessment_details , key);
      setassessment_uid(own_data?.assessments[key]?.assessment_details[0].uid);
      setShowSecounderyTab({
        ...ShowSecounderyTab,
        ["id"]: own_data?.assessments[key]?.assessment_details[0].uid,
      });
      setMullayon_name(
        own_data?.assessments[key]?.assessment_details[0]
          ?.assessment_details_name_bn
      );
      setparodorshita_acoron_tab(key);
      seshowCompitance(true);

      setclass_id(own_data.subjects[key].class_room.class_id)
      pis_list_func(allCompitance, []);
      
      
    } catch (error: any) { }
  };

  const pi_selection_list_by_subject = async (key: number) => {
    try {

      const subject_id = localStorage.getItem(
        "subject_id"
      );
      // const subject = pi_selection.find((data) => data.assessment_type == key && data.subject_uid == subject_id && data.class_id == class_id);
      const subject = pi_selection.find((data) => data.assessment_type == key);
      const pi_list = subject?.pi_list || []

      console.log(`pi_listpi_list`, pi_list , pi_selection, key);
      let check_sannasik_barsik_or_not = false
      if (key == 1234567892 || key == 1234567891) {
        check_sannasik_barsik_or_not = true
      }

      console.log(`check_sannasik_barsik_or_not`, check_sannasik_barsik_or_not );

      pis_list_func(allCompitance, pi_list, check_sannasik_barsik_or_not);
    } catch (error: any) { }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(`ShowSecounderyTab`, ShowSecounderyTab);

  // console.log(`parodorshita_acoron_tab`, ShowSecounderyTab, parodorshita_acoron_tab);

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center">
          <div className="card shadow-lg border-0 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around py-1 assestment-tabs">
              {own_data?.assessments.map((d: any, key: any) => (
                <li
                  className={`nav-item w-50 f-dlex justify-content-center ${styles.nav_tab_bottom_border}`}
                  key={key}
                  style={{ fontSize: "15px" }}
                >
                  <a
                    className={`nav-link link-secondary fw-bold  ${key === 0 ? "active " : ""
                      } `}
                    id="expertness-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#expertness"
                    href="#"
                    onClick={(e) => {
                      setparodorshita_acoron_tab(key);
                      tabAcorongoto(key);
                      setallassessmet(d?.assessment_details);
                      setShowcollaps({});
                    }}
                  >
                    <SlBookOpen className="me-1" /> {d.assessment_name_bn}{" "}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content" id="tabContent">
              {parodorshita_acoron_tab === 0 && (
                <div
                  className={"tab-pane fade show active"}
                  id="provati"
                  role="tabpanel"
                  aria-labelledby="provati-tab"
                >
                  <div className="row">
                    <ul className="nav d-flex mt-2 justify-content-around py-1 assestment-tabs">
                      {allassessmet?.map((ass_d: any, ky: any) => (
                        <li
                          className={`nav-item`}
                          key={ky}
                          style={{ fontSize: "14px" }}
                        >
                          <a
                            className={`fw-bold nav-link link-secondary ${styles.nav_tab_bottom_border
                              } ${ShowSecounderyTab?.id === ass_d.uid
                                ? " active"
                                : ""
                              } `}
                            id="expertness-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expertness"
                            href="#"
                            onClick={(e: any) => {
                              seshowCompitance(true);
                              setparodorshita_acoron_tab(0);
                              setassessment_uid(ass_d.uid);

                              pi_selection_list_by_subject(ass_d.uid);

                              setShowSecounderyTab({
                                ...ShowSecounderyTab,
                                ["id"]: ass_d.uid,
                              });
                              setMullayon_name(
                                ass_d.assessment_details_name_bn
                              );
                              setShowcollaps({});

                            }}
                          >
                            <SlBookOpen className="me-1" />{" "}
                            {ass_d.assessment_details_name_bn}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="tab-content" id="tabContent">
              {parodorshita_acoron_tab === 1 && (
                <div
                  className={"tab-pane fade show active"}
                  id="expertness"
                  role="tabpanel"
                  aria-labelledby="expertness-tab"
                >
                  <div className="row">
                    <ul className="nav d-flex mt-2 justify-content-around py-1 assestment-tabs">
                      {allassessmet?.map((ass_d: any, ky: any) => (
                        <li
                          className={`nav-item`}
                          key={ky}
                          style={{ fontSize: "14px" }}
                        >
                          <Link
                            className={`fw-bold nav-link link-secondary ${styles.nav_tab_bottom_border
                              } ${ShowSecounderyTab?.id === ass_d.uid
                                ? " active"
                                : ""
                              } `}
                            id="expertness-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expertness"
                            to={"/student-mullayon-behave/" + ass_d.uid}
                            onClick={(e: any) => {
                              setparodorshita_acoron_tab(1);
                              seshowCompitance(true);
                              setassessment_uid(ass_d.uid);
                              setShowSecounderyTab({
                                ...ShowSecounderyTab,
                                ["id"]: ass_d.uid,
                              });
                              setMullayon_name(
                                ass_d.assessment_details_name_bn
                              );
                              setShowcollaps({});
                            }}
                          >
                            <SlBookOpen className="me-1" />{" "}
                            {ass_d.assessment_details_name_bn}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
