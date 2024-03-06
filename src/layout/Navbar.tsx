import "../assets/navbar_materials/navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import noipunnologo from "../assets/navbar_materials/images/noipunno-new-logo.svg";

import amarProfileIcon from "../assets/navbar_materials/icons/profile-icon.svg";
import signoutIcon from "../assets/navbar_materials/icons/sign-out.svg";
import mobileMenuIcon from "../assets/navbar_materials/icons/menu.png";
import prothomPatha from "../assets/navbar_materials/icons/home.svg";
import downArrorIcon from "../assets/navbar_materials/icons/tik-ico.svg";
import unOrderListIcon from "../assets/navbar_materials/icons/nav-icos.svg";
import reportIcon from "../assets/navbar_materials/icons/report.svg";
import shikkokIcon from "../assets/navbar_materials/icons/nav-teacher-icon.svg";
import shikkarthiIcon from "../assets/navbar_materials/icons/student-icon.svg";
import shreniIcon from "../assets/navbar_materials/icons/class-icon.svg";
import onurudhGoliIcon from "../assets/navbar_materials/icons/requests.svg";
import doublecheckPng from "../assets/navbar_materials/icons/double-check.png";
import resetPass from "../assets/project_ca_html/icons/setting-2.svg";
import teacherIcon from "../assets/navbar_materials/icons/teacher.svg";
import teacherActiveIcon from "../assets/navbar_materials/icons/Status.svg";

import { useLocation } from "react-router-dom";
import { teacher_dashboard, reloadteacher_own_subject } from "../Request";
import { showReportDeleteEv } from "../utils/Utils";

