import { useState } from "react";
import "../../assets/dashboard_materials/css/total_student_teacher_classroom_for_teacher_dashboard.css";
import {
  showReportDeleteEv,
  show_report_OFF_time_msg,
  show_report_open_time_msg,
  teacher_list,
} from "../../utils/Utils";

const Total_Student_Teacher_ClassRoom_for_TeacherDashboard = () => {
  const [all_student, set_All_student] = useState([]);
  const [loading, setLoadin] = useState(true);
  const [all_teacher, set_all_teacher] = useState([]);
  const [total_class, set_Total_class] = useState([]);

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
            app_PI.push(data);
          });
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
        const all_teachers_list = teacher_list();
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
    <>
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
                  <h5>{all_student?.length || "00"}</h5>
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
                    <span>বিষয় </span>
                  </h3>
                  {/* <h6>আপনার স্কুল এ</h6> */}
                </div>
                <div className="circle">
                  <h5>{all_teacher?.length || "00"}</h5>
                </div>
              </div>
            </div>
          </a>
          {/* <a href="#">
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
                <h5>{total_class?.length || "00"}</h5>
              </div>
            </div>
          </div>
        </a> */}
        </div>
      </div>

      <div className="col-lg-7 col-md-6 ">
        <div className="teacher-student-card gy-5 text-center">
          <div className="card">
            {showReportDeleteEv() ? (
              <div className="card-body">
                <div className="text-center">
                  {
                    show_report_OFF_time_msg
                  }
                </div>
              </div>
            ) : (
              <div className="card-body">
                <div className="text-center">{show_report_open_time_msg}</div>
              </div>
            )}
            <p className="card-body">
              শিক্ষার্থী মূল্যায়ন জমা দিতে নৈপুণ্য মোবাইল অ্যাপ ব্যবহার করুন।
              মোবাইল অ্যাপ ডাউনলোড করুন এই লিঙ্ক থেকে
            </p>
            <p className="card-body">
              <a
                href="https://eklink.click/noipunno-android-app"
                download=""
                target="_blank"
              >
                <img
                  height="40px"
                  src="https://evaluation.noipunno.gov.bd/playstore.png"
                />
              </a>
              <a
                href="https://accounts.noipunno.gov.bd/app/noipunno.apk"
                download=""
              >
                <img
                  height="40px"
                  src="https://accounts.noipunno.gov.bd/images/play-store-logo.png"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total_Student_Teacher_ClassRoom_for_TeacherDashboard;
