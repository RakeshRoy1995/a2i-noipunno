import react from "react";
import html2pdf from "html2pdf.js";
import { BsFillFileEarmarkArrowDownFill, BsFiletypePdf } from "react-icons/bs";
import styles from "./Home.style.module.css";

const ShikarthirReportCard = () => {
  const handleConvertToPdf = (student: any) => {
    const filename = "student_name_bn .pdf";

    const id = "contentToConvert_";
    const element = document.getElementById(id);

    const options = {
      margin: 0,
      filename: filename,
      image: { type: "jpeg", quality: 3.98 },
      html2canvas: { scale: 1 },
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
        <label>শিক্ষার্থীর Download</label>
        <button
          className={`${styles.download_btn}`}
          onClick={handleConvertToPdf}
          data-bs-toggle="modal"
          data-bs-target="#allstaticBackdrop"
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
          <div className="row">
            <div className="text-center">
              <img
                src="/assets/images/Report_page-0002.jpg"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div
            className="container px-5"
            style={{
              borderBottom: "8px solid #201B58",
              borderTop: "8px solid #201B58",
            }}
          >
            <div className="row mx-5 mt-5">
              <div className="text-center">
                <img
                  src="/assets/images/noipunno-new-logo.svg"
                  className="img-fluid w-50"
                />
              </div>
            </div>
            <div className="row mx-1 mt-2">
              <div className="col-sm-6 col-md-12 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">প্রতিষ্ঠানের নাম</div>
                  <div className="dots">
                    :
                    ..........................................................................................................................
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শিক্ষার্থীর নাম</div>
                  <div className="dots">
                    {" "}
                    : ....................................................
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শিক্ষার্থীর আইডি</div>
                  <div className="dots">
                    {" "}
                    : ....................................................
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শ্রেণি </div>
                  <div className="dots">
                    {" "}
                    : ....................................................
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <div className="d-flex std-identity">
                  <div className="institution-name">শিক্ষাবর্ষ </div>
                  <div className="dots">
                    {" "}
                    : .........................................................
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container pb-5"
            style={{ backgroundColor: "#DDDEE0" }}
          >
            <div className="row p-0 m-0">
              <h1 className="sucjects pt-2 pb-2 text-center">বিষয়সমূহ</h1>
              <div className="d-flex justify-content-center">
                <p
                  style={{ borderBottom: "3px solid #201B58", width: "90%" }}
                />
              </div>
              <div className="d-flex justify-content-center pb-5">
                <div className="col-8">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 pt-3">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">বাংলা</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-3">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">ইতিহাস ও সামাজিক বিজ্ঞান</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">ইংরেজি</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">জীবন ও জীবিকা</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">গণিত</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">ধর্ম শিক্ষা</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">বিজ্ঞান</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">স্বাস্থথ্য সুরক্ষা</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">ডিজিটাল প্রযুক্ত</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 pt-1">
                      <div className="d-flex gap-3 align-content-center subjucts-icon-name">
                        <div className="icon">
                          <img
                            src="/assets/icons/graduation-cap.png"
                            className="img-fluid w-50"
                          />
                        </div>
                        <div className="subject">শিল্প ও সংস্কৃতি</div>
                      </div>
                    </div>
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
            <h1 className="report-card-design-title text-center py-1 mt-3">
              বাংলা
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                      যোগাযোগ
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  border-bottom border-dark">
                    ভাষারীতি
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      বিভিন্ন ধরনের লেখা পড়ে লেখকের দৃষ্টিভঙ্গি উপলব্ধি করেছে
                      এবং নিজের বক্তব্য বোোঝাতে বিভিন্ন অর্থবৈচিত্রর্যমূলক বাক্য
                      তৈরি করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  border-bottom border-dark">
                    প্রায়োোগিক যোগাযোগ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      বিশ্লেষণাত্মক ভাষায় লিখতে পেরেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    সৃজনশীল ও মননশীল প্রকাশ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      সাহিত্যরস উপভোোগ করে নিজের কল্পনা ও অনুভূতি সৃষ্টিশীল
                      উপায়ে প্রকাশ করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    মানবিক চিন্তন
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      কোনো ঘটনা বা বিষয় সম্পর্ককেনিজের মত দিয়েছে ও অন্যের মতের
                      গঠনমূলক সমালোোচনা করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center pt-1 mt-2">
              English
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                      Communication
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      Communicates with relevance to a given context
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-dark" />
                    <div className="assessment-mark-dark" />
                    <div className="assessment-mark-dark" />
                    <div className="assessment-mark-dark" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-dark" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    Linguistic norms
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      Uses appropriate vocabulary and expressions as required in
                      the context
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    Democratic practice
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      Values democratic atmosphere in communication and
                      participates accordingly
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    Creative expression
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      Comprehends and relates to literary texts
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-2">
              গণিত
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                      গাণিতিক অনুসন্ধান
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      সমস্যা সমাধানে বিভিন্ন গাণিতিক অনুসন্ধান প্রক্রিয়া যাচাই
                      করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    সংখ্যা ও পরিমাণ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োোগ করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    জ্যামিতিক আকৃতি
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      নিয়মিত জ্যামিতিক আকৃতি চিনতে পেরেছে এবং সেগুলোো পরিমাপ
                      করতে পেরেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    গাণিতিক সম্পর্ক
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      সমস্যা সমাধানে গাণিতিক যুক্তি ও সূত্র ব্যবহার করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  border-bottom border-dark">
                    সম্ভাব্যতা বিশ্লেষণ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      প্রাপ্ত তথ্য বিশ্লেষণ করে সমস্যা সমাধানের সম্ভাবনা যাচাই
                      করে দেখেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-5">
              বিজ্ঞান
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3 ">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    বৈজ্ঞানিক অনুসন্ধান
                  </h4>

                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      বৈজ্ঞানিক অনুসন্ধানের ক্ষেত্রে তথ্য প্রমাণ ও বস্তুনিষ্ঠতার
                      উপর জোোর দিয়েছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    বস্তুর গঠন ও আচরণ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      পরিবেশের বিভিন্ন বস্তুর বাহ্যিক গঠন ও আচরণের সম্পর্ক
                      অনুসন্ধান করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    বস্তু ও শক্তির মিথস্ক্রিয়া
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      বিভিন্ন প্রাকৃতি ক ঘটনায় শক্তির স্থানান্তর অনুসন্ধান করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    স্থিতি ও পরিবর্তন
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      কোনো সিস্টেমে ঘটে চলা বিভিন্ন পরিবর্তন মধ্য দিয়ে যে
                      ভারসাম্য সৃষ্টি হয় তা অনুসন্ধান করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    বিজ্ঞানলব্ধ সামাজিক মূল্যবোধ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      মানুষ ও প্রকৃতির উপর প্রভাব বিবেচনায় নিয়ে বিজ্ঞান ও
                      প্রযুক্তির ইতিবাচক প্রয়োগে সচেষ্ট হয়েছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-2">
              ডিজিটাল প্রযুক্তি{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                      ডিজিটাল সাক্ষরতা
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      প্রযুক্তির সাহায্যে প্রয়োোজনীয় তথ্য সংগ্রহ ও তথ্য
                      দায়িত্বশীল ব্যবহার করতে পেরেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    আইসিটি সক্ষমতা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      ব্যক্তিগত প্রয়োোজনে ডিজিটাল মাধ্যম ব্যবহার করে জরুরি সেবা
                      গ্রহণের জন্য যোোগাযোোগ করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    ডিজিটাল সলিউশন উদ্ভাবন
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      অ্যালগরিদম ব্যবহার করে প্রোগ্রাম তৈরি করেছে এবং বিভিন্ন
                      ধরনের নেটওয়ার্ককে তথ্য আদানপ্রদানের কৌশল ব্যাখ্যা করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative py-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center border-bottom border-dark">
                    আইসিটির নিরাপদ, নৈতিক ও দায়িত্বশীল ব্যবহার
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      সামাজিক রীতি-নীতি, ঝুঁকি ও নৈতিক দিক বিবেচনা করে ডিজিটাল
                      প্রযুক্তি ব্যবহার করে ব্যক্তিগত যোগাযোগ করছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-2">
              ইতিহাস ও সামাজিক বিজ্ঞান{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 mb-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                      আত্মপরিচয়
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      লিখিত ও অলিখিত উৎস থেকে তথ্য নিয়ে বিভিন্ন দৃষ্টিকোোণ থেকে
                      নিজের আত্মপরিচয় ও ইতিহাস অন্বেষণ করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 mb-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    মুক্তিযুদ্ধের চেতনা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      বিভিন্ন উৎস থেকে তথ্য নিয়ে মুক্তিযুদ্ধে সর্বস্তরের মানুষের
                      অবদান অনুসন্ধান করেছে{" "}
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 mb-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    প্রাকৃতিক ও সামাজিক কাঠাম
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      বিভিন্ন প্রেক্ষাপটে গড়ে ওঠা সামাজিক ও রাজনৈতিক কাঠামোো
                      কীভাবে মানুষের অবস্থান ও ভূমিকা নির্ধারণ করে তা অনুসন্ধান
                      করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5 mt-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    সম্পদ ব্যবস্থাপনা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      ময় ও অঞ্চলভেদে অর্থনৈতিক ব্যবস্থা কীভাবে গড়ে ওঠে তা
                      অনুসন্ধান করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5 mt-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    পরিবর্তনশীলতায় ভূমিকা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      সময় ও ভৌগোলিক অবস্থানের সাপেক্ষে সমাজের পরিবর্তন
                      পর্যালোচনা করে নিজ প্রেক্ষাপটে দায়িত্বশীল আচরণ করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 my-1">
              জীবন ও জীবিকা{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                      আত্মউন্নয়ন
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      নিজের পছন্দ ও সক্ষমতা বিবেচনায় জীবনের লক্ষ্য নির্ধারণ করে
                      দায়িত্বশীল কাজে নিজেকে সম্পৃক্ত করতে পেরেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    ক্যারিয়ার প্ল্যানিং
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      পেশার পরিবর্তন এবং তার সংগে নতুন নতুন দক্ষতা অর্জনের
                      প্রয়োজনীয়তা বুঝে তা অর্জনের জন্ নিজ প্রেক্ষাপটে সমস্যা
                      সমাধানের চেষ্টা করেছে{" "}
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    পেশাগত দক্ষতা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      নির্দিষ্ট পেশা সম্পর্কে মৌলিক ধারণা ও আগ্রহ প্রদর্শন করতে
                      পেরেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    ভবিষ্যৎ কর্মদক্ষতা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      পেশায় ভবিষ্যৎ প্রযুক্তির প্রভাব জেনে অভিযোজনের প্রস্তুতি
                      নিতে পারছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-2">
              ধর্ম শিক্ষা{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                      ধর্মীয় জ্ঞান
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      ধর্মের মৌলিক বিষয় সমূহ জানতে আগ্রহ প্রদর্শন করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    ধর্মীয় বিধিবিধান
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      ধর্মের বিধি-বিধান উপলব্ধি করে চর্চার চেষ্টা করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    ধর্মীয় মূল্যবোধ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      ধর্মীয় শিক্ষায় উদ্বুদ্ধ হয়ে সকলের সংগে মিলেমিশে থেকেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-2">
              স্বাস্থ সুরক্ষা{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                      আত্ম পরিচর্যা
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      শারীরিক ও মানসিক পরিবর্তন উপলব্ধি করে নিজের দৈনন্দিন যত্ন
                      ও পরিচর্যায় উদ্যোগী হয়েছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    আবেগিক বুদ্ধিমত্তা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      কাউকে কষ্ট না নিয়ে নিজের সামর্থ্য ও সক্ষমতা অনুযায়ী কাজ
                      করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-5">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    সামাজিক বুদ্ধিমত্তা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      পারস্পরিক সম্পর্ক বজায় রাখতে পেরেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 mt-5">
              শিল্প ও সংস্কৃতি{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                      পর্যবেক্ষণ ও রূপান্তর
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      প্রকৃতির রূপ ও ঘটনাপ্রবাহ নিজের মতোো করে বিভিন্নভাবে
                      প্রকাশের আগ্রহ প্রদর্শন করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    নান্দনিকতার বহুমাত্রিক প্রকাশ
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      শিল্পকলার বিভিন্ন ধারার পরিবেশনা উপভোোগ করতে পারছে এবং
                      সম্পৃক্ত হতে আগ্রহ প্রকাশ করছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center  py-2  border-bottom border-dark">
                    যাপিত জীবনে নান্দনিকতা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      দৈনন্দিন কার্যক্রমে নান্দনিকতার প্রকাশ করছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title text-center py-1 my-5">
              আচরণিক নির্দেশক{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <div>
                    <h4 className="report-card-design-subject-title text-center py-3 border-dark">
                      অংশগ্রহণ ও যোগাযোগ
                    </h4>
                  </div>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center d-none"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      প্রকৃতির রূপ ও ঘটনাপ্রবাহ নিজের মতোো করে বিভিন্নভাবে
                      প্রকাশের আগ্রহ প্রদর্শন করেছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center py-2 border-dark">
                    নিষ্ঠা ও সততা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center d-none"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      শিল্পকলার বিভিন্ন ধারার পরিবেশনা উপভোোগ করতে পারছে এবং
                      সম্পৃক্ত হতে আগ্রহ প্রকাশ করছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 position-relative pb-3">
                <div className="card border border-2 border-dark my-3 h-100">
                  <h4 className="report-card-design-subject-title text-center py-2 border-dark">
                    পারস্পরিক শ্রদ্ধা ও সহযোোগিতা
                  </h4>
                  <div
                    className="align-items-center card border-0 flex-direction-column justify-content-center align-items-center text-center d-none"
                    style={{ height: "30%" }}
                  >
                    <h4 className="report-card-design-subject-assessment text-center">
                      দৈনন্দিন কার্যক্রমে নান্দনিকতার প্রকাশ করছে
                    </h4>
                  </div>
                  <div className="d-flex position-absolute bottom-0 w-100">
                    <div className="assessment-mark-light-first" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                    <div className="assessment-mark-light" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="report-card-design-title ps-2 py-1 my-5">
              মূল্যায়নের স্কেল{" "}
            </h1>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-7 position-relative pb-5">
                <div className="py-3 px-0 h-100">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-light" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-dark" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-2 indicators-check-boxes">
                      <div className="assessment-scale-box-dark" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                      <div className="assessment-scale-box-light" />
                    </div>
                    <div
                      className="d-flex align-items-center d-flex gap-2"
                      style={{ marginTop: "-5px" }}
                    >
                      <div className="ps-3"> = </div>
                      <div className="ps-5">অনন্য (Upgrading)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-7 position-relative py-5">
                <div className="col-sm-6 col-md-12 py-2">
                  <div className="d-flex flex-column flex-md-row std-identity py-2 align-items-center">
                    <div className="institution-name">উপস্থিতির হার</div>
                    <div className="card border-0 dots py-3">
                      : .........................................%
                    </div>
                  </div>
                  <div className="d-flex std-identity py-2">
                    <div className="institution-name">
                      শ্রেণি শিক্ষকের মন্তব্য
                    </div>
                    <div className="dots"> : </div>
                  </div>
                  <div className="card border-0 dots py-3">
                    ..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
          <div className="col-sm-12 col-md-6 py-3">
            <div className="card p-2 border-dark h-100">
              <div className="d-flex std-identity py-2">
                <div className="institution-name">শিক্ষার্থীর মন্তব্য :</div>
              </div>
              <div>
                <h5>যে কাজটি সবচেয়ে ভালোোভাবে করতে পেরেছি :</h5>
              </div>
              <div className="dots py-3">
                ......................................................................................................................................................................................................................................................................................................................
              </div>
              <div>
                <h5>আরো উন্নতির জন্য যা যা করতে চাই :</h5>
              </div>
              <div className="dots py-3">
                ....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 py-3">
            <div className="card p-2 border-dark h-100">
              <div className="d-flex std-identity py-2">
                <div className="institution-name">অভিভাবকের মন্তব্য :</div>
              </div>
              <div>
                <h5>আমার সন্তান যে কাজটি সবচেয়ে ভালোোভাবে করতে পারে:</h5>
              </div>
              <div className="dots py-3">
                ......................................................................................................................................................................................................................................................................................................................
              </div>
              <div>
                <h5>আমার সন্তানের উন্নয়নে আমি যা করতে পারি:</h5>
              </div>
              <div className="dots py-3">
                .............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="d-flex flex-column flex-md-row justify-content-around">
            <div className=" py-2 py-md-0">
              <p>.............................</p>
              <p>শ্রেণি শিক্ষকের স্বাক্ষর</p>
              <p>তারিখ :</p>
            </div>
            <div className=" py-2 py-md-0">
              <p>.............................</p>
              <p>প্রধান শিক্ষকের স্বাক্ষর</p>
              <p>তারিখ :</p>
            </div>
            <div className=" py-2 py-md-0">
              <p>.............................</p>
              <p>অভিভাবকের স্বাক্ষর</p>
              <p>তারিখ :</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center mt-5">
            <img
              src="/assets/images/Report_page-0006.jpg"
              className="img-fluid w-100"
            />
          </div>
        </div>
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
