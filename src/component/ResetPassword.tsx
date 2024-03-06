import React, { useState, useEffect } from "react";
import Breadcumbtitle from "../layout/Breadcumb";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { confirm_otp, confirm_pass, sent_otp } from "../Request";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";

function ResetPassword() {
  const [user_Caid, setUser_Caid] = useState("");
  const [msg, setmsg] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [user_id, setUser_id] = useState("");
  const [sendOtoSuccess, setsendOtoSuccess] = useState(false);
  const [confirmOtoSuccess, setconfirmOtoSuccess] = useState(false);
  const [confirmPINSuccess, setconfirmPINSuccess] = useState(false);

  const sendOTP = async (event: any) => {
    event.preventDefault();
    setmsg("");
    seterrmsg("");
    setsendOtoSuccess(false);
    setconfirmOtoSuccess(false);
    try {
      const datas = new FormData(event.target);
      const { data }: any = await sent_otp(datas);
      setmsg(data.message);
      // console.log("data", data);

      setsendOtoSuccess(true);
      setconfirmOtoSuccess(true);
    } catch (error) {
      // console.log("error", error);
      seterrmsg(error.message);
    }
  };

  const confimOTP = async (event: any) => {
    event.preventDefault();
    setmsg("");
    seterrmsg("");

    try {
      const otp = new FormData(event.target);
      const { data }: any = await confirm_otp(otp);
      // console.log("otp", data);
      setmsg(data.message);
      setconfirmOtoSuccess(false);
      setconfirmPINSuccess(true);
      // console.log("setconfirmPINSuccess", setconfirmPINSuccess);
    } catch (error) {
      //// console.log("eee", error.response);
      seterrmsg(error?.response?.data?.error?.message || "সার্ভার জনিত সমস্যার কারণে দুঃখিত। পুনরায় চেষ্টা করুন। ");
    }
  };

  const confimPass = async (event: any) => {
    event.preventDefault();
    setmsg("");
    seterrmsg("");

    try {
      const pass = new FormData(event.target);
      const { data }: any = await confirm_pass(pass);
      // console.log("pass", data);
      setmsg("আপনার পিন সফলভাবে আপডেট করা হয়েছে। ");
      setconfirmPINSuccess(true);
      // console.log("setconfirmPINSuccess", setconfirmPINSuccess);
    } catch (error) {

      //// console.log("eee", error.response);
      
      seterrmsg(error?.response?.data?.error?.message?.password || "সার্ভার জনিত সমস্যার কারণে দুঃখিত। পুনরায় চেষ্টা করুন। ");
    }
    setconfirmPINSuccess(false);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "আপনার একাউন্টটি সফলভাবে হালনাগাদ হয়েছে। ",
      showConfirmButton: false,
      timer: 2500
    })
  };

  useEffect(() => {
    const userCaid = JSON.parse(localStorage.getItem("teacher_dashboard"));
    // setUser_Caid("110324520230002");
    setUser_Caid(userCaid?.data?.teachers[0]?.caid);
    // console.log("user_Caid:", user_Caid);
  }, []);

  return (
    <div>
      <section className="editTeacherProfilePage">
        <Breadcumbtitle title={"রিসেট পিন"} />
        {
          <div className="container my-3">
            <div className="d-flex align-items-center">
              <div className="card shadow-lg border-0 w-100 rounded">
                <ul className="nav d-flex mt-2 justify-content-around py-1">
                  <li className={`nav-item`}>
                    <h4> রিসেট পিন </h4>
                  </li>
                </ul>
                
                <div
                  className="tab-content"
                  id="tabContent"
                  style={{ backgroundColor: "#E4FEFF" }}
                >
                  
                  <div
                    className="tab-pane fade show active"
                    id="expertness"
                    role="tabpanel"
                    aria-labelledby="expertness-tab"
                  >
                    {!sendOtoSuccess && (
                      <form className="row m-4" onSubmit={sendOTP}>
                        

                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">আপনার সিএ আইডি</label>
                            <div className="input-group">
                              <input
                                type="caid"
                                id="pin"
                                className="form-control"
                                readOnly
                                name="caid"
                                
                                defaultValue={user_Caid}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"></label>
                            <div className="input-group">
                              <input
                                type="hidden"
                                id="pin"
                                className="form-control"
                                // readOnly
                                name="user_type_id"
                                placeholder=""
                                defaultValue={1}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="d-flex justify-content-end align-items-center pt-3 ">
                          <button
                            type="submit"
                            className="btn btn-primay px-5"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                            }}
                          >
                            {" "}
                            ওটিপি পাঠান{" "}
                            <MdOutlineKeyboardArrowRight
                              className="fs-3"
                              style={{ marginTop: "-0.3rem" }}
                            />{" "}
                          </button>
                        </div>
                      </form>
                    )}

                    {confirmOtoSuccess && (
                      <form className="row m-4" onSubmit={confimOTP}>
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"></label>
                            <div className="input-group">
                              <input
                                type="hidden"
                                id="pin"
                                className="form-control"
                                // readOnly
                                name="user_type_id"
                                placeholder=""
                                defaultValue={1}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"></label>
                            <div className="input-group">
                              <input
                                type="hidden"
                                id="pin"
                                className="form-control"
                                readOnly
                                name="caid"
                                placeholder="আপনার caid নাম্বার"
                                defaultValue={user_Caid}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">ওটিপি</label>
                            <div className="input-group">
                              <input
                                type="input"
                                id="pin"
                                className="form-control"
                                name="pin"
                                placeholder="ওটিপি কোড"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-end align-items-center pt-3 ">
                        {msg && 
                    <Alert className="m-2 d-flex justify-content-center " variant="success" >
                    {msg}
                    {/* <p>আপনার সঠিক ওটিপি কোডটি লিখুন এবং চেক করুন</p> */}
                    </Alert>}

                      {errmsg && <Alert className="m-2 d-flex justify-content-center text-white" variant="danger">{errmsg}</Alert>}
                          <button
                            type="submit"
                            className="btn btn-primay px-5"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                            }}
                          >
                            {" "}
                            ওটিপি চেক করুন{" "}
                            <MdOutlineKeyboardArrowRight
                              className="fs-3"
                              style={{ marginTop: "-0.3rem" }}
                            />{" "}
                          </button>
                        </div>
                      </form>
                    )}

                    {confirmPINSuccess && (
                      <form className="row m-4" onSubmit={confimPass}>
                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"></label>
                            <div className="input-group">
                              <input
                                type="hidden"
                                id="pin"
                                className="form-control"
                                // readOnly
                                name="user_type_id"
                                placeholder=""
                                defaultValue={1}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label"></label>
                            <div className="input-group">
                              <input
                                type="hidden"
                                id="pin"
                                className="form-control"
                                readOnly
                                name="caid"
                                placeholder="আপনার caid নাম্বার"
                                defaultValue={user_Caid}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">
                              নতুন পিন
                            </label>
                            <div className="input-group">
                              <input
                                type="input"
                                id="pin"
                                className="form-control"
                                name="password"
                                placeholder="পিন"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group  col-sm-4 col-md-6">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">
                              পিন নিশ্চিত করুন
                            </label>
                            <div className="input-group">
                              <input
                                type="input"
                                id="pin"
                                className="form-control"
                                name="password_confirmation"
                                placeholder="password_confirmation"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-end align-items-center pt-3 ">
                        {msg && 
                    <Alert className="m-2 d-flex justify-content-center" variant="success" >
                    <Alert.Heading>{msg}</Alert.Heading>
                    {/* <p>আপনার সঠিক ওটিপি কোডটি লিখুন এবং চেক করুন</p> */}
                    </Alert>}

                      {errmsg && <Alert className="m-2 d-flex justify-content-center text-white" variant="danger">{errmsg}</Alert>}
                          <button
                            type="submit"
                            className="btn btn-primay px-5"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                            }}
                          >
                            {" "}
                            পিন পরিবর্তন সম্পূর্ণ করুন{" "}
                            <MdOutlineKeyboardArrowRight
                              className="fs-3"
                              style={{ marginTop: "-0.3rem" }}
                            />{" "}
                          </button>
                        </div>
                      </form>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    </div>
  );
}

export default ResetPassword;