const Navbar = () => {
  const [userDetails, setuserDetails] = useState<any>({});

  setTimeout(() => {
    if (!userDetails?.email) {
      const items = JSON.parse(localStorage.getItem("customer_login_auth"));
      if (items) {
        setuserDetails(items.user);
      }
    }
  }, 500);

  // // console.log("userDetails", userDetails);

  const handleLogout = (e: any) => {
    localStorage.clear();
    window.location.reload();
  };

  const location = useLocation()
  

  const [isReportPathActive, setIsReportPathActive] = useState(false);
  const [isShikkarthiPathActive, setIsShikkarthiPathActive] = useState(false);
  const [isSryniPathActive, setIsSryniPathActive] = useState(false);
  const [isFAQpathActive, setIsFAQpathActive] = useState(false);

  const activeRoute = () => {
    const pathName = location.pathname.slice(1);
    if (
      pathName === "student-transcript" ||
      pathName === "shikkarthir-report-card"
    ) {
      setIsReportPathActive(true);
      setIsShikkarthiPathActive(false);
      setIsSryniPathActive(false);
      setIsFAQpathActive(false);
    } else if (pathName === "student-list") {
      setIsShikkarthiPathActive(true);
      setIsReportPathActive(false);
      setIsSryniPathActive(false);
      setIsFAQpathActive(false);
    } else if (pathName === "class/6" || pathName === "class/7") {
      setIsSryniPathActive(true);
      setIsReportPathActive(false);
      setIsShikkarthiPathActive(false);
      setIsFAQpathActive(false);
    } else if (pathName === "faq") {
      setIsFAQpathActive(true);
      setIsSryniPathActive(false);
      setIsReportPathActive(false);
      setIsShikkarthiPathActive(false);
    } else {
      setIsReportPathActive(false);
      setIsShikkarthiPathActive(false);
      setIsSryniPathActive(false);
      setIsFAQpathActive(false);
    }
  };

  


  const fetchData = async () => {
    try {
      const data_dash: any = await teacher_dashboard();
      localStorage.setItem("teacher_dashboard", JSON.stringify(data_dash.data));

      const own_subjet: any = await reloadteacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));

      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title:
          "দুঃখিত। তথ্য সঠিকভাবে লোড হয়নি। অনুগ্রহ করে সাইটটি আবার লোড করুন",
        confirmButtonText: "হ্যাঁ",
      });
    }
  };

  useEffect(() => {
    activeRoute();
  }, [location]);

  return (
    <>
      {(userDetails?.email || userDetails?.id || userDetails?.caid) && (
        <>
          <div className="topnav border-bottom">
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <div
                    onClick={(e) => window.location.reload()}
                    className="pointer"
                  >
                    <img
                      src={noipunnologo}
                      className="img-fluid"
                      alt="main logo"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group position-relative">
                      <a
                        className="navbar-menu-item d-flex align-items-center ms-2"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        <img
                          src={teacherIcon}
                          className="img-fluid topnav-profile-icon-style"
                          alt="moon icon"
                        />
                        {/* active icon */}
                        <img
                          src={teacherActiveIcon}
                          className="img-fluid position-absolute bottom-0 end-0"
                          alt="Status icon"
                        />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <div className="border-bottom topnav-dropdown-style">
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <img
                                  src={teacherIcon}
                                  className="img-fluid icon-right-space"
                                  alt="profile icon"
                                />
                              </div>
                              <div>
                                <h6 className="profile-style">
                                  {userDetails?.name}
                                </h6>
                                <h6 className="profile-style">
                                  {(userDetails?.user_type_id == 1 &&
                                    "শিক্ষক") ||
                                    (userDetails?.role == 2 &&
                                      "সহকারী শিক্ষক") ||
                                    (userDetails?.role == 3 && "প্রধান শিক্ষক")}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <NavLink to="edit-teacher-profile">
                            <div className="topnav-dropdown-style dropdown-item profile-style">
                              <img
                                src={amarProfileIcon}
                                className="img-fluid icon-right-space"
                                alt="profile icon"
                              />
                              আমার প্রোফাইল
                            </div>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="reset-password">
                            <div className="topnav-dropdown-style dropdown-item profile-style">
                              <img
                                src={resetPass}
                                className="img-fluid icon-right-space"
                                alt="profile icon"
                              />
                              রিসেট পিন
                            </div>
                          </NavLink>
                        </li>

                        {/* <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img src={settingIcon} className="img-fluid icon-right-space" alt="profile icon" />
                          সেটিংস
                        </div>
                      </a>
                    </li> */}

                        <hr className="p-0 m-0" />
                        {/* <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img src={shahajjuIcon} className="img-fluid icon-right-space" alt="profile icon" />
                          সাহায্য
                        </div>
                      </a>
                    </li> */}

                        {/* <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img src={shadaronProshonUttorIcon} className="img-fluid icon-right-space" alt="profile icon" />
                          সাধারণ প্রশ্ন উত্তর
                        </div>
                      </a>
                    </li> */}

                        <hr className="p-0 m-0" />

                        {/* This is For Samll Device */}

                        {/* <li>
                      <a href="#" className="d-lg-none">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img src={opnushondanKoronIcon} className="img-fluid icon-right-space" alt="profile icon" />
                          অনুসন্ধান করুন
                        </div>
                      </a>
                    </li> */}

                        {/* <li>
                      <a href="#" className="d-lg-none">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img src={prioBishoyIcon} className="img-fluid icon-right-space" alt="profile icon" />
                          প্রিয় বিষয়
                        </div>
                      </a>
                    </li> */}

                        <hr className="d-lg-none p-0 m-0" />

                        {/* <li>
                      <a href="#" className="d-lg-none">
                        <div className="topnav-dropdown-style dropdown-item profile-style" >
                          <img src={themeNirbahonKoronIcon} className="img-fluid tick-icons" alt="main logo" />
                          থিম নির্বাচন করুন
                        </div>
                      </a>
                    </li> */}

                        <li onClick={handleLogout}>
                          <a href="#">
                            <div className="topnav-dropdown-style dropdown-item profile-style">
                              <img
                                src={signoutIcon}
                                className="img-fluid icon-right-space"
                                alt="profile icon"
                              />
                              সাইন আউট
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom Nav */}
          <div className="main-nav border-bottom">
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <nav className="navbar navbar-expand-lg">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span>
                            <img
                              src={mobileMenuIcon}
                              className="img-fluid d-flex align-items-center"
                              alt=""
                            />
                          </span>
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1">
                            {/* <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link active navbar-menu-item d-flex align-items-center"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src={prothomPatha} className="img-fluid icon-right-space" alt="main logo" />
                            প্রথম পাতা
                            <img src={downArrorIcon} className="img-fluid icon-left-space tick-icons" alt="tik icon" />
                          </a>
                          <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src={unOrderListIcon}
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">প্রধান শিক্ষক</p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src={unOrderListIcon}
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    বিষয়ভিত্তিক শিক্ষক
                                  </p>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li> */}

                            <li className="nav-item dropdown nav-item-style ">
                              <a
                                href="/"
                                // activeClassName='active'
                                className="nav-link navbar-menu-item d-flex align-items-center"
                                role="button"
                                // data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src={prothomPatha}
                                  className="img-fluid icon-right-space"
                                  alt="main logo"
                                />
                                প্রথম পাতা
                              </a>
                            </li>

                            <li className="nav-item dropdown nav-item-style">
                              <a
                                className={`nav-link navbar-menu-item d-flex align-items-center
                            ${isReportPathActive && "active"}`}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src={reportIcon}
                                  className="img-fluid icon-right-space"
                                  alt="main logo"
                                />
                                রিপোর্ট
                                <img
                                  src={downArrorIcon}
                                  className="img-fluid icon-left-space"
                                  alt="tik icon"
                                />
                              </a>
                              <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                                {showReportDeleteEv() && (
                                  <>
                                    <li>
                                      <NavLink
                                        to="/student-transcript-pi"
                                        className="dropdown-item"
                                      >
                                        <div
                                          // activeClassName='active'
                                          className="dropdown-list-item-style d-flex align-items-center"
                                        >
                                          <img
                                            src={unOrderListIcon}
                                            className="img-fluid dropdown-list-item-icon"
                                            alt="icon"
                                          />
                                          <p className="dropdown-class-list">
                                            শিক্ষার্থীর ট্রান্সক্রিপ্ট (PI)
                                          </p>
                                        </div>
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        to="/student-transcript-bi"
                                        className="dropdown-item"
                                      >
                                        <div
                                          // activeClassName='active'
                                          className="dropdown-list-item-style d-flex align-items-center"
                                        >
                                          <img
                                            src={unOrderListIcon}
                                            className="img-fluid dropdown-list-item-icon"
                                            alt="icon"
                                          />
                                          <p className="dropdown-class-list">
                                            শিক্ষার্থীর মূল্যায়ন (BI)
                                          </p>
                                        </div>
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        to={"shikkarthir-report-card"}
                                        className="dropdown-item"
                                      >
                                        <div className="dropdown-list-item-style d-flex align-items-center">
                                          <img
                                            src={unOrderListIcon}
                                            className="img-fluid dropdown-list-item-icon"
                                            alt="icon"
                                          />
                                          <p className="dropdown-class-list">
                                            শিক্ষার্থীদের রিপোর্ট কার্ড
                                          </p>
                                        </div>
                                      </NavLink>
                                    </li>
                                  </>
                                )}
                              </ul>
                            </li>

                            <li className="nav-item dropdown nav-item-style">
                              <NavLink
                                to="/teachers-list"
                                // activeClassName='active'
                                className="nav-link navbar-menu-item d-flex align-items-center"
                                role="button"
                                // data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src={shikkokIcon}
                                  className="img-fluid icon-right-space"
                                  alt="main logo"
                                />
                                শিক্ষক
                              </NavLink>
                            </li>

                            <li className="nav-item dropdown nav-item-style">
                              <a
                                className={`nav-link navbar-menu-item d-flex align-items-center
                            ${isShikkarthiPathActive && "active"}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src={shikkarthiIcon}
                                  className="img-fluid icon-right-space"
                                  alt="main logo"
                                />
                                শিক্ষার্থী{" "}
                                <img
                                  src={downArrorIcon}
                                  className="img-fluid icon-left-space"
                                  alt="tik icon"
                                />
                              </a>
                              <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                                <li>
                                  <NavLink
                                    to="/student-list"
                                    // activeClassName='active'
                                    className="dropdown-item"
                                  >
                                    <div className="dropdown-list-item-style d-flex align-items-center">
                                      <img
                                        src={shikkarthiIcon}
                                        className="img-fluid dropdown-list-item-icon"
                                        alt="icon"
                                      />
                                      <p className="dropdown-class-list">
                                        শিক্ষার্থীর তালিকা
                                      </p>
                                    </div>
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/student-attendence"
                                    // activeClassName='active'
                                    className="dropdown-item"
                                  >
                                    <div className="dropdown-list-item-style d-flex align-items-center">
                                      <img
                                        src={shikkarthiIcon}
                                        className="img-fluid dropdown-list-item-icon"
                                        alt="icon"
                                      />
                                      <p className="dropdown-class-list">
                                        শিক্ষার্থীর হাজিরা
                                      </p>
                                    </div>
                                  </NavLink>
                                </li> */}
                              </ul>
                            </li>
                            <li className="nav-item dropdown nav-item-style">
                              <a
                                className={`nav-link navbar-menu-item d-flex align-items-center
                            ${isSryniPathActive && "active"}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src={shreniIcon}
                                  className="img-fluid icon-right-space"
                                  alt="main logo"
                                />
                                শ্রেণী{" "}
                                <img
                                  src={downArrorIcon}
                                  className="img-fluid icon-left-space"
                                  alt="tik icon"
                                />
                              </a>
                              <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                                <li>
                                  <NavLink
                                    to="/class/6"
                                    // activeClassName='active'
                                    className="dropdown-item"
                                  >
                                    <div className="dropdown-list-item-style d-flex align-items-center">
                                      <img
                                        src={unOrderListIcon}
                                        className="img-fluid dropdown-list-item-icon"
                                        alt="icon"
                                      />
                                      <p className="dropdown-class-list">
                                        ষষ্ঠ শ্রেণী
                                      </p>
                                    </div>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/class/7"
                                    // activeClassName='active'
                                    className="dropdown-item"
                                  >
                                    <div className="dropdown-list-item-style d-flex align-items-center">
                                      <img
                                        src={unOrderListIcon}
                                        className="img-fluid dropdown-list-item-icon"
                                        alt="icon"
                                      />
                                      <p className="dropdown-class-list">
                                        সপ্তম শ্রেণী
                                      </p>
                                    </div>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            {/* <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link navbar-menu-item d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src={onurudhGoliIcon}
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            অনুরোধগুলি
                          </a>
                        </li> */}
                            <li className="nav-item dropdown nav-item-style">
                              <NavLink
                                to="/faq"
                                className={`nav-link navbar-menu-item d-flex align-items-center
                            ${isFAQpathActive && "active"}`}
                                role="button"
                                // data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src={onurudhGoliIcon}
                                  className="img-fluid icon-right-space"
                                  alt="main logo"
                                />
                                প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>

                  <div className="d-lg-flex d-block align-items-lg-center mt-2 mt-lg-0">
                    <div className="btn-group position-relative">
                      <button
                        onClick={fetchData}
                        className="nav-link navbar-menu-item nav-right-dorpdown d-flex align-items-center mx-1"
                        type="button"
                        title="যদি কিছু ডেটা যেমন শিক্ষার্থী যোগ করা হয়, শিক্ষক যোগ করা হয় বা অন্য কিছু পরিবর্তন করা হয় তবে দয়া করে ডেটা পুনরায় লোড করুন"
                      >
                        ডেটা পুনরায় লোড করুন
                      </button>

                      {showReportDeleteEv() && (
                        <Link
                          to="/mollayon-koron"
                          id="mollayon_koron_btn"
                          className="nav-link navbar-menu-item nav-right-dorpdown d-flex align-items-center"
                          role="button"
                          // data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src={doublecheckPng}
                            className="img-fluid "
                            alt="add icon"
                          />
                          মূল্যায়ন শুরু করুন
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
