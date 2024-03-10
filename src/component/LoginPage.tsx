import "../assets/login_page_materials/login_page.css";
// import "../assets/project_ca_html/css/public.css"
import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import inputFieldUserIcon from "../assets/login_page_materials/icons/user-square.svg";
import pinNumberFieldUserIcon from "../assets/login_page_materials/icons/lock.svg";
import passwordHideEyeIcon from "../assets/login_page_materials/hidden.png";
import passwordShowEyeIcon from "../assets/login_page_materials/eye.png";
import mediaFileIcon from "../assets/login_page_materials/new/media-file-svgrepo-com.svg";
import pdfIcon from "../assets/login_page_materials/new/pdf-svgrepo-com.svg";
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
import { Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion"
import LoginPageCommonLeft from "./LoginPageCommonLeft";
import LoginPageModalCommon from "./LoginPageModalCommon";
import tippy from "tippy.js";

const LoginPage = () => {
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [savePin, setSavePin] = useState(false);
  const [userId, setUserId] = useState('');
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
    localStorage.clear();
    const datas = new FormData(event.target);
    const userId = event.target.caid.value;
    const userPin = event.target.pin.value;

    const password = event.target.password.value;
    //// console.log(password.length);

    if ((password.length) == 6) {
      try {
        setloading(true)
        seterror("")
        const { data }: any = await loginPassword(datas);
        // // console.log("data", data.status);

        if (data?.status === true) {
          //// console.log("user Details", data?.data.user);
          const token = data?.data?.access_token;
          localStorage.setItem("customer_login_auth", JSON.stringify(data?.data));
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          window.location.assign("/");
        } else {
          //seterror("আপনার ইউজার অথবা পিনটি ভুল হয়েছে। অনুগ্রহ করে সঠিক ইউজার এবং পিন দিন।");
          seterror(data.message);
        }
        setloading(false)
      } catch (error) {
        seterror(
          error?.response?.data?.error?.message ||
          error?.response?.data?.error ||
          "Something went wrong!"
        );
        setloading(false)
      }
    } else {
      seterror("পিন অবশ্যই ছয় অক্ষরের হতে হবে!");
    }


    if (savePin) {
      setCookie("userId", userId, 7);
      setCookie("userPin", userPin, 7);
    }

    // try {
    //   setloading(true)
    //   seterror("")
    //   const { data }: any = await loginPassword(datas);
    //   // // console.log("data", data.status);

    //   if (data?.status === true) {
    //     // console.log("user Details", data?.data.user);
    //     const token = data?.data?.access_token;
    //     localStorage.setItem("customer_login_auth", JSON.stringify(data?.data));
    //     localStorage.setItem("token", token);
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //     window.location.assign("/");
    //   } else {
    //     seterror("পিন মেলেনি");
    //   }
    //   setloading(false)
    // } catch (error) {
    //   seterror(
    //     error?.response?.data?.error?.message ||
    //     error?.response?.data?.error ||
    //     "Something went wrong!"
    //   );
    //   setloading(false)
    // }


  };

  useEffect(() => {
    const userId_Cookes = getCookie("userId");
    const userPin_Cookies = getCookie("userPin");
    localStorage.removeItem("customer_login_auth");
    localStorage.removeItem("token");

    // // console.log("userId_Cookes", userId_Cookes);
    // // console.log("userPin_Cookies", userPin_Cookies);
    if (userId_Cookes && userPin_Cookies) {
      setUserId_from_Cookie(userId_Cookes);
      setUserPin_from_Cookie(userPin_Cookies);
    }
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [value, setValue] = useState('');
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    setValue(sanitizedValue); // Update the state with the sanitized value
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
        <title>নৈপুণ্য - লগ ইন</title>
      </Helmet>
      {/* added framer motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <section id="body" className="login-page">

          <div className="login-bg min-vh-100 position-relative" style={{ overflow: 'hidden' }}>
            {/* <div className="marque-notification pointer" onClick={redirect} >
            <div className="marquee-container">
              <div className="marquee-content">
                প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে{" "}
                এখানে ক্লিক করুন
              </div>
            </div>
          </div> */}


            <div className="container login-container">
              <div className="row">
                <div className="col-sm-12 col-md-7 col-xl-8">

                  <LoginPageCommonLeft/>

                </div>

                <div className="col-sm-12 col-md-5 col-xl-4 order-mobile-first">
                  <div className="card loginCard max-width-540 login-card-padding">
                    <p className="login-title text-center mb-4">লগ ইন</p>
                    {error && <div className="alert alert-danger text-white bn">{error}</div>}

                    <form onSubmit={handleSubmit}>

                      <input type="hidden" name="user_type_id" value="1" />

                      <div className="form-group mb-1">
                        <label htmlFor="caid" className="login-field-title mb-2">
                          ইউজার আইডি
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
                            className="form-control np-login-form-field custom-input mb-2"
                            type="text"
                            // value={value}
                            defaultValue={userId_from_Cookie}
                            required
                            autoComplete="off"
                            placeholder="ইউজার আইডি"
                            name="caid"
                            id="caid"
                            onChange={e => setUserId(e.target.value)} 
                            data-tooltip="শিক্ষক হিসেবে লগইন করার জন্য PDSID/INDEX/SGN প্রদান করুন"
                        
                          />
                        </div>
                      </div>

                      <div className="form-group mb-1">
                        <label htmlFor="pin" className="login-field-title mb-2">
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
                            placeholder="123456"
                            data-tooltip="পিন প্রদান করুন"
                            pattern="[0-9]{6}"
                            maxLength={6}
                            value={value}
                            onChange={handleInput}
                          />
                          <div className="input-group-append password-toggle">
                            <span>
                              {showPassword ? (
                                // <i
                                //   onClick={() => setShowPassword(!showPassword)}
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
                      {/* <div className="d-flex gap-2 align-items-center py-3 collect-pin">
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
                    </div> */}
                      <button type="submit" disabled={loading} className="btn login-button mt-3">
                        লগ ইন করুন {loading && "loading......"}
                      </button>
                      <div className="form-group">
                        <p className="mb-0 mt-3 text-center">
                          {
                            userId ?
                            <Link
                              to={`/password/reset/${userId}`}
                              className="forget-password"
                              style={{ color: '#428F92', fontSize: '16px' }}>
                              পিন ভুলে গেছেন? ক্লিক করুন
                            </Link>
                            :
                            <Link
                              to="/password/reset"
                              className="forget-password"
                              style={{ color: '#428F92', fontSize: '16px' }}>
                              পিন ভুলে গেছেন? ক্লিক করুন
                            </Link>
                          }

                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <Modal
            className="mx-auto pl-0"
            show={showModal}
            onHide={handleCloseModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="container text-center">
                নৈপুণ্য’ ওয়েব সম্পর্কিত সচরাচর জিজ্ঞাসিত প্রশ্নের উত্তর
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">

                <div className="d-flex flex-column gap-2 mb-2">
                  <h6 className="fw-semibold"> আপডেট:</h6>

                  <h6 className="fw-semibold">৮ তারিখের পর থেকেও শিক্ষা প্রতিষ্ঠানগুলো ‘নৈপুণ্য’ অ্যাপে ওয়েভ ভার্সনের কাজ করতে পারবেন। যারা SMS পাচ্ছেন না তাদের তথ্য যাচাই শেষে এসএমএস পাবেন। সিস্টেমে কাজ করতে গিয়ে সমস্যা পেলে অনুগ্রহ করে অপেক্ষা করুন।
                  </h6>
                </div>

                <div className="d-flex flex-column gap-3">

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১।</span>
                      <h6 className="fw-semibold">প্রধান শিক্ষকের পিডিএস আইডি না থাকলে নৈপুণ্য ওয়েবে কীভাবে যুক্ত হবেন ?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর:</span>
                      <h6 className="">master.noipunno.gov.bd ক্লিক করলে লগইন লেখার উপরে   প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে এখানে ক্লিক করুন লেখায় ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে ফর্মটি সাবমিট করুন। সময়মত আপনার মোবাইলে এসএসএস পেয়ে যাবেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২।</span>
                      <h6 className="fw-semibold">প্রতিষ্ঠানের ইন (EIIN) নম্বর না থাকলে ‘নৈপুণ্য’ ওয়েবে যুক্ত হওয়া যাবে কি?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">EIIN বিহীন প্রতিষ্ঠানগুলো ‘নৈপুণ্য’ অ্যাপে যুক্ত হতে অপেক্ষা করতে হবে।  কর্তৃপক্ষের নির্দেশনার পাওয়ার পরে যুক্ত হতে পারেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-2">
                    <div className="d-flex gap-1">
                      <span>৩।</span>
                      <h6 className="fw-semibold"> কিছু প্রাথমিক বিদ্যালয়ে ষষ্ঠ-অষ্টম শ্রেণিতে পাঠদান করা হচ্ছে। সেসব স্কুলের প্রধান শিক্ষকের PDS নম্বর নেই। তারা SMS পাননি। এসব স্কুলগুলো কীভাবে লগইন করবেন?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        প্রাথমিক বিদ্যালয়গুলো প্রাথমিক শিক্ষা অধিদপ্তরের অধীন। এ ব্যাপার পরবর্তী নির্দেশনার জন্য অপেক্ষা করতে হবে।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>৪।</span>
                      <h6 className="fw-semibold">
                        প্রাথমিক বিদ্যালয়গুলো প্রাথমিক শিক্ষা অধিদপ্তরের অধীন। এ ব্যাপার পরবর্তী নির্দেশনার জন্য অপেক্ষা করতে হবে।
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        master.noipunno.gov.bd ক্লিক করলে লগইন পেজে গুগল লিংক দেখতে পাবেন। সেখানে  প্রয়োজনীয় তথ্য দিয়ে ফর্মটি সাবমিট করুন। সময়মত আপনার মোবাইলে এসএসএস পেয়ে যাবেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>৫।</span>
                      <h6 className="fw-semibold">

                        যে সকল প্রতিষ্ঠানের প্রধান শিক্ষক নেই, ভারপ্রাপ্ত প্রধান আছে তারা কী করবেন?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        master.noipunno.gov.bd ক্লিক করলে লগইন লেখার উপরে   প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে এখানে ক্লিক করুন লেখায় ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে ফর্মটি সাবমিট করুন। সময়মত আপনার মোবাইলে এসএসএস পেয়ে যাবেন।
                      </h6>
                    </div>
                  </section>


                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>৬।</span>
                      <h6 className="fw-semibold">

                        শিক্ষকদের পদবী নিয়ে খুব সমস্যা হচ্ছে।  এখানে সিনিয়র শিক্ষক এর কোন পদবী নাই। এটি যুক্ত করার জন্য বিনীতভাবে অনুরোধ করছি।
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        যুক্ত করা হয়েছে।
                      </h6>
                    </div>
                  </section>


                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>৭। </span>
                      <h6 className="fw-semibold">
                        আমার মাদ্রাসার EIIN নাই, সেক্ষেত্রে নৈপুণ্য ওয়েবসাইটে কীভাবে যুক্ত হবো?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        EIIN বিহীন প্রতিষ্ঠানগুলো ‘নৈপুণ্য’ অ্যাপে যুক্ত হতে অপেক্ষা করতে হবে।  কর্তৃপক্ষের নির্দেশনার পাওয়ার পরে যুক্ত হতে পারেন।
                      </h6>
                    </div>
                  </section>





                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>৮।</span>
                      <h6 className="fw-semibold">
                        বিষয় শিক্ষক যুক্ত করা হয়েছে এবং লগইন করে পরবর্তীতে যখন লগইন করা তখন ৪০৩ এরোর আসে। করণীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        অনেক সময় ইন্টারনেটের গতি ভাল না হলে ডাটা লোড হতে দেরি হয়ে। তখন ৪০৩ সমস্যা দেখাতে পারে।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>৯।</span>
                      <h6 className="fw-semibold">
                        গুগল ফর্ম ফিলাপ করে অপেক্ষা করতে হচ্ছে। কখন ‘পিন’ ও ‘উইজার আইডি’ পাওয়া যাবে। জেলা এবং উপজেলা অফিস জানতে চাচ্ছে।
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        অপেক্ষা করুন, ধারাবাহিকভাবে আবেদনকারী সকল প্রতিষ্ঠান প্রধানের মোবাইলে ‘পিন’ ও ‘উইজার আইডি’  পৌছে যাবে।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১০।</span>
                      <h6 className="fw-semibold">
                        গুগল ফরম পূরণ করা হয়েছে, কিন্তু SMS আসেনি। কী করব?

                        অথবা,

                        আমার প্রতিষ্ঠান প্রধান এর PDS আইডি ও ডিফল্ট পিন দিয়েও লগইন হয়নি। গুগল ফর্ম পূরন করে দিয়েছি। এখনো কোন মেসেজ পাইনি। কি করা যায়?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        অপেক্ষা করুন, ধারাবাহিকভাবে আবেদনকারী সকল প্রতিষ্ঠান প্রধানের মোবাইলে ‘পিন’ ও ‘উইজার আইডি’  পৌছে যাবে।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১১।</span>
                      <h6 className="fw-semibold">
                        প্রতিষ্ঠান প্রধানের মোবাইল নম্বর, ইমেইল ঠিকানা এডিট করা যাচ্ছে না করনীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        লগইন হয়ে থাকলে বিভিন্ন ব্যবস্থাপনার কাজগুলো সম্পাদন করুন। সময় হলে সংশ্লিষ্ট বিষয়গুলো এডিট করতে পারবেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১২।</span>
                      <h6 className="fw-semibold">
                        ‘স্কুল এন্ড কলেজ’ প্রতিষ্ঠানসমুহ ‘নৈপূণ্য’ অ্যাপের ‘ইউজার আইডি’ পাইনি তাহলে করনীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        master.noipunno.gov.bd ক্লিক করলে লগইন লেখার উপরে   প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে এখানে ক্লিক করুন লেখায় ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে ফর্মটি সাবমিট করুন। সময়মত আপনার মোবাইলে এসএসএস পেয়ে যাবেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১৩।</span>
                      <h6 className="fw-semibold">
                        কারিগরী শিক্ষা প্রতিষ্ঠানসমুহ নৈপূন্য অ্যাপের ইউজার আইডি কখন পাব ?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        এজন্য অপেক্ষা করতে হবে। কর্তৃপক্ষের সিদ্ধান্তের জন্য অপেক্ষা করতে হবে।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১৪।</span>
                      <h6 className="fw-semibold">
                        আমাদের মাদ্রাসার প্রতিষ্ঠান প্রধানের মোবাইলে কোন আইডি ও পিন নাম্বার আসে নি। করণীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        আগামী সপ্তাহে আপনাদের ফোনে ইউজার আইডি ও পিন নাম্বার পাবেন। অনুগ্রহ করে ধৈর্য্য ধরুন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span> ১৫।</span>
                      <h6 className="fw-semibold">
                        টেকনিক্যাল স্কুলের প্রতিষ্ঠান প্রধানের মোবাইলে কোন আইডি ও পিন নাম্বার আসে নি। করণীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        টেকনিক্যাল স্কুলের জন্য নৈপুণ্য অ্যাপের আপাতত প্রয়োজন নাই।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১৬।</span>
                      <h6 className="fw-semibold">
                        আমাদের প্রতিষ্ঠান ইআইআইএন বিহীন। আমরা কীভাবে অ্যাপে যুক্ত হবো?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        আপনাদের জন্য কাজ চলমান। আগামী ২/১ দিনের মধ্যে আপনারা অ্যাপে লগইন করতে পারবেন। উপজেলা শিক্ষা অফিসারের মাধ্যমে অ্যাপ্রুভ হবেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১৭। </span>
                      <h6 className="fw-semibold">
                        আমাদের বিদ্যালয় সরকারি প্রাথমিক বিদ্যালয়। আমাদের স্কুলে অষ্টম শ্রেণি পর্যন্ত পাঠদান করা হয়। আমরা কোন এসএমএস পাই নি। আমাদের করণীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        আপনাদের জন্য কাজ চলমান। ২/১ দিনের মধ্যেই এসএমএস পাবেন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১৮।</span>
                      <h6 className="fw-semibold">
                        ৮ নভেম্বর ডাটা ইনপুটের শেষ তারিখ আমরা এত কম সময়ে কীভাবে শিক্ষার্থী তথ্য আপলোড করব?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        তারিখ বাড়ানো হবে। কাজ করতে থাকুন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>১৯। </span>
                      <h6 className="fw-semibold">
                        প্রতিষ্ঠান প্রধান অবসরে গেছেন। ভারপ্রাপ্ত প্রতিষ্ঠান প্রধানের পিডিএস আইডিতে ইউজার নট ফাউন্ড লেখা দেখাচ্ছে।
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        প্রতিষ্ঠানের ইআইআইএন নাম্বার, ভারপ্রাপ্ত প্রতিষ্ঠান প্রধানের পিডিএস নাম্বার, মোবাইল নাম্বারসহ সমস্যাগুলো অ্যাপে দেয়া গুগল ফর্মে লিখে দিন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২০। </span>
                      <h6 className="fw-semibold">
                        আমি গতকাল গুগল ফর্ম পূরণ করেছি। কোন মেসেজ পাই নি।
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        ধারাবাহিকভাবে আমরা মেসেজ পাঠাচ্ছি। অনুগ্রহ পূর্বক অপেক্ষা করুন।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২১। </span>
                      <h6 className="fw-semibold">
                        ২১। প্রতিষ্ঠানে সাধারণত আমরা সম্মানিত টিচাররা যারা কাজ করি, তার বেশিরভাগ শিক্ষকই প্রশিক্ষণে। "নৈপূণ্য" এপসের সকল কাজ করার সময় সীমা বাড়ানোর যাবে কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        জ্বী, ৮ তারিখে পরও নৈপূণ্যে শিক্ষক, শিক্ষার্থীর তথ্য দেয়া যাবে।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২২। </span>
                      <h6 className="fw-semibold">
                        আমি শ্রেণি শিক্ষক বা বিষয় ভিত্তিক সহকারী শিক্ষক হিসেবে লগ ইন করতে পারতেছি না। এক্ষেত্রে করণীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        প্রথমত আপনার প্রতিষ্ঠান পর্যায়ের রেজিষ্ট্রেশনের কার্যক্রমসমূহ সম্পন্ন করুন পরবর্তিতে সহকারী শিক্ষক পর্যায়ে সমস্যার সমাধান হবে। দয়া করে অপেক্ষা করুন ।
                      </h6>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২৩।</span>
                      <h6 className="fw-semibold">
                        প্রধান শিক্ষক অন্য প্রতিষ্ঠান থেকে নতুন যোগদান করেছেন কিন্তু এখনো এমপিও হয়নি, করনীয় কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        master.noipunno.gov.bd ক্লিক করলে লগইন লেখার উপরে   প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে এখানে ক্লিক করুন লেখায় ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে ফর্মটি সাবমিট করুন। সময়মত আপনার মোবাইলে এসএসএস পেয়ে যাবেন।
                      </h6>
                    </div>
                  </section>
                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২৪।</span>
                      <h6 className="fw-semibold">
                        গুগল ফর্ম এর রিপ্লাই পেতে লেট হওয়ার কারণ কী?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        আমরা যেমনটা ভাবছি, বিষয়টা সেইরকম না যে ফর্ম সাবমিট করার সাথে সাথেই সবাই রিপ্লাই পেয়ে যাবেন। আসলে, ফর্মটা সাবমিট হওয়ার পর ব্যাক এন্ডে যে টিম কাজ করে যাচ্ছেন, তারা ঐ স্কুলের সকল ডেটা চেক করে দেখছেন, সবকিছু যাচাই-বাছাই পূর্বক রিপ্লাই দিচ্ছেন,তাই একটু লেট হচ্ছে। মনে করুন, এক প্রতিষ্ঠান থেকে একাধিক শিক্ষক গুগল ফর্ম সাবমিট করে দিলো! যদি এমন হতো ফর্ম সাবমিটের পর সাথে সাথেই একটা আইডি ও পিন রিপ্লাইতে চলে যাবে তাহলে, একাধিক পিন ও আইডি চলে যেতে পারে ঐ প্রতিষ্ঠানে। বিষয়টা খুবই গুরুত্বপপূর্ণ।
                      </h6>
                    </div>
                  </section>
                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২৫।</span>
                      <h6 className="fw-semibold">
                        মোবাইলে নৈপুণ্য অ্যাপ ডাউনলোড করা যাচ্ছে না, কী করতে পারি?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        নৈপুণ্যের মোবাইল অ্যাপ এখন পর্যন্ত রিলিজ হয়নি। শুধুমাত্র ওয়েবসাইটে লগইন করে শিক্ষক ও শিক্ষার্থীর তথ্য দিতে হবে।
                      </h6>
                    </div>
                  </section>
                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২৬।</span>
                      <h6 className="fw-semibold">
                        ‘Sarver Not Found’ লিখা আসছে কেন?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        আপনার কম্পিউটারে ইন্টারনেটের স্পিড কম থাকলে এমন ম্যাসেজ আসতে পারে।
                      </h6>
                    </div>
                  </section>
                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span>২৭।</span>
                      <h6 className="fw-semibold">
                        পিন ভুলে গেলে ওটিপি দিলে  ‘PIN Expired’ দেখাচ্ছে কেন?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        ওটিপির মেয়াদ পাঁচ মিনিট অতিক্রান্ত হলে ‘PIN Expired’ দেখাবে। তাই ওটিপি পাওয়ার পাঁচ মিনিটের মধ্যে পিন রিসেট করুন।
                      </h6>
                    </div>
                  </section>
                  <section className="d-flex flex-column gap-1">
                    <div className="d-flex gap-1">
                      <span> ২৮। </span>
                      <h6 className="fw-semibold">
                        এমএমএস না পেলে কোনো অফিসে গেলে কি সরাসরি সহায়তা পাওয়া যাবে?
                      </h6>
                    </div>

                    <div className="d-flex gap-1">
                      <span className="fw-semibold">উত্তর-</span>
                      <h6 className="">
                        না। কোন অফিস থেকে সরাসরি সহায়তা দেয়া হয় না। বিচলিত না হয়ে ধৈর্য্য সহকারে অপেক্ষা করুন। প্রতিষ্ঠান লগইনের সময় বাড়ানো হবে। গুগল ফর্মে আবেদিত সকলের নিকট একে একে এসএমএস যাবে।
                      </h6>
                    </div>
                  </section>

                </div>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                বন্ধ করুন
              </Button>
            </Modal.Footer>
          </Modal>

        </section>

        <LoginPageModalCommon/>

      </motion.div>
    </>
  );
};

export default LoginPage;