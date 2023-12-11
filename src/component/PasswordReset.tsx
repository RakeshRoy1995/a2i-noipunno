import "../assets/login_page_materials/login_page.css";
import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import inputFieldUserIcon from "../assets/login_page_materials/icons/user-square.svg";
import pinNumberFieldUserIcon from "../assets/login_page_materials/icons/lock.svg";

import govtLogo from "../assets/login_page_materials/icons/Vector.png";
import nctbLogo from "../assets/login_page_materials/icons/NCTB_logo.png";
import unicef from "../assets/login_page_materials/icons/Logo_Signature_Container_Circle_ENG_RGB-300x300 1.png";
import A2I from "../assets/login_page_materials/icons/Aspire_to_Innovate_Seal 2.svg";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { otpComfirm, resetPassword } from "../Request";
import PopUpAppInfo from "./PopUpAppInfo/PopUpAppInfo";

const PasswordReset = () => {
  const [error, seterror] = useState("");
  const [msg, setmsg] = useState("");
  const [showVarify, setshowVarify] = useState(false);
  const [buttonSHow, setbuttonSHow] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [userId_from_Cookie, setUserId_from_Cookie] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    setmsg("")
    seterror("")
    try {
      if (!showVarify) {
        try {
          const { data }: any = await resetPassword(datas);
          if (data?.status === true) {
            setshowVarify(true);
            setmsg(data?.message);
          } else {
            seterror("ভুল আইডি");
          }
        } catch (error) {
            seterror("ভুল আইডি");
        }
      } else {
        const { data }: any = await otpComfirm(datas);
        if (data?.status === true) {
            setmsg("আপনার পিনটি আপনার নম্বরে পাঠানো হয়েছে। দয়া করে এই পিন দিয়ে লগইন করুন")
            setbuttonSHow(false)
        } else {
            seterror("আপনার ওটিপিটি সঠিক নয়।");
        }
      }
    } catch (error) {
        seterror("আপনার ওটিপিটি সঠিক নয়।");
      console.log(`error`, error);
    }
  };

  const redirect = () => {
    window.location.href = "https://forms.gle/sFrdsXavPaQryQ6k8";
  };

  return (
    <>
      <Helmet>
        <title>নৈপুণ্য - রিসেট পিন</title>
      </Helmet>

      <section id="body" className="login-page">
        <div className="login-bg min-vh-100 position-relative">
          {/* <div className="marque-notification pointer" onClick={redirect}>
            <div className="marquee-container">
              <div className="marquee-content">
                প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে এখানে ক্লিক
                করুন
              </div>
            </div>
          </div> */}

          <div className="container">
            <div className="row min-vh-90-100 position-relative d-flex align-items-center justify-content-center py-3">
              <div className="col-sm-12 col-md-5 py-2">
                <img src={noipunnoLogo} alt="logo" className="loginLogo" />
                <h1 className="teacher-login-title">
                  বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন
                </h1>
                <p className="np-login-subtitle">
                  অনুগ্রহ করে আপনার অ্যাকাউন্টে রিসেট পিন করুন এবং <br />{" "}
                  অ্যাডভেঞ্চার শুরু করুন
                </p>
              </div>
              <div className="col-sm-12 col-md-7 py-2">
                <div className="card loginCard max-width-540 m-auto">
                  <p className="login-title text-center">
                    {showVarify ? "পিন  রিসেট  করুন" : "পিন পাঠান"}
                  </p>
                  {error && <p className="text-center text-danger">{error}</p>}
                  {msg && <p className="text-center text-success">{msg}</p>}

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
                          <option value={1}>শিক্ষক</option>
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

                    {showVarify && (
                      <div className="form-group mb-1">
                        <label htmlFor="pin" className="login-field-title">
                          ওটিপি নম্বর
                        </label>
                        <div className="input-group">
                          <img
                            src={pinNumberFieldUserIcon}
                            className="np-login-field-icon"
                            alt="logo"
                          />
                          <input
                            className="form-control np-login-form-field no-spinners custom-input"
                            type={showPassword ? "text" : "text"}
                            id="pin"
                            name="pin"
                            required
                            placeholder="ওটিপি নম্বর"
                          />
                        </div>
                      </div>
                    )}

                    {
                        buttonSHow && <button type="submit" className="btn login-btn w-100">
                        {showVarify ? "পিন  রিসেট  করুন" : "পিন পাঠান"}
                      </button>
                    }

                    

                    <div className="form-group my-2">
                      <p className="mb-1">
                        <Link
                          to="/login"
                          className="forget-password"
                        >
                          লগ ইন করুন
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

export default PasswordReset;
