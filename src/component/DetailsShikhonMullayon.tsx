import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentMullayonModal from "./StudentMullayonModal";
import { Button, Modal } from "react-bootstrap";
import { get_pi_evaluation_by_pi } from "../Request";
import { check_pi_submitted, show_pis , convertToBanglaNumber } from "../utils/Utils";

export default function DetailsShikhonMullayon({
  showDetailsshikhonKalinMullayon,
  assessment_uid,
  pi_attr,
  Student,
  teacher_uid,
}: any) {
  const [competence_uid, setcompetence_uid] = useState<any>("");
  const [al_pi_attr, setal_pi_attr] = useState<any>([]);
  const [pi_name, setpi_name] = useState<any>("");
  const [pi_id, setpi_id] = useState<any>("");
  const [is_draft, setis_draft] = useState<any>(1);
  const [all_submited_PI, setall_submited_PI] = useState<any>([]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const get_all_pi_evaluation_by_pi = async (pi_uid: any) => {
    setis_draft(1);
    setall_submited_PI([]);
    const class_room_id: any = localStorage.getItem("class_room_id");
    const { data }: any = await get_pi_evaluation_by_pi(
      class_room_id,
      pi_uid,
      assessment_uid
    );
    setall_submited_PI(data?.data?.evaluation);
    if (data.data?.evaluation?.length) {
      setis_draft(data.data?.evaluation[0]?.submit_status);
    }
    setShowModal(true);

    // console.log(`data`, data);
  };


  return (
    <div>
      <div className="row">
        {showDetailsshikhonKalinMullayon?.pis?.map((d: any, ky: any) => (
          <div key={ky}>
            {show_pis(d.uid) && (
              <div className="col-sm-6 col-md-12">
                <div className={`d-flex align-items-center py-2 gap-2`}>
                  <div className={`border-0 w-100`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex justify-content-between align-items-center w-100 px-1">
                        <div className="d-flex" style={{ color: "#428F92" }}>
                          <h6>
                            {convertToBanglaNumber(showDetailsshikhonKalinMullayon?.class_id)}.
                            {convertToBanglaNumber(showDetailsshikhonKalinMullayon?.oviggota_no)}.
                            {convertToBanglaNumber(d?.pi_id)}{" "}
                          </h6>

                          <Link
                            onClick={(e) => {
                              pi_attr(d, e);
                              setal_pi_attr(d?.pi_attribute);
                              setcompetence_uid(
                                showDetailsshikhonKalinMullayon.uid
                              );

                              get_all_pi_evaluation_by_pi(d.uid);

                              setpi_name(d?.name_bn);
                              setpi_id(d?.pi_id);
                            }}
                            to={"#"}
                            className="text-decoration text-success  ps-2"
                          >
                            <h6>{d?.name_bn}  {check_pi_submitted(d , assessment_uid ) && <i className="fa-regular fa-circle-check"></i>}  </h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal
        className="mt-5"
        show={showModal}
        onHide={handleCloseModal}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

          <Modal.Title>
            {/* {showDetailsshikhonKalinMullayon?.class_id}.
            {showDetailsshikhonKalinMullayon?.oviggota_no}.{pi_id} {pi_name}
            <h6 className="text-center">
              {showDetailsshikhonKalinMullayon?.details_bn}
            </h6> */}

            <span className="d-flex justify-content-start align-content-center gap-2">
              <h4 className="font-weight-bold"><strong>পারদর্শিতা সূচক</strong></h4>
              <h4>
                <strong>
                  {convertToBanglaNumber(showDetailsshikhonKalinMullayon?.class_id)}.{convertToBanglaNumber(showDetailsshikhonKalinMullayon?.oviggota_no)}.{convertToBanglaNumber(pi_id)}
                </strong>
              </h4>
            </span>
            <h6>{pi_name}</h6>


          </Modal.Title >

        </Modal.Header >
        <Modal.Body className="">
          <StudentMullayonModal
            competence_uid={competence_uid}
            assessment_uid={assessment_uid}
            al_pi_attr={al_pi_attr}
            setal_pi_attr={setal_pi_attr}
            pi_name={pi_name}
            setpi_name={setpi_name}
            Student={Student}
            teacher_uid={teacher_uid}
            is_draft={is_draft}
            all_submited_PI={all_submited_PI}
            setShowModal={setShowModal}
          />
        </Modal.Body>
      </Modal >
    </div >
  );
}
