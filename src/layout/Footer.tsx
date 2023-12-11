import { useState } from "react";

export default function Footer() {
  const [userDetails, setuserDetails] = useState<any>("");
  


  setTimeout(() => {
    
    if (!userDetails?.email) {
      const items = JSON.parse(localStorage.getItem("customer_login_auth"));
      if (items) {
        setuserDetails(items.user);
      }
    }
  }, 500);

  return (
    <div className="container-fluid  fixed-bottom  mt-4">
      {userDetails?.email && (
        <div className="container noipunno-footer d-flex justify-content-between ">
          <div style={{ fontWeight: "bold", fontSize: 12 }}>
            সর্বস্বত্ব সংরক্ষিত © 2023 শিক্ষা মন্ত্রণালয়, গণপ্রজাতন্ত্রী
            বাংলাদেশ সরকার
          </div>
          <div className="d-flex">
            <a
              href="#"
              className="ms-2 text-decoration-none text-secondary"
              style={{ fontSize: 12 }}
            >
              কপিরাইট
            </a>
            <a
              href="#"
              className="ms-2 text-decoration-none text-secondary"
              style={{ fontSize: 12 }}
            >
              গোপনীয়তা নীতি
            </a>
            <a
              href="#"
              className="ms-2 text-decoration-none text-secondary"
              style={{ fontSize: 12 }}
            >
              জিজ্ঞাসা
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
