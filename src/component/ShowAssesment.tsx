import React, { useEffect, useState } from "react";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";

import { make_group_by_PI_BI, pis_list_func } from "../utils/Utils";
import { get_pi_bi_evaluation_list } from "../Request";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion"
import { TiTick } from "react-icons/ti";



export default function ShowAssesment({
  seshowCompitance,
  breadcumbTitle,
  setassessment_uid,
  setMullayon_name,
  Mullayon_name,
  allassessmet,
  own_data,
  setparodorshita_acoron_tab,
  parodorshita_acoron_tab,
  setallassessmet,
  pi_selection,
  allCompitance,
  setShowcollaps,
  setshowMainAssessments,
  showMainAssessments,
}: any) {
  const [ShowSecounderyTab, setShowSecounderyTab] = useState<any>({});
  const [class_id, setclass_id] = useState<any>("");

  // const [pi_selection, setpi_selection] = useState<any>([]);

  const fetchData = async () => {
    try {
      const uidName = breadcumbTitle.split(" ")[0];

      // const found = own_data?.assessments[key]?.assessment_details.find((element) => element?.assessment_details_name_bn?.includes(uidName) );

      console.log(
        `own_data?.assessments[0]?.assessment_details`,
        own_data?.assessments[0]?.assessment_details
      );
      setassessment_uid(own_data?.assessments[0]?.assessment_details[0].uid);
      setclass_id(own_data.subjects[0].class_room.class_id);
      const pi_bi_evaluation_list__: any =
        localStorage.getItem("pi_bi_evaluation_list") || "";
      const pi_bi_evaluation_list = pi_bi_evaluation_list__
        ? JSON.parse(pi_bi_evaluation_list__)
        : "";

      let own_subjet: any = "";
      if (pi_bi_evaluation_list) {
        const list = make_group_by_PI_BI(pi_bi_evaluation_list);
        own_subjet = list;

        localStorage.setItem("pi_bi_evaluation_list", JSON.stringify(list));
      } else {
        own_subjet = await get_pi_bi_evaluation_list(2);
        const list = make_group_by_PI_BI(own_subjet.data.data);
        localStorage.setItem("pi_bi_evaluation_list", JSON.stringify(list));
      }

      // seshowCompitance(true);
      setparodorshita_acoron_tab(0);
      setassessment_uid(allassessmet[0]?.uid);
      setShowSecounderyTab({
        ...ShowSecounderyTab,
        ["id"]: allassessmet[0].uid,
      });
      // setMullayon_name(allassessmet[0]?.assessment_details_name_bn);
      pis_list_func(allCompitance, [], false);
    } catch (error: any) {
      // console.log(`error`, error);
    }
  };

  const tabAcorongoto = async (key: number) => {
    try {
      const uidName = breadcumbTitle.split(" ")[0];



      const found = own_data?.assessments[key]?.assessment_details.find(
        (element) => element?.assessment_details_name_bn?.includes(uidName)
      );

      console.log(`found`, uidName, found);
      // console.log(`own_data?.assessments[key]?.assessment_details`, uidName, found,  own_data?.assessments[key]?.assessment_details );
      setassessment_uid(found.uid);
      setShowSecounderyTab({
        ...ShowSecounderyTab,
        ["id"]: found.uid,
      });
      setMullayon_name(found?.assessment_details_name_bn);
      setparodorshita_acoron_tab(key);
      seshowCompitance(true);

      setclass_id(own_data.subjects[key].class_room.class_id);

      const is_sannasik_barsik = uidName == 'শিখনকালীন মূল্যায়ন' ? false : true
      pis_list_func(allCompitance, [], is_sannasik_barsik);
    } catch (error: any) { }
  };

  const pi_selection_list_by_subject = async (key: number) => {
    try {
      const subject_id = localStorage.getItem("subject_id");
      // const subject = pi_selection.find((data) => data.assessment_type == key && data.subject_uid == subject_id && data.class_id == class_id);
      const subject = pi_selection.find((data) => data.assessment_type == key);
      const pi_list = subject?.pi_list || [];

      let check_sannasik_barsik_or_not = false;
      if (key == 1234567892 || key == 1234567891) {
        check_sannasik_barsik_or_not = true;
      }

      pis_list_func(allCompitance, pi_list, check_sannasik_barsik_or_not);
    } catch (error: any) { }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(`breadcumbdffffTitle`, showMainAssessments, parodorshita_acoron_tab);
  return (
    <div className="container">
      <h2 className="ms-3 mb-3" style={{ fontWeight: "bolder" }}> {breadcumbTitle}</h2>

      <div className="row">
        <div className="d-flex align-items-center">
          <div className=" border-0 w-100 rounded">
            {showMainAssessments && (
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
                        setallassessmet(own_data?.assessments[0]?.assessment_details);
                        setShowcollaps({});
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-center gap-1">
                        <SlBookOpen className="me-1" /> {d.assessment_name_bn}
                        {key === parodorshita_acoron_tab && <TiTick className="" style={{ fontSize: "2rem" }} />}
                        {" "}
                      </div>

                    </a>
                    {/* {key === parodorshita_acoron_tab && <TiTick className="" style={{ fontSize: "2rem" }} />} */}
                  </li>

                ))}

              </ul>

            )}


            {/* card */}
            {/* sub tab-1 */}

            {Mullayon_name == "" && (
              <div className="tab-content" id="tabContent">
                <div
                  className={"tab-pane fade show active"}
                  id="provati"
                  role="tabpanel"
                  aria-labelledby="provati-tab"
                >
                  <div className="row">
                    <ul className="nav d-flex mt-2 justify-content-around py-1 assestment-tabs">
                      {allassessmet?.map((ass_d: any, ky: any) => (


                     
                          <Card
                            className="mx-auto rounded-3 shadow mb-5 bg-body  mt-5"
                            style={{
                              width: "20rem",
                              height: "12rem",
                              cursor: "pointer",


                            }}
                            onClick={(e: any) => {
                              seshowCompitance(true);
                              setshowMainAssessments(ky == 1 || ky == 2 ? true : false);
                              localStorage.setItem(
                                "show_shannasik_barsik",
                                ky !== 0 ? "true" : "false"
                              );
                              setparodorshita_acoron_tab(0);
                              setassessment_uid(ass_d.uid);
                              pi_selection_list_by_subject(ass_d.uid);
                              setShowSecounderyTab({
                                ...ShowSecounderyTab,
                                ["id"]: ass_d.uid,
                              });
                              setMullayon_name(ass_d.assessment_details_name_bn);
                              setShowcollaps({});
                            }}
                          >
                            <div className="d-flex flex-column justify-content-center align-items-center mt-5 h-100">
                              <div className="d-flex justify-content-center align-items-center">
                                <SlBookOpen style={{ fontSize: "28px" }} />
                              </div>
                              <Card.Body
                                className="text-center "
                                style={{
                                  fontSize: "28px",
                                  fontWeight: "bolder",
                                  color:"#873896"
                                }}
                              >
                                {ass_d.assessment_details_name_bn}
                              </Card.Body>
                            </div>
                          </Card>


                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
