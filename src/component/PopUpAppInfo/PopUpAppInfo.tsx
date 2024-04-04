import "../../../src/assets/project_ca_html/css/dashboard.css";
import "../../../src/styles/new_app_info.css";
import moment from 'moment';

import AppInfoIcon1 from "../../assets/popUp_app_info_materials/bd-map.svg";
import AppInfoIcon2 from "../../assets/popUp_app_info_materials/NCTB_logo-2.svg";
import AppInfoIcon3 from "../../assets/popUp_app_info_materials/Aspire_to_Innovate_Seal 2.svg";
import AppInfoIcon4 from "../../assets/popUp_app_info_materials/unicef logo.svg";
import AppInfoIcon5 from "../../assets/popUp_app_info_materials/app-info.svg";
import { useEffect, useState } from 'react';
const dateGet = moment().format('YYYY');
const last_version = import.meta.env.VITE_REACT_APP_LAST_VERSION;
const relise_date = import.meta.env.VITE_REACT_APP_RELISE_DATE;

const PopUpAppInfo = () => {

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


    const convertToBangla = (englishNumber) => {
      const banglaNumbers = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
      };
  
      return englishNumber.replace(/[0-9]/g, (char) => banglaNumbers[char] || char);


}

  return (
    <section className="chat_app_info">
                <div className="chat_box d-flex justify-content-end">
                  <div id="popup" className={`new_popup `} >
                        <div className="new_popup-app-info-top d-flex justify-content-between gap-1">
                            <div className="border-end border-1 pe-2">
                                <div className="new_popup-app-info-reserved">
                                    <h2 className="reserved-app-info p-0 mt-3">সর্বস্বত্ব সংরক্ষিত { convertToBangla(dateGet)} </h2>
                                </div>
                                <div className="new_popup-card-body">
                                    <h3 className="reserved-app-info p-0 m-0">পরিকল্পনা ও বাস্তবায়নে:</h3>
                                    <div className="d-flex new_popup-card-icons">
                                        <div className="">
                                          <img src={AppInfoIcon1} className="img-fluid" alt="" />
                                        </div>
                                        <div className="">
                                          <img src={AppInfoIcon2} className="img-fluid"  alt="" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="new_popup-app-info-bottom pt-1 ps-1" style={{ marginTop: '35px'}}>
                                <h3 className="reserved-app-info p-0 m-0">কারিগরি সহায়তায়: </h3>
                                    <div className="d-flex new_popup-card-icons align-items-end">
                                        <div className=""><img src={AppInfoIcon3}  className="img-fluid" alt="" /></div>
                                        <div className=""><img src={AppInfoIcon4} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="new_popup-version-bottom">
                                <div className="d-flex align-items-center new_popup-version">
                                    <p className="new_popup-version-info">Version {last_version} & Last release {relise_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="new_chat_btn" style={{ }}
                        onClick={(e)=> togglePopupFunction() }
                    >
                      <img
                        className="app-info-btn"
                        src={AppInfoIcon5}
                        alt="app-info"
                      />
                    </div>
                </div>
    </section>
  );
};

export default PopUpAppInfo;