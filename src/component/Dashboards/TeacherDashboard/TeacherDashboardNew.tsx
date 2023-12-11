import "../../../styles/total_student_teacher_classroom_for_teacher_dashboard.css";

import edit2 from "../../../assets/project_ca_html/images/dashboard/edit-2.svg";
import six60px from "../../../assets/project_ca_html/images/dashboard/60px.png";
import ico from "../../../assets/project_ca_html/images/dashboard/ico.svg";
import message from "../../../assets/project_ca_html/images/dashboard/message.svg";
import moon from "../../../assets/project_ca_html/images/dashboard/moon.svg";
import eye from "../../../assets/project_ca_html/images/dashboard/eye.svg";
import chart from "../../../assets/project_ca_html/images/dashboard/Chart.png";
import dotsVertical from "../../../assets/project_ca_html/images/dashboard/dots-vertical.svg";
import alertico from "../../../assets/project_ca_html/images/dashboard/alertico.png";
import infoCircle from "../../../assets/project_ca_html/images/dashboard/info-circle.png";
import ico2 from "../../../assets/project_ca_html/images/dashboard/ico2.svg";
import arrowRight from "../../../assets/project_ca_html/images/dashboard/arrow-right.svg";
import arrowRight2 from "../../../assets/project_ca_html/images/dashboard/arrow-right2.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const TeacherDashboardNew = () => {

  const [teacherInfos, setTeacherInfos] = useState<any>({});
  const [schoolName, setSchoolName] = useState<any>("");
  const [all_student, set_All_student] = useState([]);
  const [loading, setLoadin] = useState(true);
  const [all_teacher, set_all_teacher] = useState([]);
  const [total_class, set_Total_class] = useState([]);

  const teacherDashboard = JSON.parse(
    localStorage.getItem("teacher_dashboard")
  );

  setTimeout(() => {
    if (loading) {
      const items = JSON.parse(localStorage.getItem("customer_login_auth"));
      if (items) {
        setTeacherInfos(items?.user);
      }
      if (teacherDashboard) {
        teacherDashboard?.data?.institute?.map((item) =>
          setSchoolName(item.institute_name)
        );
        setloading(false);
      }
    }
  }, 1000);


  const student_lsit = async () => {
    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem("own_subjet"));
    const local_storege_data = JSON.parse(
      localStorage.getItem("teacher_dashboard")
    );

    let obj: any = {};
    let app_PI: any = [];

    if (studentsData && local_storege_data) {
      studentsData.data.data.subjects.map((std_data: any) => {
        obj = {
          ...obj,
          [std_data.class_room.class_teacher.uid]:
            std_data.class_room.class_teacher.uid,
        };

        std_data.competence.map((conpitance_data: any) => {
          conpitance_data.pis.map((data: any) => {
            app_PI.push(data)
          })
        });

        return std_data.class_room.students.map((stu_data: any) => {
          student.push(stu_data);
        });
      });

      const uniqueObjectsArray = student.filter(
        (obj: any, index: any, self: any) =>
          index === self.findIndex((o: any) => o.uid === obj.uid)
      );
      set_All_student(uniqueObjectsArray);

      localStorage.setItem("all_students", JSON.stringify(uniqueObjectsArray));
      localStorage.setItem("our_all_pi", JSON.stringify(app_PI));

      if (local_storege_data?.data?.classes) {
        set_Total_class(local_storege_data?.data?.classes);
        const all_teachers_list = teacher_list()
        set_all_teacher(all_teachers_list);
        setLoadin(false);
      }

    }
  };

  setInterval(() => {
    if (loading) {
      student_lsit();
    }
  }, 4000);


  return (
    // < !--student - chart-- >
    <section className="container my-3">
      <div className="card-container">
        <div className="row g-3 ">
          <div className="col-lg-3 col-xl-2 col-md-6">
            <div className="card teacher-profile border-0">
              <div className="card-header border-0">
                <Link to={"/edit-teacher-profile"}>
                  <div className="edit-icon">
                    <img src={edit2} alt="edit-icon" />
                  </div>
                </Link>
                <div className="profile-img">
                  <img src={six60px} alt="60px" />
                </div>
                <div className="teacher-title">
                  <h2>
                    {
                      (teacherInfos?.user_type_id == 1 && "শিক্ষক") ||
                      (teacherInfos?.user_type_id == 2 && "সহকারী শিক্ষক") ||
                      (teacherInfos?.user_type_id == 3 && "প্রধান শিক্ষক")
                    }
                  </h2>
                </div>
                <div className="icon">
                  <div className="single-icon">
                    <img src={ico} alt="six60px" />
                  </div>
                  <div className="single-icon">
                    <img src={message} alt="message" />
                  </div>
                  <div className="single-icon">
                    <img src={moon} alt="moon" />
                  </div>
                </div>
              </div>
              <div className="teacher-info">
                <h2 className="card-title">{teacherInfos?.name}</h2>
                <p className="card-text">{teacherInfos?.pdsid || teacherInfos?.caid}</p>
                <p className="card-text">{schoolName}</p>
                <div className="button">
                  <img src={eye} alt="moon" />
                  <Link to={"/teacher-profile"}>আমার প্রোফাইল</Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-6 col-xl-5  col-md-6">
            <div className="student-chart">
              <div className="header">
                <h3>শিক্ষার্থীর হাজিরা</h3>
                <div className="timeline">
                  <h4>টাইমলাইন</h4>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">সাপ্তাহিক </option>
                    <option value={1}>মাসিক</option>
                    <option value={2}>বছর</option>
                  </select>
                </div>
                <div className="all">
                  <h4>ক্লাস অনুসারে ফিল্টার</h4>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">সব</option>
                    <option value={2}>দিন</option>
                    <option value={3}>মাসিক</option>
                  </select>
                </div>
              </div>
              <div className="chart">
                <img src={chart} alt="" />
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-3  col-xl-2  col-md-6 ">
            <div className="all-teacher-student-card gy-5">
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শিক্ষার্থী</span>
                      </h3>
                      <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                    </div>
                    <div className="circle">
                      <h5>৯২৩</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শিক্ষার্থী</span>
                      </h3>
                      <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                    </div>
                    <div className="circle">
                      <h5>৯২৩</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শিক্ষার্থী</span>
                      </h3>
                      <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                    </div>
                    <div className="circle">
                      <h5>৯২৩</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শিক্ষার্থী</span>
                      </h3>
                      <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                    </div>
                    <div className="circle">
                      <h5>৯২৩</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div> */}

          <div className="col-lg-2 col-md-6 ">
            <div className="teacher-student-card gy-5">
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শিক্ষার্থী</span>
                      </h3>
                      <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                    </div>
                    <div className="circle">
                      <h5>{"00"}</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শিক্ষক</span>
                      </h3>
                      <h6>আপনার স্কুল এ</h6>
                    </div>
                    <div className="circle">
                      <h5>{"00"}</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card-container">
                  <div className="total-student">
                    <div className="title">
                      <h3>
                        সর্বমোট
                        <br />
                        <span>শ্রেণী কক্ষ</span>
                      </h3>
                      <h6>আপনার স্কুল এ</h6>
                    </div>
                    <div className="circle">
                      <h5>{"00"}</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>


          {/* <div className="col-md-6 d-none  col-xl-3 d-xl-block">
            <div className="request-container">
              <div className="header">
                <div className="title">
                  <h5 className="request">অনুরোধ</h5>
                  <img src={dotsVertical} alt="dotsVertical" />
                </div>
                <p className="request_paragraph">
                  বিষয়গুলি আপনার পর্যালোচনা করা দরকার
                </p>
              </div>
              <div className="tab-bar">
                <ul className="nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="apply-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#apply"
                    >
                      <img src={alertico} alt="" />
                      <h2>আবেদন</h2>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="notice-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#notice"
                    >
                      <img src={infoCircle} alt="infoCircle" />
                      <h2>বিজ্ঞপ্তি</h2>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="tab-content" id="tabContent">
                <div
                  className="tab-pane fade show active"
                  id="apply"
                  role="tabpanel"
                  aria-labelledby="apply-tab"
                >
                  <div className="tab-container">
                    <a href="#">
                      <div className="heading">
                        <div className="icon">
                          <img
                            src={ico2}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                      </div>
                      <div className="teachers">
                        <h3>সামিনা চৌধুরী</h3>
                        <h3>|</h3>
                        <h3>সহকারী শিক্ষক</h3>
                      </div>
                      <div className="class-section">
                        <div className="class-day-section">
                          <h6>ষষ্ঠ শ্রেণী</h6>
                          <h6>Day</h6>
                          <h6>Section A</h6>
                        </div>
                        <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                      </div>
                    </a>
                  </div>
                  <div className="tab-container">
                    <a href="#">
                      <div className="heading">
                        <div className="icon">
                          <img
                            src={arrowRight2}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <h2>বিষয় পরিবর্তনের অনুরোধ করেছেন</h2>
                      </div>
                      <div className="teachers">
                        <h3>সামিনা চৌধুরী</h3>
                        <h3>|</h3>
                        <h3>সহকারী শিক্ষক</h3>
                      </div>
                      <div className="class-section">
                        <div className="class-day-section">
                          <h6>ষষ্ঠ শ্রেণী</h6>
                          <h6>Day</h6>
                          <h6>Section A</h6>
                        </div>
                        <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                      </div>
                    </a>
                  </div>
                  <div className="tab-container">
                    <a href="#">
                      <div className="heading">
                        <div className="icon">
                          <img
                            src={ico2}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                      </div>
                    </a>
                  </div>
                  <div className="button">
                    <a>সব অনুরোধগুলি দেখুন</a>
                    <img src={arrowRight} alt="arrowRight" />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="notice"
                  role="tabpanel"
                  aria-labelledby="notice-tab"
                >
                  <div className="tab-container">
                    <a href="#">
                      <div className="heading">
                        <div className="icon">
                          <img
                            src={ico2}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                      </div>
                      <div className="teachers">
                        <h3>সামিনা চৌধুরী</h3>
                        <h3>|</h3>
                        <h3>সহকারী শিক্ষক</h3>
                      </div>
                      <div className="class-section">
                        <div className="class-day-section">
                          <h6>ষষ্ঠ শ্রেণী</h6>
                          <h6>Day</h6>
                          <h6>Section A</h6>
                        </div>
                        <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                      </div>
                    </a>
                  </div>
                  <div className="tab-container">
                    <a href="#">
                      <div className="heading">
                        <div className="icon">
                          <img
                            src={arrowRight2}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <h2>বিষয় পরিবর্তনের অনুরোধ করেছেন</h2>
                      </div>
                      <div className="teachers">
                        <h3>সামিনা চৌধুরী</h3>
                        <h3>|</h3>
                        <h3>সহকারী শিক্ষক</h3>
                      </div>
                      <div className="class-section">
                        <div className="class-day-section">
                          <h6>ষষ্ঠ শ্রেণী</h6>
                          <h6>Day</h6>
                          <h6>Section A</h6>
                        </div>
                        <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                      </div>
                    </a>
                  </div>
                  <div className="tab-container">
                    <a href="#">
                      <div className="heading">
                        <div className="icon">
                          <img
                            src={arrowRight2}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                      </div>
                    </a>
                  </div>
                  <div className="button">
                    <a>সব অনুরোধগুলি দেখুন</a>
                    <img src={arrowRight} alt="arrowRight" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>

  );
};

export default TeacherDashboardNew;