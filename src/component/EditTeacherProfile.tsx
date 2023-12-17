import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useId, useState } from "react";
import { all_district, all_division, all_upozila, update_teacher_profile } from "../Request";
import Breadcumbtitle from "../layout/Breadcumb";
import Swal from "sweetalert2";



const EditTeacherProfile = () => {

  const [userDetails, setuserDetails] = useState<any>({});

  const [allDivision, setAllDivision] = useState<any>([]);
  const [allDistrict, setAllDistrict] = useState<any>([]);
  const [allUpozila, setAllUpozila] = useState<any>([]);

  const [district, setdistrict] = useState<any>([]);
  const [upozila, setupozila] = useState<any>([]);
  const [all_local_storage_data, setAll_local_storage_data] = useState<any>({});

  const [defaultBibhag, setDefaultBibhag] = useState('');
  const [defaultZilaName, setDefaultZilaName] = useState('');
  const [defaultUpozila, setDefaultUpozila] = useState('');

  const { name_en, name_bn, email, mobile_no, date_of_birth, designation, division_id, district_id, upazilla_id, pdsid, caid } = userDetails;

  // console.log(name_en);


  const handleTeacherProfileEdit = async (event: any) => {
    event.preventDefault()
    const formDatas = new FormData(event.target);

    for (const [name, value] of formDatas) {
      console.log(`Key==> ${name}, value==> ${value}`);
    }

    // const form = event.target;
    // const date_of_birth = form.date_of_birth.value;
    // console.log(date_of_birth);

    // const designation = form.designation.value;
    // const district_id = form.district_id.value;
    // const division_id = form.division_id.value;
    // const email = form.email.value;
    // const mobile_no = form.mobile_no.value;
    // const name_bn = form.name_bn.value;
    // const name_en = form.name_en.value;
    // const upazilla_id = form.upazilla_id.value;

    // const newFormData = { name_en, name_bn, email, mobile_no, date_of_birth, designation, division_id, district_id, upazilla_id }
    // console.log(newFormData);


    // const new_localstorage_data = { ...all_local_storage_data }
    // const new_user_info = { ...userDetails };
    // new_user_info.name = name_en;
    // new_user_info.email = email;
    // new_user_info.phone_no = mobile_no;
    // new_localstorage_data.user = new_user_info;

    // console.log("New Local storage data====>", new_user_info);

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
        // localStorage.setItem("customer_login_auth", JSON.stringify(new_localstorage_data));

        // setTimeout(() => {
        //   window.location.replace("/");
        // }, 1000)
      }
    } catch (error) {
      // alert('হালনাগাদ সম্পন্ন হয়নি, আবার চেষ্টা করুন!');
      console.log(error);

    }
  }


  const fetchData = async () => {

    const division_data = await all_division()
    const district_data = await all_district()
    const upozila_data = await all_upozila()
    setAllDivision(division_data?.data?.data)
    setAllDistrict(district_data?.data?.data)
    setAllUpozila(upozila_data?.data?.data)

    const currentDivision = allDivision.filter(division => division.division_id == division_id);
    currentDivision.map(division => setDefaultBibhag(division?.division_name_bn || division?.division_name_en))

    const currentDistrictName = allDistrict?.filter(district => district.district_id == district_id);
    currentDistrictName.map(district => setDefaultUpozila(district?.district_name_bn || district.district_name_en))

    const currentUpozilaName = allUpozila.filter(upozila => upozila?.upazila_id == upazilla_id)
    currentUpozilaName.map(upozila => setDefaultUpozila(upozila.upazila_name_bn || upozila.upazila_name_en))

  };

  const getdistrictBydivisionID = (id) => {
    const divisionWiseDistric = allDistrict.filter(district => district.division_id == id)
    setdistrict(divisionWiseDistric)
  }

  const getDivisionByDistrictId = (id) => {
    const zilawiseUpazila = allUpozila.filter(upozila => upozila.district_id == id)
    setupozila(zilawiseUpazila)
  }

  useEffect(() => {
    // const get_loacl_storage_data = JSON.parse(localStorage.getItem("customer_login_auth"));
    const get_teachers_details = JSON.parse(localStorage.getItem("teacher_dashboard"));
    // console.log("get_teachers_details", get_teachers_details?.data?.teachers[0]);


    if (get_teachers_details) {
      setAll_local_storage_data(get_teachers_details)
      setuserDetails(get_teachers_details?.data?.teachers[0]);
    }
    fetchData();
  }, []);

  return (
    <section className="editTeacherProfilePage">
      <Breadcumbtitle title={"প্রোফাইল হালনাগাদ"} />
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
                        <input type="text" id="pin" className="form-control" name="name_bn" defaultValue={name_bn} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group  col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: "16px" }}>
                      <label className="form-label">নাম (ইংরেজি)</label>
                      <div className="input-group">
                        <input type="text" id="pin" className="form-control" name="name_en" defaultValue={name_en} />
                      </div>
                    </div>
                  </div>



                  <div className="form-group  col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: "16px" }}>
                      <label className="form-label">মোবাইল নাম্বার</label>
                      <div className="input-group">
                        <input type="text" id="pin" className="form-control"
                          readOnly name="mobile_no"
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
                          name="designation"
                          defaultValue={designation} />
                      </div>
                    </div>
                  </div>

                  {/* <div className="form-group  col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: "16px" }}>
                      <label className="form-label"> জন্ম তারিখ</label>
                      <select className="form-control" name="division_id"
                        onChange={(e: any) => getdistrictBydivisionID(e.target.value)}>
                        {
                          allDivision.map((d, k) =>
                            <option value={d?.uid}>{d?.division_name_bn || d?.division_name_en}</option>
                          )
                        }

                      </select>
                    </div>
                  </div> */}
                  <div className="form-group  col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: "16px" }}>
                      <label className="form-label">জন্ম তারিখ </label>
                      <div className="input-group">
                        <input type="text" id="pin" className="form-control"
                          name=" date_of_birth"
                          defaultValue={date_of_birth} />
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
                      <label className="form-label"> বিভাগ</label>
                      <select className="form-control"
                        name="division_id"

                        onChange={(e: any) => getdistrictBydivisionID(e.target.value)}>
                        {/* <option value={division_id}>{defaultBibhag}</option> */}
                        {
                          allDivision.map((d, k) =>
                            <option value={d?.uid}>{d?.division_name_bn || d?.division_name_en}</option>
                          )
                        }

                      </select>
                    </div>
                  </div>



                  {(district.length > 0) && <div className="form-group  col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: "16px" }}>
                      <label className="form-label"> জেলা</label>
                      <select className="form-control" name="district_id"
                        onChange={(e: any) => getDivisionByDistrictId(e.target.value)}>
                        <option value={district_id}>{defaultZilaName || "Not-Entry yet"}</option>
                        {
                          district.map((d) =>
                            <option value={d?.uid}>{d?.district_name_bn || d?.district_name_en}</option>
                          )
                        }
                      </select>
                    </div>
                  </div>}



                  {/* <div className="form-group  col-sm-4 col-md-6">
                    <div className="mb-3" style={{ fontSize: "16px" }}>
                      <label className="form-label"> উপজেলা</label>
                      <select className="form-control" name="upazilla_id">
                        {
                          upozila.map((d) =>
                            <option value={d?.uid}>{d?.upazila_name_bn || d?.upazila_name_en}</option>
                          )
                        }
                      </select>
                    </div>
                  </div> */}

                  {
                    (upozila.length > 0) &&
                    <div className="form-group  col-sm-4 col-md-6">
                      <div className="mb-3" style={{ fontSize: "16px" }}>
                        <label className="form-label"> উপজেলা</label>
                        <select className="form-control" name="upazilla_id">
                          <option value={upazilla_id}>{defaultZilaName || "Not-Entry yet"}</option>
                          {
                            upozila.map((d) =>
                              <option value={d?.uid}>{d?.upazila_name_bn || d?.upazila_name_en}</option>
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
    </section>
  );
};

export default EditTeacherProfile;