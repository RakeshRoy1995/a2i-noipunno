import "../../../src/assets/project_ca_html/css/dashboard.css";
import "../../../src/styles/new_app_info.css";

import AppInfoIcon1 from "../../assets/popUp_app_info_materials/bd-map.svg";
import AppInfoIcon2 from "../../assets/popUp_app_info_materials/NCTB_logo-2.svg";
import AppInfoIcon3 from "../../assets/popUp_app_info_materials/Aspire_to_Innovate_Seal 2.svg";
import AppInfoIcon4 from "../../assets/popUp_app_info_materials/unicef logo.svg";
import AppInfoIcon5 from "../../assets/popUp_app_info_materials/app-info.svg";
import { useEffect, useState } from 'react';

const PopUpAppInfo = () => {
  const [togglePopup, setTogglePopup] = useState(false);


  function togglePopupFunction() {
    var popup = document.getElementById("popup");
    if (!popup.classList.contains("active")) {
        popup.style.display = "block";
        setTimeout(function () {
            popup.classList.add("active");
        }, 10);
    } else {
        popup.classList.remove("active");
        setTimeout(function () {
            popup.style.display = "none";
        }, 500);
    }
}




  return (
    <section className="chat_app_info">
                <div className="chat_box d-flex justify-content-end">
                  <div id="popup" className={`popup `} >
                        <div className="popup-app-info-top d-flex justify-content-between gap-1">
                            <div className="border-end border-1 pe-2">
                                <div className="popup-app-info-reserved">
                                    <h2 className="reserved-app-info p-0 m-0">সর্বস্বত্ব সংরক্ষিত ২০২৩</h2>
                                </div>
                                <div className="popup-card-body">
                                    <div className="d-flex popup-card-icons">
                                        <div className="">
                                          <img src={AppInfoIcon1} className="img-fluid" alt="" />
                                        </div>
                                        <div className="">
                                          <img src={AppInfoIcon2} className="img-fluid"  alt="" />
                                        </div>
                                    </div>
                                    <div className="popup-card-institutions">
                                        <ul>
                                            <li>পরিকল্পনা ও বাস্তবায়নে:</li>
                                            <li>জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</li>
                                            <li>(এনসিটিবি), শিক্ষা মন্ত্রণালয়,</li>
                                            <li>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="popup-app-info-bottom pt-4 ps-1">
                                <div className="d-flex popup-card-icons align-items-end">
                                    <div className=""><img src={AppInfoIcon3}  className="img-fluid" alt="" /></div>
                                    <div className=""><img src={AppInfoIcon4} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="popup-card-institutions">
                                    <ul>
                                        <li>কারিগরি সহায়তায়:</li>
                                        <li>এসপায়ার টু ইনোভেট (এটুআই),আইসিটি বিভাগ </li>
                                        <li>এবং ইউনিসেফ </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="popup-version-bottom">
                                <div className="d-flex align-items-center popup-version">
                                    <p className="popup-version-info">Version 1.1.6 & Last release 15/1/24</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chat_btn"
                    onClick={(e)=> togglePopupFunction() }
                    >
                      <img
                        className="app-info-btn"
                        src={AppInfoIcon5}
                        onClick={() => setTogglePopup(!togglePopup)}
                        alt="app-info"
                      />
                    </div>
                </div>
    </section>
  );
};

export default PopUpAppInfo;