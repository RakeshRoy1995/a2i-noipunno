import { FiTriangle } from "react-icons/fi";
import { useState, useEffect } from "react";

import {
  BiCircle,
  BiFilterAlt,
  BiSidebar,
  BiSquareRounded,
} from "react-icons/bi";

import { Bi_save, teacher_own_subject } from "../Request";
import { useParams } from "react-router-dom";

import { GoPerson } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { weightId } from "../utils/Utils";
import { TiTick } from "react-icons/ti";
import styles from "./Home.style.module.css";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
const class_room_id = localStorage.getItem("class_room_id");

export default function StudentMullayonBehaveSubmit({
  assessment_uid,
  al_pi_attr,
  teacher,
}:any) {
  const [Student, setStudent] = useState<any>([]);
  const [submitObj, setsubmitObj] = useState<any>({});
  const [submitData, setsubmitData] = useState<any>([]);
  const [pi_attribute_weight, setpi_attribute_weight] = useState<any>([]);
  const fetchData = async () => {
    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }

    setpi_attribute_weight(own_subjet.data.data.pi_attribute_weight);
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (e: any, submit_status: any) => {
    try {
      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status;
        return d;
      });

      await Bi_save(data);

      if (submit_status == 1) {
        alert("Saved Draft");
      } else {
        alert("Saved Successfully");
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
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
      const obj: any = { ...submitObj, [weight_uid + "_" + student_id]: params };
      setsubmitObj(obj);

      checkedIn(obj);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const checkedIn = (obj: any) => {

    console.log(`submitData obj`, obj);
    let all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.background = "";
    }

    let sumbitArray: any = [];

    for (const x in obj) {
      let id: any = obj[x].weight_uid + "_" + obj[x].student_uid  ;
      let el: any = document.getElementById(id);

      console.log(`el`, id);
      el.style.background = "#69CB1C";
      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };

  console.log(`submitData`, teacher , al_pi_attr);

  return (
    <div className="content">














      <div className="row">
        {al_pi_attr.map((pi_attr: any, kedy: any) => (
          <div
            className=" all_pi_arrtiburte"
            id={pi_attr.weight_uid + "_" + teacher.caid }
            key={kedy}
            onClick={(e: any) =>
              save_PI_evalution(pi_attr.uid, pi_attr.weight_uid, teacher.caid)
            }
          >
            {/* subjects list end */}
            <div className="row">
              <div className="d-flex ">
                <div>
                  {weightId(pi_attribute_weight, pi_attr.weight_uid) ==
                    "Square" && <BiSquareRounded className="fs-5 mt-1" />}
                  {weightId(pi_attribute_weight, pi_attr.weight_uid) ==
                    "Circle" && <BiCircle className="fs-5 mt-1" />}
                  {weightId(pi_attribute_weight, pi_attr.weight_uid) ==
                    "Triangle" && <FiTriangle className="fs-5 mt-1" />}

                  {/* <TiTick className={`${styles.tick_mark}`} /> */}
                </div>
                <div>
                  <h6 style={{ fontSize: "14px" }}>{pi_attr.title_bn}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
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
