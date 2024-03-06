import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useId, useState } from "react";
import { all_district, all_division, all_upozila, teacher_dashboard, teacher_designation, update_teacher_profile } from "../Request";
import Breadcumbtitle from "../layout/Breadcumb";
import Swal from "sweetalert2";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { convertToBanglaNumber } from "../utils/Utils";
import image_upload_icon from "../../src/assets/images/image-upload-icon/Image-upload-icon.jpg";
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';
import { motion } from "framer-motion"
import "../styles/DatePicker.css"

const EditTeacherProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});
  const [allDivision, setAllDivision] = useState<any>([]);
  const [allDistrict, setAllDistrict] = useState<any>([]);
  const [allUpozila, setAllUpozila] = useState<any>([]);
  const [allDesignation, setAllDesignation] = useState<any>([]);
  const [teacherDesignation, seTeacherDesignation] = useState<any>('(Not Assign)');
  const [district, setdistrict] = useState<any>([]);
  const [upozila, setupozila] = useState<any>([]);
  const [countdown, setCountdown] = useState(30);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedJoiningDate, setSelectedJoiningDate] = useState(new Date())

  // default img test
  // const image_upload_icon =  "../assets/images/image-upload-icon/preview-65.png";


  const [nameBn, setNameBn] = useState('');
  const [isBanglaValid, setIsBanglaValid] = useState(true);

  const [nameEn, setNameEn] = useState('');
  const [isEnglishValid, setisEnglishValid] = useState(true);



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
    image,
    signature,
    nid,
    emergency_contact,
    blood_group,
    uid

  } = userDetails;
  console.log(userDetails);

  // const dpesignation_id = "10";

  const getUserDetails = () => {
    const get_teachers_details = JSON.parse(localStorage.getItem("teacher_dashboard"));
    if (get_teachers_details) {
      // console.log("userDetaisl", get_teachers_details?.data?.teachers[0]);

      setuserDetails(get_teachers_details?.data?.teachers[0]);
    }
  }

  const fetchData = async () => {
    const division_data = await all_division();
    const district_data = await all_district();
    const upozila_data = await all_upozila();
    const designation_data = await teacher_designation();
    setAllDivision(division_data?.data?.data);
    setAllDistrict(district_data?.data?.data);
    setAllUpozila(upozila_data?.data?.data);
    setAllDesignation(designation_data.data.data);
  };


  const getdistrictBydivisionID = id => {
    const divisionWiseDistric = allDistrict.filter(district => district.division_id == id)
    setdistrict(divisionWiseDistric)
  }

  const getDivisionByDistrictId = id => {
    const zilawiseUpazila = allUpozila.filter(upozila => upozila.district_id == id)
    setupozila(zilawiseUpazila)
  }

  const setAllStateData = () => {
    if (division_id) {
      const getAssignedDistrict = allDistrict.filter(district => district.district_id == district_id)
      setdistrict(getAssignedDistrict)
    }

    if (date_of_birth) {
      setSelectedDate(new Date(date_of_birth))
    }

    if (name_bn) {
      setNameBn(name_bn);
    }

    if (name_en) {
      setNameEn(name_en)
    }

    if (designation_id) {
      const find_current_user_designation = allDesignation?.filter(designation => designation?.uid == designation_id)
      find_current_user_designation.map(item => seTeacherDesignation(item.designation_name))
    }
  }

  // // console.log(teacherDesignation);




  const handleTeacherProfileEdit = async (event: any) => {
    event.preventDefault()
    const formDatas = new FormData(event.target);

    try {
      const { data }: any = await update_teacher_profile(caid, formDatas);
      if (data.status === true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "আপনার একাউন্টটি সফলভাবে হালনাগাদ হয়েছে!",
          showConfirmButton: false,
          timer: 1500
        })

        const data_dash: any = await teacher_dashboard();
        localStorage.setItem("teacher_dashboard", JSON.stringify(data_dash.data));

        // setTimeout(() => {
        //   window.location.replace("/");
        // }, 900)

      }

    } catch (error) {

      // alert('হালনাগাদ সম্পন্ন হয়নি, আবার চেষ্টা করুন!');
      Swal.fire({
        icon: "error",
        title: "হালনাগাদ সম্পন্ন হয়নি!",
        text: "আবার চেষ্টা করুন!",
        confirmButtonText: "হ্যাঁ",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }

  useEffect(() => {
    fetchData();
    getUserDetails();
  }, []);

  useEffect(() => {
    setAllStateData()
  }, [designation_id, allDesignation, date_of_birth, name_bn, name_en])


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown(prevCountdown => (prevCountdown > 0 ? prevCountdown - 1 : 0));
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // if ((allDivision.length == 0) && (countdown == 0)) {
  //   window.location.replace("/");
  // }



  const handleBanglaInputValidate = (event) => {
    const inputValue = event.target.value;

    // Regular expression to check if the input contains Bangla characters
    const banglaRegex = /^[\u0980-\u09FF\s]+$/;

    if (banglaRegex.test(inputValue) || inputValue === '') {
      setNameBn(inputValue);
      setIsBanglaValid(true);
    } else {
      setIsBanglaValid(false);
    }
  };



  const handleEnglishInputValidate = (event) => {
    const inputValue = event.target.value;

    // Regular expression to check if the input contains Bangla characters
    const englishPattern = /^[a-zA-Z\s]*$/;

    if (englishPattern.test(inputValue) || inputValue === '') {
      setNameEn(inputValue);
      setisEnglishValid(true);
    } else {
      setisEnglishValid(false);
    }
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('ছবির  ২০০ KB এবং (৩০০ X ৩০০) পিক্সেলের হতে হবে!');

  // image change
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {

  //     // Check file size
  //     if (file.size > 100 * 1024) {
  //       setWarningMessage('');
  //       setErrorMessage('ছবির আকার ১০০ কিলোবাইট অতিক্রম করেছে, ছবির আকার ১০০ কিলোবাইটের (KB) ভিতর হতে হবে!');
  //       return;
  //     }

  //     // Create an image element to get the image dimensions
  //     const img = new Image();
  //     img.onload = () => {
  //       // Check image dimensions
  //       if (img.width > 300 || img.height > 300) {
  //         setWarningMessage('');
  //         setErrorMessage('ছবির প্রস্থ-উচ্চতা ৩০০X৩০০ পিক্সেল অতিক্রম করেছে, ছবির প্রস্থ-উচ্চতা ৩০০X৩০০ পিক্সেলের (PX) ভিতর হতে হবে!');
  //         return;
  //       }

  //       // If both size and dimensions are within limits, set the image preview
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImagePreview(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //       setErrorMessage('');
  //       setWarningMessage('');
  //     };
  //     img.src = URL.createObjectURL(file);
  //   } else {
  //     // Set default image when no file is selected
  //     setImagePreview(image_upload_icon); // Change 'image_upload_icon' to the actual path of your default image
  //     setErrorMessage('');
  //     setWarningMessage('');
  //   }
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
        setWarningMessage('');
        setErrorMessage('ছবিতে কেবলমাত্র JPEG এবং PNG ফরম্যাট অনুমোদিত রয়েছে।');
        return;
      }

      // Check file size
      if (file.size > 100 * 1024) {
        setWarningMessage('');
        setErrorMessage('ছবি ১০০ কিলোবাইট অতিক্রম করেছে, ছবির  ১০০ (KB) ভিতর হতে হবে!');
        return;
      }

      // Create an image element to get the image dimensions
      const img = new Image();
      img.onload = () => {
        // Check image dimensions
        if (img.width > 300 || img.height > 300) {
          setWarningMessage('');
          setErrorMessage('ছবির ৩০০X৩০০ পিক্সেল অতিক্রম করেছে, ছবির ৩০০X৩০০ (PX) ভিতর হতে হবে!');
          return;
        }

        // If both size and dimensions are within limits, set the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        setErrorMessage('');
        setWarningMessage('');
      };
      img.src = URL.createObjectURL(file);
    } else {
      // Set default image when no file is selected
      setImagePreview(image_upload_icon); // Change 'image_upload_icon' to the actual path of your default image
      setErrorMessage('');
      setWarningMessage('');
    }
  };


  // signature
  const [signaturePreview, setsSignaturePreview] = useState(null);
  const [signatureErrorMessage, setSignatureErrorMessage] = useState('');
  const [signatureWarningMessage, setSignatureWarningMessage] = useState('স্বাক্ষর ছবি ২০০ KB এবং দৈর্ঘ-প্রস্থ (৩০০ X ৩০০)  হতে হবে!');

  const handleSignatureImg = (e) => {
    const file = e.target.files[0];
    if (file) {

      // Check file size
      if (file.size > 100 * 1024) {
        setSignatureWarningMessage('');
        setSignatureErrorMessage('সিগ্নেচার ছবি ১০০ KB অতিক্রম করেছে, ছবির আকার ১০০ (KB) ভিতর হতে হবে!');
        return;
      }

      // Create an image element to get the image dimensions
      const img = new Image();
      img.onload = () => {
        // Check image dimensions
        if (img.width > 300 || img.height > 300) {
          setSignatureWarningMessage('');
          setSignatureErrorMessage('সিগ্নেচার ছবি ৩০০X৩০০ (PX) অতিক্রম করেছে, ছবি ৩০০X৩০০ (PX) ভিতর হতে হবে!');
          return;
        }

        // If both size and dimensions are within limits, set the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setsSignaturePreview(reader.result);
        };
        reader.readAsDataURL(file);
        setSignatureErrorMessage('');
        setSignatureWarningMessage('');
      };
      img.src = URL.createObjectURL(file);
    } else {
      setsSignaturePreview(image_upload_icon);
      setSignatureErrorMessage('');
      setSignatureWarningMessage('');
    }
  };


  const img_base_url = import.meta.env.VITE_REACT_APP_IMAGE_URL

  // tooltip  for signature field
  useEffect(() => {
    const elementWithDataTooltip = document.querySelectorAll('[data-tooltip ]');
    elementWithDataTooltip.forEach(element => {
      tippy(element, {
        content: element.getAttribute("data-tooltip")
      });
    })
  }, [])

  return (
    <section className="editTeacherProfilePage">

      <Breadcumbtitle title={"প্রোফাইল হালনাগাদ"} />
      {
        // (allDivision.length !== 0) ?
        //   <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        //     <div className="spinner-border text-primary" role="status">
        //       <span className="visually-hidden">Loading...</span>
        //     </div>
        //     <p className="mt-2">Server Busy, Please Wait...</p>
        //     <p className="mt-2">Retry in {countdown} seconds</p>
        //   </div>

        // added framer  motion
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="container my-3">
            <div className="d-flex align-items-center">
              <div className="card shadow-lg border-0 w-100 rounded">
                <ul className="nav d-flex mt-2 justify-content-around py-1">
                  <li className={`nav-item`}>
                    <h4>  প্রোফাইল হালনাগাদ </h4>
                  </li>
                </ul>
                <div className="tab-content" id="tabContent" style={{ backgroundColor: "white", color: "#000", }}>
                  <div className="tab-pane fade show active" id="expertness" role="tabpanel" aria-labelledby="expertness-tab" >
                    {/* <h5 className="text-left mt-2" style={{fontWeight:"bolder"}}>সাধারণ তথ্য</h5> */}

                    {/* <form className="row m-4" onSubmit={handleTeacherProfileEdit}> */}
                    <form className="row  m-4" style={{ paddingLeft: "5%" }} onSubmit={handleTeacherProfileEdit}>
                      <h5 className="text-left my-2" style={{ fontWeight: "bolder", fontSize: "30px" }}>সাধারণ তথ্য</h5>


                      {/* <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">ইউজার আইডি</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control" readOnly

                            defaultValue={pdsid || caid} />
                        </div>
                      </div>
                    </div> */}



                      {/* <div className="form-group col-sm-4 col-md-6">
                      <div className="mb-3 d-flex" style={{ fontSize: "16px" }}>
                        <label className="form-label">নাম (বাংলা)</label>
                        <div className="input-group">
                          <input
                            type="text"

                            className={`form-control ${isBanglaValid ? '' : 'is-invalid'}`}
                            name="name_bn"
                            value={nameBn}
                            onChange={handleBanglaInputValidate}
                            placeholder="আপনার নাম লিখুন (বাংলায়)"
                            data-tooltip="অনুগ্রহ করে বাংলায় নাম লিখুন!"
                          />
                          {!isBanglaValid && (
                            <div className="invalid-feedback">অনুগ্রহ করে বাংলায় নাম লিখুন!</div>
                          )}
                        </div>
                      </div>
                    </div> */}

                      {/* শিক্ষা প্রতিষ্ঠানের নাম */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>শিক্ষা প্রতিষ্ঠানের নাম</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9" }}
                              type="text"
                              id="institution_name"
                              className="form-control"
                              name="institution_name"
                              placeholder="শিক্ষা প্রতিষ্ঠানের নাম"
                              readOnly
                              // defaultValue={ } // assuming you have this value
                              data-tooltip="শিক্ষা প্রতিষ্ঠানের নাম"
                            />
                          </div>
                        </div>
                      </div>

                      {/* যোগদানের তারিখ */}
                      {/* <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>যোগদানের তারিখ</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9" }}
                              type="date"
                              id="joining_date"
                              className="form-control"
                              name="joining_date"
                              placeholder="যোগদানের তারিখ"
                              // defaultValue={""} // assuming you have this value
                              data-tooltip="যোগদানের তারিখ"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>যোগদানের তারিখ</label>
                          <div className="input-group">
                            <DatePicker
                              id="joining_date"
                              className="form-control w-100 myDatePicker"
                              placeholderText="যোগদানের তারিখ"
                              name="joining_date"
                              dateFormat="yyyy-MM-dd"
                              selected={selectedJoiningDate}
                              onChange={(date) => setSelectedJoiningDate(date)}
                              style={{ background: '#f9f9f9' }}
                            />
                          </div>
                        </div>
                      </div>


                      {/* name in bangla */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>নাম (বাংলা)<span className="text-danger">*</span></label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9" }}
                              type="text"
                              className={`form-control ${isBanglaValid ? '' : 'is-invalid'}`}
                              name="name_bn"
                              value={nameBn}
                              onChange={handleBanglaInputValidate}
                              placeholder="আপনার নাম লিখুন (বাংলায়)"
                              data-tooltip="অনুগ্রহ করে বাংলায় নাম লিখুন!"
                            />
                            {!isBanglaValid && (
                              <div className="invalid-feedback">অনুগ্রহ করে বাংলায় নাম লিখুন!</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* name in  english with tooltip */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>নাম (ইংরেজি)<span className="text-danger">*</span></label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9" }}
                              type="text"
                              className={`form-control ${isEnglishValid ? '' : 'is-invalid'}`}
                              name="name_en"
                              value={nameEn}
                              onChange={handleEnglishInputValidate}
                              placeholder="আপনার নাম লিখুন (ইংরেজিতে)"
                              data-tooltip="অনুগ্রহ করে ইংরেজিতে নাম লিখুন!"
                            />
                            {!isEnglishValid && (
                              <div className="invalid-feedback">অনুগ্রহ করে ইংরেজিতে নাম লিখুন!</div>
                            )}
                          </div>
                        </div>
                      </div>


                      {/* Mobile Number Field */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>মোবাইল নাম্বার</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9", width: "100%" }}
                              type="text"
                              id="pin"
                              className="form-control"
                              name="mobile_no"
                              placeholder="আপনার মোবাইল নাম্বার দিন"
                              defaultValue={mobile_no}
                              data-tooltip="অনুগ্রহ করে সঠিক ফোন নম্বর লিখুন"
                              maxLength={11}
                            />
                          </div>
                        </div>
                      </div>


                      {/* জরুরী যোগাযোগের নম্বর */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>জরুরী যোগাযোগের নম্বর</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9" }}
                              type="text"
                              id="emergency_contact"
                              className="form-control"
                              name="emergency_contact"
                              placeholder="জরুরী যোগাযোগের নম্বর"
                              defaultValue={emergency_contact} // assuming you have this value
                              data-tooltip="জরুরী যোগাযোগের নম্বর"
                              maxLength={11}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">পদবী</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control"
                            readOnly
                            // name="designation"
                            value={teacherDesignation} />
                        </div>
                      </div>
                    </div> */}



                      {/* User ID Field */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>ইউজার আইডি</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9", width: "100%" }}
                              type="text"
                              id="user_id"
                              className="form-control"
                              name="user_id"
                              placeholder="ইউজার আইডি"
                              defaultValue={uid}
                              readOnly // if it's supposed to be read-only
                              data-tooltip="ইউজার আইডি"
                            />
                          </div>
                        </div>
                      </div>


                      {/* Email ID Field */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>ইমেইল আইডি</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9", width: "100%" }}
                              type="email"
                              id="pin"
                              className="form-control"
                              readOnly // This makes the input field read-only
                              name="email"
                              defaultValue={email}
                              data-tooltip="অনুগ্রহ করে সঠিক ইমেইল লিখুন"
                            />
                          </div>
                        </div>
                      </div>

                      {/* birthday */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>জন্ম তারিখ</label>
                          <div className="input-group" style={{ flex: 1 }} data-tooltip="অনুগ্রহ করে সঠিক জন্ম তারিখ দিন">
                            <DatePicker
                              id="pin"
                              className="form-control w-100"

                              placeholderText="আপনার জন্ম তারিখ দিন"
                              name="date_of_birth"
                              dateFormat="yyyy-MM-dd"
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              style={{ width: '100%', maxWidth: '100%', background: '#f9f9f9' }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">ছবি আপলোড করুন </label>
                        <div className="input-group">
                          <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            name="image"
                          />
                        </div>
                      </div>
                    </div> */}



                      {/* gender */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>লিঙ্গ</label>
                          <div className="input-group" style={{ flex: 1 }} data-tooltip="অনুগ্রহ করে লিঙ্গ নির্বাচন করুন">
                            <select
                              className="form-control"
                              style={{ background: "#F9F9F9" }}
                              name="gender"
                              defaultValue=""
                            >
                              <option value="">লিঙ্গ নির্বাচন করুন</option>
                              <option value="1" selected={gender === "1"}>পুরুষ</option>
                              <option value="2" selected={gender === "2"}>মহিলা</option>
                              <option value="3" selected={gender === "3"}>অন্যান্য</option>
                            </select>
                          </div>
                        </div>
                      </div>


                      {/* জাতীয় পরিচয়পত্র নম্বর */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>জাতীয় পরিচয়পত্র নম্বর</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input
                              style={{ background: "#F9F9F9" }}
                              type="text"
                              id="national_id"
                              className="form-control"
                              name="national_id"
                              placeholder="জাতীয় পরিচয়পত্র নম্বর"
                              defaultValue={nid} // assuming you have this value
                              data-tooltip="জাতীয় পরিচয়পত্র নম্বর"
                            />
                          </div>
                        </div>
                      </div>

                      {/* রক্তের গ্রুপ */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex align-items-center" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>রক্তের গ্রুপ</label>
                          <div className="input-group" style={{ flex: 1 }}>
                            <select
                              className="form-control"
                              style={{ background: "#F9F9F9" }}
                              name="blood_group"
                              defaultValue={blood_group}
                              data-tooltip="রক্তের গ্রুপ"
                            >
                              <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                              <option value="A+" selected={blood_group === "A+"}>A+</option>
                              <option value="A-" selected={blood_group === "A-"}>A-</option>
                              <option value="B+" selected={blood_group === "B+"}>B+</option>
                              <option value="B-" selected={blood_group === "B-"}>B-</option>
                              <option value="AB+" selected={blood_group === "AB+"}>AB+</option>
                              <option value="AB-" selected={blood_group === "AB-"}>AB-</option>
                              <option value="O+" selected={blood_group === "O+"}>O+</option>
                              <option value="O-" selected={blood_group === "O-"}>O-</option>
                            </select>
                          </div>
                        </div>
                      </div>


                      {/* বিভাগ */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>বিভাগ<span className="text-danger">*</span></label>
                          <select className="form-control" style={{ background: "#F9F9F9" }} name="division_id" defaultValue={''} onChange={(e: any) => getdistrictBydivisionID(e.target.value)} data-tooltip="অনুগ্রহ করে বিভাগ নির্বাচন করুন">
                            <option value={''}>বিভাগ নির্বাচন করুন</option>
                            {allDivision.map((d, k) => (
                              <option key={k} value={d?.uid} selected={d?.uid == division_id}>
                                {d?.division_name_bn || d?.division_name_en}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* জেলা */}
                      <div className="form-group col-sm-4 col-md-6 ">
                        <div className="mb-3 d-flex" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>জেলা<span className="text-danger">*</span></label>
                          <select className="form-control" name="district_id" style={{ background: "#F9F9F9" }} defaultValue={''} onChange={(e: any) => getDivisionByDistrictId(e.target.value)} data-tooltip="অনুগ্রহ করে জেলা নির্বাচন করুন">
                            <option value={''}>জেলা নির্বাচন করুন</option>
                            {district.length > 0 ? (
                              district.map((d, k) => (
                                <option key={k} value={d?.uid} selected={d?.uid == district_id}>
                                  {d?.district_name_bn || d?.district_name_en}
                                </option>
                              ))
                            ) : (
                              allDistrict.map((d, k) => (
                                <option key={k} value={d?.uid} selected={d?.uid == district_id}>
                                  {d?.district_name_bn || d?.district_name_en}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                      </div>

                      {/* উপজেলা */}
                      <div className="form-group col-sm-4 col-md-6">
                        <div className="mb-3 d-flex" style={{ fontSize: "16px" }}>
                          <label className="form-label" style={{ marginRight: "10px", minWidth: "180px" }}>উপজেলা<span className="text-danger">*</span></label>
                          <select className="form-control" name="upazilla_id" defaultValue={upazilla_id} style={{ background: "#F9F9F9" }} data-tooltip="অনুগ্রহ করে উপজেলা নির্বাচন করুন">
                            <option value={''}>উপজেলা নির্বাচন করুন</option>
                            {upozila.length > 0 ? (
                              upozila.map((d, k) => (
                                <option key={k} value={d?.uid} selected={d?.uid === upazilla_id}>
                                  {d?.upazila_name_bn || d?.upazila_name_en}
                                </option>
                              ))
                            ) : (
                              allUpozila.map((d, k) => (
                                <option key={k} value={d?.uid} selected={d?.uid === upazilla_id}>
                                  {d?.upazila_name_bn || d?.upazila_name_en}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                      </div>


                      <div className="d-flex row flex-lg-row mt-5">
                        {/* profile picture upload */}

                        {/* img upload */}
                        <div className="form-group col-sm-4 col-md-6">
                          <div className="d-flex align-items-center gap-3" style={{ width: "100%" }}>
                            <div className="mb-3 " style={{ fontSize: "16px", width: "50%" }}>
                              <label className="form-label me-2">ছবি আপলোড করুন: </label>
                              {warningMessage && (
                                <small style={{ padding: "0px", margin: "0px", color: "red", fontWeight: "bold" }}>
                                  {warningMessage}
                                </small>
                              )}
                              {errorMessage && (
                                <small style={{ padding: "0px", margin: "0px", color: "red",fontWeight:"bold" }}>
                                  {errorMessage}
                                </small>
                              )}

                              <div className="input-group mt-3">
                                <input
                                  className="mb-2"
                                  id="imageInput"
                                  name="image"
                                  type="file"
                                  onChange={handleImageChange}
                                  data-tooltip="অনুগ্রহ করে আপনার  ছবি আপলোড করুন"
                                  accept="image/png, image/jpeg, image/jpg"
                                />

                              </div>
                            </div>
                            <div className="image-preview" style={{ width: "50%" }}>
                              {/* Check if imagePreview exists, if not, display the default image */}
                              {imagePreview ? (
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  loading="lazy"
                                  style={{ maxWidth: '100%', maxHeight: '5rem' }}
                                />
                              ) : (
                                <img
                                  className=""
                                  src={image_upload_icon} // Use the default image path here
                                  alt="Preview"
                                  loading="lazy"
                                  style={{
                                    width: '5rem', // Set the width to create a box shape
                                    height: '5rem', // Set the height to match the width for a box shape
                                    objectFit: 'cover',
                                    // Maintain the aspect ratio of the image
                                    border: '2px solid black'
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* signature upload */}
                        <div className="form-group col-sm-4 col-md-6">
                          <div className="d-flex align-items-center gap-3" style={{ width: "100%" }}>
                            <div className="mb-3" style={{ fontSize: "16px", width: "50%" }}>
                              <label className="form-label me-2">স্বাক্ষর ছবি আপলোড করুন: </label>
                              {signatureWarningMessage && (
                                  <small style={{ padding: "0px", margin: "0px", color: "red", fontWeight: "bold" }}>
                                    {signatureWarningMessage}
                                  </small>
                                )}
                                {signatureErrorMessage && (
                                  <small style={{ padding: "0px", margin: "0px", color: "red", fontWeight:"bold" }}>
                                    {signatureErrorMessage}
                                  </small>
                                )}

                              <div className="input-group mt-3">
                                <input
                                  className="mb-2"
                                  name="signature"
                                  type="file"
                                  accept="image/png, image/jpeg,image/jpg"
                                  onChange={handleSignatureImg}
                                />

                              </div>
                            </div>
                            <div className="image-preview" style={{ width: "50%" }}>
                              {/* Check if signaturePreview exists, if not, display the default image */}
                              {signaturePreview ? (
                                <img
                                  src={signaturePreview}
                                  alt="Preview"
                                  loading="lazy"
                                  style={{ maxWidth: '100%', maxHeight: '5rem' }}
                                />
                              ) : (
                                <img
                                  className=""
                                  src={image_upload_icon} // Use the default image path here
                                  alt="Preview"
                                  loading="lazy"
                                  style={{
                                    width: '5rem', // Set the width to create a box shape
                                    height: '5rem', // Set the height to match the width for a box shape
                                    objectFit: 'cover',
                                    // Maintain the aspect ratio of the image
                                    border: '2px solid black'
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>

                      </div>


                      {/* প্রোফাইল হালনাগাদ করুন btn */}
                      <div className="d-flex  justify-content-center  justify-content-lg-end justify-content-md-end align-items-center pt-3 pe-3">
                        <button type="submit" className="btn btn-primary px-4 btn-hover  login-btn">প্রোফাইল হালনাগাদ করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "}
                        </button>
                      </div>


                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      }

    </section>
  );
};

export default EditTeacherProfile;