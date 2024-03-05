import Breadcumbtitle from "../layout/Breadcumb";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import techerAvatar from "../assets/project_ca_html/icons/teacher.svg";
import { all_district, all_division, all_upozila, teacher_designation } from "../Request";
import maleTeacherAvatar from "../../src/assets/project_ca_html/teacher_img/male_teacher.png";
import femaleTeacherAvatar from "../../src/assets/project_ca_html/teacher_img/female_teacher.png";
import { motion } from "framer-motion"
import "../styles/profile_picture.css"
import { GiTeacher } from "react-icons/gi";



const AmarProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});
  const [allDivision, setAllDivision] = useState<any>([]);
  const [allDistrict, setAllDistrict] = useState<any>([]);
  const [allUpozila, setAllUpozila] = useState<any>([]);
  const [allDesignation, setAllDesignation] = useState<any>([]);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [designation, setDesignation] = useState<any>('');
  const [signTeacher, setsignTeacher] = useState<any>("");
  const [error, seterror] = useState<any>("");
  const [showSign, setshowSign] = useState<any>(false);


  const {
    name_en,
    name_bn,
    email,
    mobile_no,
    date_of_birth,
    gender,
    division_id,
    district_id,
    upazilla_id,
    designation_id,
    pdsid,
    caid,
    uid,
    image,
    blood_group,
    emergency_contact,
    signature,
    designation: userDesignation,

  } = userDetails;
  console.log(userDetails)
  // const designation_id = "10";
  // image
  const img_base_url = import.meta.env.VITE_REACT_APP_IMAGE_URL

  const getUserDetails = () => {
    const get_teachers_details = JSON.parse(localStorage.getItem("teacher_dashboard"));
    if (get_teachers_details) {
      setuserDetails(get_teachers_details?.data?.teachers[0]);
    }
  }

  const fetchData = async () => {
    const division_data = await all_division();
    const district_data = await all_district();
    const upozila_data = await all_upozila();

    const designation_data_: any = localStorage.getItem("designation_data") || "";
    let designation_data = designation_data_ ? JSON.parse(designation_data_) : "";

    if (designation_data == "") {
      designation_data = await teacher_designation();
      localStorage.setItem("designation_data", designation_data)
    }

    setAllDivision(division_data?.data?.data);
    setAllDistrict(district_data?.data?.data);
    setAllUpozila(upozila_data?.data?.data);
    setAllDesignation(designation_data.data.data);
  };


  const setAllStateData = () => {
    if (designation_id) {
      const find_current_user_designation = allDesignation?.filter(designation => designation?.uid == designation_id)
      find_current_user_designation.map(item => setDesignation(item.designation_name))
    }

    if (division_id) {
      const currentDiv = allDivision.filter(division => division.division_id == division_id)
      currentDiv.map(division => setDivision(division.division_name_bn || division.division_name_en))
    }

    if (district_id) {
      const currentDist = allDistrict.filter(district => district.district_id == district_id)
      currentDist.map(district => setDistrict(district.district_name_bn || district.district_name_en))
    }

    if (upazilla_id) {
      const currentUpa = allUpozila.filter(upazila => upazila.upazila_id === upazilla_id)
      currentUpa.map(upazila => setUpazila(upazila.upazila_name_bn || upazila.upazila_name_en))
    }

  }

  // console.log(designation);



  function uploadImage() {
    const input: any = document.getElementById("imageInput");
    const preview: any = document.getElementById("previewImage");
    seterror("")
    if (input.files && input.files[0]) {

      setshowSign(false)
      const img = new window.Image();

      img.onload = function () {
        const maxSizeKB = 100;
        const maxWidth = 200;
        const maxHeight = 150;

        if (input.files[0].size / 1024 > maxSizeKB) {
          seterror("Failed. Image size exceeds 100 KB limit.")
          return;
        } else if (img.width > maxWidth || img.height > maxHeight) {
          seterror("Failed. Image dimensions exceed maximum width of 200 and maximum height of 150.")

          return;
        } else {
          setshowSign(true)
          alert(
            "Success"
          );
        }
      };

      const reader: any = new FileReader();

      reader.onload = function (e: any) {
        preview.src = e.target.result;
        setsignTeacher(e.target.result);
        console.log(`reader ddd`, reader);
        localStorage.setItem("teacher_sign", reader.result);
      };

      reader.readAsDataURL(input.files[0]);

      // console.log(`reader`, reader);

      img.src = URL.createObjectURL(input.files[0]);
    }
  }

  if (showSign) {
    localStorage.setItem("teacher_sign_show", "true");
  } else {
    localStorage.setItem("teacher_sign_show", "false");
  }

  useEffect(() => {
    fetchData()
    getUserDetails()
    setsignTeacher(localStorage.getItem("teacher_sign"));
  }, []);

  useEffect(() => {
    setAllStateData()
  }, [allDesignation, allDivision])


  return (
    <section className="container mx-auto myProfilePage">
      <Breadcumbtitle title={"আমার প্রোফাইল"} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container  py-3 mx-auto">
          <div className="d-flex align-items-center justify-content-center">
            <div className="card shadow-sm border-1 w-100 rounded">
              <ul className="nav d-flex mt-2 justify-content-around py-1">
                {/* <li className={`nav-item`}>
                  <h4> আমার প্রোফাইল </h4>
                </li> */}
              </ul>

              <div className="container" >

                {/* testing  purpose only */}
                <div className="mt-5 ps-lg-5 w-full d-flex justify-content-center align-item-center  text-sm  mx-auto rounded-bottom" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                  <div className="" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>

                    {/* profile pic div */}
                    <div className="ms-1 rounded-5">

                      <div className="d-flex justify-content-start align-align-items-start">
                        {/* img */}
                        <div className="me-2">
                          <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            {image && <img src={img_base_url + image} alt="teacher-profile" style={{ border: "3px solid black" }} />}
                          </div>
                        </div>


                        <div className="d-flex justify-content-between align-item-start  mb-2">
                          <div className="d-flex flex-column">
                            {/* profile name */}
                            <div className="d-flex align-item-center mb-2 w-100">
                              <h2>{name_bn}</h2>
                            </div>
                            {/* info  email and designation and more will be added in  future*/}
                            <div className="d-flex flex-column flex-wrap fw-semibold fs-6 mb-4 pe-2">
                              <div className="d-flex justify-content-center align-items-center gap-2">
                                <GiTeacher />
                                <p className="text-gray-500 mt-2 me-2 mb-2">{userDesignation}</p>
                              </div>


                              {/* <p className="d-flex align-items-center  me-5 mb-2">{email}</p> */}
                              {/* <p className="d-flex align-items-center text-gray-500 me-5 mb-2">city</p> */}
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>

                    {/* all user details */}
                    <div className="card-title mt-5 ms-5">
                      <h3 className="m-0 ">আমার প্রোফাইল</h3>
                    </div>
                    <div className="profile-body p-5">
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">ইউজার আইডি:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{uid}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">নাম (বাংলা):</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{name_bn}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">নাম (ইংরেজি):</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{name_en}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">ইমেইল:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{email}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">মোবাইল নাম্বার:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{mobile_no}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">জন্ম তারিখ:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{date_of_birth}</span>
                        </div>
                      </div>
                      {gender &&
                        <div className="row mb-3">
                          <label className="col-lg-4 text-muted fw-semibold">লিঙ্গ:</label>

                          <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">{gender === "1" ? "পুরুষ" : (gender === "2" ? "মহিলা" : "অন্যান্য")}</span>
                          </div>
                        </div>
                      }
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">রক্তের গ্রুপ:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{blood_group}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-lg-4 text-muted fw-semibold">জরুরী যোগাযোগের নম্বর:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{emergency_contact}</span>
                        </div>
                      </div>
                      {/* <div className="row mb-5">
                        <label className="col-lg-4 text-muted fw-semibold">রক্তের গ্রুপ:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{}</span>
                        </div>
                      </div> */}
                      {/* <div className="row mb-5">
                        <label className="col-lg-4 text-muted fw-semibold">রক্তের গ্রুপ:</label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">{blood_group}</span>
                        </div>
                      </div> */}
                    </div>


                    {/*edit profile  button  */}
                    <div className="d-flex justify-content-center justify-content-lg-end  align-items-center py-3 pe-5">
                      <Link to={"/edit-teacher-profile"}>
                        <button
                          type="submit"
                          className="btn btn-primary px-3 hover-effect"
                          style={{ backgroundColor: "#428F92", color: "#fff" }}
                        >
                          {" "}
                          প্রোফাইল হালনাগাদ{" "}
                          <MdOutlineKeyboardArrowRight
                            className="fs-3"
                            style={{ marginTop: "-0.3rem" }}
                          />{" "}
                        </button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AmarProfile;
