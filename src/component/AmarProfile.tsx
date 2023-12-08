import Breadcumbtitle from "../layout/Breadcumb";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import style from "./Home.style.module.css";
import techerAvatar from "../../public/assets/images/teacher.jpeg";
import { convertToBanglaNumber } from "../utils/Utils";
import "../../src/styles/noipunno_custom_styles.css";

const AmarProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});
  const [signTeacher, setsignTeacher] = useState<any>("");

  useEffect(() => {
    const get_loacl_storage_data = JSON.parse(
      localStorage.getItem("customer_login_auth")
    );
    if (get_loacl_storage_data) {
      setuserDetails(get_loacl_storage_data.user);
    }
    setsignTeacher(localStorage.getItem("teacher_sign"));
  }, []);

  function uploadImage() {
    const input: any = document.getElementById("imageInput");
    const preview: any = document.getElementById("previewImage");

    if (input.files && input.files[0]) {
      const img = new window.Image();

      img.onload = function () {
        const maxSizeKB = 100;
        const maxWidth = 200;
        const maxHeight = 150;

        if (input.files[0].size / 1024 > maxSizeKB) {
          alert("Image size exceeds 100 KB limit.");
          return;
        }

        if (img.width > maxWidth || img.height > maxHeight) {
          alert(
            "Image dimensions exceed maximum width of 200 and maximum height of 150."
          );
          return;
        }

        alert(
          "Image is valid. Size: " +
          input.files[0].size / 1024 +
          " KB, Width: " +
          img.width +
          ", Height: " +
          img.height
        );
      };

      const reader = new FileReader();

      reader.onload = function (e: any) {
        preview.src = e.target.result;
        setsignTeacher(e.target.result);

        localStorage.setItem("teacher_sign", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);

      img.src = URL.createObjectURL(input.files[0]);
    }
  }

  // function getImageSize() {
  //   var input: any = document.getElementById("imageInput");

  //   if (input.files && input.files[0]) {
  //     const img = new window.Image();

  //     img.onload = function () {
  //       console.log(
  //         "Image width: " + img.width + ", Image height: " + img.height
  //       );
  //     };

  //     img.src = URL.createObjectURL(input.files[0]);
  //   }
  // }

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
              <div className="w-75 text-sm-center text-md-start mx-auto ">
                <img
                  src={techerAvatar}
                  loading="lazy"
                  width="150rem"
                  className="img-fluid my-3 border  border-info"
                />
              </div>

              <table className="table w-75 text-sm mx-auto ">
                <tbody className="rounded border border-ligh">
                  <tr className="border-1 rounded">
                    <td className="">
                      <strong>নামঃ</strong>
                    </td>
                    <td className="">{userDetails?.name}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="">
                      <strong>ইউজার আইডিঃ</strong>
                    </td>
                    <td className="">{userDetails?.eiin}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="">
                      <strong>পদবীঃ</strong>
                    </td>
                    <td className="">{userDetails?.user_type?.name}</td>
                  </tr>

                  <tr className="border-1">
                    <td className="">
                      <strong>ইমেইলঃ</strong>
                    </td>
                    <td className="">{userDetails?.email}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="p-1 v">
                      <strong>মোবাইল নাম্বারঃ</strong>
                    </td>
                    <td className="">{userDetails?.phone_no}</td>
                  </tr>

                  <tr className="border-1">
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



                        {/* <input type="file" id="imageInput" accept="image/*" onChange={getImageSize} /> */}
                      </div>
                    </td>
                  </tr>
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
