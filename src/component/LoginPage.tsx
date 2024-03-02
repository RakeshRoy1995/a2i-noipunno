import "../assets/login_page_materials/login_page.css";
// import "../assets/project_ca_html/css/public.css"
import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import inputFieldUserIcon from "../assets/login_page_materials/icons/user-square.svg";
import pinNumberFieldUserIcon from "../assets/login_page_materials/icons/lock.svg";
import passwordHideEyeIcon from "../assets/login_page_materials/icons/eye-slash.svg";
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



      <section id="body" className="login-page login-overflow">

        {/* <div className="">
          <div className="row">
            <div className="col-sm-4">
              <h6 className="text-center bn mt-3" style={{ fontSize: '17px' }}><b><span style={{ color: '#983293' }}>হেল্প ডেস্ক নম্বর:</span>  <a href="tel:09638600700"><span style={{ textDecoration:'underline', color: 'black' }}>০৯৬৩৮৬০০৭০০</span></a></b></h6>
            </div>
            <div className="col-sm-4">
              <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJyc51nkExJh5Zti4RVaeC0OyXWNz6Y5fcO-9zjNxq1kmjOb65EZ6r9jLzPpeyZYeOFyNJAqZeGRum/pubhtml?gid=0&single=true" target="_blank">
                <h6 className="text-center bn mt-3" style={{ fontSize: '17px', color: '#983293', textDecoration:'underline' }}><b>অ্যাপ সংক্রান্ত তথ্যসেবা পেতে জেলাভিত্তিক নির্ধারিত নম্বরসূমহে যোগাযোগ করুন</b></h6>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://docs.google.com/document/d/e/2PACX-1vTfzi4vy5b8RbL0rnIAt8t7stJFN0F70qwTOUM_ZxEyveq794GnjdXzIzd_RY-a0tVQqGdhwAOyd1NQ/pub" target="_blank">
                <h6 className="text-center bn mt-3" style={{ fontSize: '17px', color: '#983293', textDecoration:'underline' }}><b>সচরাচর জিজ্ঞাসা</b></h6>
              </a>
            </div>
          </div>
        </div> */}

        <div className="login-bg min-vh-100 position-relative">
          {/* <div className="marque-notification pointer" onClick={redirect} >
            <div className="marquee-container">
              <div className="marquee-content">
                প্রতিষ্ঠান প্রধান হিসেবে লগইন এসএমএস না পেয়ে থাকলে{" "}
                এখানে ক্লিক করুন
              </div>
            </div>
          </div> */}

          <div className="container-fluid mt-5">
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
                            অনলাইন রিপোর্ট ম্যানেজমেন্ট সিস্টেম বাংলাদেশ সরকারের একটি বৃহৎ তথ্যভান্ডার। যার মাধ্যমে সকল মন্ত্রণালয়, দপ্তর/অধিদপ্তর, বিভাগ, জেলা, উপজেলা, ইউনিয়নের প্রতিবেদন তৈরি, প্রেরণ ও গ্রহণের করা সম্ভব। তৈরিকৃত প্রতিবেদন স্বয়ংকৃতভাবে সংকলিত হয়ে ঊর্ধ্বতন অফিসে প্রেরিত হয়। সিস্টেমটি ব্যবহারে সরকারি কর্মদক্ষতা বৃদ্ধি পাবে, সময় বাঁচবে, খরচ কমবে ও জটিলতা হ্রাস পাবে। সিস্টেমের ড্যাশবোর্ডের মাধ্যমে সরকারের সর্বোচ্চ পর্যায়ে সিদ্ধান্ত গ্রহণে সহায়ক হবে।
                          </p>
                          <br />
                        </div>
                        <div className="carousel-item active">
                          <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                            অনলাইন রিপোর্ট ম্যানেজমেন্ট সিস্টেম বাংলাদেশ সরকারের একটি বৃহৎ তথ্যভান্ডার। যার মাধ্যমে সকল মন্ত্রণালয়, দপ্তর/অধিদপ্তর, বিভাগ, জেলা, উপজেলা, ইউনিয়নের প্রতিবেদন তৈরি, প্রেরণ ও গ্রহণের করা সম্ভব। তৈরিকৃত প্রতিবেদন স্বয়ংকৃতভাবে সংকলিত হয়ে ঊর্ধ্বতন অফিসে প্রেরিত হয়। সিস্টেমটি ব্যবহারে সরকারি কর্মদক্ষতা বৃদ্ধি পাবে, সময় বাঁচবে, খরচ কমবে ও জটিলতা হ্রাস পাবে। সিস্টেমের ড্যাশবোর্ডের মাধ্যমে সরকারের সর্বোচ্চ পর্যায়ে সিদ্ধান্ত গ্রহণে সহায়ক হবে।
                          </p>
                          <br />
                        </div>
                        <div className="carousel-item">
                          <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                            অনলাইন রিপোর্ট ম্যানেজমেন্ট সিস্টেম বাংলাদেশ সরকারের একটি বৃহৎ তথ্যভান্ডার। যার মাধ্যমে সকল মন্ত্রণালয়, দপ্তর/অধিদপ্তর, বিভাগ, জেলা, উপজেলা, ইউনিয়নের প্রতিবেদন তৈরি, প্রেরণ ও গ্রহণের করা সম্ভব। তৈরিকৃত প্রতিবেদন স্বয়ংকৃতভাবে সংকলিত হয়ে ঊর্ধ্বতন অফিসে প্রেরিত হয়। সিস্টেমটি ব্যবহারে সরকারি কর্মদক্ষতা বৃদ্ধি পাবে, সময় বাঁচবে, খরচ কমবে ও জটিলতা হ্রাস পাবে। সিস্টেমের ড্যাশবোর্ডের মাধ্যমে সরকারের সর্বোচ্চ পর্যায়ে সিদ্ধান্ত গ্রহণে সহায়ক হবে।
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
                      <p className="text-center bn text-light" style={{ fontSize: '18px' }}>হেল্প ডেস্ক: </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src="https://training.report.gov.bd/login_new/assets/support.svg" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="card-footer-image" alt="Logo 1" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src="https://training.report.gov.bd/login_new/assets/list.svg" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="card-footer-image" alt="Logo 2" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src="https://training.report.gov.bd/login_new/assets/chat.svg" data-bs-toggle="modal" data-bs-target="#exampleModal3" className="card-footer-image" alt="Logo 3" />
                    </div>
                    <div>
                      {/* <p className="text-center bn">
                        <a href="https://training.report.gov.bd/privacy-policy" className="text-light" style={{ fontSize: '18px', textDecoration: 'underline' }} target="_blank">গোপনীয়তার নীতিমালা</a>
                      </p> */}
                      <p className="text-center bn">
                        <a href="#" className="text-light" style={{ fontSize: '18px', textDecoration: 'underline' }} target="_blank">গোপনীয়তার নীতিমালা</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-sm-12 col-md-6">
                <div className="card loginCard max-width-540 login-card-padding m-auto mt-3">
                  <p className="login-title text-center mb-3">লগ ইন</p>
                  {error && <div className="alert alert-danger text-white">{error}</div>}

                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="user_type_id" value="1" />
                    <div className="form-group mb-2">
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
                      <label htmlFor="pin" className="login-field-title mt-2 mb-2">
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
                            <i id="password-toggle_2" className="fa fa-eye"></i>
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

                    <div className="form-group my-2">
                      <p className="mt-2 mb-1 p-3">
                        <Link
                          to="/password/reset"
                          className="forget-password"
                          style={{ color: '#428F92', fontSize: '17px' }}
                        >
                          পিন ভুলে গেছেন? ক্লিক করুন
                        </Link>
                      </p>
                    </div>

                    <button type="submit" disabled={loading} className="btn login-btn w-100">
                      লগ ইন করুন {loading && "loading......"}
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>


      <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
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


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content"  style={{ border: 'none' }}>
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
          <div className="modal-content"  style={{ border: 'none' }}>
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
