import React, { useEffect, useState } from "react";
import { PiBookOpenText } from "react-icons/pi";
import DetailsShikhonMullayon from "./DetailsShikhonMullayonSannasikBarshik";
import styles from "./Home.style.module.css";
import StudentMullayonBehave from "./StudentMullayonBehave";
import { get_bi_evaluation_by_bi } from "../Request";
import { add_pi_uid, convertToBanglaNumber } from "../utils/Utils";
import { FaExpand } from "react-icons/fa";

export default function AcorongotoComponent({
  all_bis,
  Student,
  assessment_uid,
  Showcollaps,
  setShowcollaps,
  teacher,
  teacher_uid,
  Mullayon_name
}: any) {
  const [is_draft, setis_draft] = useState<any>(1);
  const [all_submited_PI, setall_submited_PI] = useState<any>([]);
  const [submitObj, setsubmitObj] = useState<any>({});
  const [submitObj_wid_null, setsubmitObj_wid_null] = useState<any>([]);
  const [submitData, setsubmitData] = useState<any>([]);
  const [comment_status, setcomment_status] = useState<any>(false);

  const checkedIn = (obj: any) => {
    const all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.background = "";
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      const id: any =
        obj[x].pi_uid + "_" + obj[x].student_uid + "_" + assessment_uid;
      const el: any = document.getElementById(id);
      if (el) {
        el.style.background = "#69CB1C";
      }

      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };

  const showOffCollaps = async (key: any, student) => {
    setis_draft(1);
    setall_submited_PI([]);
    setsubmitObj({});
    checkedIn({});

    // setcomment_status(false)
    const class_room_id: any = localStorage.getItem("class_room_id");
    const subject_uid = localStorage.getItem("subject_id");
    const { data }: any = await get_bi_evaluation_by_bi(
      class_room_id,
      assessment_uid,
      student,
      subject_uid
    );

    const all_submited_PI_ = data?.data?.evaluation;

    // // console.log("data.data?.evaluation", data.data?.evaluation);


    if (data.data?.evaluation?.length) {
      // // console.log(`data.data?.evaluation[0]?.submit_status`, data.data?.evaluation[0]);
      setis_draft(data.data?.evaluation[0]?.submit_status);
    }

    if (all_submited_PI_.length) {
      let obj = {};
      let W_id_null_obj = [];
      all_submited_PI_.map((d: any) => {
        const pi_uid = add_pi_uid(all_bis, d);
        if (pi_uid) {
          d.pi_uid = pi_uid;
          obj = { ...obj, [d.bi_uid + "_" + d.student_uid]: d };
        } else {
          obj = { ...obj, [d.bi_uid + "_" + d.student_uid]: d };
          W_id_null_obj.push(d);
        }
      });

      setsubmitObj_wid_null(W_id_null_obj);
      setsubmitObj(obj);
      checkedIn(obj);
    } else {
      setsubmitObj({});
      checkedIn({});
    }

    for (const x in Showcollaps) {
      Showcollaps[x] = false;
    }

    setShowcollaps({
      ...Showcollaps,
      [key]: Showcollaps[key] ? !Showcollaps[key] : true,
    });
  };

  useEffect(() => {
    setsubmitObj({});
    checkedIn({});
  }, [assessment_uid]);


  return (
    <div className="py-2">
      <div className="row">
        {Student.length == 0 && (
          <div className="col-sm-12 col-md-12">
            <div
              className={`card shadow-lg border-0 p-1 w-100 text-center ${styles.card_hover}`}
            >
              No Student Found
            </div>
          </div>
        )}
        <div className="card border-0 w-100 rounded">
        {Student.map((d: any, key: any) => (
          <div key={key} >
            <div
              onClick={(e: any) => {
                // setshowDetailsshikhonKalinMullayon(d);

                showOffCollaps(key, d.uid);
              }}
              style={{ cursor: "pointer" }}
              className="col-sm-12 col-md-12"
            >
              <div className={`d-flex align-items-center`}>
                <div
                  className={`card  border-0 py-2 w-100 ${styles.card_hover}`}
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between align-items-center w-100 px-1">
                      <div className="py-2" style={{ color: "#428F92" }}>
                        <PiBookOpenText className="me-2" />
                        {d?.student_name_bn || d?.student_name_en}
                      </div>

                      <div
                        className="px-2 rounded "
                        style={{ color: "#428F92" }}
                      >
                        <span>
                          শিক্ষার্থীর রোল: {convertToBanglaNumber(d.roll)}{" "}
                          <img src="/assets/images/arrow-down.svg" alt="" />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="p-0 m-0" />

            <div
              className={
                Showcollaps[key] && Showcollaps[key] == true
                  ? "collapse show"
                  : "collapse"
              }
            >
              <div className="card card-body">
                <StudentMullayonBehave
                  all_bis={all_bis}
                  assessment_uid={assessment_uid}
                  teacher={teacher}
                  student={d}
                  teacher_uid={teacher_uid}
                  submitObj={submitObj}
                  setsubmitObj={setsubmitObj}
                  submitData={submitData}
                  setsubmitData={setsubmitData}
                  is_draft={is_draft}
                  submitObj_wid_null={submitObj_wid_null}
                  showOffCollaps={showOffCollaps}
                  keynext={key + 1}
                  next_uid={Student[key + 1]?.uid}
                  setcomment_status={setcomment_status}
                  comment_status={comment_status}
                  Showcollaps={
                    Showcollaps[key] && Showcollaps[key] == true ? true : false
                  }
                  all_student={Student}
                />
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
