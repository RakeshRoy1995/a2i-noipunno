import Breadcumbtitle from "../layout/Breadcumb";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import techerAvatar from "../assets/project_ca_html/icons/teacher.svg";
import { all_district, all_division, all_upozila, teacher_designation } from "../Request";



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
    caid } = userDetails;

  // const designation_id = "10";

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
    const designation_data = await teacher_designation();
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
    <section className="mx-auto myProfilePage">
      <Breadcumbtitle title={"আমার প্রোফাইল"} />
      <div className="container  py-3 mx-auto">
        <div className="d-flex align-items-center">
          <div className="card shadow-sm border-1 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around py-1">
              <li className={`nav-item`}>
                <h4> আমার প্রোফাইল </h4>
              </li>
            </ul>

            <div className="container" style={{ backgroundColor: "#E4FEFF" }}>
              <div className="w-75 text-sm-center text-md-center mx-auto ">
                <img src={techerAvatar} loading="lazy" width="150rem" className="img-fluid my-3 border  border-info" />
              </div>

              <table className="table w-75 text-sm mx-auto ">
                <tbody className="rounded border border-ligh">

                  <tr className="border-1">
                    <td className="">
                      <strong>ইউজার আইডিঃ</strong>
                    </td>
                    <td className="">{pdsid || caid}</td>
                  </tr>

                  <tr className="border-1 rounded">
                    <td className="">
                      <strong>নাম (বাংলা)</strong>
                    </td>
                    <td className="">{name_bn}</td>
                  </tr>
                  <tr className="border-1 rounded">
                    <td className="">
                      <strong>নাম (ইংরেজি)</strong>
                    </td>
                    <td className="">{name_en}</td>
                  </tr>

                  {designation &&
                    <tr className="border-1">
                      <td className="">
                        <strong>পদবীঃ</strong>
                      </td>
                      <td className="">{designation}</td>
                    </tr>
                  }

                  <tr className="border-1">
                    <td className="">
                      <strong>ইমেইলঃ</strong>
                    </td>
                    <td className="">{email}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="p-1 v">
                      <strong>মোবাইল নাম্বারঃ</strong>
                    </td>
                    <td className="">{mobile_no}</td>
                  </tr>

                  <tr className="border-1">
                    <td className="p-1 v">
                      <strong>জন্ম তারিখঃ</strong>
                    </td>
                    <td className="">{date_of_birth}</td>
                  </tr>

                  <tr className="border-1">
                    <td className="p-1 v">
                      <strong>লিঙ্গঃ</strong>
                    </td>
                    <td className="">
                      {(gender === "1") && "পুরুষ"}
                      {(gender === "2") && "মহিলা"}
                      {(gender === "3") && "অন্যান্য"}
                    </td>
                  </tr>

                  {division &&
                    <tr className="border-1">
                      <td className="p-1 v">
                        <strong>বিভাগঃ</strong>
                      </td>
                      <td className="">{division}</td>
                    </tr>
                  }

                  {
                    district &&
                    <tr className="border-1">
                      <td className="p-1 v">
                        <strong>জেলাঃ</strong>
                      </td>
                      <td className="">{district}</td>
                    </tr>
                  }


                  {upazila &&
                    <tr className="border-1">
                      <td className="p-1 v">
                        <strong>উপজেলাঃ</strong>
                      </td>
                      <td className="">{upazila}</td>
                    </tr>
                  }


                  {/* <tr className="border-1">
                    <td className="p-1 v">
                      <strong>সাইন আপলোড করুন</strong>
                      <div
                        style={{
                          fontSize: "9px",
                          width: "70%",
                          marginLeft: "6px",
                        }}
                      >
                        ছবি {convertToBanglaNumber(200)} PX প্রস্থ এবং {convertToBanglaNumber(150)} PX এর
                        সর্বাধিক উচ্চতা অতিক্রম করা উচিত নয় এবং ছবির আকার {convertToBanglaNumber(100)}
                        KB সীমা অতিক্রম করা উচিত নয়।
                        {
                          error && <h5 className="text-danger">{error}</h5>
                        }

                      </div>
                    </td>
                    <td>
                      <div className="d-flex" >
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          onChange={uploadImage}
                        />

                        <img
                          id="previewImage"
                          style={{ maxWidth: 80, maxHeight: 60 }}
                          src={signTeacher}
                          alt="Preview"
                        />

                        <input type="file" id="imageInput" accept="image/*" onChange={getImageSize} />
                      </div>
                    </td>
                  </tr> */}

                </tbody>
              </table>
              <div className="d-flex justify-content-end align-items-center py-3 pe-5">
                <Link to={"/edit-teacher-profile"}>
                  <button
                    type="submit"
                    className="btn btn-primay px-3"
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
    </section>
  );
};

export default AmarProfile;
