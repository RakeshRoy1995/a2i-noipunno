import React, { useState, useEffect, useRef, ChangeEvent } from "react";
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

    const password = event.target.password.value;
    const password_confirmation = event.target.password_confirmation.value;

    if (password.length == 6) {
      if (password === password_confirmation) {
        try {
          const pass = new FormData(event.target);
          const { data }: any = await confirm_pass(pass);
          if (data?.status === true) {
            setconfirmPINSuccess(false);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "আপনার একাউন্টটি সফলভাবে হালনাগাদ হয়েছে। ",
                showConfirmButton: false,
                timer: 2500
            })
            window.location.href = '/';
          } else {
            seterrmsg("পিন পরিবর্তন হয়নাই।");
          }

        } catch (error) {
          seterrmsg("সার্ভার জনিত সমস্যার কারণে দুঃখিত। পুনরায় চেষ্টা করুন।");
        }
      } else {
        seterrmsg("নতুন পিন এবং পুনরায় পিন মিল নেই।");
      }
    } else {
      seterrmsg("পিন অবশ্যই ছয় অক্ষরের হতে হবে! ");
    }
  };



  useEffect(() => {
    const userCaid = JSON.parse(localStorage.getItem("teacher_dashboard"));
    // setUser_Caid("110324520230002");
    setUser_Caid(userCaid?.data?.teachers[0]?.caid);
    // console.log("user_Caid:", user_Caid);
  }, []);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Replace non-digit characters with an empty string
    const sanitizedValue = event.target.value.replace(/\D/g, '');
    // Update the input value
    event.target.value = sanitizedValue;
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

  return (
    <div>
      <section className="editTeacherProfilePage">
        <Breadcumbtitle title={"রিসেট পিন"} />
        {
          <div className="container my-2 mb-5">

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="card" style={{ border: 'none', minHeight: '300px' }}>
                  <div className="card-header"><h4 className="bn text-center p-2"> রিসেট পিন </h4></div>
                  <div className="card-body">
                    {/* send reset otp */}
                    {!sendOtoSuccess && (
                      <form onSubmit={sendOTP}>     
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">আপনার ইউজার আইডি</label>
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
                          <input type="hidden" id="pin" name="user_type_id" defaultValue={1} />
                          <button  type="submit" className="btn login-button px-5"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                              width: '200px',
                            }}
                          >
                            {" "}
                            ওটিপি পাঠান{" "}
                            <MdOutlineKeyboardArrowRight
                              className="fs-3"
                              style={{ marginTop: "-0.3rem" }}
                            />{" "}
                          </button>
              
                      </form>
                    )}

                    {/* otp confirmation */}
                    {confirmOtoSuccess && (
                      <form onSubmit={confimOTP}>

                        {msg && <Alert className="d-flex justify-content-center " variant="success" >{msg}</Alert> }
                        {errmsg && <Alert className="d-flex justify-content-center text-white" variant="danger">{errmsg}</Alert>}

                        <input type="hidden" id="pin" name="user_type_id" defaultValue={1}/>
                        <input type="hidden" id="pin" name="caid" defaultValue={user_Caid}/>
{/*                     
                        <div className="form-group">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">ওটিপি</label>
                            <div className="input-group">
                              <input
                                type="input"
                                id="pin"
                                className="form-control"
                                name="pin"
                                placeholder="ওটিপি কোড"
                                maxLength={4} 
                                onInput={handleInput}
                              />
                            </div>
                          </div>
                        </div> */}
                              <div className="form-group text-center mx-auto" style={{ width: '400px' }}>

                      
                                  <p className="text-center p-2 mb-2">ওটিপি</p>

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
                                                    style={{ float:'left', width: '80px' }}
                                                    required
                                                  />
                                            
                                          </div>
                                        ))}
                                  </div>
                                </div>
                                  <input type="hidden" value={numberString} id="pin" name="pin" />


                          <button
                                type="submit"
                                className="btn login-button px-5 mt-3"
                                style={{
                                  backgroundColor: "#428F92",
                                  color: "#fff",
                                  width: '250px',
                                }}
                              >
                                {" "}
                                ওটিপি চেক করুন{" "}
                                <MdOutlineKeyboardArrowRight
                                  className="fs-3"
                                  style={{ marginTop: "-0.3rem" }}
                                />{" "}
                              </button>
                        
                       
                      </form>
                    )}

                    {/* new pin  */}
                    {confirmPINSuccess && (
                      <form onSubmit={confimPass}>
                        {msg && <Alert className="d-flex justify-content-center" variant="success">{msg}</Alert>}
                        {errmsg && <Alert className="m-2 d-flex justify-content-center text-white" variant="danger">{errmsg}</Alert>}

                        <input type="hidden" id="pin" name="user_type_id" defaultValue={1}/>
                        <input type="hidden" id="pin" name="caid" defaultValue={user_Caid}/>

                        <div className="form-group">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">
                            নতুন পিন দিন
                            </label>
                            <div className="input-group">
                              <input
                                type="input"
                                id="pin"
                                className="form-control"
                                name="password"
                                placeholder="নতুন পিন দিন"
                                maxLength={6} 
                                onInput={handleInput}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="mb-3" style={{ fontSize: "16px" }}>
                            <label className="form-label">
                            নতুন পিনটি পুনরায় দিন
                            </label>
                            <div className="input-group">
                              <input
                                type="input"
                                id="pin"
                                className="form-control"
                                name="password_confirmation"
                                placeholder="নতুন পিনটি পুনরায় দিন"
                                maxLength={6} 
                                onInput={handleInput}
                              />
                            </div>
                          </div>
                        </div>
                        
                          <button
                            type="submit"
                            className="btn login-button"
                            style={{
                              backgroundColor: "#428F92",
                              color: "#fff",
                              width: '250px',
                            }}
                          >
                            নিশ্চিত
                          </button>
                       
                      </form>
                    )}

                  </div>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        }
      </section>
    </div>
  );
}

export default ResetPassword;
