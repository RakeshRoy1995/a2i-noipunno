import { useEffect, useState } from "react";

import {
  add_pi_uid,
  convertToBanglaNumber,
  get_unique_index,
  make_group_by,
  show_comment_box_bi,
  weightId,
} from "../utils/Utils";
import { BiCircle, BiRefresh, BiSquareRounded } from "react-icons/bi";
import { FiSave, FiTriangle } from "react-icons/fi";
import {
  Bi_save,
  get_bi_evaluation_by_bi,
  get_pi_bi_evaluation_list,
} from "../Request";
import Swal from "sweetalert2";
import { IoIosArrowForward } from "react-icons/io";

declare global {
  interface Window {
    myTimeout?: number;
  }
}

export default function StudentMullayonBehave({
  all_bis,
  assessment_uid,
  teacher,
  student,
  teacher_uid,
  submitObj,
  setsubmitObj,
  submitData,
  setsubmitData,
  is_draft,
  submitObj_wid_null,
  showOffCollaps,
  keynext,
  next_uid,
  Showcollaps,
  all_student,
}: any) {
  // console.log(`is_draft`, is_draft);
  const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
  const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
  const pi_attribute_weight =
    own_SUbjects?.data?.data?.pi_attribute_weight || [];
  const class_room_id = localStorage.getItem("class_room_id");

  const [msg, setmsg] = useState<any>("");
  const [err, seterr] = useState<any>("");
  const [submited, setsubmited] = useState<any>(false);
  const [firstRender, setfirstRender] = useState<any>(true);
  const [comment_status, setcomment_status] = useState<any>(false);
  const [showOffAll, setshowOffAll] = useState<any>(false);

  // const handleSave = async (e: any, submit_status: any) => {
  //   try {
  //     const data: any = submitData.map((d: any) => {
  //       d.submit_status = submit_status;
  //       return d;
  //     });

  //     if (submit_status == 2) {
  //       if (submitData.length == 10) {
  //         await Bi_save(data);
  //         setmsg("আপনার তথ্য সংরক্ষণ করা হয়েছে");
  //         setsubmited(true);
  //       } else {
  //         if (submitData.length > 0) {
  //           setcomment_status(true);
  //         }

  //         checkedIn_comment(submitObj);
  //       }

  //       seterr("");
  //     } else {
  //       await Bi_save(data);
  //       setsubmited(true);
  //       setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");
  //       seterr("");
  //     }
  //   } catch (error) {
  //     seterr(" কিছু ভুল হয়েছে");
  //   }
  // };

  const handleSave = async (
    e: any,
    submit_status: any,
    go_next: any = true
  ) => {
    try {
      if (submit_status == 2 && !next_uid) {
        if (submitData.length == 10) {
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
              const data: any = submitData.map((d: any) => {
                d.submit_status = 1;
                return d;
              });

              await Bi_save(data);

              const own_subjet: any = await get_pi_bi_evaluation_list(1);

              const total_bi_submit =
                own_subjet.data.data.bi_evaluation_list.filter(
                  (data) =>
                    data?.class_room_uid == submitData[0].class_room_uid &&
                    data?.evaluate_type == submitData[0].evaluate_type
                );

              const students = [
                ...new Set(
                  total_bi_submit.map((data) => {
                    if (
                      data?.class_room_uid == submitData[0].class_room_uid &&
                      data?.evaluate_type == submitData[0].evaluate_type
                    ) {
                      return data.student_uid;
                    }
                  })
                ),
              ].filter(function (element) {
                return element !== undefined;
              });

              if (students.length != all_student.length) {
                Swal.fire({
                  icon: "error",
                  title:
                    "আপনি সব শিক্ষার্থীকে চিহ্নিত করেননি। অনুগ্রহ করে সকল শিক্ষার্থীকে চিহ্নিত করুন",
                  confirmButtonText: "হ্যাঁ",
                });
                refresh();
              } else {
                const studuent_mark: any = make_group_by(total_bi_submit);
                let get_unmarked_student: any = "";
                for (const x in studuent_mark) {
                  if (studuent_mark[x].length < 10) {
                    get_unmarked_student = x;
                  }
                }
                if (get_unmarked_student) {
                  localStorage.setItem("bi_submitted_mode", "true");
                  const nameOfUnmarkedStudent = all_student.filter(
                    (d) => d?.uid == get_unmarked_student
                  );

                  const text =
                    "আপনি " +
                    nameOfUnmarkedStudent[0].student_name_bn +
                    " সম্পর্কে মার্কিং সম্পূর্ণ করতে মিস করেছেন। অনুগ্রহ করে সবগুলো চিহ্নিত করুন";

                  const getIndex = get_unique_index(
                    all_student,
                    nameOfUnmarkedStudent[0].uid
                  );
                  showOffCollaps(getIndex, nameOfUnmarkedStudent[0].uid);

                  Swal.fire({
                    icon: "error",
                    title: text,
                    confirmButtonText: "হ্যাঁ",
                  });
                } else {
                  const data: any = total_bi_submit.map((d: any) => {
                    d.submit_status = 2;
                    return d;
                  });

                  await Bi_save(data);

                  Swal.fire({
                    title: "আপনার তথ্য সংরক্ষণ করা হয়েছে!",
                    icon: "success",
                  });

                  setsubmited(true);
                  setshowOffAll(true);
                }
              }

              // localStorage.setItem(
              //   "pi_bi_evaluation_list",
              //   JSON.stringify(own_subjet.data.data)
              // );

              // setsubmited(true);

              // if (students.length == 0) {
              //   Swal.fire({
              //     title: "আপনার তথ্য সংরক্ষণ করা হয়েছে!",
              //     icon: "success",
              //   });
              // } else {
              //   Swal.fire({
              //     icon: "error",
              //     title:
              //       "আপনি সব শিক্ষার্থীকে চিহ্নিত করেননি। অনুগ্রহ করে সকল শিক্ষার্থীকে চিহ্নিত করুন",
              //     confirmButtonText: "হ্যাঁ",
              //   });
              // }
            }
          });
        } else {

          console.log(`444`, 444);
          if (submitData.length > 0) {
            setcomment_status(true);
            checkedIn_comment(submitObj);
          } else {
            Swal.fire({
              icon: "error",
              title: "আপনি কোন কিছু নির্বাচন করেন নি!",
              confirmButtonText: "হ্যাঁ",
            });
          }
        }

        // seterr("");
      } else {
        if (submitData.length == 0) {
          Swal.fire({
            icon: "error",
            title: "আপনি কোন কিছু নির্বাচন করেন নি!",
            confirmButtonText: "হ্যাঁ",
          });
        } else {
          const data: any = submitData.map((d: any) => {
            d.submit_status = 1;
            return d;
          });
          await Bi_save(data);

          // setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");
          seterr("");
          if (go_next) {
            if (next_uid) {
              showOffCollaps(keynext, next_uid);
              refresh();
              setsubmited(true);
            }
          } else {
            // refresh()
            setcomment_status(true);
            checkedIn_comment(submitObj);
          }
        }
      }
    } catch (error) {
      console.log(`error`, error);
      Swal.fire({
        icon: "error",
        title: "কিছু ভুল হয়েছে!",
        confirmButtonText: "হ্যাঁ",
      });
      // seterr(" কিছু ভুল হয়েছে");
    }
  };

  // console.log("showModal", showModal);

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
    bi_uid: any,
    remark: any
  ) => {
    try {
      const subject_uid = localStorage.getItem("subject_id");

      const params: any = {
        evaluate_type: assessment_uid,
        bi_uid,
        weight_uid,
        class_room_uid: class_room_id,
        student_uid: student_id,
        teacher_uid: teacher_uid,
        submit_status: 2,
        is_approved: 1,
        remark,
        pi_uid,
        subject_uid,
      };

      if (remark) {
        const obj: any = { ...submitObj, [bi_uid + "_" + student_id]: params };
        setsubmitObj(obj);

        submit_object_common_func(remark, obj, pi_uid, student_id, weight_uid);
      } else {
        if (submitObj[bi_uid + "_" + student_id]) {
          if (submitObj[bi_uid + "_" + student_id].weight_uid == weight_uid) {
            delete submitObj[bi_uid + "_" + student_id];

            setsubmitObj(submitObj);

            submit_object_common_func(
              remark,
              submitObj,
              pi_uid,
              student_id,
              weight_uid
            );
          } else {
            const obj: any = {
              ...submitObj,
              [bi_uid + "_" + student_id]: params,
            };
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
          const obj: any = {
            ...submitObj,
            [bi_uid + "_" + student_id]: params,
          };
          setsubmitObj(obj);
          submit_object_common_func(
            remark,
            obj,
            pi_uid,
            student_id,
            weight_uid
          );
        }
      }
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const checkedIn = (obj: any) => {
    let all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.background = "";
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      let id: any =
        obj[x].pi_uid + "_" + obj[x].student_uid + "_" + assessment_uid;
      let el: any = document.getElementById(id);
      if (el) {
        el.style.background = "#69CB1C";
      }

      // console.log(`el`, el);

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
    for (const x in obj) {
      const clss_id = "__" + obj[x].student_uid;
      const all_elem: any = document.getElementsByClassName(clss_id);

      for (let index = 0; index < all_elem.length; index++) {
        const element: any = all_elem[index];
        element.style.display = "block";
      }
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      if (obj[x].weight_uid || obj[x].remark) {
        const comment_id =
          "comment_id_" +
          obj[x].pi_uid +
          "_" +
          obj[x].student_uid +
          "_" +
          assessment_uid;
        // const textarea_id = obj[x].bi_uid + "_" + obj[x].student_uid;
        const textarea_id = x + "_" + assessment_uid;
        const el: any = document.getElementsByClassName(textarea_id)[0];
        const el_comment: any = document.getElementById(comment_id);

        el.style.display = "none";
        if (el_comment) {
          el_comment.style.visibility = "hidden";
        }
        sumbitArray.push(obj[x]);
      }
    }

    setsubmitData(sumbitArray);
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
      // console.log(`11111111`, 11111111 , obj);
    } else {
      if (remark == null && weight_uid == null) {
        delete obj[bi_uid + "_" + student_id + "_" + assessment_uid];
      }
      checkedIn(obj);
    }
  };

  const refresh = () => {
    setsubmitObj(submitObj);
    setsubmitData(submitData);
    setcomment_status(false);

    setmsg("");
    seterr("");

    checkedIn_comment(submitObj);
    form_arry_comment(submitData);
    checkedIn(submitObj);

    setsubmited(false);

    const all_elem: any = document.getElementsByClassName(
      "all_pi_arrtiburte_tr"
    );

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.visibility = "visible";
    }

    const all_elem_txtarea: any =
      document.getElementsByClassName("all_textarea");

    for (let index = 0; index < all_elem_txtarea.length; index++) {
      const element: any = all_elem_txtarea[index];
      element.style.display = "none";
      element.value = "";
    }

    showOffCollaps(Number(keynext - 1) , student?.uid);
  };

  setTimeout(() => {
    if (firstRender) {
      const all_elem: any =
        document.getElementsByClassName("all_pi_arrtiburte");

      for (let index = 0; index < all_elem.length; index++) {
        const element: any = all_elem[index];
        element.style.background = "";
      }

      for (const x in submitObj) {
        const id: any =
          submitObj[x].pi_uid +
          "_" +
          submitObj[x].student_uid +
          "_" +
          assessment_uid;
        const el: any = document.getElementById(id);

        if (el) {
          el.style.background = "#69CB1C";
        }
      }
      // setfirstRender(false);
    }
  }, 300);


  return (
    <div className="content">
      <div className="row">
        <div className="border-0">
          <div className={!submited ? "row pb-5 pt-2" : "row pb-5 pt-2 d-none"}>
            {all_bis.map((d: any, key: any) => (
              <>
                <div className="col-sm-6 col-md-3 py-2">
                  <div className="border-0 p-2 h-100">
                    <div className="d-flex">
                      <div>
                        <h6 style={{ fontSize: "14px" }}>{d.name_bn}</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {d?.weights.map((w_d: any, k: any) => (
                  <div
                    className={
                      Showcollaps
                        ? "col-sm-6 col-md-3 py-2 all_pi_arrtiburte_tr pointer"
                        : "col-sm-6 col-md-3 py-2 all_pi_arrtiburte_tr_ pointer"
                    }
                    key={k}
                    id={
                      Showcollaps
                        ? "comment_id_" +
                          w_d.uid +
                          "_" +
                          student?.uid +
                          "_" +
                          assessment_uid
                        : "comment_id__" +
                          w_d.uid +
                          "_" +
                          student?.uid +
                          "_" +
                          assessment_uid
                    }
                  >
                    {!comment_status && (
                      <div
                        className="card p-2 h-100 shadow-sm border-0 rounded-0"
                        onClick={(e: any) => {
                          if (is_draft == 1) {
                            save_PI_evalution(
                              w_d.uid,
                              w_d.weight_uid,
                              student.uid,
                              w_d.bi_uid,
                              null
                            );
                          }
                        }}
                      >
                        {show_comment_box_bi(
                          w_d,
                          submitObj_wid_null,
                          student.uid,
                          assessment_uid
                        ) == "" ? (
                          <div
                            className="d-flex gap-2"
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className={
                                Showcollaps
                                  ? "all_pi_arrtiburte"
                                  : "all_pi_arrtiburte_"
                              }
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                                cursor: "pointer",
                              }}
                              id={
                                w_d.uid +
                                "_" +
                                student?.uid +
                                "_" +
                                assessment_uid
                              }
                            >
                              {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                                "Square" && (
                                <BiSquareRounded className="fs-5 mt-1" />
                              )}
                              {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                                "Circle" && <BiCircle className="fs-5 mt-1" />}
                              {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                                "Triangle" && (
                                <FiTriangle className="fs-5 mt-1" />
                              )}

                              {/* <TiTick className={`${styles.tick_mark}`} /> */}
                            </div>
                            <div>
                              <h6 style={{ fontSize: "14px" }}>
                                {w_d.title_bn}
                              </h6>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="d-flex gap-2"
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className={
                                Showcollaps
                                  ? "all_pi_arrtiburte"
                                  : "all_pi_arrtiburte_"
                              }
                              style={{
                                border: "1px solid #eee",
                                padding: "5px 6px",
                                borderRadius: "3px",
                                maxHeight: "40px",
                                cursor: "pointer",
                              }}
                              id={
                                w_d.uid +
                                "_" +
                                student?.uid +
                                "_" +
                                assessment_uid
                              }
                            >
                              {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                                "Square" && (
                                <BiSquareRounded className="fs-5 mt-1" />
                              )}
                              {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                                "Circle" && <BiCircle className="fs-5 mt-1" />}
                              {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                                "Triangle" && (
                                <FiTriangle className="fs-5 mt-1" />
                              )}

                              {/* <TiTick className={`${styles.tick_mark}`} /> */}
                            </div>
                            <div>
                              <h6 style={{ fontSize: "14px" }}>
                                {w_d.title_bn}
                              </h6>

                              <p>
                                {show_comment_box_bi(
                                  w_d,
                                  submitObj_wid_null,
                                  student.uid,
                                  assessment_uid
                                )}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {k === 0 && (
                      <div>
                        {is_draft == "1" && (
                          <textarea
                            onKeyUp={(e: any) => {
                              window.myTimeout = setTimeout(function () {
                                save_PI_evalution(
                                  w_d.uid,
                                  null,
                                  student.uid,
                                  w_d.bi_uid,
                                  e.target.value == "" ? null : e.target.value
                                );
                              }, 2000);
                            }}
                            placeholder={
                              "আপনি কেন চিহ্নিত করেননি তার কারণ লিখুন..."
                            }
                            title="required"
                            style={{
                              display: "none",
                              border: "1px solid red",
                            }}
                            className={
                              Showcollaps
                                ? "all_textarea form-control __" +
                                  student?.uid +
                                  " " +
                                  w_d.bi_uid +
                                  "_" +
                                  student?.uid +
                                  "_" +
                                  assessment_uid
                                : ""
                            }
                            id=""
                            cols={60}
                            rows={4}
                          ></textarea>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ))}
          </div>

          <div className="d-flex justify-content-end align-items-center pe-5 mb-2">
            {is_draft == "1" ? (
              <>
                {(comment_status || submited) && (
                  <>
                    {!showOffAll && (
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
                  </>
                )}
                {!submited && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={(e) => handleSave(e, 1, false)}
                  >
                    <div className=" d-flex justify-content-center align-items-center gap-2 p-1">
                      <span className="text-sm">খসড়া এবং মন্তব্য করুন</span>
                      <span style={{ marginBottom: "0.1rem" }}>
                        {" "}
                        <IoIosArrowForward />{" "}
                      </span>
                    </div>
                  </button>
                )}

                {msg && <h6 className="text-success">{msg}</h6>}

                {err && <h6 className="text-danger">{err}</h6>}
                {!submited && !next_uid && (
                  <button
                    type="button"
                    className="btn btn-sm mx-1"
                    onClick={(e) => handleSave(e, 2)}
                    style={{
                      backgroundColor: "#428F92",
                      color: "#fff",
                    }}
                  >
                    <div className=" d-flex justify-content-center align-items-center gap-2 px-5 py-1">
                      <span className="text-sm">জমা দিন</span>
                      <span style={{ marginBottom: "0.1rem" }}>
                        {" "}
                        <IoIosArrowForward />{" "}
                      </span>
                    </div>
                  </button>
                )}

                {next_uid && (
                  <button
                    type="button"
                    className="btn btn-sm mx-1"
                    onClick={(e) => {
                      handleSave(e, 1);
                    }}
                    style={{
                      backgroundColor: "#428F92",
                      color: "#fff",
                    }}
                  >
                    <div className=" d-flex justify-content-center align-items-center gap-2 px-5 py-1">
                      <span className="text-sm">
                        {" "}
                        খসড়া সংরক্ষণ করুন এবং পরবর্তী যান
                      </span>
                      <span style={{ marginBottom: "0.1rem" }}>
                        {" "}
                        <IoIosArrowForward />{" "}
                      </span>
                    </div>
                  </button>
                )}
              </>
            ) : (
              <div className="col-md-12">
                <div className="row p-1">
                  <p className="text-success text-center">
                    আপনার তথ্য সংরক্ষণ করা হয়েছিল
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* Teachers List end */}
    </div>
  );
}
