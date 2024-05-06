
import "../assets/login_page_materials/login_page.css";
import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import inputFieldUserIcon from "../assets/login_page_materials/icons/user-square.svg";
import pinNumberFieldUserIcon from "../assets/login_page_materials/icons/lock.svg";
import passwordHideEyeIcon from "../assets/login_page_materials/hidden.png";
import passwordShowEyeIcon from "../assets/login_page_materials/eye.png";
import govtLogo from "../assets/login_page_materials/icons/Vector.png";
import nctbLogo from "../assets/login_page_materials/icons/NCTB_logo.png";
import unicef from "../assets/login_page_materials/icons/Logo_Signature_Container_Circle_ENG_RGB-300x300 1.png";
import A2I from "../assets/login_page_materials/icons/Aspire_to_Innovate_Seal 2.svg";
import { Helmet } from "react-helmet";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { userInfo, resetPassword, otpComfirm, changePin } from "../Request";
import PopUpAppInfo from "./PopUpAppInfo/PopUpAppInfo";
import LoginPageCommonLeft from "./LoginPageCommonLeft";
import LoginPageModalCommon from "./LoginPageModalCommon";
import tippy from "tippy.js";

const PasswordReset = () => {

  const [error, seterror] = useState("");
  const [msg, setmsg] = useState("");
  const [phone, setPhone] = useState("");
  // email
  const [email, setEmail] = useState("")
  const [otpVerify, setshoOtpVarify] = useState(null);
  const [showVarify, setshowVarify] = useState(false);
  const [buttonSHow, setbuttonSHow] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [otpSubmit, setOtpSubmitButton] = useState(false);
  const [resetPwd, setResetPassword] = useState(false);
  const [getCaid, setCaid] = useState('');
  const [contactMethod, setContactMethod] = useState("mobile"); // Default to mobile

  const { getUserId } = useParams();
  // clg
  // console.log(getUserId);
  const [userId_from_Cookie, setUserId_from_Cookie] = useState("");

  if (getUserId) {
    async function fetchData() {
      try {
        const { data }: any = await userInfo(getUserId);

        setPhone(data.data.phone_no);
        setEmail(data.data.email);
        setCaid(data.data.caid);
        //seterror("");
        setUserId_from_Cookie(getUserId);
        setshowVarify(true);
        setshoOtpVarify(true);
      } catch (error) {
        setUserId_from_Cookie(getUserId);
        seterror("এই ইউজার আইডি খুজে পাওয়া যায়নি");
      }
    }
    fetchData();
  }
  // clg
  // handle form submit
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    setmsg("")
    seterror("")

    const caId = event.target.caid.value;

    if (!otpVerify) {
      try {
        const { data }: any = await userInfo(caId);
        setPhone(data.data.phone_no);
        setEmail(data.data.email);
        setCaid(data.data.caid);
        seterror("");
        setshowVarify(true);
        setshoOtpVarify(true);
        setUserId_from_Cookie(caId);
      } catch (error) {
        seterror("এই ইউজার আইডি খুজে পাওয়া যায়নি");
      }

    } else {
      const selectedOtpOption = contactMethod === "mobile" ? 1 : 2; // 1 for mobile, 2 for email
      datas.append("otp_send_option", selectedOtpOption as any);
      //alert('otp sending..')
      const { data }: any = await resetPassword(datas);
      //// console.log(data);
      if (data?.status === true) {
        setmsg(data.message)
        setbuttonSHow(false)
        setOtpSubmitButton(true)
      } else {
        seterror("এই ইউজার আইডি খুজে পাওয়া যায়নি");
      }
    }
  }

  const handleOTPSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);

    //const pin = event.target.pin.value;
    //setmsg("")
    //seterror("")
    //alert(pin);
    try {
      const { data }: any = await otpComfirm(datas);
      if (data?.status === true) {
        setbuttonSHow(false)
        setshowVarify(false)
        setOtpSubmitButton(true)
        setResetPassword(true)
        setmsg("")
        seterror("");
      } else {
        seterror("আপনার ওটিপিটি সঠিক নয়।");
      }
    } catch (error) {
      seterror("আপনার ওটিপিটি সঠিক নয়।");
      // // console.log(`error`, error);
    }
  }

  const handleNewPaswordSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    setmsg("")
    seterror("")

    const password = event.target.password.value;
    const password_confirmation = event.target.password_confirmation.value;

    if (password.length == 6) {
      if (password === password_confirmation) {
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
      } else {
        seterror("নতুন পিন এবং পুনরায় পিন মিল নেই।");
      }
    } else {
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

  // modifiedEmail function
  const modifiedEmail = (email) => {
    if (!email) {
      return "";
    }
    console.log(email);
    const replacedPart = "*".repeat(email.length - 7)
    const visiblePart = email.substring(0, 3) + ".com";
    return visiblePart.substring(0, 3) + replacedPart + visiblePart.substring(visiblePart.length - 4)
  }

  const redirect = () => {
    window.location.href = "https://forms.gle/sFrdsXavPaQryQ6k8";
  };

  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const numberString: string = otp.join('');

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!isNaN(Number(value))) {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Replace non-digit characters with an empty string
    const sanitizedValue = event.target.value.replace(/\D/g, '');
    // Update the input value
    event.target.value = sanitizedValue;
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (password === confirmPassword) {
      seterror('');
    } else {
      seterror('নতুন পিন এবং পুনরায় পিন মিল নেই।');
    }
  };

  const handleBlur = () => {
    if (password === confirmPassword) {
      seterror('');
    } else {
      seterror('নতুন পিন এবং পুনরায় পিন মিল নেই।');
    }
  };

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
    <>
      <Helmet>
        <title>নৈপুণ্য - রিসেট পিন</title>
      </Helmet>

      <section id="body" className="login-page">
        <div className="login-bg min-vh-100 position-relative" style={{ overflow: 'hidden' }}>
          {/* <div className="marque-notification pointer" onClick={redirect}>
            <div className="marquee-container">
              <div className="marquee-content">
                প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে এখানে ক্লিক
                করুন
              </div>
            </div>
          </div> */}

          <div className="container login-container">

              <div className="logo">
                  <img src={noipunnoLogo} style={{ width: '130px', height: '130px' }} alt="" />
              </div>

            <div className="row">
              <div className="col-sm-12 col-md-7 col-xl-8">
                <LoginPageCommonLeft />
              </div>


              {/*Reset pin start   */}
              <div className="col-sm-12 col-md-5 col-xl-4 order-mobile-first">
                <div className="card loginCard max-width-540 login-card-padding" style={{ maxHeight: '442px', overflowY: 'auto' }}>
                  <p className="login-title text-center mb-3">

                    {
                      resetPwd ? 'রিসেট পিন' : <>
                        {
                          otpSubmit ? 'ওটিপি প্রদান করুন' : <>{showVarify ? "রিসেট পিন" : 'রিসেট পিন'}</>
                        }
                      </>

                    }

                  </p>

                  {msg && <p className="text-center alert alert-info bn" style={{ backgroundColor: '#17A2B8', color: 'white' }}>{msg}</p>}

                  {
                    !otpSubmit ?

                      <form onSubmit={handleSubmit}><input type="hidden" name="user_type_id" value="1" />

                        {
                          showVarify ? <>
                            <div className="text-center alert alert-info mb-3 bn" style={{ backgroundColor: '#17A2B8', color: 'white' }}>
                              নিচের মোবাইল নম্বরটি সঠিক না থাকলে কাস্টমার সাপোর্টে (<a style={{ color: 'white', textDecoration: 'underline' }} href="tel:09638600700">০৯৬৩৮৬০০৭০০</a>) যোগাযোগ করুন। অথবা সাপোর্ট টিকিট তৈরি করতে <a target="_black" href="https://support.noipunno.gov.bd/">এখানে</a>  লিংকে ক্লিক করুন
                            </div>
                          </>
                            :
                            <>
                              {error && <p className="text-center alert alert-danger bn" style={{ backgroundColor: '#17A2B8', color: 'white' }}>{error}</p>}
                            </>
                        }
                        {/* user id field */}
                        <input type="hidden" name="user_type_id" value="1" />
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
                              data-tooltip="শিক্ষক হিসেবে লগইন করার জন্য PDSID/INDEX/SGN প্রদান করুন"
                            />

                          </div>
                        </div>
                        {/* phone number field */}
                        {showVarify && (
                          <>
                            <div className="form-group mb-1 mt-2">
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
                                  placeholder={ modifiedNumber == "" && "আপনি মোবাইল নম্বর প্রদান করেননি"}
                                  disabled
                                />
                              </div>
                            </div>
                          </>
                        )}
                        {/* email field */}
                        {showVarify && (
                          <>
                            <div className="form-group mb-1 mt-2">
                              <label htmlFor="email" className="login-field-title mt-2 mb-2">ইমেইল</label>
                              <div className="input-group">
                                <img src={pinNumberFieldUserIcon} className="np-login-field-icon" alt="logo" />
                                <input
                                  className="form-control np-login-form-field no-spinners custom-input"
                                  type="email"
                                  id="email"
                                  name="email"
                                  required
                                  defaultValue={modifiedEmail(email)}
                                  placeholder={ modifiedEmail(email) == "" && "আপনি ইমেল প্রদান করেননি "}
                                  disabled
                                />
                              </div>
                            </div>

                            {/* option between mobile and email for otp */}
                            <p className="login-field-title mt-2 mb-2">কোন মাধ্যমে ওটিপি পেতে চান?</p>
                            <div className="d-flex gap-2">
                              <input type="radio"
                                id="mobileRadio"
                                name="contactMethod"
                                value="mobile"
                                checked={contactMethod === "mobile"}
                                onChange={(e) => setContactMethod(e.target.value)}
                              />
                              <label htmlFor="mobileRadio">মোবাইল</label>
                              <input type="radio"
                                id="emailRadio"
                                name="contactMethod"
                                value="email"
                                checked={contactMethod === "email"}
                                onChange={(e) => setContactMethod(e.target.value)}
                              />
                              <label htmlFor="emailRadio">ইমেইল</label>
                            </div>
                          </>
                        )}
                        {
                          buttonSHow && <button type="submit" className="btn login-button mt-3">{showVarify ? "ওটিপি পাঠান" : "তথ্য যাচাই করুন"}</button>
                        }


                        {/* return to login page */}
                        <div className="form-group">
                          <p className="mb-1 mt-3 text-center">
                            <Link
                              to="/login"
                              className="forget-password"
                              style={{ color: '#428F92', fontSize: '16px' }}
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
                          <>

                            {error && <p className="text-center alert alert-danger bn" style={{ backgroundColor: '#17A2B8', color: 'white' }}>{error}</p>}

                            <form onSubmit={handleOTPSubmit}>

                              <input type="hidden" name="user_type_id" value="1" />
                              <div className="form-group mb-1">
                                <label htmlFor="pin" className="login-field-title mb-2">
                                  ওটিপি প্রদান করুন
                                </label>
                                <div className="input-group">
                                  {/* <img
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
                                />        */}

                                  <div className="row">
                                    {otp.map((digit, index) => (
                                      <div className="col-sm-3">
                                        <input
                                          key={index}
                                          type="text"
                                          className="form-control"
                                          maxLength={1}
                                          value={digit}
                                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                                          ref={(ref) => ref && (inputRefs.current[index] = ref)}
                                          style={{ float: 'left' }}
                                          required
                                        />
                                      </div>
                                    ))}
                                  </div>

                                  <input type="hidden" value={numberString} id="pin" name="pin" />

                                  <input type="hidden" id="caid" name="caid" defaultValue={getCaid} />
                                </div>
                              </div>
                              <button type="submit" className="btn login-button mt-3">নিশ্চিত</button>

                              <div className="form-group">
                                <p className="mb-1 mt-3 text-center">
                                  <Link
                                    to="/login"
                                    className="forget-password"
                                    style={{ color: '#428F92', fontSize: '16px' }}
                                  >
                                    লগইন পেজ এ ফিরে যেতে ক্লিক করুন
                                  </Link>
                                </p>
                              </div>

                            </form>
                          </>
                        }
                      </>
                  }

                  {
                    resetPwd && <>
                      <form onSubmit={handleNewPaswordSubmit}>
                        {error && <p className="text-center alert alert-danger bn" style={{ backgroundColor: '#17A2B8', color: 'white' }}>{error}</p>}

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
                              className="form-control np-login-form-field custom-input"
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"

                              autoComplete="off"
                              placeholder="নতুন পিন দিন"
                              data-tooltip="৬ (ছয়) ডিজিটের নতুন পিন প্রদান করুন। শুধুমাত্র ইংরেজি সংখ্যা ০ থেকে 9 পর্যন্ত।"
                              maxLength={6}
                              onInput={handleInput}
                              onChange={handlePasswordChange}
                            />
                            <div className="input-group-append password-toggle">
                              <span>
                                {showPassword ? (
                                  // <i
                                  //   onClick={() => setShowPassword(!showPassword)}
                                  //   // id="password-toggle_2"
                                  //   className="fa fa-eye img-fluid"
                                  // />
                                  <img onClick={() => setShowPassword(!showPassword)} src={passwordShowEyeIcon} style={{ width: '20px', height: '22px' }} alt="" />
                                ) : (
                                  // <i
                                  //   onClick={() => setShowPassword(!showPassword)}
                                  //   // id="password-toggle"
                                  //   className="fa fa-eye-slash"
                                  // />
                                  <img onClick={() => setShowPassword(!showPassword)} src={passwordHideEyeIcon} style={{ width: '20px', height: '20px' }} alt="" />
                                )}
                              </span>
                            </div>
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
                              className="form-control np-login-form-field custom-input"
                              type={showPassword2 ? "text" : "password"}
                              id="password_confirmation"
                              name="password_confirmation"

                              placeholder="নতুন পিনটি পুনরায় দিন"
                              data-tooltip="৬ (ছয়) ডিজিটের নতুন পিনটি পুনরায় প্রদান করুন।"
                              maxLength={6}
                              onInput={handleInput}
                              onChange={handleConfirmPasswordChange}
                              onKeyUp={handleBlur}
                            />
                            <div className="input-group-append password-toggle">
                              <span>
                                {showPassword2 ? (
                                  // <i
                                  //   onClick={() => setShowPassword2(!showPassword2)}
                                  //   // id="password-toggle_2"
                                  //   className="fa fa-eye img-fluid"
                                  // />
                                  <img onClick={() => setShowPassword2(!showPassword2)} src={passwordShowEyeIcon} style={{ width: '20px', height: '22px' }} alt="" />
                                ) : (
                                  // <i
                                  //   onClick={() => setShowPassword2(!showPassword2)}
                                  //   // id="password-toggle"
                                  //   className="fa fa-eye-slash"
                                  // />
                                  <img onClick={() => setShowPassword2(!showPassword2)} src={passwordHideEyeIcon} style={{ width: '20px', height: '20px' }} alt="" />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <input type="hidden" id="caid" name="caid" defaultValue={getCaid} />
                        <button type="submit" className="btn login-button mt-3">নিশ্চিত</button>

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
              {/*Reset pin end  */}
            </div>
          </div>

          <LoginPageModalCommon />

          <PopUpAppInfo />

        </div>
        {/* bootstrap 5.0.2 min.js */}
      </section>
    </>
  );
};

export default PasswordReset;
