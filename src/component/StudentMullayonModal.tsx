import { FiTriangle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
// import {  MdOutlineArrowForwardIos } from "react-icons/md";

import {
  BiCircle,
  BiFilterAlt,
  BiRefresh,
  BiSquareRounded,
} from "react-icons/bi";

import {
  Pi_save,
  get_pi_bi_evaluation_list,
  get_pi_evaluation_by_pi,
  teacher_own_subject,
} from "../Request";
import { GoPerson } from "react-icons/go";
import { toast } from "../utils";
import { MdArrowBackIosNew } from "react-icons/md";
import Swal from "sweetalert2";
import "./Home.style.module.css";
import { useNavigate } from "react-router-dom";
import { convertToBanglaNumber, show_comment_box_Pi } from "../utils/Utils";

const class_room_id = localStorage.getItem("class_room_id");

export default function StudentMullayonModal({
  assessment_uid,
  competence_uid,
  oviggota_uid,
  al_pi_attr,
  pi_name,
  setpi_name,
  Student,
  teacher_uid,
  is_draft,
  all_submited_PI,
  setall_submited_PI,
  setShowModal,
  pi_uid_,
  get_all_pi_evaluation_by_pi,
}: any) {
  const [teacher, setteacher] = useState<any>({});
  const [comment_status, setcomment_status] = useState<any>(false);
  const [submitObj, setsubmitObj] = useState<any>({});
  const [msg, setmsg] = useState<any>("");
  const [err, seterr] = useState<any>("");
  const [submitData, setsubmitData] = useState<any>([]);
  const [submitObj_wid_null, setsubmitObj_wid_null] = useState<any>([]);
  const [submited, setsubmited] = useState<any>(false);
  const [firstRender, setfirstRender] = useState<any>(true);
  const fetchData = async () => {
    const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
    const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }
    setteacher(own_subjet.data.data.user);

    if (all_submited_PI.length) {
      let obj = {};
      all_submited_PI.map((d: any) => {
        obj = { ...obj, [d.student_uid]: d };
      });
      // setsubmitData(all_submited_PI)
      setsubmitObj(obj);
      checkedIn(obj);

      const null_pi = [];

      for (const x in obj) {
        if (obj[x]?.weight_uid == null) {
          // const id: any = obj[x].student_uid;
          // const el: any = document.getElementsByClassName(id);

          // if (el) {
          //   el[0].parentElement.parentElement.parentElement.nextElementSibling.style.visibility =
          //     "";
          //   el[0].parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.visibility =
          //     "";
          //   el[0].parentElement.parentElement.parentElement.innerHTML = obj[x].remark;
          // }

          null_pi.push(obj[x]);
        }
      }
      setsubmitObj_wid_null(null_pi);
      // console.log(`is_draft`, all_submited_PI, obj);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (e: any, submit_status: any) => {
    try {
      setmsg("");
      seterr("");
      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status;
        return d;
      });

      if (submit_status == 2) {
        if (Student.length === submitData.length) {
          Swal.fire({
            title: "আপনি কি তথ্য সংরক্ষণ করতে চান?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "না",
            confirmButtonText: "হ্যাঁ",
          }).then(async (result) => {
            if (result.isConfirmed) {
              let own_subjet: any = await get_pi_bi_evaluation_list(2);

              localStorage.setItem(
                "pi_bi_evaluation_list",
                JSON.stringify(own_subjet.data.data)
              );

              await Pi_save(data);
              setsubmited(true);
              setShowModal(false);
              Swal.fire({
                title: "আপনার তথ্য সংরক্ষণ করা হয়েছে!",
                icon: "success",
              });
            }
          });
        } else {
          setcomment_status(true);
          checkedIn_comment(submitObj);
        }
      } else {
        /* Without Asking to Save Draft */
        if (data.length > 0) {
          await Pi_save(data);
          // setsubmited(true);
          const obj_ = localStorage.getItem("PI_saved");
          const submit_obj_ = obj_ ? JSON.parse(obj_) : {};
          const submit_obj = { ...submit_obj_, ...submitObj };
          localStorage.setItem("PI_saved", JSON.stringify(submit_obj));

          // refresh()
          // setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");

          Swal.fire({
            title: "আপনার খসড়া সংরক্ষণ করা হয়েছে!",
            icon: "success",
          });
          setShowModal(false);

          seterr("");
        } else {
          Swal.fire({
            icon: "error",
            title: "আপনি কোন কিছু নির্বাচন করেন নি!",
            confirmButtonText: "হ্যাঁ",
          });
        }
      }
    } catch (error) {
      console.log("err", error);
      Swal.fire({
        icon: "error",
        title: "কিছু ভুল হয়েছে",
        confirmButtonText: "হ্যাঁ",
      });
    }
  };

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
    remark: any
  ) => {
    try {
      const class_room_id = localStorage.getItem("class_room_id");
      const params: any = {
        evaluate_type: assessment_uid,
        competence_uid,
        oviggota_uid: (assessment_uid == 1234567892 || assessment_uid == 1234567891) ? null : oviggota_uid,
        pi_uid,
        weight_uid,
        class_room_uid: class_room_id,
        student_uid: student_id,
        teacher_uid: teacher_uid,
        submit_status: 2,
        is_approved: 1,
        remark,
      };

      if (submitObj[student_id]) {
        if (submitObj[student_id].weight_uid == weight_uid) {
          if (remark) {
            const obj: any = {
              ...submitObj,
              [student_id]: params,
            };
            setsubmitObj(obj);

            submit_object_common_func(
              remark,
              obj,
              pi_uid,
              student_id,
              weight_uid
            );
          } else {
            delete submitObj[student_id];
            setsubmitObj(submitObj);

            submit_object_common_func(
              remark,
              submitObj,
              pi_uid,
              student_id,
              weight_uid
            );
          }
        } else {
          const obj: any = { ...submitObj, [student_id]: params };
          setsubmitObj(obj);
          submit_object_common_func(
            remark,
            obj,
            pi_uid,
            student_id,
            weight_uid
          );
        }
      } else {
        const obj: any = { ...submitObj, [student_id]: params };
        setsubmitObj(obj);

        submit_object_common_func(remark, obj, pi_uid, student_id, weight_uid);
      }
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const checkedIn = (obj: any) => {
    const all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.background = "";
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      const id: any = obj[x].weight_uid + "-" + x;
      const el: any = document.getElementById(id);

      if (el) {
        el.style.background = "#69CB1C";
      }

      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };

  const form_arry_comment = (obj: any) => {
    const sumbitArray: any = [];
    for (const x in obj) {
      if (obj[x].weight_uid || obj[x].remark) {
        sumbitArray.push(obj[x]);
      }
    }

    setsubmitData(sumbitArray);
  };

  const checkedIn_comment = (obj: any) => {
    let all_elem: any = document.getElementsByClassName("all_textarea");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.display = "block";
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      if (obj[x].weight_uid || obj[x].remark) {
        const comment_id = "comment_id_" + x;
        const el: any = document.getElementsByClassName(x)[0];
        const el_comment: any = document.getElementById(comment_id);

        el.style.display = "none";
        el_comment.style.display = "none";
        sumbitArray.push(obj[x]);
      }
    }

    setsubmitData(sumbitArray);
  };

  const refresh = async () => {
    setsubmitObj(submitObj);
    setsubmitData(submitData);
    setcomment_status(false);

    setmsg("");
    seterr("");
    checkedIn_comment(submitObj);
    form_arry_comment(submitObj);
    checkedIn(submitObj);

    setsubmited(false);

    const all_elem: any = document.getElementsByClassName(
      "all_pi_arrtiburte_tr"
    );

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.display = "table-row";
    }

    const all_elem_txtarea: any =
      document.getElementsByClassName("all_textarea");

    for (let index = 0; index < all_elem_txtarea.length; index++) {
      const element: any = all_elem_txtarea[index];
      element.style.display = "none";
      element.value = "";
    }

    await get_all_pi_evaluation_by_pi(pi_uid_);
    // setall_submited_PI([])
    fetchData()
    setfirstRender(true);
  };

  const submit_object_common_func = (
    remark: any,
    obj: any,
    bi_uid: any,
    student_id: any,
    weight_uid: any
  ) => {
    if (remark) {
      form_arry_comment(obj);
    } else {
      if (remark == null && weight_uid == null) {
        delete obj[bi_uid + "_" + student_id];
      }
      checkedIn(obj);
    }
  };

  const [sS, setSs] = useState("");
  const hR = () => {
    const w = window.innerWidth;
    if (w <= 576) {
      setSs("sm");
    } else if (w > 576 && w <= 767) {
      setSs("mc");
    } else if (w > 768 && w <= 1280) {
      setSs("ls");
    } else {
      setSs("el");
    }
  };

  useEffect(() => {
    hR();
    window.addEventListener("resize", hR);
    return () => {
      window.removeEventListener("resize", hR);
    };
  }, []);

  setTimeout(() => {
    if (firstRender) {
      checkedIn(submitObj);
      setfirstRender(false);
    }
  }, 300);


  return (
    <div className="content">
      <div className="col-md-12">
        <div className="row p-1">
          {Student.length == 0 && (
            <div className="col-md-12">
              <div className="row p-1">
                <p className="text-success text-center">
                  কোন ছাত্র পাওয়া যায়নি
                </p>
              </div>
            </div>
          )}
          {!submited && (
            <div className="table-responsive ">
              <table className="table table-lg table-responsive">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="col-md-3 col-lg-2"
                      style={{ width: "20%" }}
                    >
                      শিক্ষার্থীর নাম{" "}
                      {/* <BiFilterAlt className="fs-5 ms-4" /> */}
                    </th>
                    <th
                      scope="col"
                      className="col-md-3 col-lg-2"
                      style={{ width: "10%" }}
                    ></th>
                    <th
                      scope="col"
                      className="col-md-3 col-lg-2"
                      style={{ width: "10%" }}
                    >
                      {/* <BiFilterAlt className="fs-5" /> */}
                    </th>
                    <th
                      scope="col"
                      className="col-md-3 col-lg-2"
                      style={{ width: "10%" }}
                    >
                      {comment_status && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-info mx-1"
                          onClick={(e: any) => {
                            refresh();
                          }}
                        >
                          <div className=" d-flex justify-content-center align-items-center gap-2 p-1">
                            <span className="text-sm">পেছনে</span>
                          </div>
                        </button>
                      )}
                    </th>
                  </tr>
                </thead>

                <tbody className={`${sS === "sm" && "d-flex flex-column"}`}>
                  {Student.map((studnt: any, k: any) => (
                    <tr
                      key={k}
                      id={"comment_id_" + studnt.uid}
                      className="all_pi_arrtiburte_tr"
                    >
                      <td
                        // style={{
                        //   fontSize: "14px",
                        //   fontWeight: "bold",
                        // }}
                        className="fs-md-2 fs-lg-3 fw-bold"
                      >
                        <GoPerson className="fs-6 fw-bold" />{" "}
                        {studnt?.student_name_bn || studnt?.student_name_en}
                        <br />
                        রোল : {convertToBanglaNumber(studnt?.roll)}
                      </td>

                      {al_pi_attr?.map((pi_attr: any, kedy: any) => (
                        <td
                          style={{}}
                          key={kedy}
                          className={`${sS === "sm" && "d-flex flex-column"}`}
                        >
                          <div className="d-flex  gap-2">
                            {!comment_status && (
                              <>
                                <div
                                  id={pi_attr.weight_uid + "-" + studnt.uid}
                                  className="all_pi_arrtiburte"
                                  style={{
                                    border: "1px solid #eee",
                                    padding: "5px 6px",
                                    borderRadius: "3px",
                                    maxHeight: "40px",
                                    cursor: "pointer",
                                  }}
                                  // onClick={() =>
                                  //   save_PI_evalution(
                                  //     pi_attr.pi_uid,
                                  //     pi_attr.weight_uid,
                                  //     studnt.uid,
                                  //     null
                                  //   )
                                  // }

                                  onClick={() => {
                                    if (is_draft == 1) {
                                      save_PI_evalution(
                                        pi_attr.pi_uid,
                                        pi_attr.weight_uid,
                                        studnt.uid,
                                        null
                                      );
                                    }
                                  }}
                                >
                                  {/* <input type="radio" className="d-none" name={pi_attr.pi_uid + "-" + studnt.uid} id={pi_attr.weight_uid + "-"+ studnt.uid} /> */}{" "}
                                  {pi_attr.weight.name == "Square" && (
                                    <BiSquareRounded className="fs-5 mt-1" />
                                  )}
                                  {pi_attr.weight.name == "Circle" && (
                                    <BiCircle className="fs-5 mt-1" />
                                  )}
                                  {pi_attr.weight.name == "Triangle" && (
                                    <FiTriangle className="fs-5 mt-1" />
                                  )}
                                </div>

                                <div
                                  className="pointer"
                                  onClick={() => {
                                    if (is_draft == 1) {
                                      save_PI_evalution(
                                        pi_attr.pi_uid,
                                        pi_attr.weight_uid,
                                        studnt.uid,
                                        null
                                      );
                                    }
                                  }}
                                >
                                  {pi_attr.title_bn}

                                  {/* {pi_attr.uid} */}

                                  {kedy === 0 && (
                                    <h5>
                                      {show_comment_box_Pi(
                                        pi_attr,
                                        submitObj_wid_null,
                                        studnt.uid
                                      )}
                                    </h5>
                                  )}
                                </div>
                              </>
                            )}

                            {kedy === 0 && (
                              <div>
                                <textarea
                                  onChange={(e: any) =>
                                    save_PI_evalution(
                                      pi_attr.pi_uid,
                                      null,
                                      studnt.uid,
                                      e.target.value
                                    )
                                  }
                                  placeholder={
                                    "আপনি কেন " +
                                    (studnt.student_name_bn ||
                                      studnt.student_name_en) +
                                    " কে চিহ্নিত করেননি তার কারণ লিখুন..."
                                  }
                                  title="required"
                                  style={{
                                    display: "none",
                                    border: "1px solid red",
                                  }}
                                  className={
                                    "form-control all_textarea " + studnt.uid
                                  }
                                  id=""
                                  cols={60}
                                  rows={4}
                                ></textarea>
                              </div>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="d-flex justify-content-end align-items-center pe-5 mb-5">
          {is_draft == "2" ? (
            <div className="col-md-12">
              <div className="row p-1">
                <p className="text-success text-center">
                  আপনার তথ্য সংরক্ষণ করা হয়েছিল
                </p>
              </div>
            </div>
          ) : (
            <>
              {msg && <h6 className="text-success mx-1">{msg}</h6>}

              {err && <h6 className="text-danger mx-1">{err}</h6>}
              {!submited && (
                // <button
                //   type="button"
                //   className="btn btn-warning  my-2"
                //   style={{

                //     color: "#000",
                //     paddingLeft: "90px",
                //     paddingRight: "90px",
                //   }}
                //   onClick={(e) => handleSave(e, 1)}
                // >
                //   খসড়া
                // </button>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={(e) => handleSave(e, 1)}
                >
                  <div className=" d-flex justify-content-center align-items-center gap-2 p-1">
                    <span className="text-sm">খসড়া সংরক্ষণ করুন</span>
                    <span style={{ marginBottom: "0.1rem" }}>
                      {" "}
                      <IoIosArrowForward />{" "}
                    </span>
                  </div>
                </button>
              )}

              {!submited && (
                // <button
                //   type="button"
                //   className="btn btn-primay px-5 "
                //   style={{
                //     backgroundColor: "#428F92",
                //     color: "#fff",
                //   }}
                //   onClick={(e) => handleSave(e, 2)}
                // >
                //   <span>
                //     জমা দিন {"   "}
                //     {/* {"   "}<MdOutlineArrowForwardIos  /> */}
                //     <img src="/assets/images/arrow-right.png" alt="" />
                //   </span>
                // </button>
                <button
                  type="button"
                  className="btn btn-sm mx-1"
                  onClick={(e) => handleSave(e, 2)}
                  style={{
                    backgroundColor: "#428F92",
                    color: "#fff",
                  }}
                >
                  <div className=" d-flex justify-content-center align-items-center gap-2 px-5 py-1 ">
                    <span className="text-sm">জমা দিন</span>
                    <span style={{ marginBottom: "0.1rem" }}>
                      {" "}
                      <IoIosArrowForward />{" "}
                    </span>
                  </div>
                </button>
              )}
            </>
          )}

          {/* <button type="submit" className="btn btn-primay px-5" style={{ backgroundColor: "#428F92", color: "#fff", }} > একাউন্ট আপডেট করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button> */}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* studnts List end */}
    </div>
  );
}
