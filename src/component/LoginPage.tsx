import "../assets/login_page_materials/login_page.css";
import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import inputFieldUserIcon from "../assets/login_page_materials/icons/user-square.svg";
import pinNumberFieldUserIcon from "../assets/login_page_materials/icons/lock.svg";
import passwordHideEyeIcon from "../assets/login_page_materials/icons/eye-slash.svg";

import govtLogo from "../assets/login_page_materials/icons/Vector.png";
import nctbLogo from "../assets/login_page_materials/icons/NCTB_logo.png";
import unicef from "../assets/login_page_materials/icons/Logo_Signature_Container_Circle_ENG_RGB-300x300 1.png";
import A2I from "../assets/login_page_materials/icons/Aspire_to_Innovate_Seal 2.svg";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { loginPassword } from "../Request";
import PopUpAppInfo from "./PopUpAppInfo/PopUpAppInfo";

const LoginPage = () => {
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const [savePin, setSavePin] = useState(false);

  const [userId_from_Cookie, setUserId_from_Cookie] = useState("");
  const [userPin_from_Cookie, setUserPin_from_Cookie] = useState("");

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    const userId = event.target.caid.value;
    const userPin = event.target.pin.value;

    if (savePin) {
      setCookie("userId", userId, 7);
      setCookie("userPin", userPin, 7);
      // console.log('Pin saved:', savePin);
      // console.log('userId', userId);
      // console.log('userPin', userPin);
    }

    try {
      const { data }: any = await loginPassword(datas);
      // console.log("data", data.status);

      if (data?.status === true) {
        console.log("user Details", data?.data.user);
        const token = data?.data?.access_token;
        localStorage.setItem("customer_login_auth", JSON.stringify(data?.data));
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        window.location.assign("/");
      } else {
        seterror("Wrong Crediantial");
      }
    } catch (error) {
      seterror(
        error?.response?.data?.error?.message ||
          error?.response?.data?.error ||
          "Something went wrong!"
      );
      console.log(`error`, error);
    }
  };

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setValue(result);
  };

  useEffect(() => {
    const userId_Cookes = getCookie("userId");
    const userPin_Cookies = getCookie("userPin");
    // console.log("userId_Cookes", userId_Cookes);
    // console.log("userPin_Cookies", userPin_Cookies);
    if (userId_Cookes && userPin_Cookies) {
      setUserId_from_Cookie(userId_Cookes);
      setUserPin_from_Cookie(userPin_Cookies);
    }
  }, []);

  const redirect = () => {
    window.location.href = "https://forms.gle/sFrdsXavPaQryQ6k8";
  };

  return (
    <>
      <Helmet>
        <title>নৈপুণ্য - লগ ইন</title>
      </Helmet>

      <section id="body" className="login-page">
        <div className="login-bg min-vh-100 position-relative">
          <div className="marque-notification pointer" onClick={redirect} >
            <div className="marquee-container">
              <div className="marquee-content">
                প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে{" "}
                এখানে ক্লিক করুন
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row min-vh-90-100 position-relative d-flex align-items-center justify-content-center py-3">
              <div className="col-sm-12 col-md-5 py-2">
                <img src={noipunnoLogo} alt="logo" className="loginLogo" />
                <h1 className="teacher-login-title">
                  বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন
                </h1>
                <p className="np-login-subtitle">
                  অনুগ্রহ করে আপনার অ্যাকাউন্টে লগ ইন করুন এবং <br />{" "}
                  অ্যাডভেঞ্চার শুরু করুন
                </p>
              </div>
              <div className="col-sm-12 col-md-7 py-2">
                <div className="card loginCard max-width-540 m-auto">
                  <p className="login-title text-center">লগ ইন</p>
                  {error && <p className="text-center text-danger">{error}</p>}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group my-1">
                      <label
                        htmlFor="user_type_id"
                        className="login-field-title"
                      >
                        ইউজার টাইপ
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select form-control"
                          name="user_type_id"
                          required
                          style={{
                            fontSize: 16,
                            fontFamily: '"Times New Roman", Times, serif',
                            fontWeight: 400,
                          }}
                        >
                          <option value={1} selected>
                            শিক্ষক
                          </option>
                          {/* <option value="Option2">Option2</option>
                        <option value="Option3">Option3</option>
                        <option value="Option4">Option4</option>
                        <option value="Option5">Option5</option> */}
                        </select>
                      </div>
                    </div>
                    <div className="form-group mb-1">
                      <label htmlFor="caid" className="login-field-title">
                        বিষয় ভিত্তিক শিক্ষকের আইডি
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span>
                            <img
                              src={inputFieldUserIcon}
                              className="np-login-field-icon"
                              alt="logo"
                            />
                          </span>
                        </div>
                        <input
                          // onChange={handleChange}
                          className="form-control np-login-form-field custom-input"
                          type="text"
                          // value={value}
                          defaultValue={userId_from_Cookie}
                          required
                          autoComplete="off"
                          placeholder="আপনার ইউজার আইডি দিন"
                          name="caid"
                          id="caid"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-1">
                      <label htmlFor="pin" className="login-field-title">
                        পিন নম্বর
                      </label>
                      <div className="input-group">
                        <img
                          src={pinNumberFieldUserIcon}
                          className="np-login-field-icon"
                          alt="logo"
                        />
                        <input
                          className="form-control np-login-form-field no-spinners custom-input"
                          type={showPassword ? "text" : "password"}
                          defaultValue={userPin_from_Cookie}
                          id="pin"
                          name="password"
                          required
                          placeholder="আপনার পাসওয়ার্ড দিন"
                        />
                        <div className="input-group-append password-toggle">
                          {/* <span>
                            <i id="password-toggle_2" class="fa fa-eye"></i>
                            <img src={passwordHideEyeIcon} className="img-fluid" alt="eye-slash" />
                          </span> */}
                          <span>
                            {showPassword ? (
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                // id="password-toggle_2"
                                className="fa fa-eye img-fluid"
                              />
                            ) : (
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                // id="password-toggle"
                                className="fa fa-eye-slash"
                              />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center py-3 collect-pin">
                      <div className="form-check form-check-style">
                        <input
                          className="form-check-input fs-5"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          checked={savePin}
                          onChange={() => setSavePin(!savePin)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <p className="pt-2 pin-collect">পিন সংরক্ষণ করুণ</p>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn login-btn w-100">
                      লগ ইন করুন
                    </button>
                    <div className="form-group my-2">
                      <p className="mb-1">
                        <Link
                          to="https://accounts.project-ca.com/password/reset"
                          className="forget-password"
                        >
                          পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="login_footer position-absolute bottom-0">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-end sm-row-reverse ps-5 pe-3 my-2">
                <div className="">
                  <div className="d-flex gap-2 py-2 justify-content-start">
                    <ul className="d-flex gap-2">
                      <div className="d-flex gap-2 flex-column flex-md-row">
                        <div className="footer-menus">
                          <a className="ps-2" href="#">
                            © ২০২৩ সর্বস্বত্ব সংরক্ষিত
                          </a>
                          <a className="ps-2" href="#">
                            গোপনীয়তা নীতি
                          </a>
                          <a className="ps-2" href="tel:০৯৬৩৮৬০০৭০০">
                            হেল্প ডেস্ক নম্বর: ৯৬৩৮৬০০৭০০
                          </a>
                          <a
                            className="ps-2 "
                            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJyc51nkExJh5Zti4RVaeC0OyXWNz6Y5fcO-9zjNxq1kmjOb65EZ6r9jLzPpeyZYeOFyNJAqZeGRum/pubhtml?gid=0&single=true"
                            target="_blank"
                          >
                            {" "}
                            অ্যাপ সংক্রান্ত তথ্যসেবা পেতে জেলাভিত্তিক নির্ধারিত
                            নম্বরসূমহে যোগাযোগ করুন
                          </a>
                          <a
                            className="ps-2 "
                            href="https://docs.google.com/document/d/e/2PACX-1vTfzi4vy5b8RbL0rnIAt8t7stJFN0F70qwTOUM_ZxEyveq794GnjdXzIzd_RY-a0tVQqGdhwAOyd1NQ/pub"
                            target="_blank"
                          >
                            সচরাচর জিজ্ঞাসা
                          </a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="helpedBy">
                  <div className="d-flex gap-2 px-5 py-2 justify-content-center bg-light rounded-pill">
                    <div>
                      <div>
                        <p className="">পরিকল্পনা ও বাস্তবায়নে</p>
                      </div>
                      <div className="d-flex justify-content-around align-items-center gap-1">
                        <img src={govtLogo} className="img-fluid" />
                        <img src={nctbLogo} className="img-fluid" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="">কারিগরি সহায়তায়</p>
                      </div>
                      <div className="d-flex justify-content-around align-items-center gap-1">
                        <img src={unicef} className="img-fluid" />
                        <img src={A2I} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PopUpAppInfo />
          </div>
        </div>
        {/* bootstrap 5.0.2 min.js */}
      </section>
    </>
  );
};

export default LoginPage;
