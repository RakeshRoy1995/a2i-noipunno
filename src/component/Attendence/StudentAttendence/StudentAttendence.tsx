import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from "react-router-dom";
import { class_room_info, class_teacher_all_student_data } from "../../../Request";
import moment from 'moment';
import { Breadcrumb } from "react-bootstrap";
import BreadcumbHome from "../../../layout/BreadcumbHome";
import Breadcumbtitle from "../../../layout/Breadcumb";
import { convertToBanglaNumber } from "../../../utils/Utils";

const StudentAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = moment(selectedDate).format('YYYY-MM-DD');
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [classTeacherInfos, setClassTeacherInfos] = useState({});
  const [classRoomInfos, setClassRoomInfos] = useState<any>({});
  const [classRoomId, setClassRoomId] = useState('');



  const fetchData = async () => {
    const class_teacher_all_student = await class_teacher_all_student_data()
    setStudents(class_teacher_all_student?.data?.data?.students[0]?.students)
    // console.log("class_teacher", class_teacher_all_student?.data?.data?.students[0]);
    setClassTeacherInfos(class_teacher_all_student?.data?.data?.students[0])


    const class_room_infos = await class_room_info()
    // console.log("class_room_info", class_room_infos?.data?.data?.subjects);
    setClassRoomInfos(class_room_infos?.data?.data?.subjects);


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
    const datas = {
      ...attendance, class_room_id: classRoomId, date,
    };
    console.log(datas);

  };


  useEffect(() => {
    fetchData()
  }, [])


  useEffect(() => {

    // classRoomInfos?.forEach((item) => {
    //   const branch_id = item?.class_room?.branch_id;
    //   const class_id = item?.class_room?.class_id;
    //   const class_teacher_id = item?.class_room?.class_teacher_id;
    //   const section_id = item?.class_room?.section_id;
    //   const shift_id = item?.class_room?.shift_id;
    //   const version_id = item?.class_room?.version_id;

    //   if (
    //     classTeacherInfos?.branch_id === branch_id &&
    //     classTeacherInfos?.class_id === class_id &&
    //     classTeacherInfos?.class_teacher_id === class_teacher_id &&
    //     classTeacherInfos?.section_id === section_id &&
    //     classTeacherInfos?.shift_id === shift_id &&
    //     classTeacherInfos?.version_id === version_id
    //   ) {

    //     // console.log(item);
    //     // console.log(item?.class_room_id);
    //     setClassRoomId(item?.class_room_id);
    //   }
    // })

  }, [classTeacherInfos, classRoomInfos]);




  const [number, setNumber] = useState(0)
  const hadleChange = (event) => {
    event.preventDefault()
    const number = event.target.value;
    const result = convertToBanglaNumber(number)
    setNumber(result)
  }




  return (
    <>
      <Breadcumbtitle title={"শিক্ষার্থীর হাজিরা"} />

      {/* <h3 className="container my-4 text-center"> {(classTeacherInfos?.class_id == 6) && "ষষ্ঠ" || (classTeacherInfos?.class_id == 6) && "সপ্তম"} শ্রেণির হাজিরা </h3> */}

      <form className="container">
        <div className="form-group  col-sm-4 col-md-6">
          <div className="mb-3" style={{ fontSize: "16px" }}>
            <label className="form-label">নাম্বারঃ {number}</label>
            <div className="input-group">
              <input type="text" id="pin" className="form-control"
                // readOnly
                name="number"
                placeholder="নাম্বার দিন"
                onChange={hadleChange}
              />
            </div>
          </div>
        </div>
      </form>

      <section className="container" style={{ marginBottom: "200px" }}>
        <div className="my-1 d-flex flex-column justify-content-center" style={{ fontSize: "16px", }}>
          <label>তারিখ</label>
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

        <form onSubmit={handleSubmitAttendance}>
          <table className="table ">
            <thead>
              <tr >
                <th scope="col" className="text-center">শিক্ষার্থীর রোল</th>
                <th scope="col">শিক্ষার্থীর নাম</th>
                <th scope="col" className="text-center">উপস্থিতি</th>
              </tr>
            </thead>
            <tbody>

              {students?.map((student, key) => (
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
    </>
  );
};

export default StudentAttendance;
