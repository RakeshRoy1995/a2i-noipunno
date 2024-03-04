
import "../assets/login_page_materials/login_page.css";
// import "../assets/project_ca_html/css/public.css"
import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import inputFieldUserIcon from "../assets/login_page_materials/icons/user-square.svg";
import pinNumberFieldUserIcon from "../assets/login_page_materials/icons/lock.svg";
import passwordHideEyeIcon from "../assets/login_page_materials/icons/eye-slash.svg";
import mediaFileIcon from "../assets/login_page_materials/new/media-file-svgrepo-com.svg";
import chatIcon from "../assets/login_page_materials/chat.svg";
import listIcon from "../assets/login_page_materials/list.svg";
import supportIcon from "../assets/login_page_materials/support.svg";
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

const LoginPage = () => {
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
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
    localStorage.clear();
    const datas = new FormData(event.target);
    const userId = event.target.caid.value;
    const userPin = event.target.pin.value;

    const password = event.target.password.value;
    console.log(password.length);

    if ((password.length) == 6) {
      try {
        setloading(true)
        seterror("")
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
          seterror("পিন মেলেনি");
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
    //   // console.log("data", data.status);

    //   if (data?.status === true) {
    //     console.log("user Details", data?.data.user);
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

    // console.log("userId_Cookes", userId_Cookes);
    // console.log("userPin_Cookies", userPin_Cookies);
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

  return (
    <>
      <Helmet>
        <title>নৈপুণ্য - লগ ইন</title>
      </Helmet>

      <section id="body" className="login-page">
        <div className="login-bg min-vh-100 position-relative">
          {/* <div className="marque-notification pointer" onClick={redirect} >
            <div className="marquee-container">
              <div className="marquee-content">
                প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে{" "}
                এখানে ক্লিক করুন
              </div>
            </div>
          </div> */}


          <div className="container-fluid login-container">
            <div className="row">
              <div className="col-sm-12 col-md-6">

                <div className="card transparent-card mb-3">
                  <div className="logo text-center">
                    <img src={noipunnoLogo} style={{ width: '130px', height: '130px' }} alt="" />
                  </div>
                  <div className="card-body-custom">
                    <div id="carouselExampleIndicators" className="carousel slide mb-0" data-bs-ride="carousel">
                      <ol className="carousel-indicators mb-0">
                        <li style={{ width: '15px', height: '15px', backgroundColor: '#92278f', borderRadius: '50%', marginBottom: '0px' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="" aria-label="Slide 1"></li>
                        <li style={{ width: '15px', height: '15px', backgroundColor: '#92278f', borderRadius: '50%' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></li>
                        <li style={{ width: '15px', height: '15px', backgroundColor: '#92278f', borderRadius: '50%' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className=""></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item">
                          <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                            সকলের অবগতির জন্য জানানো যাচ্ছে যে, বর্তমানে ব্রাঞ্চ, শিফট, ভার্সন, সেকশন, শিক্ষক ও বিদ্যালয়ের তথ্য আপডেট করা যাবে এবং বিষয় শিক্ষক নির্বাচন করতে হবে। বিদ্যালয়ের তথ্য সম্পাদনা করে বোর্ড নির্বাচন করতে হবে। সবার সহযোগিতার জন্য ধন্যবাদ।
                          </p>
                          <br/>
                        </div>
                        <div className="carousel-item active">
                          <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                            আগামী (সম্ভাব্য) ২০ জানুয়ারি থেকে নতুন ২০২৪ শিক্ষাবর্ষের শিক্ষক ও শিক্ষার্থী ব্যবস্থাপনার কাজ করা যাবে। এই সময়ের আগে অর্থাৎ ১৯ জানুয়ারি পর্যন্ত আপনারা কেউ নতুন শিক্ষাবর্ষের শিক্ষার্থী শিক্ষক বা এমন কোন তথ্য প্যানেলে যুক্ত করবেন না।
                          </p>
                          <br/>
                        </div>
                        <div className="carousel-item">
                          <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                            শুধুমাত্র ২০২৩ শিক্ষাবর্ষের তথ্য চাইলে যোগ করতে পারেন। যদি ২০২৪ শিক্ষাবর্ষের কোন তথ্য নির্ধারিত তারিখের আগে প্যানেলে যুক্ত করেন তাহলে 20 তারিখের পরবর্তী সময়ে সেগুলো আর সিস্টেমে দেখা যাবে না।
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="footer-card-custom d-flex justify-content-center">
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="text-center bn text-light" style={{ fontSize: '17px' }}> হেল্প ডেস্ক: &nbsp;</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={supportIcon} data-bs-toggle="modal" data-bs-target="#exampleModal1" className="card-footer-image" alt="Logo 1" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={listIcon} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="card-footer-image" alt="Logo 2" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={chatIcon} data-bs-toggle="modal" data-bs-target="#exampleModal3" className="card-footer-image" alt="Logo 3" />
                    </div>
                    <div>

                      <p className="text-center bn">
                        &nbsp; <Link to="#" className="text-light" style={{ fontSize: '17px', textDecoration: 'underline' }}> গোপনীয়তার নীতিমালা </Link>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-sm-12 col-md-6 order-mobile-first">
                <div className="card loginCard max-width-540 login-card-padding m-auto mt-0">
                  <p className="login-title text-center mb-3">লগ ইন</p>
                  {error && <div className="alert alert-danger text-white">{error}</div>}

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
                          placeholder="আপনার ইউজার আইডি দিন"
                          name="caid"
                          id="caid"
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
                          placeholder="আপনার পিন দিন"
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
                    <button type="submit" disabled={loading} className="btn login-btn w-100 mt-2">
                      লগ ইন করুন {loading && "loading......"}
                    </button>
                    <div className="form-group">
                      <p className="mb-0 mt-3 text-center">
                        <Link
                          to="/password/reset"
                          className="forget-password"
                          style={{ color: '#428F92', fontSize: '16px' }}
                        >
                          পিন ভুলে গেছেন? এখানে ক্লিক করুন
                        </Link>
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

      <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content" style={{ border: 'none' }}>
            <div className="modal-header bg-success text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">যোগাযোগ</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
              {/* <div className="">
                  <h5 className="bn">নাম্বার: +৮৮০ ১৮৪১১১৭০০১</h5>
                  <h5 className="mt-2"><span className="bn">ইমেইল: </span> <span style={{ fontFamily: 'arial' }}>support@report.gov.bd</span></h5>
              </div>         */}

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">সিরিয়াল</th>
                    <th scope="col">জেলার নাম</th>
                    <th scope="col">মোবাইল নাম্বার (স্কুল)</th>
                    <th scope="col">মোবাইল নাম্বার (মাদ্রাসা)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">১</th>
                    <td>বাগেরহাট</td>
                    <td>০১৭১২৬৮৮১৬১৬</td>
                    <td>০১৯১২৮১৯৪৩৫</td>
                  </tr>
                  <tr>
                    <th scope="row">২</th>
                    <td>বান্দরবান</td>
                    <td>০১৭৩৯৩৪৫৮৭৮</td>
                    <td>০১৮১৫৫৭২১৮২</td>
                  </tr>
                  <tr>
                    <th scope="row">৩</th>
                    <td>বরগুনা</td>
                    <td>০১৭১৮১৬৫৯২০</td>
                    <td>০১৭১৮১৬৫৯২০</td>
                  </tr>
                  <tr>
                    <th scope="row">৪</th>
                    <td>বরিশাল</td>
                    <td>০১৭৫৭৫৮৫৯৯২</td>
                    <td>০১৭২৫৫৪৭৯২১</td>
                  </tr>
                  <tr>
                    <th scope="row">৫</th>
                    <td>ভোলা</td>
                    <td>০১৭৩৪০৫৬৮৪৭</td>
                    <td>০১৭২৭৫২৩৪১৬</td>
                  </tr>
                  <tr>
                    <th scope="row">৬</th>
                    <td>বগুড়া</td>
                    <td>০১৮৩৩৭৯৪১২৪</td>
                    <td>০১৭২৩২৮১৫৩২</td>
                  </tr>
                  <tr>
                    <th scope="row">৭</th>
                    <td>ব্রাহ্মণবাড়িয়া</td>
                    <td>০১৬০১৯৩৬৫৬১</td>
                    <td>০১৭৪৭৯৪২৯৪৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৮</th>
                    <td>চাঁদপুর</td>
                    <td>০১৯১৩৬৩৪৫৫০</td>
                    <td>০১৮১৪৯৭৮৩৭০</td>
                  </tr>
                  <tr>
                    <th scope="row">৯</th>
                    <td>চট্টগ্রাম</td>
                    <td>০১৮১৮১২৭১৩৩</td>
                    <td>০১৮১৮৪৩৩৪৮৬</td>
                  </tr>
                  <tr>
                    <th scope="row">১০</th>
                    <td>চুয়াডাঙ্গা</td>
                    <td>০১৭১৬১০৪২০২</td>
                    <td>০১৭১৯৯৬৯৯৬৮</td>
                  </tr>
                  <tr>
                    <th scope="row">১১</th>
                    <td>কক্সবাজার</td>
                    <td>০১৯৭৩২৭৬৮৮৭</td>
                    <td>০১৮২০১০২৪৩৯</td>
                  </tr>
                  <tr>
                    <th scope="row">১২</th>
                    <td>কুমিল্লা</td>
                    <td>০১৬৪৭৩৭৩৭৫৭</td>
                    <td>০১৮৫৪৬০১১২৪</td>
                  </tr>
                  <tr>
                    <th scope="row">১৩</th>
                    <td>ঢাকা</td>
                    <td>০১৭১৬১৫৮২৪৭</td>
                    <td>০১৭১৫২৫৭৬২৯</td>
                  </tr>
                  <tr>
                    <th scope="row">১৪</th>
                    <td>দিনাজপুর</td>
                    <td>০১৭২৮৮৬৬৪৮৪</td>
                    <td>০১৭১৭৭২২২৭৯</td>
                  </tr>
                  <tr>
                    <th scope="row">১৫</th>
                    <td>ফরিদপুর</td>
                    <td>০১৭২১০০১২৫৫</td>
                    <td>০১৭১৬৬৬৮১৮০</td>
                  </tr>
                  <tr>
                    <th scope="row">১৬</th>
                    <td>ফেনী</td>
                    <td>০১৭১৭৮৮১০৮৪</td>
                    <td>০১৮৩০১২৩১৮৫</td>
                  </tr>
                  <tr>
                    <th scope="row">১৭</th>
                    <td>গাইবান্ধা</td>
                    <td>০১৭১৭০১৬১৪০</td>
                    <td>০১৭১৪৫৪৬৪৮১</td>
                  </tr>
                  <tr>
                    <th scope="row">১৮</th>
                    <td>গাজীপুর</td>
                    <td>০১৭২১৯৯৬৬৩৭</td>
                    <td>০১৭১৬০০৩১৫২</td>
                  </tr>
                  <tr>
                    <th scope="row">১৯</th>
                    <td>গোপালগঞ্জ</td>
                    <td>০১৭১১২২২৯৩৪</td>
                    <td>০১৮৮৯৩৬১৭৫০</td>
                  </tr>
                  <tr>
                    <th scope="row">২০</th>
                    <td>হবিগঞ্জ</td>
                    <td>০১৭১১৯১০০১৬</td>
                    <td>০১৭১০৪৫৯৫৮৫</td>
                  </tr>
                  <tr>
                    <th scope="row">২১</th>
                    <td>জামালপুর</td>
                    <td>০১৭১২৭২৫৪৬১</td>
                    <td>০১৯১৪১২০৬৯১</td>
                  </tr>
                  <tr>
                    <th scope="row">২২</th>
                    <td>যশোর</td>
                    <td>০১৯৩৬০১১১০২</td>
                    <td>০১৯৩৬০১১১০২</td>
                  </tr>
                  <tr>
                    <th scope="row">২৩</th>
                    <td>ঝালকাঠি</td>
                    <td>০১৭০৯৯০২৩৬৬</td>
                    <td>০১৭১৮৭০০২৬২</td>
                  </tr>
                  <tr>
                    <th scope="row">২৪</th>
                    <td>ঝিনাইদহ</td>
                    <td>০১৭১৬১০৭৫৭৭</td>
                    <td>০১৫১৬৭১৭৮৩২</td>
                  </tr>
                  <tr>
                    <th scope="row">২৫</th>
                    <td>জয়পুরহাট</td>
                    <td>০১৯১৬৩১৬১৬০</td>
                    <td>০১৯১৭৬৭৭৮৪৪</td>
                  </tr>
                  <tr>
                    <th scope="row">২৬</th>
                    <td>খাগড়াছড়ি</td>
                    <td>০১৫৫৬৭৭১৫৫৫</td>
                    <td>০১৬৯০গা৪৬৫৬</td>
                  </tr>
                  <tr>
                    <th scope="row">২৭</th>
                    <td>খুলনা</td>
                    <td>০১৭১৭০০৬৯১০</td>
                    <td>০১৯১৫৪৫৫২৬২</td>
                  </tr>
                  <tr>
                    <th scope="row">২৮</th>
                    <td>কিশোরগঞ্জ</td>
                    <td>০১৭৫১৬২৬৬৭৯</td>
                    <td>০১৭১২০৭২৭৬২</td>
                  </tr>
                  <tr>
                    <th scope="row">২৯</th>
                    <td>কুড়িগ্রাম</td>
                    <td>০১৭১৭১৭১৭৪১</td>
                    <td>০১৭২১৫১৭৫১৫</td>
                  </tr>
                  <tr>
                    <th scope="row">৩০</th>
                    <td>কুষ্টিয়া</td>
                    <td>০১৭১৯৪৭৮৪২৬</td>
                    <td>০১৭১৪৭৩০৭৯৭</td>
                  </tr>

                  <tr>
                    <th scope="row">৩১</th>
                    <td>লক্ষ্মীপুর</td>
                    <td>০১৭১৭২৯৬১২৮</td>
                    <td>০১৭৮৮৫৭৭৬০৩</td>
                  </tr>
                  <tr>
                    <th scope="row">৩২</th>
                    <td>লালমনিরহাট</td>
                    <td>০১৭১৯০৬৮৯৬০</td>
                    <td>০১৭২৫৪৪৯৯৯৮</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৩</th>
                    <td>মাদারীপুর</td>
                    <td>০১৭১২৭৮৩৯১০</td>
                    <td>০১৯২৩৮৭৩৭৬৬</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৪</th>
                    <td>মাগুরা</td>
                    <td>০১৭২৮২৯৫৮৮৯</td>
                    <td>০১৭১৬৮৮৭৭০৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৫</th>
                    <td>মানিকগঞ্জ</td>
                    <td>০১৭১৩৫২৪৩৭০</td>
                    <td>০১৭২৮৩৭০৪১৭</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৬</th>
                    <td>মেহেরপুর</td>
                    <td>০১৯১৯১৩১৭০০</td>
                    <td>০১৭৯২৪৪০৮৮১</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৭</th>
                    <td>মৌলভীবাজার</td>
                    <td>০১৭১১৪৭৬৮৯৫</td>
                    <td>০১৭১২৩২১৩৪৬</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৮</th>
                    <td>মুন্সিগঞ্জ</td>
                    <td>০১৬৭৫৪৯০০০৫</td>
                    <td>০১৯১১৯৩৯৯১</td>
                  </tr>
                  <tr>
                    <th scope="row">৩৯</th>
                    <td>ময়মনসিংহ</td>
                    <td>০১৭২০৬৮২৫০০</td>
                    <td>০১৭৭৪৯৭৬৯৭৬</td>
                  </tr>
                  <tr>
                    <th scope="row">৪০</th>
                    <td>নওগাঁ</td>
                    <td>০১৭২৮৪৬০০০১</td>
                    <td>০১৭১৬১১৬০৬৬</td>
                  </tr>
                  <tr>
                    <th scope="row">৪১</th>
                    <td>নড়াইল</td>
                    <td>০১৭৩০১৯২৭৪২</td>
                    <td>০১৭২৪৪৩২১৪৬</td>
                  </tr>
                  <tr>
                    <th scope="row">৪২</th>
                    <td>নারায়ণগঞ্জ</td>
                    <td>০১৬৭৮৭১৩৮০৮</td>
                    <td>০১৭২৫৮৩৬৪৯৫</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৩</th>
                    <td>নরসিংদী</td>
                    <td>০১৭১০২৫৬১৮৪</td>
                    <td>০১৭১০৮৩৭১১৭</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৪</th>
                    <td>নাটোর</td>
                    <td>০১৭৮৩০৭০৩০৮</td>
                    <td>০১৮৫৩৫৭৫৭৩৫</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৫</th>
                    <td>চাঁপাই নবাবগঞ্জ</td>
                    <td>০১৭৩৭২৭২৩০৮</td>
                    <td>০১৭১৫৮৪৪৩৮৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৬</th>
                    <td>নেত্রকোনা</td>
                    <td>০১৭১১১২৯৭০৯</td>
                    <td>০১৭১৯৫২৩২৭৭</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৭</th>
                    <td>নীলফামারী</td>
                    <td>০১৭২২৬৭৮৫৫৩</td>
                    <td>০১৭১৯৫৪৫৩২২</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৮</th>
                    <td>নোয়াখালী</td>
                    <td>০১৮১৫৩২৫৩২৩</td>
                    <td>০১৮৩৭৫২৭৯৯</td>
                  </tr>
                  <tr>
                    <th scope="row">৪৯</th>
                    <td>পাবনা</td>
                    <td>০১৭১০৭৯৭৮৬৮</td>
                    <td>০১৭১৭২৮৯৫৫০</td>
                  </tr>
                  <tr>
                    <th scope="row">৫০</th>
                    <td>পঞ্চগড়</td>
                    <td>০১৭২৩২০৯৭২১</td>
                    <td>০১৭১৯৩৪৭৩৯৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৫১</th>
                    <td>পটুয়াখালী</td>
                    <td>০১৭১২৪১৪০৭৯</td>
                    <td>০১৭৫৪৭৫৫১৬৯</td>
                  </tr>
                  <tr>
                    <th scope="row">৫২</th>
                    <td>পিরোজপুর</td>
                    <td>০১৭৪০৫৮৩২৯২</td>
                    <td>০১৭৩০৯১৮১০৮</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৩</th>
                    <td>রাজবাড়ী</td>
                    <td>০১৭১১২৮৯৯০৮</td>
                    <td>০১৭১৬৪২৬৮৫৩</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৪</th>
                    <td>রাজশাহী</td>
                    <td>০১৭১৮০৬২০২০</td>
                    <td>০১৯১১৮৯৩৪৪৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৫</th>
                    <td>রাঙ্গামাটি</td>
                    <td>০১৮২৭১৮৫৩৯৫</td>
                    <td>০১৭৩৪৩৪৬৫০৩</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৬</th>
                    <td>রংপুর</td>
                    <td>০১৭১৭৫৯০৯৬৭</td>
                    <td>০১৭১৯২৪৫৮১৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৭</th>
                    <td>সাতক্ষীরা</td>
                    <td>০১৭৩৩১৬৩৮৯৫</td>
                    <td>০১৭১৬৮২১৪৬৩</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৮</th>
                    <td>শরীয়তপুর</td>
                    <td>০১৯৮৯৯৫৭৩৬৪</td>
                    <td>০১৭৫১৬২৬৬৭৯</td>
                  </tr>
                  <tr>
                    <th scope="row">৫৯</th>
                    <td>শেরপুর</td>
                    <td>০১৭১২৮৯৬৯০৫</td>
                    <td>০১৭৪০৫৭০৬৬০</td>
                  </tr>
                  <tr>
                    <th scope="row">৬০</th>
                    <td>সিরাজগঞ্জ</td>
                    <td>০১৭৩৭২৩০৯০৪</td>
                    <td>০১৭৩৭২৩০৯০৪</td>
                  </tr>
                  <tr>
                    <th scope="row">৬১</th>
                    <td>সুনামগঞ্জ</td>
                    <td>০১৭৪০৯১৯২০২</td>
                    <td>০১৭১৮৩৪৯০০৮</td>
                  </tr>
                  <tr>
                    <th scope="row">৬২</th>
                    <td>সিলেট</td>
                    <td>০১৭১২৯৬১৮৯২</td>
                    <td>০১৭১১৩০০৪৫৮</td>
                  </tr>
                  <tr>
                    <th scope="row">৬৩</th>
                    <td>টাঙ্গাইল</td>
                    <td>০১৭৪৬২৩৯২৩৭</td>
                    <td>০১৬৮৮৩১৪৭১২</td>
                  </tr>
                  <tr>
                    <th scope="row">৬৪</th>
                    <td>ঠাকুরগাঁও</td>
                    <td>০১৭১৪৫৬৯৬৫০</td>
                    <td>০১৭১৪৫৬৯৬০০</td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" style={{ border: 'none' }}>
            <div className="modal-header bg-success text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">ব্যবহার সহায়িকা</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {/*                 
                <div className="col-sm-3">
                  <div className="card custom-card-frontend shadow">
                    <img src="https://www.w3schools.com/css/img_lights.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title text-center">ব্যবহার সহায়িকা (এডমিন)</h5>
                      <div className="btn-center">
                        <a href="https://training.report.gov.bd/User%20manual/RMS%20User%20Manual(Admin).pdf" target="_blank"><button type="button" className="btn btn-outline-success media-btn-custom"><img src={pdfIcon} alt="" style={{ height: '22px', width: '15px' }} /> ডাউনলোড </button></a>       
                      </div>
                    </div>
                  </div>
                </div> */}

                <h6>ব্যবহার সহায়িকা খুব শীঘ্রই আসিতেছে......</h6>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal3" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" style={{ border: 'none' }}>
            <div className="modal-header bg-success text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">আপনার জিজ্ঞাসা</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="accordion accordion-flush d-grid gap-2 py-3" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      ১। কিভাবে শিক্ষকের একাউন্ট আপডেট করবো ?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">সফলভাবে লগ ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর 'আমার প্রোফাইল'-এ ক্লিক করে বর্তমান তথ্যগুলো দেখে নিতে হবে। তারপর 'প্রোফাইল হাল-নাগাদ' বাটনে ক্লিক করে প্রোফাইল হাল-নাগাদ পেজে যেতে হবে। প্রোফাইল হাল-নাগাদ পেজে গেলে আপনি আপনার যাবতীয় তথ্যদি দিয়ে আপনার আপনার প্রোফাইল সহজেই আপডেট করে নিতে পারবেন। বাংলায় নাম আপডেটের ক্ষেত্রে অবশ্যই বাংলা অক্ষরে আপনার পুর্ণ নাম লিখতে হবে। একইভাবে ইংরেজিতে নাম আপডেটের ক্ষেত্রে অবশ্যই ইংরেজি অক্ষরে আপনার পুর্ণ নাম লিখতে হবে।</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      ২। পারদর্শিতার নির্দেশক (PI) কি ?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">প্রতিটি শ্রেণির প্রতিটি বিষয়ের জন্য যে কয়টি একক যোগ্যতা আছে, সেগুলোকে প্রত্যেকটি আলাদা আলাদাভাবে বিশ্লেষণ করে এক বা একাধিক স্পষ্ট পর্যবেক্ষনযোগ্য যে নির্দেশক তৈরী করা হয়েছে সেগুলোই পারদর্শিতার নির্দেশক। কোন একটি পারদর্শিতার নির্দেশক এ শিক্ষার্থী বিভিন্ন মাত্রায় থাকতে পারে, তা পরিমাপের জন্য প্রতিটি পারদর্শিতার নির্দেশক এ শিক্ষার্থীর অবস্থানের তিনটি মাত্রা নির্ধারণ করা হয়েছে।<br />সমগ্র প্রক্রিয়াতে নিচের তিনটি ধাপ রয়েছেঃ<br />ধাপ ১ঃ মূল্যযাচাই পর্ব (শিখনকালীন ও সামষ্টিক) পরিচালনা ও উপাত্ত সংরক্ষণ,<br />ধাপ ২ঃ উপাত্ত বিশ্লেষণ ও ফলাফল গঠন,<br />ধাপ ৩ঃ ফলাফল প্রকাশ বা প্রেরণ। <br />শিক্ষকের কাজ হলো কোন একটি বিষয়ের শ্রেণিভিত্তিক যোগ্যতা অর্জনে শিক্ষার্থী কোন পর্যায়ে আছে তা নির্ধারণ করতে শিখনকালীন মূল্যায়ন এবং সামষ্টিক মূল্যায়ন থেকে তথ্য উপাত্ত নিয়ে পারদর্শিতার নির্দেশকসমূহে তার ইনপুট দেয়া।</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      ৩। আচরণিক নির্দেশক (BI) কি ?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">আচরণিক নির্দেশক মূল্যায়নে আচরণ থেকে প্রত্যেক শিক্ষার্থীকে ০৯ টি বিষয়ের উপরে মূল্যায়ন করা হবে। এক্ষেত্রেও শিক্ষার্থীর অবস্থানের তিনটি মাত্রা নির্ধারণ করা হয়েছে। সমগ্র প্রক্রিয়াতে নিচের তিনটি ধাপ রয়েছেঃ<br />ধাপ ১ঃ মূল্যযাচাই পর্ব (শিখনকালীন ও সামষ্টিক) পরিচালনা ও উপাত্ত সংরক্ষণ;<br />  ধাপ ২ঃ উপাত্ত বিশ্লেষণ ও ফলাফল গঠন;<br />ধাপ ৩ঃ ফলাফল প্রকাশ বা প্রেরণ।<br />শিক্ষকের কাজ হলো কোন একটি বিষয়ের শ্রেণিভিত্তিক যোগ্যতা অর্জনে শিক্ষার্থী কোন পর্যায়ে আছে তা নির্ধারণ করতে শিখনকালীন মূল্যায়ন এবং সামষ্টিক মূল্যায়ন থেকে তথ্য উপাত্ত নিয়ে পারদর্শিতার নির্দেশকসমূহে তার ইনপুট দেয়া।</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapseThree">
                      ৪। কিভাবে মূল্যায়ন করবো ?
                    </button>
                  </h2>
                  <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      সফলভাবে লগ-ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর বিষয় ভিত্তিক তথ্য ও মূল্যায়ন থেকে আপনার পছন্দকৃত বিষয় ক্লিক করুন এরপর পারদর্শিতা মূল্যায়ন অথবা আচরণগত মূল্যায়ন থেকে আপনার প্রয়োজনীয় যে কোনো একটি  নির্বাচন করুন। তারপর শিখনকালীন মূল্যায়ন নির্বাচন করে যে কোনো একটি অধ্যায় থেকে একটি এট্রিবিউট নির্বাচন করুন। এরপর আপনার ইচ্ছাকৃত যে কোনো একটি শিক্ষার্থীর ওয়েট নির্বাচন করে মূল্যায়ন সংরক্ষণ বাটন এ চেপে মূল্যায়ন সম্পূর্ণ করুন।
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapseThree">
                      ৫। কিভাবে খসড়া করবো ?
                    </button>
                  </h2>
                  <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      সফলভাবে লগ-ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর বিষয় ভিত্তিক তথ্য ও মূল্যায়ন থেকে আপনার পছন্দকৃত  বিষয় ক্লিক করুন এরপর পারদর্শিতা মূল্যায়ন অথবা আচরণগত মূল্যায়ন থেকে আপনার প্রয়োজনীয় যে কোনো একটি  নির্বাচন করুন। তারপর শিখনকালীন মূল্যায়ন নির্বাচন করে যে কোনো একটি অধ্যায় থেকে একটি এট্রিবিউট নির্বাচন করুন। এরপর আপনার ইচ্ছাকৃত যে কোনো একটি শিক্ষার্থীর মূল্যায়ন করুন এবং নিম্নে খসড়া বাটন চাপুন।
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapseThree">
                      ৬। কিভাবে PI মুল্যায়ন সংরক্ষণ করবো ?
                    </button>
                  </h2>
                  <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      সফলভাবে লগ-ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর বিষয় ভিত্তিক তথ্য ও মূল্যায়ন থেকে আপনার পছন্দকৃত  বিষয় ক্লিক করুন,এরপর পারদর্শিতা মূল্যায়ন  নির্বাচন করুন। তারপর শিখনকালীন মূল্যায়ন নির্বাচন করে যে কোনো একটি অধ্যায় থেকে একটি এট্রিবিউট নির্বাচন করুন। এরপর আপনার ইচ্ছাকৃত যে কোনো একটি শিক্ষার্থীর ওয়েট নির্বাচন করে মূল্যায়ন সংরক্ষণ বাটন এ চেপে মূল্যায়ন সম্পূর্ণ করুন।
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default LoginPage;
