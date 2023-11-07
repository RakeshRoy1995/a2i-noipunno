import { useState } from "react";

import { weightId } from "../utils/Utils";
import { BiCircle, BiSquareRounded } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { Bi_save } from "../Request";

export default function StudentMullayonBehave({
  all_bis,
  assessment_uid,
  teacher,
  student,
}: any) {
  const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
  const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
  const pi_attribute_weight =
    own_SUbjects?.data?.data?.pi_attribute_weight || [];
  const class_room_id = localStorage.getItem("class_room_id");

  const [submitObj, setsubmitObj] = useState<any>({});
  const [submitData, setsubmitData] = useState<any>([]);

  const [msg, setmsg] = useState<any>("");
  const [err, seterr] = useState<any>("");
  const [comment_status, setcomment_status] = useState<any>(false);

  const handleSave = async (e: any, submit_status: any) => {
    try {
      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status;
        return d;
      });






      if (submit_status == 2) {

        if (submitData.length == 10) {

          console.log(3333);
          
          await Bi_save(data);
          setmsg("আপনার তথ্য সংরক্ষণ করা হয়েছে");
          
        } else {

          console.log(1111111 , submitObj);

          setcomment_status(true)
          checkedIn_comment(submitObj)

        }
        
        
        seterr("");
      } else {
        setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");
        seterr("");
      }

    } catch (error) {
      seterr("something went wrong");
    }
  };

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
    bi_uid: any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        bi_uid: pi_uid,
        weight_uid,
        class_room_id,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status: 2,
        is_approved: 1,
        remark: null,
      };

      let obj: any = { ...submitObj, [bi_uid + "_" + student_id]: params };

      // console.log(`obj`, obj);
      setsubmitObj(obj);

      checkedIn(obj);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const checkedIn = (obj: any) => {
    let all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.color = "";
      // element.style.background = "";
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      let id: any = obj[x].bi_uid + "_" + obj[x].student_uid;
      let el: any = document.getElementById(id);
      el.style.color = "green";

      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };













  const save_PI_evalution_comment = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
    bi_uid: any,
    remark:any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        bi_uid: pi_uid,
        weight_uid:null,
        class_room_id,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status: 2,
        is_approved: 1,
        remark,
      };

      if (remark) {

        let obj: any = { ...submitObj, [bi_uid + "_" + student_id]: params };

        setsubmitObj(obj);

        form_arry_comment(obj);
        
      }

      
    } catch (error) {
      console.log(`error`, error);
    }
  };


  const form_arry_comment = (obj: any) => {
    
    let sumbitArray: any = [];
    for (const x in obj) {
      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };


  const checkedIn_comment = (obj: any) => {


    for (const x in obj) {
      
      const clss_id = "all_textarea_" + obj[x].student_uid
      const all_elem: any = document.getElementsByClassName(clss_id);

      for (let index = 0; index < all_elem.length; index++) {
        const element: any = all_elem[index];
        element.style.visibility = "visible";
      }

    }



    const sumbitArray: any = [];

    for (const x in obj) {
      
      const comment_id = "comment_id_"+obj[x].bi_uid + "_" + obj[x].student_uid
      const textarea_id = obj[x].bi_uid + "_" + obj[x].student_uid
      const el: any = document.getElementsByClassName(textarea_id)[0];
      const el_comment: any = document.getElementById(comment_id);

      el.style.display = "none"; 
      el_comment.style.visibility = "hidden"; 
      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };






  return (
    <div className="content">
      <div className="row p-3">
        <div className="row">
          <div className="card shadow-lg border-0">
            <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
              <div className="">
                <h5>শিক্ষার্থীর নাম: {student?.student_name_bn} </h5>
                {/* <p>রোল নম্বর #৩২১০০</p> */}
              </div>
            </div>
            <div className="row pb-5 pt-2">
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


                    
                    <div className="col-sm-6 col-md-3 py-2" key={k} id={"comment_id_"+ w_d.uid + "_" + student?.uid}>

                    {
                      !comment_status && 
                    
                      <div
                        className="card bg-light h-100 shadow-lg border-0 p-2 all_pi_arrtiburte"
                        style={{ backgroundColor: "#F0FAE9" }}
                        id={w_d.uid + "_" + student?.uid}
                      >
                        <div
                          className="d-flex "
                          style={{ cursor: "pointer" }}
                          onClick={(e: any) =>
                            save_PI_evalution(
                              w_d.uid,
                              w_d.weight_uid,
                              student.uid,
                              w_d.bi_uid
                            )
                          }
                        >
                          <div>
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
                            <h6 style={{ fontSize: "14px" }}>{w_d.title_bn}</h6>
                          </div>
                        </div>
                      </div>
                      }


                      {
                            k === 0 && 

                            <div>
                            <textarea onChange={(e:any) =>
                              save_PI_evalution_comment(
                                w_d.uid,
                                w_d.weight_uid,
                                student.uid,
                                w_d.bi_uid,
                                e.target.value
                              )
                            } placeholder= {"আপনি কেন  চিহ্নিত করেননি তা আমাদের বলুন..." } title="required" style={{visibility:"hidden" , border : "1px solid red"}} className={"form-control all_textarea_"+student?.uid+" "+ w_d.uid + "_" + student?.uid }   id="" cols={60} rows={4}>

                            </textarea>
                          </div>
                          }

                    </div>

                  ))}
                </>
              ))}
            </div>

            <div className="d-flex justify-content-end align-items-center pe-5 mb-2">

            {msg && <h6 className="text-success">{msg}</h6>}

{err && <h6 className="text-danger">{err}</h6>}
              <button
                type="button"
                className="btn btn-warning m-1 "
                style={{
                  color: "#000",
                  paddingLeft: "90px",
                  paddingRight: "90px",
                }}
                onClick={(e) => handleSave(e, 1)}
              >
                খসড়া
              </button>

              

              <button
                type="button"
                className="btn btn-primay px-5 "
                style={{
                  backgroundColor: "#428F92",
                  color: "#fff",
                }}
                onClick={(e) => handleSave(e, 2)}
              >
                সংরক্ষণ করুন
              </button>
            </div>
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
