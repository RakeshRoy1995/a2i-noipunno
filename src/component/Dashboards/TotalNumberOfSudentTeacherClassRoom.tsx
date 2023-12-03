import { useEffect, useState } from 'react';

import "./TotalNumberOfStudent.css"

const TotalNumberOfSudentTeacherClassRoom = () => {
  const [all_student, set_All_student] = useState([]);
  const [loading, setLoadin] = useState(true);
  const student_lsit = async () => {
    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem("own_subjet"));

    if (studentsData) {
      studentsData.data.data.subjects.map((std_data: any) => {
        return std_data.class_room.students.map((stu_data: any) => {
          student.push(stu_data);
        });
      });

      const uniqueObjectsArray = student.filter(
        (obj: any, index: any, self: any) =>
          index === self.findIndex((o: any) => o.uid === obj.uid)
      );
      set_All_student(uniqueObjectsArray);
    }

  };

  const [all_teacher, set_all_teacher] = useState([]);
  const teacher_list = async () => {
    const teachersData = JSON.parse(localStorage.getItem("teacher_dashboard"));
    set_all_teacher(teachersData?.data?.teachers);
  };

  const [total_class, set_Total_class] = useState([]);
  const all_class = async () => {
    const local_storege_data = JSON.parse(
      localStorage.getItem("teacher_dashboard")
    );

    if (local_storege_data?.data?.classes) {
      set_Total_class(local_storege_data?.data?.classes);
      setLoadin(false)
    }


  };


  setTimeout(() => {

    if (loading) {

      // console.log(777777777);

      student_lsit();
      teacher_list();
      all_class();

    }


  }, 1000)


  // useEffect(() => {
  //   student_lsit();
  //   teacher_list();
  //   all_class();
  // }, [loading]);

  return (
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
                <h5>{all_student?.length}</h5>
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
                <h5>{all_teacher?.length}</h5>
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
                <h5>{total_class?.length}</h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TotalNumberOfSudentTeacherClassRoom;