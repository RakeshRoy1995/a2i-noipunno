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
import { userInfo, resetPassword, otpComfirm, changePin } from "../Request";
import PopUpAppInfo from "./PopUpAppInfo/PopUpAppInfo";

const PasswordReset = () => {
  const [error, seterror] = useState("");
  const [msg, setmsg] = useState("");
  const [phone, setPhone] = useState("");
  const [otpVerify, setshoOtpVarify] = useState(null);
  const [showVarify, setshowVarify] = useState(false);
  const [buttonSHow, setbuttonSHow] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSubmit, setOtpSubmitButton] = useState(false);
  const [resetPwd, setResetPassword] = useState(false);
  const [getCaid, setCaid] = useState('');

  const [userId_from_Cookie, setUserId_from_Cookie] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    setmsg("")
    seterror("")

    const caId = event.target.caid.value;

    if(!otpVerify){
        try {
            const { data }: any = await userInfo(caId);
            setPhone(data.data.phone_no);
            setCaid(data.data.caid);
            setshowVarify(true);
            setshoOtpVarify(true);
          } catch (error) {
              seterror("ভুল আইডি");
          }

    }else{
        //alert('otp sending..')
        const { data }: any = await resetPassword(datas);
        console.log(data);
        if (data?.status === true) {
            setmsg("আপনার নম্বরে ওটিপিটি পাঠানো হয়েছে।")
            setbuttonSHow(false)
            setOtpSubmitButton(true)
        } else {
            seterror("ভুল আইডি");
        }
    }

  }

  const handleOTPSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    //const pin = event.target.pin.value;
    setmsg("")
    seterror("")
    //alert(pin);
    try {
        const { data }: any = await otpComfirm(datas);
        if (data?.status === true) {
            setbuttonSHow(false)
            setshowVarify(false)
            setOtpSubmitButton(true)
            setResetPassword(true)
        } else {
            seterror("আপনার ওটিপিটি সঠিক নয়।");
        }
    }catch(error){
        seterror("আপনার ওটিপিটি সঠিক নয়।");
        console.log(`error`, error);
    }
  }

  const handleNewPaswordSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    setmsg("")
    seterror("")

    const password = event.target.password.value;
    const password_confirmation = event.target.password_confirmation.value;

    if(password.length == 6){
        if(password === password_confirmation){
            try {
                const { data }: any = await changePin(datas);
                if (data?.status === true) {
                    window.location.href = '/login';
                } else {
                    seterror("পিন পরিবর্তন হয়নাই।");
                }
        
            } catch (error) {
                seterror("পিন পরিবর্তন হয়নাই।");
            }
        }else{
            seterror("নতুন পিন এবং পুনরায় পিন মিল নেই।");
        }
    }else{
        seterror("পিন অবশ্যই ছয় অক্ষরের হতে হবে! ");
    }
  }

  function modifyPhoneNumber(phoneNumber) {
    // Check if the phoneNumber is valid
    if (phoneNumber === '') {
        return "";
    }
    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.substring(phoneNumber.length - 11);
    }
    var firstFiveDigits = phoneNumber.substring(0, 5);
    var lastTwoDigits = phoneNumber.substring(9);
    var middleDigits = "****";
    var modifiedPhoneNumber = firstFiveDigits + middleDigits + lastTwoDigits;
    return modifiedPhoneNumber;
  }

  var modifiedNumber = modifyPhoneNumber(phone);
  
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

          <div className="container mt-3">
         
            <div className="row min-vh-90-100 position-relative d-flex align-items-center justify-content-center py-3">
              <div className="col-sm-12 col-md-5 py-2">
                <div className="mobile-view">
                  <img src={noipunnoLogo} alt="logo" className="loginLogo centered-image" />
                </div>
                
                <h1 className="teacher-login-title mobile-view">
                  বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন
                </h1>
                <p className="np-login-subtitle mt-3 mobile-view">
                  অনুগ্রহ করে আপনার অ্যাকাউন্টে রিসেট পিন করুন এবং অ্যাডভেঞ্চার শুরু করুন
                </p>
              </div>

              <div className="col-sm-12 col-md-7 py-2">
                <div className="card loginCard max-width-540 login-card-padding m-auto">
                  <p className="login-title text-center mb-4">
                    {showVarify ? "রিসেট পিন" : "রিসেট পিন"}
                  </p>
                  {error && <p className="text-center text-danger">{error}</p>}
                  {msg && <p className="text-center text-success">{msg}</p>}

                {
                    !otpSubmit ?

                  <form onSubmit={handleSubmit}>
                    {
                      showVarify && <>
                        <div className="alert alert-info mb-4" style={{ backgroundColor: '#17A2B8', color: 'white',fontFamily: 'Kalpurush' }}>
                            নিচের মোবাইল নম্বরটি সঠিক না থাকলে কাস্টমার সাপোর্টে (<a style={{ color: 'white', textDecoration:'underline' }} href="tel:09638600700">০৯৬৩৮৬০০৭০০</a>) যোগাযোগ করুন।
                        </div>
                      </>
                    }

                    <input type="hidden" name="user_type_id" value="1"/>
                    <div className="form-group mb-1">
                      <label htmlFor="caid" className="login-field-title mb-2">
                      {
                        showVarify ? <>
                          ইউজার আইডি
                        </>
                        :
                        <>ইউজার আইডি প্রদান করুন</>
                      }
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
                          placeholder="ইউজার আইডি"
                          name="caid"
                          id="caid"
                        />
                      </div>
                    </div>

                    {showVarify && (
                      <div className="form-group mb-1 mt-3">
                        <label htmlFor="pin" className="login-field-title mt-2 mb-2">
                        মোবাইল নম্বর
                        </label>
                        <div className="input-group">
                          <img
                            src={pinNumberFieldUserIcon}
                            className="np-login-field-icon"
                            alt="logo"
                          />
                          <input
                            className="form-control np-login-form-field no-spinners custom-input"
                            type="text"
                            id="pin"
                            name="pin"
                            required
                            defaultValue={modifiedNumber}
                            placeholder="মোবাইল নম্বর"
                          />
                        </div>
                      </div>
                    )}

                    {
                        buttonSHow && <button type="submit" className="btn login-btn w-100 mt-2">{showVarify ? "ওটিপি পাঠান" : "তথ্য যাচাই করুন"}</button>
                    }

                    <div className="form-group my-2">
                      <p className="mb-1 text-center">
                        <Link
                          to="/login"
                          className="forget-password"
                          style={{ color: '#428F92', fontSize: '14px' }}
                        >
                          লগইন পেজ এ ফিরে যেতে ক্লিক করুন
                        </Link>
                      </p>
                    </div>
                    
                  </form>

                  :
                    <>
                  {
                    !resetPwd &&
                  
                  <form onSubmit={handleOTPSubmit}>
                    <input type="hidden" name="user_type_id" value="1"/>
                      <div className="form-group mb-1">
                        <label htmlFor="pin" className="login-field-title mb-2">
                        ওটিপি প্রদান করুন
                        </label>
                        <div className="input-group">
                          <img
                            src={pinNumberFieldUserIcon}
                            className="np-login-field-icon"
                            alt="logo"
                          />
                          <input
                            className="form-control np-login-form-field no-spinners custom-input"
                            type="number"
                            autoComplete="off"
                            id="pin"
                            name="pin"
                            required
                            placeholder="OTP"
                          />
                          <input type="hidden" id="caid" name="caid" defaultValue={getCaid} />
                        </div>
                      </div>
                    <button type="submit" className="btn login-btn w-100 mt-3">নিশ্চিত</button>
                  </form>
                  }
                </>

                }

                {
                    resetPwd && <>
                        <form onSubmit={handleNewPaswordSubmit}>
                            <div className="form-group mb-1">
                                <label htmlFor="pin" className="login-field-title mb-2">
                                নতুন পিন দিন
                                </label>
                                <div className="input-group">
                                <img
                                    src={pinNumberFieldUserIcon}
                                    className="np-login-field-icon"
                                    alt="logo"
                                />
                                <input
                                    className="form-control np-login-form-field no-spinners custom-input"
                                    type={showPassword ? "number" : "password"}
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="নতুন পিন দিন"
                                />
                                </div>
                            </div>
                            
                            <div className="form-group mb-1 mt-4">
                                <label htmlFor="pin" className="login-field-title mb-2">
                                নতুন পিনটি পুনরায় দিন
                                </label>
                                <div className="input-group">
                                <img
                                    src={pinNumberFieldUserIcon}
                                    className="np-login-field-icon"
                                    alt="logo"
                                />
                                <input
                                    className="form-control np-login-form-field no-spinners custom-input"
                                    type={showPassword ? "number" : "password"}
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    required
                                    placeholder="নতুন পিনটি পুনরায় দিন"
                                />
                                </div>
                            </div>
                            <input type="hidden" id="caid" name="caid" defaultValue={getCaid} />
                            <button type="submit" className="btn login-btn w-100 mt-3">নিশ্চিত</button>

                            {/* <div className="form-group my-2">
                                <p className="mb-1">
                                    <Link
                                    to="/login"
                                    className="forget-password"
                                    >
                                    লগ ইন করুন
                                    </Link>
                                </p>
                            </div> */}
                                
                        </form>
                    </>
                }

                </div>
              </div>
            </div>
          </div>

        </div>
        {/* bootstrap 5.0.2 min.js */}
      </section>
    </>
  );
};

export default PasswordReset;