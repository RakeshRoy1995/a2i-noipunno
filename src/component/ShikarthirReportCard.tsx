import react from "react";
import html2pdf from "html2pdf.js";
import { BsFillFileEarmarkArrowDownFill, BsFiletypePdf } from "react-icons/bs";
import styles from "./Home.style.module.css";
import { convertToBanglaNumber, subject_name } from "../utils/Utils";

const ShikarthirReportCard = ({
  selected_student,
  sub_name,
  student,
  allFelter,
  instititute,
}: any) => {
  const handleConvertToPdf = () => {
    const filename =
      student?.student_name_bn ||
      student?.student_name_en + "-roll-" + student.roll + ".pdf";

    const id = "contentToConvert_";
    const element = document.getElementById(id);

    const options = {
      margin: 0,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    console.log("hello");

    const pdf = html2pdf().from(element).set(options).outputPdf();
    pdf.save();
  };

  return (
    <>
      {/* report card design start */}
      <div className="d-flex m-4 justify-content-between flex-md-row flex-column align-items-center flex-end">
        <label> {student?.student_name_bn || student?.student_name_en}</label>
        <button
          className={`${styles.download_btn}`}
          onClick={handleConvertToPdf}
          style={{
            fontSize: "12px",
          }}
        >
          <BsFiletypePdf className="fs-4 me-2 " />
          ডাউনলোড করুন
        </button>
      </div>
      <div></div>
      <div id={"contentToConvert_"}>
        <div className="bg-white">
          <div
            className="container"
            style={{ borderBottom: "8px solid #201B58" }}
          >
            <div className="row">
              <div className="text-center">
                <img
                  src="/assets/images/Report_page-0002.jpg"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="row mx-5">
              <div className="text-center">
                <img
                  src="/assets/images/noipunno-new-logo.svg"
                  className="img-fluid w-25"
                />
              </div>
            </div>
            <div className="row mx-1">
              <div className="col-sm-6 col-md-12 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">প্রতিষ্ঠানের নাম</div>
                  <div className="dots"> :{instititute?.institute_name}</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শিক্ষার্থীর নাম</div>
                  <div className="dots">
                    {" "}
                    :{student?.student_name_bn || student?.student_name_en}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শিক্ষার্থীর আইডি</div>
                  <div className="dots">
                    {" "}
                    : {convertToBanglaNumber(student?.roll)}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শ্রেণি </div>
                  <div className="dots">
                    {" "}
                    : {student.class == "6" ? "ষষ্ঠ" : "সপ্তম"}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শিক্ষাবর্ষ </div>
                  <div className="dots">
                    {" "}
                    : {convertToBanglaNumber(student.registration_year)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ backgroundColor: "#DDDEE0" }}>
            <div className="row p-0 m-0">
              <h1 className="sucjects pt-2 pb-2 text-center">বিষয়সমূহ</h1>
              <div className="d-flex justify-content-center">
                <p
                  style={{ borderBottom: "3px solid #201B58", width: "90%" }}
                />
              </div>
              <div
                className="d-flex justify-content-center pb-5"
                style={{ minHeight: "560px" }}
              >
                <div className="col-8">
                  <div className="row">
                    {selected_student.map((d: any, k: any) => (
                      <div className="col-sm-6 col-md-6 p-3" key={k}>
                        <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                          <div className="icon">
                            <img
                              src="/assets/icons/graduation-cap.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="subject">{subject_name(d[0])}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-border-desing bg-white my-1">
          <div
            className="container py-1 "
            style={{
              borderTop: "10px solid #DDDEE0",
              borderLeft: "20px solid #DDDEE0",
              borderRight: "20px solid #DDDEE0",
              borderBottom: "10px solid #DDDEE0",
            }}
          >
            {selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}




{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            ffffffffffff fffffff ffffffff fffff fffffffff defewfwf efeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}






{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}




{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}





{selected_student.map((d: any, k: any) => (
              <>
                <h1 className="report-card-design-title text-center pt-1 mt-2">
                  {subject_name(d[0])}
                </h1>
                <div className="row">
                  {d[1].map((data: any, k: any) => (
                    <div
                      className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3"
                      key={k}
                    >
                      <div className="card border border-2 border-dark my-3 h-100">
                        <div>
                          <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                            {data?.dimension_title}
                          </h4>
                        </div>
                        <div
                          className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                          style={{ height: "30%" }}
                        >
                          <p className="report-card-design-subject-assessment text-center">
                            fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge fffffffffffffffffffffffffff ffffffffffffff defewfwfefeggge
                          </p>
                        </div>
                        <div className="d-flex position-absolute bottom-0 w-100">
                          <div
                            className={
                              data.dimension_result >= 1
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 2
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 3
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 4
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 5
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 6
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                          <div
                            className={
                              data.dimension_result >= 7
                                ? "assessment-mark-dark"
                                : "assessment-mark-light"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}



          </div>
        </div>
      </div>
      {/* report card design end */}
      {/* footer start */}
      {/* <footer>
        <div className="container">
          <div className="row px-0 footer-text-padding">
            <div className="col-sm-12 col-md-6">
              <p>
                সর্বস্বত্ব সংরক্ষিত © ২০২৩ শিক্ষা মন্ত্রণালয়, গণপ্রজাতন্ত্রী
                বাংলাদেশ সরকার
              </p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-lg-end">
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="#" className="footer-list-items">
                    কপিরাইট
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-list-items">
                    গোপনীয়তা নীতি
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-list-items">
                    জিজ্ঞাসা
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
      {/* footer end */}
      {/* <section className="chat_box">
        <div id="popup" className="popup ">
          <div className="popup-app-info-top ">
            <div className="popup-app-info-reserved">
              <h2 className="reserved-app-info p-0 m-0">
                সর্বস্বত্ব সংরক্ষিত ২০২৩
              </h2>
            </div>
            <div className="popup-card-body">
              <div className="d-flex popup-card-icons">
                <div className="">
                  <img
                    src="/assets//icons/bd-map.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="/assets/icons/NCTB_logo-2.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="popup-card-institutions">
                <ul>
                  <li>পরিকল্পনা ও বাস্তবায়নে:</li>
                  <li>জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</li>
                  <li>(এনসিটিবি), শিক্ষা মন্ত্রণালয়,</li>
                  <li>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</li>
                </ul>
              </div>
            </div>
            <hr className="m-0 my-2 p-0" />
            <div className="popup-app-info-bottom">
              <div className="d-flex popup-card-icons align-items-end">
                <div className="">
                  <img
                    src="/assets//icons/Aspire_to_Innovate_Seal 2.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="/assets/icons/unicef logo.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="popup-card-institutions">
                <ul>
                  <li>কারিগরি সহায়তায়:</li>
                  <li>এসপায়ার টু ইনোভেট (এটুআই),আইসিটি বিভাগ </li>
                  <li>এবং ইউনিসেফ </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="popup-version-bottom">
              <div className="d-flex align-items-center popup-version">
                <p className="popup-version-info">
                  Version 1.0.2 &amp; Last relies 24/10/23
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="chat_btn">
          <img
            className="app-info-btn"
            onclick="togglePopup()"
            src="/assets/icons/app-info.svg"
            alt="app-info"
          />
        </div>
      </section> */}
    </>
  );
};

export default ShikarthirReportCard;
