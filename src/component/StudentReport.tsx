import React from "react";
import {
  teacher_dashboard,
  teacher_own_subject,
  get_report_card,
  dimension_by_subject,
  clssWiseSubject,
  bi_report_card_by_student,
  bi_report_card_details,
  class_teacher_all_student_data,
} from "../Request";
import { useState, useEffect } from "react";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import {
  section_name,
  shift_name,
  formate_report_data,
  version_name,
  accessBIandReport,
  showReportDeleteEv,
  show_report_open_time_msg,
  teacher_name,
} from "../utils/Utils";
import Breadcumb from "../layout/Breadcumb";
import BiRawPDFDownload from "./PDFMaker/ReportPdf";
import TableComp from "./TableComp";
import { Spinner } from "react-bootstrap";

export default function StudentReport() {  
  const [err, seterr] = useState<any>("");
  const [instititute, setinstititute] = useState<any>("");
  const [biData, setbiData] = useState<any>([]);
  const [selected_student, setselected_student] = useState<any>([]);
  const [all_subject, setall_subject] = useState<any>([]);
  const [allFelter, setallFelter] = useState<any>({});
  const [data, setdata] = useState<any>({});
  const [all_student_and_class, setall_student_and_class] = useState<any>([]);
  const [new_student, setnew_student] = useState<any>([]);
  const [loader, setloader] = useState(true);
  let [numberOfRender, setnumberOfRender] = useState(1);
  const [showLoadingErr, setshowLoadingErr] = useState("");

  const fetchData = async () => {
    setloader(true);
    setshowLoadingErr("");

    const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
    const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

    const teacher_dash__: any = localStorage.getItem("teacher_dashboard") || "";
    const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

    const class_teacher_student__: any =
      localStorage.getItem("class_teacher_student") || "";
    const class_teacher_student = class_teacher_student__
      ? JSON.parse(class_teacher_student__)
      : "";

    try {
      let class_teacher_student_data: any = "";
      if (class_teacher_student) {
        class_teacher_student_data = class_teacher_student;
      } else {
        const data_dash: any = await class_teacher_all_student_data();
        class_teacher_student_data = data_dash;
        localStorage.setItem(
          "class_teacher_student",
          JSON.stringify(class_teacher_student_data)
        );
      }

      if (class_teacher_student_data.data.data.students.length) {
        setall_student_and_class(class_teacher_student_data.data.data.students);
        
      }

      let data: any = "";
      if (teacher_dash) {
      } else {
        const data_dash: any = await teacher_dashboard();
        localStorage.setItem(
          "teacher_dashboard",
          JSON.stringify(data_dash.data)
        );
      }

      let own_subjet: any = "";
      if (own_SUbjects) {
        own_subjet = own_SUbjects;
      } else {
        own_subjet = await teacher_own_subject();
        localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
      }

      setinstititute(teacher_dash?.data?.institute);

      setloader(false);
    } catch (error) {
      setshowLoadingErr("");

      numberOfRender++;

      if (numberOfRender <= 10) {
        setnumberOfRender(numberOfRender);
        fetchData();
      } else {
        setloader(false);
        setshowLoadingErr(
          "দুঃখিত। তথ্য সঠিকভাবে লোড হয়নি। অনুগ্রহ করে সাইটটি আবার লোড করুন"
        );
      }
    }
  };

  useEffect(() => {
    setloader(true);
    fetchData();
  }, []);


  const fetchDataFromAPI = async (student_name: any, l_loop: any = 1) => {
    seterr("");
    try {
      setselected_student([]);

      const dimension_data: any =
        localStorage.getItem("dimension_by_subject") || "";
      let dimentions = dimension_data ? JSON.parse(dimension_data) : "";

      if (dimentions == "") {
        dimentions = await dimension_by_subject(
          // allFelter.subject.split("-")[0]
          ""
        );

        localStorage.setItem(
          "dimension_by_subject",
          JSON.stringify(dimentions)
        );
      }

      const report_data = await get_report_card(
        "",
        allFelter.branch,
        allFelter.version,
        allFelter.shift,
        allFelter.subject.split("-")[1],
        allFelter.section,
        student_name
      );

      const get_bi_report_card = await bi_report_card_by_student(
        "",
        allFelter.branch,
        allFelter.version,
        allFelter.shift,
        allFelter.subject.split("-")[1],
        allFelter.section,
        student_name
      );

      if (
        get_bi_report_card.data.report_card.length == 0 ||
        report_data.data.report_card.length == 0
      ) {
        seterr(
          "ডেটা লোড করার সময় আপনি একটি ত্রুটির সম্মুখীন হয়েছেন। আপনি শিক্ষার্থীর মূল্যায়ন করেননি"
        );
      } else {
        const bi_report_card_data: any =
          localStorage.getItem("bi_report_card_details") || "";
        let dimentions_details: any = bi_report_card_data
          ? JSON.parse(bi_report_card_data)
          : "";

        if (dimentions_details == "") {
          dimentions_details = await bi_report_card_details();

          localStorage.setItem(
            "bi_report_card_details",
            JSON.stringify(dimentions_details)
          );
        }

        const clssWiseSub = await clssWiseSubject(allFelter.subject.split("-")[1]);

        clssWiseSub.data.data.sort((a, b) => a.subject_no - b.subject_no);

        const res: any = [];

        report_data.data.report_card.map((d) => {
          d.subject_result.map((s_d) => {
            res.push(s_d);
          });
        });
        const bi_res: any = [];
        get_bi_report_card.data.report_card.map((data) => {
          bi_res.push(data);
        });

        const bi_data = formate_report_data(
          bi_res,
          dimentions_details.data.data
        );
        const data = formate_report_data(res, dimentions.data.data);
        // console.log("dimentions", dimentions, res, bi_data);

        const all_sub = clssWiseSub.data.data;

        const final_data = [];

        for (let index = 0; index < all_sub.length; index++) {
          const sub_data = all_sub[index];
          for (let z = 0; z < data.length; z++) {
            const report_data = data[z];

            if (sub_data.uid == report_data[0]) {
              final_data.push(report_data);
              break;
            }
          }
        }

        if (final_data.length) {
          setbiData(bi_data);
          setall_subject(clssWiseSub.data.data);
          setselected_student(final_data);
        }
      }
    } catch (error) {
      if (l_loop == 10) {
        seterr(
          "ডেটা লোড করার সময় আপনি একটি ত্রুটির সম্মুখীন হয়েছেন। অনুগ্রহ করে আবার ক্লিক করুন"
        );
      } else {
        l_loop++;
        fetchDataFromAPI(student_name, l_loop);
      }
    }
  };

  const subject_name = (id: any) => {
    if (all_subject.length) {
      const subject = all_subject.find((data) => data.uid == id);
      return subject?.name;
    }
  };

  return (
    <div className="report_page">
      {showReportDeleteEv() ? (
        <div className="container">
          <div className="row">
            <Breadcumb title={"রিপোর্ট কার্ড"} />
            <div className="d-flex align-items-center">
              <div className="card shadow-lg border-0 w-100 rounded">
                <ul className="nav d-flex mt-2 justify-content-around py-1">
                  <li className={`nav-item`}>
                    <a
                      className={`nav-link link-secondary ${styles.nav_tab_bottom_border} active`}
                      id="expertness-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#expertness"
                      href="#"
                    >
                      <SlBookOpen className="me-1" /> শিক্ষার্থীদের রিপোর্ট
                      কার্ড
                    </a>
                  </li>
                </ul>

                {accessBIandReport() ? (
                  <div
                    className="tab-content"
                    id="tabContent"
                    style={{ backgroundColor: "#E4FEFF" }}
                  >
                    <div
                      className="tab-pane fade show active"
                      id="expertness"
                      role="tabpanel"
                      aria-labelledby="expertness-tab"
                    >
                      <div className="row p-5">
                        <div className="col-6 col-sm-6 col-md-6">
                          {showLoadingErr ? (
                            <p className="text-danger text-center">
                              {showLoadingErr}
                            </p>
                          ) : (
                            <>
                              {loader && (
                                <div>
                                  {loader && (
                                    <>
                                      <Spinner animation="border" /> ডেটা লোড
                                      হচ্ছে। দয়া করে অপেক্ষা করুন...
                                    </>
                                  )}
                                </div>
                              )}
                            </>
                          )}

                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              বিষয় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                              onChange={(e) => {
                                const value = e.target.value.split("-");
                                setnew_student(all_student_and_class[value[0]].students   )

                                let obj = {
                                  ...allFelter,
                                  ["subject"]:
                                    value[0] + "-" + value[1] + "-" + value[6],

                                  ["section"]: value[2],
                                  ["shift"]: value[3],
                                  ["version"]: value[4],
                                  ["branch"]: value[5],
                                };

                                setallFelter(obj);
                              }}
                            >
                              <option value={""}>বিষয় নির্বাচন করুন</option>

                              {all_student_and_class.map((data:any, key:number) => (
                                <option
                                  key={key}
                                  value={
                                    key  +
                                    "-" +
                                    data?.class_id +
                                    "-" +
                                    data?.section_id +
                                    "-" +
                                    data?.shift_id +
                                    "-" +
                                    data?.version_id +
                                    "-" +
                                    data?.branch_id +
                                    "-" +
                                    teacher_name(data?.class_teacher_id)
                                  }
                                >
                                  {data?.class_id == 6 && "ষষ্ঠ"}{" "}
                                  {data?.class_id == 7 && "সপ্তম"} {" শ্রেণী"}
                                  {"-"}
                                  শাখা(
                                  {section_name(data?.section_id)}){"-"}
                                  সেশন ({shift_name(data?.shift_id)}) {"-"}
                                  ভার্সন ({version_name(data?.version_id)})
                                </option>
                              ))}
                            </select>
                          </div>

                        </div>

                        {err && (
                          <p className="text-center text-danger p-2">{err}</p>
                        )}

                        <TableComp
                          new_student={new_student}
                          fetchDataFromAPI={fetchDataFromAPI}
                          setdata={setdata}
                          data={data}
                          err={err}
                          pdf={
                            <BiRawPDFDownload
                              selected_student={selected_student}
                              student={data}
                              instititute={instititute ? instititute[0] : {}}
                              subject_name={subject_name}
                              biData={biData}
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-center">
                    শুধুমাত্র শ্রেণি শিক্ষকই প্রবেশ করতে পারবেন
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <p className="text-center card-body">{show_report_open_time_msg}</p>
        </div>
      )}
    </div>
  );
}
