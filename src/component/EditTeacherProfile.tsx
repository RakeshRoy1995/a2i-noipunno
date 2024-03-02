import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useId, useState } from "react";
import { all_district, all_division, all_upozila, teacher_dashboard, teacher_designation, update_teacher_profile } from "../Request";
import Breadcumbtitle from "../layout/Breadcumb";
import Swal from "sweetalert2";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { convertToBanglaNumber } from "../utils/Utils";
import image_upload_icon from "../../src/assets/images/image-upload-icon/Image-upload-icon.jpg";


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
  } = userDetails;

  // const dpesignation_id = "10";

  const getUserDetails = () => {
    const get_teachers_details = JSON.parse(localStorage.getItem("teacher_dashboard"));
    if (get_teachers_details) {
      console.log("userDetaisl", get_teachers_details?.data?.teachers[0]);

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

  // console.log(teacherDesignation);




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

        setTimeout(() => {
          window.location.replace("/");
        }, 900)

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
  const [warningMessage, setWarningMessage] = useState('ছবির আকার ১০০ KB এবং দৈর্ঘ্য-প্রস্থ (৩০০ X ৩০০) পিক্সেলের হতে হবে!');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size
      if (file.size > 100 * 1024) {
        setWarningMessage('')
        setErrorMessage('ছবির আকার ১০০ কিলোবাইট অতিক্রম করেছে, ছবির আকার ১০০ কিলোবাইটের (KB) ভিতর হতে হবে!');
        return;
      }

      // Create an image element to get the image dimensions
      const img = new Image();
      img.onload = () => {
        // Check image dimensions
        if (img.width > 300 || img.height > 300) {
          setWarningMessage('')
          setErrorMessage('ছবির প্রস্থ-উচ্চতা ৩০০X৩০০ পিক্সেল অতিক্রম করেছে, ছবির প্রস্থ-উচ্চতা ৩০০X৩০০ পিক্সেলের (PX) ভিতর হতে হবে!');
          return;
        }

        // If both size and dimensions are within limits, set the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        setErrorMessage('');
        setWarningMessage('')
      };
      img.src = URL.createObjectURL(file);

    } else {
      setImagePreview(null);
      setErrorMessage('');
    }
  };


  const [signaturePreview, setsSgnaturePreview] = useState(null);
  const [signatureErrorMessage, setSignatureErrorMessage] = useState('');
  const [signatureWarningMessage, setSignatureWarningMessage] = useState('সিগনেচার ছবির আকার ৬০ KB এবং দৈর্ঘ্য-প্রস্থ (৩০০ X ৮০) পিক্সেলের হতে হবে!');

  const handleSignatureImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size
      if (file.size > 60 * 1024) {
        setSignatureWarningMessage('')
        setSignatureErrorMessage('সিগ্নেচার ছবির আকার 60 কিলোবাইট অতিক্রম করেছে, ছবির আকার 60 কিলোবাইটের (KB) ভিতর হতে হবে!');
        return;
      }

      // Create an image element to get the image dimensions
      const img = new Image();
      img.onload = () => {
        // Check image dimensions
        if (img.width > 300 || img.height > 80) {
          setSignatureWarningMessage('')
          setSignatureErrorMessage('সিগ্নেচার ছবির প্রস্থ-উচ্চতা 300X80 পিক্সেল অতিক্রম করেছে, ছবির প্রস্থ-উচ্চতা 300X80 পিক্সেলের (PX) ভিতর হতে হবে!');
          return;
        }

        // If both size and dimensions are within limits, set the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setsSgnaturePreview(reader.result);
        };
        reader.readAsDataURL(file);
        setSignatureErrorMessage('');
        setSignatureWarningMessage('')
      };
      img.src = URL.createObjectURL(file);

    } else {
      setsSgnaturePreview(null);
      setSignatureErrorMessage('');
    }
  }

  const img_base_url = import.meta.env.VITE_REACT_APP_IMAGE_URL

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

        <div className="container my-3">
          <div className="d-flex align-items-center">
            <div className="card shadow-lg border-0 w-100 rounded">
              <ul className="nav d-flex mt-2 justify-content-around py-1">
                <li className={`nav-item`}>
                  <h4>  প্রোফাইল হালনাগাদ </h4>
                </li>
              </ul>
              <div className="tab-content" id="tabContent" style={{ backgroundColor: "#E4FEFF" }} >
                <div className="tab-pane fade show active" id="expertness" role="tabpanel" aria-labelledby="expertness-tab" >

                  <form className="row m-4" onSubmit={handleTeacherProfileEdit}>


                    {/* <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">ইউজার আইডি</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control" readOnly
                            
                            defaultValue={pdsid || caid} />
                        </div>
                      </div>
                    </div> */}



                    <div className="form-group col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">নাম (বাংলা)</label>
                        <div className="input-group">
                          <input
                            type="text"

                            className={`form-control ${isBanglaValid ? '' : 'is-invalid'}`}
                            name="name_bn"
                            value={nameBn}
                            onChange={handleBanglaInputValidate}
                            placeholder="আপনার নাম লিখুন (বাংলায়)"
                          />
                          {!isBanglaValid && (
                            <div className="invalid-feedback">অনুগ্রহ করে বাংলায় নাম লিখুন!</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">নাম (ইংরেজি)</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className={`form-control ${isEnglishValid ? '' : 'is-invalid'}`}
                            name="name_en"
                            value={nameEn}
                            onChange={handleEnglishInputValidate}
                            placeholder="আপনার নাম লিখুন (ইংরেজিতে)"
                          />
                          {!isEnglishValid && (
                            <div className="invalid-feedback">অনুগ্রহ করে ইংরেজিতে নাম লিখুন!</div>
                          )}
                        </div>
                      </div>
                    </div>



                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">মোবাইল নাম্বার</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control"
                            // readOnly
                            name="mobile_no"
                            placeholder="আপনার মোবাইল নাম্বার দিন"
                            defaultValue={mobile_no} />
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



                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">ইমেইল আইডি </label>
                        <div className="input-group">
                          <input type="email"
                            id="pin"
                            className="form-control"
                            readOnly
                            name="email"
                            defaultValue={email} />
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">জন্ম তারিখ</label>
                        <div className="input-group">
                          <DatePicker
                            id="pin"
                            className="form-control"
                            placeholderText={"আপনার জন্ম তারিখ দিন"}
                            name="date_of_birth"
                            dateFormat="yyyy-MM-dd"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            style={{ width: '100%', minWidth: '100%' }}
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




                    <div className="form-group col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label htmlFor="gender" className="form-label">লিঙ্গ</label>
                        <div className="input-group">
                          <select className="form-control"
                            name="gender"
                            defaultValue={''}
                          // value={gender}
                          >
                            <option value={''}>লিঙ্গ নির্বাচন করুন</option>
                            <option value={"1"} selected={(gender === "1")}>পুরুষ</option>
                            <option value={"2"} selected={(gender === "2")}>মহিলা</option>
                            <option value={"3"} selected={(gender === "3")}>অন্যান্য</option>
                          </select>
                        </div>
                      </div>
                    </div>



                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label"> বিভাগ</label>
                        <select className="form-control"
                          name="division_id"
                          defaultValue={''}
                          onChange={(e: any) => getdistrictBydivisionID(e.target.value)}>
                          <option value={''}>বিভাগ নির্বাচন করুন</option>
                          {
                            allDivision.map((d, k) =>
                              <option key={k} value={d?.uid} selected={d?.uid == division_id}>
                                {d?.division_name_bn || d?.division_name_en}
                              </option>)
                          }

                        </select>
                      </div>
                    </div>

                    {
                      (district.length > 0) ?
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"> জেলা</label>
                            <select className="form-control"
                              name="district_id"
                              defaultValue={''}
                              onChange={(e: any) => getDivisionByDistrictId(e.target.value)}>
                              <option value={''}>জেলা নির্বাচন করুন</option>

                              {
                                district.map((d, k) =>
                                  <option key={k} value={d?.uid} selected={d?.uid == district_id}>
                                    {d?.district_name_bn || d?.district_name_en}
                                  </option>
                                )
                              }
                            </select>
                          </div>
                        </div>
                        :
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"> জেলা</label>
                            <select className="form-control"
                              name="district_id"
                              defaultValue={''}
                              onChange={(e: any) => getDivisionByDistrictId(e.target.value)}>
                              <option value={''}>জেলা নির্বাচন করুন</option>
                              {
                                allDistrict.map((d, k) =>
                                  <option key={k} value={d?.uid} selected={d?.uid == district_id}>
                                    {d?.district_name_bn || d?.district_name_en}
                                  </option>
                                )
                              }

                            </select>
                          </div>
                        </div>
                    }

                    {
                      (upozila.length > 0) ?
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">উপজেলা</label>
                            <select className="form-control"
                              name="upazilla_id"
                              defaultValue={''}
                            >
                              <option value={''}>উপজেলা নির্বাচন করুন</option>
                              {
                                upozila.map((d, k) =>
                                  <option key={k} value={d?.uid} selected={d?.uid == upazilla_id}>
                                    {d?.upazila_name_bn || d?.upazila_name_en}
                                  </option>
                                )
                              }
                            </select>
                          </div>
                        </div>
                        :
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"> উপজেলা</label>
                            <select className="form-control"
                              name="upazilla_id"
                              defaultValue={''}
                            >
                              <option value={''}>উপজেলা নির্বাচন করুন</option>

                              {
                                allUpozila.map((d, k) =>
                                  <option key={k} value={d?.uid} selected={d?.uid == upazilla_id}>
                                    {d?.upazila_name_bn || d?.upazila_name_en}
                                  </option>
                                )
                              }
                            </select>
                          </div>
                        </div>
                    }

                    <div className="form-group col-sm-4 col-md-6">
                      <div className="d-flex align-items-center gap-3" style={{ width: "100%" }}>
                        <div className="mb-3" style={{ fontSize: "16px", width: "50%" }}>
                          <label className="form-label">
                            ছবি আপলোড করুন
                          </label>

                          <div className="input-group ">
                            <input
                              className="mb-2"
                              id="imageInput"
                              name="image"
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                            {warningMessage &&
                              <small style={{ padding: "0px", margin: "0px", color: "red" }}>
                                {warningMessage}
                              </small>
                            }
                            {
                              errorMessage &&
                              <small style={{ padding: "0px", margin: "0px", color: "red" }}>
                                {errorMessage}
                              </small>
                            }

                          </div>
                        </div>

                        <div className="image-preview" style={{ width: "50%" }}>
                          <img src={
                            imagePreview ||
                            img_base_url + image ||
                            image_upload_icon} alt="Preview" loading="lazy" style={{ maxWidth: '100%', maxHeight: '5rem' }} />
                        </div>

                      </div>
                    </div>
                    <div className="form-group col-sm-4 col-md-6">
                      <div className="d-flex align-items-center gap-3" style={{ width: "100%" }}>
                        <div className="mb-3" style={{ fontSize: "16px", width: "50%" }}>
                          <label className="form-label">
                          সিগনেচার আপলোড করুন
                          </label>

                          <div className="input-group ">
                            <input
                              className="mb-2"
                              name="signature"
                              type="file"
                              accept="image/*"
                              onChange={handleSignatureImg}
                            />
                            {signatureWarningMessage &&
                              <small style={{ padding: "0px", margin: "0px", color: "red" }}>
                                {signatureWarningMessage}
                              </small>
                            }
                            {
                              signatureErrorMessage &&
                              <small style={{ padding: "0px", margin: "0px", color: "red" }}>
                                {signatureErrorMessage}
                              </small>
                            }

                          </div>
                        </div>

                        <div className="image-preview" style={{ width: "50%" }}>
                          <img src={
                            signaturePreview ||
                            img_base_url + signature ||
                            image_upload_icon} alt="Preview" loading="lazy" style={{ maxWidth: '100%', maxHeight: '5rem' }} />
                        </div>

                      </div>
                    </div>


                    <div className="d-flex justify-content-end align-items-center pt-3 pe-3">
                      <button type="submit" className="btn btn-primay px-5" style={{ backgroundColor: "#428F92", color: "#fff", }} > প্রোফাইল হালনাগাদ করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }





    </section>
  );
};

export default EditTeacherProfile;