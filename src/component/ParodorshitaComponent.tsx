import React, { useEffect, useState } from "react";
import { PiBookOpenText } from "react-icons/pi";
// import DetailsShikhonMullayon from "./DetailsShikhonMullayonSannasikBarshik";
import styles from "./Home.style.module.css";
import {
  convertToBanglaNumber,
  show_compitance,
  show_shannasik_barsik,
} from "../utils/Utils";
import { FaExpand } from "react-icons/fa";
import DetailsShikhonMullayonSannasikBarshik from "./DetailsShikhonMullayonSannasikBarshik";
import DetailsShikhonMullayonShikhonKalin from "./DetailsShikhonMullayonShikhonKalin";
import { Spinner } from "react-bootstrap";

export default function ParodorshitaComponent({
  assessment_uid,
  pi_attr,
  showDetailsshikhonKalinMullayon,
  Showcollaps,
  setShowcollaps,
  shikhonKalinMullayon,
  shikhonKalinMullayon_sannasik_barsik,
  setshowDetailsshikhonKalinMullayon,
  Student,
  teacher_uid,
  pi_selection,
}: any) {

  const [loadingspinner, setloadingspinner] = useState(false);



  console.log(
    "shikhonKalinMullayon", shikhonKalinMullayon
  );


  return (
    <div className="py-2">
      <div className="row">
        <div className="text-center">
          {loadingspinner && <><Spinner animation="border" /> Data is loading...</>}
        </div>

        {show_shannasik_barsik() == false ? (
          <>
            {shikhonKalinMullayon?.map((d: any, key: any) => (
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
            {shikhonKalinMullayon_sannasik_barsik?.map((d: any, key: any) => (
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
  );
}
