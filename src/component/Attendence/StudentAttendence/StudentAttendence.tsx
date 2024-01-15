import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from "react-router-dom";

const StudentAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const initialStudents = [
    { id: 0, name: 'Mehdi Hasan Niloy', date: "", checked: false },
    { id: 1, name: 'Rakesh Roy', date: "", checked: false },
    { id: 2, name: 'Mouni Roy', date: "", checked: true },
    { id: 3, name: 'Nipun Roy', date: "", checked: false },
    { id: 4, name: 'Tamanna Vatiya', date: "", checked: false },
    { id: 5, name: 'Ananiya Pandey', date: "", checked: false },
    { id: 6, name: 'Jhanbi kapoor', date: "", checked: false },

  ];

  const [students, setStudents] = useState(initialStudents);

  const handleCheckboxChange = studentId => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, checked: !student.checked, } : student
      )
    );

    
  };

  const handleSubmitAttendance = (event) => {
    event.preventDefault();
    const formDatas = new FormData(event.target);
    // formDatas.forEach((value, key) => {
    //   const data = `${key}:${value}`;
    //   console.log(data);
    // })

    const form= event.target;
    const date = form.date.value;
    console.log({date});
    
   
  };

  return (
    <div className="container" style={{marginBottom:"200px"}}>


      <form onSubmit={handleSubmitAttendance}>
        <div className="">
          <div className="mb-3" style={{ fontSize: "16px" }}>
            <label className="form-label">তারিখ</label>
            <div className="input-group">
              <DatePicker
                className="form-control"
                placeholderText={"তারিখ"}
                name="date"
                dateFormat="yyyy-MM-dd"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              // readOnly

              />
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">শিক্ষার্থীর রোল</th>
              <th scope="col">শিক্ষার্থীর নাম</th>
              <th scope="col">উপস্থিতি</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="present"
                    // checked={student.checked}
                    // defaultValue={false}
                    // onChange={() => handleCheckboxChange(student.id)}
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
    </div>
  );
};

export default StudentAttendance;
