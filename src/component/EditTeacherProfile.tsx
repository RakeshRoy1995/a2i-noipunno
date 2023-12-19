import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useId, useState } from "react";
import { all_district, all_division, all_upozila, teacher_dashboard, teacher_designation, update_teacher_profile } from "../Request";
import Breadcumbtitle from "../layout/Breadcumb";
import Swal from "sweetalert2";


const EditTeacherProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});
  const [allDivision, setAllDivision] = useState<any>([]);
  const [allDistrict, setAllDistrict] = useState<any>([]);
  const [allUpozila, setAllUpozila] = useState<any>([]);
  const [allDesignation, setAllDesignation] = useState<any>([]);
  const [teacherDesignation, seTeacherDesignation] = useState<any>('');
  const [district, setdistrict] = useState<any>([]);
  const [upozila, setupozila] = useState<any>([]);


  const {
    name_en,
    name_bn,
    email,
    mobile_no,
    date_of_birth,
    gender,
    designation,
    division_id,
    district_id,
    upazilla_id,
    designation_id,
    pdsid,
    caid } = userDetails;

  // const designation_id = "10";

  const getUserDetails = () => {
    const get_teachers_details = JSON.parse(localStorage.getItem("teacher_dashboard"));
    if (get_teachers_details) {
      setuserDetails(get_teachers_details?.data?.teachers[0]);
    }
  }

  const fetchData = async () => {
    const getDesignation = await teacher_designation()
    const division_data = await all_division();
    const district_data = await all_district();
    const upozila_data = await all_upozila();
    setAllDivision(division_data?.data?.data);
    setAllDistrict(district_data?.data?.data);
    setAllUpozila(upozila_data?.data?.data);
    setAllDesignation(getDesignation.data.data);

    if (division_id) {
      const getAssignedDistrict = allDistrict.filter(district => district.district_id == district_id)
      setdistrict(getAssignedDistrict)
    }

    if (designation_id) {
      const find_current_user_designation = allDesignation?.filter(designation => designation?.uid == designation_id)
      find_current_user_designation.map(item => seTeacherDesignation(item.designation_name))
    }
  };




  const getdistrictBydivisionID = (id) => {
    const divisionWiseDistric = allDistrict.filter(district => district.division_id == id)
    setdistrict(divisionWiseDistric)
  }

  const getDivisionByDistrictId = (id) => {
    const zilawiseUpazila = allUpozila.filter(upozila => upozila.district_id == id)
    setupozila(zilawiseUpazila)
  }



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
        }, 1000)

      }

    } catch (error) {
      alert('হালনাগাদ সম্পন্ন হয়নি, আবার চেষ্টা করুন!');
    }
  }

  useEffect(() => {
    fetchData();
    getUserDetails();
  }, []);

  const [countdown, setCountdown] = useState(30);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  if (countdown == 0) {
    window.location.replace("/");
  }

  return (
    <section className="editTeacherProfilePage">
      <Breadcumbtitle title={"প্রোফাইল হালনাগাদ"} />
      {
        (allDivision.length < 0) ?
          <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Server Busy, Please Wait...</p>
            <p className="mt-2">Retry in {countdown} seconds</p>
          </div>
        :
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
                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">ইউজার আইডি</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control" readOnly
                            // name="xxxxx"
                            defaultValue={pdsid || caid} />
                        </div>
                      </div>
                    </div>

                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">নাম (বাংলা)</label>
                        <div className="input-group">
                          <input type="text" id="pin"
                            className="form-control" name="name_bn"
                            defaultValue={name_bn}
                            placeholder="আপনার নাম লিখুন (বাংলায়)" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">নাম (ইংরেজি)</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control"
                            name="name_en"
                            placeholder="আপনার নাম লিখুন (ইংরেজিতে)"
                            defaultValue={name_en} />
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
                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">পদবী</label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control"
                            readOnly
                            // name="designation"
                            defaultValue={teacherDesignation || "(Not-Assign)"} />
                        </div>
                      </div>
                    </div>


                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">ইমেইল আইডি </label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control" readOnly
                            name="email"
                            defaultValue={email} />
                        </div>
                      </div>
                    </div>

                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label">জন্ম তারিখ </label>
                        <div className="input-group">
                          <input type="text" id="pin" className="form-control"
                            placeholder="আপনার জন্ম তারিখ দিন"
                            name="date_of_birth"
                            defaultValue={date_of_birth} />
                        </div>
                      </div>
                    </div>

                    {/* <div className="form-group col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: '16px' }}>
                      <label className="form-label">জন্ম তারিখ </label>
                      <div className="input-group">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          dateFormat="dd/MM/yyyy" 
                          placeholderText="আপনার জন্ম তারিখ দিন"
                          className="form-control"
                          name="date_of_birth"
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
                            value={gender}>
                            <option value={''}>লিঙ্গ নির্বাচন করুন</option>
                            <option value={1}>পুরুষ</option>
                            <option value={2}>মহিলা</option>
                            <option value={3}>অন্যান্য</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label"> বিভাগ</label>
                        <select className="form-control"
                          name="division_id"
                          onChange={(e: any) => getdistrictBydivisionID(e.target.value)}>
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
                          <select className="form-control" name="district_id"
                            onChange={(e: any) => getDivisionByDistrictId(e.target.value)}>

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
                          <select className="form-control" name="district_id"
                            onChange={(e: any) => getDivisionByDistrictId(e.target.value)}>

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
                            <label className="form-label"> উপজেলা</label>
                            <select className="form-control" name="upazilla_id">
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
                            <select className="form-control" name="upazilla_id">
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