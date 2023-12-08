import { FiTriangle } from "react-icons/fi";
import { useState, useEffect } from "react";

import {
  BiCircle,
  BiFilterAlt,
  BiSidebar,
  BiSquareRounded,
} from "react-icons/bi";

import { Pi_save, teacher_own_subject } from "../Request";
import { useParams } from "react-router-dom";

import { GoPerson } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
const class_room_id = localStorage.getItem("class_room_id")

export default function StudentMullayon(props: any) {
  const { assessment_uid, competence_uid }: any = useParams();
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [submitObj, setsubmitObj] = useState<any>({});
  const [pi_name, setpi_name] = useState<any>("");
  const [submitData, setsubmitData] = useState<any>([]);
  const [al_pi_attr, setal_pi_attr] = useState<any>([]);
  const fetchData = async () => {
    const all_pi_arrtibute_name: any =
      localStorage.getItem("pi_attr_name") || "";
    const all_pi_arrtibute_: any = localStorage.getItem("pi_attr") || "";
    const all_pi_arrtibute = all_pi_arrtibute_
      ? JSON.parse(all_pi_arrtibute_)
      : "";

    setpi_name(all_pi_arrtibute_name);
    setal_pi_attr(all_pi_arrtibute);
    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }

    const student: any = [];
    own_subjet.data.data.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );

    setStudent(uniqueObjectsArray);
    setteacher(own_subjet.data.data.user);
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (e: any, submit_status: any) => {
    try {

      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status
        return d
      })

      await Pi_save(data);

      if (submit_status == 1) {
        alert("Saved Draft")
      } else {
        alert("Saved Successfully")
      }

    } catch (error) {
      alert("something went wrong");
    }
  };

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        competence_uid,
        pi_uid,
        weight_uid,
        class_room_id,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status: 2,
        is_approved: 1,
        remark: null
      };
      let obj: any = { ...submitObj, [student_id]: params };
      setsubmitObj(obj);

      checkedIn(obj);
    } catch (error) {
      console.log(error.message);

    }
  };

  const checkedIn = (obj: any) => {
    let all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.background = "";
    }

    let sumbitArray: any = [];

    for (const x in obj) {
      let id: any = obj[x].weight_uid + "-" + x;
      let el: any = document.getElementById(id);
      el.style.background = "#69CB1C";
      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };

  return (
    <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="d-flex align-items-center">
                    <div className="card shadow-lg border-0 w-100 rounded">
                      <ul className="nav d-flex mt-2 justify-content-around py-1">
                        <li className={`nav-item`}>
                          <h4 className="p-1"> {pi_name} </h4>
                        </li>
                      </ul>
                      <div className="tab-content" id="tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="expertness"
                          role="tabpanel"
                          aria-labelledby="expertness-tab"
                        >
                          <div className="row p-3">
                            <table className="table table-sm">
                              <thead>
                                <tr>
                                  <th scope="col" style={{ width: "5%" }}>
                                    শিক্ষার্থীর{" "}
                                    <BiFilterAlt className="fs-5 ms-4" />
                                  </th>
                                  <th scope="col" style={{ width: "30%" }}></th>
                                  <th scope="col" style={{ width: "30%" }}>
                                    <BiFilterAlt className="fs-5" />
                                  </th>
                                  <th scope="col" style={{ width: "30%" }}></th>
                                </tr>
                              </thead>
                              <tbody>
                                {Student.map((teacher: any, k: any) => (
                                  <tr key={k}>
                                    <>
                                      <td
                                        style={{
                                          width: "5%",
                                        }}
                                      >
                                        <GoPerson className="fs-6" />{" "}
                                        {teacher.student_name_bn}
                                        <br />
                                        {teacher.uid}
                                      </td>

                                      {al_pi_attr.map(
                                        (pi_attr: any, kedy: any) => (
                                          <td
                                            style={{
                                              width: "30%",
                                            }}
                                            key={kedy}
                                          >
                                            <div className="d-flex gap-2">
                                              <div
                                                id={
                                                  pi_attr.weight_uid +
                                                  "-" +
                                                  teacher.uid
                                                }
                                                className="all_pi_arrtiburte"
                                                style={{
                                                  border: "1px solid #eee",
                                                  padding: "5px 6px",
                                                  borderRadius: "3px",
                                                  maxHeight: "40px",
                                                }}
                                                onClick={() =>
                                                  save_PI_evalution(
                                                    pi_attr.uid,
                                                    pi_attr.weight_uid,
                                                    teacher.uid
                                                  )
                                                }
                                              >
                                                {/* <input type="radio" className="d-none" name={pi_attr.pi_uid + "-" + teacher.uid} id={pi_attr.weight_uid + "-"+ teacher.uid} /> */}{" "}
                                                {pi_attr.weight.name ==
                                                  "Square" && (
                                                    <BiSquareRounded className="fs-5 mt-1" />
                                                  )}
                                                {pi_attr.weight.name ==
                                                  "Circle" && (
                                                    <BiCircle className="fs-5 mt-1" />
                                                  )}
                                                {pi_attr.weight.name ==
                                                  "Triangle" && (
                                                    <FiTriangle className="fs-5 mt-1" />
                                                  )}
                                              </div>

                                              <div>{pi_attr.title_bn}</div>
                                            </div>
                                          </td>
                                        )
                                      )}
                                    </>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="d-flex justify-content-end align-items-center pe-5 mb-2">
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

                            {/* <button type="submit" className="btn btn-primay px-5" style={{ backgroundColor: "#428F92", color: "#fff", }} > একাউন্ট আপডেট করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button> */}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
