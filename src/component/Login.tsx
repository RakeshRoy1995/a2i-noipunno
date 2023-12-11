import "../styles/old_login_page.css";
import { useState } from "react";
import { loginPassword } from "../Request";
import axios from "axios";
import logo from "../../public/assets/images/noipunno-new-logo.svg";
import nav_bottom_logo from "../../public/assets/images/nav_bottom_logo.png";
import LogoIcon1 from "../assets/images/Vector.png";
import LogoIcon2 from "../assets/images/NCTB_logo.png";
import LogoIcon3 from "../assets/images/Logo_Signature_Container_Circle_ENG_RGB-300x300 1.png";
import LogoIcon4 from "../assets/images/Aspire_to_Innovate_Seal 2.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Login() {
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);

    try {

      const { data }: any = await loginPassword(datas);

      // console.log("data", data.status);
      if (data?.status === true) {
        // console.log("user Details", data?.data.user)
        const token = data?.data?.access_token;
        localStorage.setItem("customer_login_auth", JSON.stringify(data?.data));
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        window.location.assign("/");
      } else {
        seterror("Wrong Crediantial");
      }

    } catch (error) {
      seterror(error?.response?.data?.error?.message || error?.response?.data?.error || "Something went wrong!");
      console.log(`error`, error);
    }


  };

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setValue(result);
  };


  return (
    <>
      <Helmet>
        <title>নৈপুণ্য - লগ ইন</title>
      </Helmet>
      {/* Shokowt Ali */}
      <div className="login-bg min-vh-100 vw-100 d-flex flex-column justify-content-between pb-1">
        <div className="container">
          <div className="">
            <div className="row d-flex justify-content-center align-items-center login-container">
              <div className="col-md-7 overflow-hidden cols-sm-12">
                <img src={logo} alt="logo" className="mb-3" width={100} />
                <p className="teacher-login-title">
                  বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন
                </p>
                <p className="np-login-subtitle">
                  অনুগ্রহ করে আপনার অ্যাকাউন্টে লগ ইন করুন এবং অ্যাডভেঞ্চার শুরু
                  করুন
                </p>
              </div>
              <div className="col-md-5 overflow-hidden cols-sm-12">
                <div
                  className="card"
                  style={{
                    padding: "4%",
                    border: "none",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                >
                  {error && <div className="alert alert-danger">{error}</div>}

                  <div className="teacher-login-title text-center">লগ ইন</div>

                  <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label
                        htmlFor="user_type_id"
                        className="login-field-title"
                      >
                        {" "}
                        ইউজার টাইপ
                      </label>
                      <div className="input-group">
                        <select
                          className="form-control np-login-form-field_"
                          name="user_type_id"
                          required
                        >
                          <option value={1} selected>
                            শিক্ষক
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="caid" className="login-field-title">
                        {" "}
                        ইউজার আইডি{" "}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span>
                            {" "}
                            <img
                              src="/assets/images/user-square.svg"
                              className="np-login-field-icon"
                              alt="logo"
                            />
                          </span>
                        </div>

                        <input
                          onChange={handleChange}
                          className="form-control np-login-form-field custom-input"
                          type="text"
                          value={value}
                          required
                          autoComplete="off"
                          placeholder="আপনার ইউজার আইডি দিন"
                          name="caid"
                          id="caid"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="pin" className="login-field-title">
                        {" "}
                        পিন নম্বর{" "}
                      </label>
                      <div className="input-group">
                        <img
                          src="/assets/images/lock.svg"
                          className="np-login-field-icon"
                          alt="logo"
                        />
                        <input
                          className={`form-control np-login-form-field no-spinners custom-input`}
                          type={showPassword ? "text" : "password"}
                          id="pin"
                          name="password"
                          required
                          placeholder="আপনার পাসওয়ার্ড দিন"
                        />
                        <div className="input-group-append password-toggle">
                          <span>
                            {showPassword ? (
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                id="password-toggle_2"
                                className="fa fa-eye"
                              />
                            ) : (
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                id="password-toggle"
                                className="fa fa-eye-slash"
                              />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <div className="form-group form-check my-2">
                      <p className="mb-1">
                        <Link
                          to="password/reset"
                          className="link-success"
                          style={{ color: "#428F92" }}
                        >
                          পাসওয়ার্ড ভুলে গেছেন?. ক্লিক করুন 
                        </Link>
                      </p>
                    </div> */}

                    <button
                      type="submit"
                      className="btn text-white w-100"
                      style={{ backgroundColor: "rgba(66, 143, 146, 1)" }}
                    >
                      {" "}
                      লগ ইন করুন
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ bottom: "10px" }}>
          <div className="row align-items-end">
            <div className="" style={{}}>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div
                  className="d-flex gap-2 px-5 py-1 justify-content-center"
                  style={{ backgroundColor: "#fff", borderRadius: 43 }}
                >
                  <div>
                    <div>
                      <h6 className="" style={{ fontSize: "12px" }}>
                        পরিকল্পনা ও বাস্তবায়নে
                      </h6>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: "-0.1rem" }}
                    >
                      <img
                        src={LogoIcon1}
                        className="img-fluid"
                        style={{ width: 25 }}
                      />
                      <img
                        src={LogoIcon2}
                        className="img-fluid"
                        style={{ width: 25 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h6 className="" style={{ fontSize: "12px" }}>
                        কারিগরি সহায়তায়
                      </h6>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: "-0.1rem" }}
                    >
                      <img
                        src={LogoIcon3}
                        className="img-fluid"
                        style={{ width: 25 }}
                      />
                      <img
                        src={LogoIcon4}
                        className="img-fluid"
                        style={{ width: 25 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 justify-content-center">
                  <ul className="d-flex gap-2">
                    <div className="d-flex gap-2 flex-column flex-md-row">
                      <div style={{ fontSize: "12px" }}>
                        <a
                          href="#"
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                        >
                          © ২০২৩ সর্বস্বত্ব সংরক্ষিত
                        </a>{" "}
                        <a
                          href="#"
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                        >
                          গোপনীয়তা নীতি
                        </a>{" "}
                        <a
                          href="#"
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                        >
                          সাহায্য
                        </a>{" "}
                        <a
                          href="#"
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                        >
                          কোন প্রশ্ন?
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arafat  Dont Remove It*/}
      {/* <div className="login-bg min-vh-100 vw-100 d-flex flex-column justify-content-evenly">
        <div className="container">
          <div className="">
            <div className="row d-flex justify-content-center align-items-center login-container">
              <div className="col-md-7 overflow-hidden cols-sm-12">
                <img src={logo} alt="logo" className="mb-3" width={100} />
                <p className="teacher-login-title">
                  বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন
                </p>
                <p className="np-login-subtitle">
                  অনুগ্রহ করে আপনার অ্যাকাউন্টে লগ ইন করুন এবং অ্যাডভেঞ্চার শুরু
                  করুন
                </p>
              </div>
              <div className="col-md-5 overflow-hidden cols-sm-12">
                <div
                  className="card"
                  style={{
                    padding: "4%",
                    border: "none",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                >
                  {error && <p className="text-center text-danger">{error}</p>}

                  <p className="teacher-login-title text-center">লগ ইন</p>
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label
                        htmlFor="user_type_id"
                        className="login-field-title"
                      >
                        {" "}
                        ইউজার টাইপ
                      </label>
                      <div className="input-group">
                        <select
                          className="form-control np-login-form-field_"
                          name="user_type_id"
                          required
                        >
                          <option value={1} selected>
                            শিক্ষক
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="caid" className="login-field-title">
                        {" "}
                        ইউজার আইডি{" "}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span>
                            {" "}
                            <img
                              src="/assets/images/user-square.svg"
                              className="np-login-field-icon"
                              alt="logo"
                            />
                          </span>
                        </div>

                        <input
                          onChange={handleChange}
                          className="form-control np-login-form-field custom-input"
                          type="text"
                          value={value}
                          required
                          autoComplete="off"
                          placeholder="আপনার ইউজার আইডি দিন"
                          name="caid"
                          id="caid"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="pin" className="login-field-title">
                        {" "}
                        পিন নম্বর{" "}
                      </label>
                      <div className="input-group">
                        <img
                          src="/assets/images/lock.svg"
                          className="np-login-field-icon"
                          alt="logo"
                        />
                        <input
                          className={`form-control np-login-form-field no-spinners custom-input`}
                          type={showPassword ? "text" : "password"}
                          id="pin"
                          name="password"
                          required
                          placeholder="আপনার পাসওয়ার্ড দিন"
                        />
                        <div className="input-group-append password-toggle">
                          <span>
                            {showPassword ? (
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                id="password-toggle_2"
                                className="fa fa-eye"
                              />
                            ) : (
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                id="password-toggle"
                                className="fa fa-eye-slash"
                              />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group form-check my-2">
                      <p className="mb-1">
                        <Link
                          to={"https://accounts.project-ca.com/password/reset"}
                          className="link-success"
                          style={{ color: "#428F92" }}
                        >
                          পাসওয়ার্ড ভুলে গেছেন?. ক্লিক করুন
                        </Link>
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="btn text-white w-100"
                      style={{ backgroundColor: "rgba(66, 143, 146, 1)" }}
                    >
                      {" "}
                      লগ ইন করুন
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column-reverse flex-md-row flex-lg-row justify-content-between align-items-md-center align-items-lg-center mx-4 " >

          <div className="d-flex justify-content-center align-items-center gap-3 " style={{ fontSize: "12px" }}>
            <a href="#" className="text-dark d-flex justify-content-center align-items-center" style={{ textDecoration: "none" }} >
              <span style={{ fontSize: "16px" }}>©</span>
              <span>২০২৩ সর্বস্বত্ব সংরক্ষিত</span>
            </a>
            <a href="#" className="text-dark" style={{ textDecoration: "none" }} > গোপনীয়তা নীতি </a>
            <a href="#" className="text-dark" style={{ textDecoration: "none" }} > সাহায্য </a>
            <a href="#" className="text-dark" style={{ textDecoration: "none" }} > কোন প্রশ্ন? </a>
          </div>

          <div className="d-flex gap-2 px-5 py-1 justify-content-center" style={{ backgroundColor: "#fff", borderRadius: 43 }} >
            <div>
              <div>
                <h6 className="" style={{ fontSize: "12px" }}> পরিকল্পনা ও বাস্তবায়নে </h6>
              </div>
              <div className="d-flex justify-content-around" style={{ marginTop: "-0.1rem" }} >
                <img src={LogoIcon1} className="img-fluid" style={{ width: 25 }} />
                <img src={LogoIcon2} className="img-fluid" style={{ width: 25 }} />
              </div>
            </div>
            <div>
              <h6 className="" style={{ fontSize: "12px" }}> কারিগরি সহায়তায় </h6>
              <div className="d-flex justify-content-around" style={{ marginTop: "-0.1rem" }} >
                <img src={LogoIcon3} className="img-fluid" style={{ width: 25 }} />
                <img src={LogoIcon4} className="img-fluid" style={{ width: 25 }} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
