import { useEffect, useState } from "react";
// import "../../assets/dashboard_materials/css/dashboard.css";
import { Link } from "react-router-dom";
import editIcon from "../../assets/dashboard_materials/images/dashboard/edit-2.svg";

import teacherProfileImg from "../../assets/dashboard_materials/images/dashboard/60px.png";
import femaleProfileImg from "../../assets/dashboard_materials/images/dashboard/female_teacher.png";

import starIcon from "../../assets/dashboard_materials/images/dashboard/ico.svg";
import messageIcon from "../../assets/dashboard_materials/images/dashboard/message.svg";
import darkMoodIcon from "../../assets/dashboard_materials/images/dashboard/moon.svg";
import eyeIcon from "../../assets/dashboard_materials/images/dashboard/eye.svg";
import { teacher_designation } from "../../Request";
// import { logged_teacher_details } from "../../utils/Utils";



const TeacherProfileCard = () => {
  const [schoolName, setSchoolName] = useState<any>("");
  const [allDesignation, setAllDesignation] = useState<any>([])
  const [teacherDesignation, setTeacherDesignation] = useState('');
  const [teacher_details, setTeacher_details] = useState({});
  const [isClassTeacher, setIsClassTeacher] = useState(false)
  const [loading, setLoadin] = useState(true);

  const {
    name_en,
    name_bn,
    gender,
    designation_id,
    pdsid,
    caid,
    image
  }: any = teacher_details;

  const img_base_url = import.meta.env.VITE_REACT_APP_IMAGE_URL

  const getUserDetails = () => {
    const get_teachers_details = JSON.parse(localStorage.getItem("teacher_dashboard"));
    if (get_teachers_details) {
      setTeacher_details(get_teachers_details?.data?.teachers[0]);

      get_teachers_details?.data?.institute?.map((item) =>
        setSchoolName(item.institute_name)
      );

      const isClassTeacherValid = get_teachers_details?.data?.teachers[0]?.is_class_teacher;
      if (isClassTeacherValid) {
        setIsClassTeacher(true)
      }

      setLoadin(false)
    }
  }


  const setAllStateData = () => {
    if (designation_id) {
      const find_current_user_designation = allDesignation?.filter(designation => designation?.uid == designation_id)
      find_current_user_designation.map(item => setTeacherDesignation(item.designation_name))
    }
  }

  useEffect(() => {
    setAllStateData()
  }, [allDesignation])


  setInterval(() => {
    if (loading) {
      getUserDetails()
    }
  }, 500);

  // // console.log(image);

  return (
    <div className="col-lg-3 col-md-3">
      <div className="card teacher-profile border-0">
        <div className="card-header border-0">
          <Link to={"/edit-teacher-profile"}>
            <div className="edit-icon">
              <img src={editIcon} alt="edit-icon" />
            </div>
          </Link>

          <div className="profile-img">
            {image && <img src={img_base_url + image} alt="teacher-profile" />}
          </div>

          <div className="teacher-title">
            <h2>
              {/* {teacherDesignation} */}
              {isClassTeacher && "শ্রেণি "}
              শিক্ষক
            </h2>
          </div>
          <div className="icon">
            <div className="single-icon">
              <img src={starIcon} alt="starIcon" />
            </div>
            <div className="single-icon">
              <img src={messageIcon} alt="messageIcon" />
            </div>
            <div className="single-icon">
              <img src={darkMoodIcon} alt="darkMoodIcon" />
            </div>
          </div>
        </div>
        <div className="teacher-info">
          <h2 className="card-title text-two-line" style={{lineHeight:"2"}} >
            {name_bn || name_en || ''}
          </h2>
          <p className="card-text">
            {pdsid || caid}
          </p>
          {/* <p className="card-text">পাবনা জিলা স্কুল, পাবনা</p> */}
          <p className="card-text text-center" >{schoolName}</p>

          <div className="button">
            <img src={eyeIcon} alt="eyeIcon" />
            <Link to={"/teacher-profile"}>আমার প্রোফাইল</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileCard;
