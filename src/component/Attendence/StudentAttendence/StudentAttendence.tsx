import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from "react-router-dom";
import { class_teacher_all_student_data } from "../../../Request";
import moment from 'moment';

const StudentAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = moment(selectedDate).format('YYYY-MM-DD');
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});


  const fetchData = async () => {
    const class_teacher_all_student = await class_teacher_all_student_data()
    setStudents(class_teacher_all_student?.data?.data?.students[0]?.students)
    console.log("class_teacher", class_teacher_all_student?.data?.data?.students[0]?.students);

  }

  
  const handleCheckboxChange = (studentId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: !prevAttendance[studentId], 
    }));
   

  };

  const handleSubmitAttendance = (event) => {
    event.preventDefault();
    // console.log(attendance);
    const datas = { ...attendance,  date };
    console.log(datas);
    
  };


  useEffect(() => {
    fetchData()
  }, [])


  return (
    <section className="container" style={{ marginBottom: "200px" }}>

      <div className="mb-2" style={{ fontSize: "16px" }}>
        <label className="form-label">তারিখ</label>
        <div className="input-group">
          <DatePicker
            className="form-control"
            placeholderText={"তারিখ"}
            dateFormat="yyyy-MM-dd"
            name="date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          // readOnly
          />
        </div>
      </div>

      <form  onSubmit={handleSubmitAttendance}>
  
        <table className="table ">
          <thead>
            <tr >
              <th scope="col" className="text-center">শিক্ষার্থীর রোল</th>
              <th scope="col">শিক্ষার্থীর নাম</th>
              <th scope="col" className="text-center">উপস্থিতি</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student,key) => (
              <tr key={key}>
                <th scope="row" className="text-center" >{student?.roll}</th>
                <td>{student?.student_name_bn || student?.student_name_en}</td>
                <td className="text-center">
                  <input
                    style={{ height: "10px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}
                    className="form-check-input "
                    type="checkbox"
                    name={`attendance-${student?.id}`}
                    onChange={() => handleCheckboxChange(student?.uid)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end align-items-center pt-1 pe-3">
          <button
            type="submit"
            className="btn btn-primay px-5"
            style={{ backgroundColor: "#428F92", color: "#fff" }}
          >
            জমা দিন <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem" }} />
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudentAttendance;
