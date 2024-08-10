import React, { useEffect, useState } from "react";
import { PiBookOpenText } from "react-icons/pi";
// import DetailsShikhonMullayon from "./DetailsShikhonMullayonSannasikBarshik";
import styles from "./Home.style.module.css";
import {
  convertToBanglaNumber,
  show_compitance,
  show_shannasik_barsik,
} from "../utils/Utils";
import DetailsShikhonMullayonSannasikBarshik from "./DetailsShikhonMullayonSannasikBarshik";
import DetailsShikhonMullayonShikhonKalin from "./DetailsShikhonMullayonShikhonKalin";
import { Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
export default function ParodorshitaComponent({
  assessment_uid,
  pi_attr,
  Showcollaps,
  setShowcollaps,
  shikhonKalinMullayon,
  shikhonKalinMullayon_sannasik_barsik,
  setshowDetailsshikhonKalinMullayon,
  Student,
  teacher_uid,
}: any) {
  const [loadingspinner, setloadingspinner] = useState(false);

  return (
    <>
      <div className="text-center">
        {loadingspinner && (
          <>
            <Spinner animation="border" /> Data is loading...
          </>
        )}
      </div>
      {show_shannasik_barsik() == false ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card border-0 w-100 rounded p-2">
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
                      <div className={`d-flex align-items-center`}>
                        <div
                          className={`card border-0 p-1 w-100 ${styles.card_hover}`}
                        >
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between align-items-center w-100 px-1 py-2 mb-1">
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
                      <hr className="p-0 m-0" />
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
          </div>
        </motion.div>
      ) : (
        <div className="card card-body mx-2">
          {shikhonKalinMullayon_sannasik_barsik?.map((d: any, key: any) => (
            <div key={key} className="mt-1">
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
    </>
  );
}
