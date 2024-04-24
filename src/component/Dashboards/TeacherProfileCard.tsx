import { useEffect, useState } from "react";
// import "../../assets/dashboard_materials/css/dashboard.css";
import { Link } from "react-router-dom";
import editIcon from "../../assets/dashboard_materials/images/dashboard/edit-2.svg";

import { motion } from "framer-motion";
import starIcon from "../../assets/dashboard_materials/images/dashboard/ico.svg";
import messageIcon from "../../assets/dashboard_materials/images/dashboard/message.svg";
import darkMoodIcon from "../../assets/dashboard_materials/images/dashboard/moon.svg";
import eyeIcon from "../../assets/dashboard_materials/images/dashboard/eye.svg";
// import { teacher_designation } from "../../Request";
// import { logged_teacher_details } from "../../utils/Utils";
import DefaultPicture from "../../../public/assets/images/User-avatar.png"


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
    designation,
    pdsid,
    caid,
    image,
    eiin
  }: any = teacher_details;

  // console.log(teacher_details);
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
useEffect(()=>{
const intervalId= setInterval(() => {
  if (loading) {
    getUserDetails()
  }
}, 500);
return () => clearInterval(intervalId);
},[])


  // console.log(image);

  return (
    <div className="col-lg-3 col-md-3">

<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="card teacher-profile border-0">
        <div className="card-header border-0">
          <Link to={"/edit-teacher-profile"}>
            <div className="edit-icon">
              <img src={editIcon} alt="edit-icon" />
            </div>
          </Link>

          <div className="profile-img">
            {image ? (
              <img src={img_base_url + image} alt="teacher-profile" />
            ) : (
              <img src={DefaultPicture} alt="default-profile" />
              // <img src="../../../public/assets/images/user_avatar/teacher.png" alt="default-profile" />
            )}

          </div>
          {/* teacher designation */}
          <div className="teacher-title">
            <h2 style={{ color: "black" }}>
              {/* {teacherDesignation} */}
              {/* {isClassTeacher && "শ্রেণি "}
              শিক্ষক */}
              {designation ? `${designation}` : "শ্রেণি শিক্ষক"} 
              { }
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
          <div className="card-title text-two-line" style={{ lineHeight: "2"}}>
            {name_bn || name_en || ''} 
          </div>
          <div className="card-text" style={{ fontSize: "14px ", color: "##555555" }}>
            {pdsid || caid}
          </div>
          <div className="card-text text-center mt-2" style={{ fontSize: "14px", color: "#555555" }}>{schoolName} ({eiin})</div>



          <Link className="d-flex justify-content-center align-align-items-center" to={"/teacher-profile"}>
            <div className="button  " style={{ cursor: "pointer", color: "#000" }}>
              <img src={eyeIcon} alt="eyeIcon" />
              আমার প্রোফাইল
            </div>
          </Link>

        </div>
      </div>

      </motion.div>
    </div>
  );
};

export default TeacherProfileCard;
