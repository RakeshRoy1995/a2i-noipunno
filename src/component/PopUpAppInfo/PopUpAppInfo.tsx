
import "../../../src/assets/project_ca_html/css/dashboard.css";
import "../../../src/styles/app_info.css";

import AppInfoIcon1 from "../../assets/popUp_app_info_materials/bd-map.svg";
import AppInfoIcon2 from "../../assets/popUp_app_info_materials/NCTB_logo-2.svg";
import AppInfoIcon3 from "../../assets/popUp_app_info_materials/Aspire_to_Innovate_Seal 2.svg";
import AppInfoIcon4 from "../../assets/popUp_app_info_materials/unicef logo.svg";
import AppInfoIcon5 from "../../assets/popUp_app_info_materials/app-info.svg";
import { useState } from 'react';

const PopUpAppInfo = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  return (
    <section className="chat_app_info">
      <div className="chat_box" >
        <div className="chat_box">
          <div className={`popup ${togglePopup ? 'show-popup' : 'hide-popup'}`}
            style={{ display: togglePopup ? 'block' : 'none' }}
          >
            <div className="popup-app-info-top ">
              <div className="popup-app-info-reserved">
                <h2 className="reserved-app-info p-0 m-0">
                  সর্বস্বত্ব সংরক্ষিত ২০২৩
                </h2>
              </div>
              <div className="popup-card-body">
                <div className="d-flex popup-card-icons">
                  <div className="">
                    <img src={AppInfoIcon1} className="img-fluid" alt="" />
                  </div>
                  <div className="">
                    <img src={AppInfoIcon2} className="img-fluid" alt="" />
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
              <hr className="m-0 my-2 p-0" />
              <div className="popup-app-info-bottom">
                <div className="d-flex popup-card-icons align-items-end">
                  <div className="">
                    <img src={AppInfoIcon3} className="img-fluid" alt="" />
                  </div>
                  <div className="">
                    <img src={AppInfoIcon4} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="popup-card-institutions">
                  <ul>
                    <li>কারিগরি সহায়তায়:</li>
                    <li>এসপায়ার টু ইনোভেট (এটুআই), আইসিটি বিভাগ </li>
                    <li>এবং ইউনিসেফ </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="popup-version-bottom">
                <div className="d-flex align-items-center popup-version">
                  <p className="popup-version-info text-white">
                    Version 1.0.2 &amp; Last relies 24/10/23
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="chat_btn bg-transparent border-0">
            <img
              className="app-info-btn"
              src={AppInfoIcon5}
              onClick={() => setTogglePopup(!togglePopup)}
              alt="app-info"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopUpAppInfo;