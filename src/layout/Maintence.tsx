import app from "../assets/images/play-store-logo.png"
const Maintence = () => {
  return (
    <>
      <div className="container-fluid vh-100  d-flex align-items-center hero_bg_img">
        <div className="container mb-3">
          <div className="d-flex justify-content-center align-content-center">
            <img
              src="https://la360host.com/imagenoip/brand-logo.png"

            />
          </div>
          <div className="d-flex justify-content-center align-content-center"  >
            <h2 className="ps-2 pt-5 pb-3 text-center" style={{ color: "#222", fontWeight: "bold", fontSize: "1.5rem", lineHeight: "40px" }}>
              আপনি মোবাইল ব্রাউজারের মাধ্যমে নৈপুণ্য অ্যাপ্লিকেশনটি ব্যবহার করতে পারবেন না। <br /> দয়া করে ডেস্কটপ অথবা ল্যাপটপ এর ওয়েব ব্রাউজারের মাধ্যমে মুল্যায়ন করুন অথবা মোবাইল অ্যাপ ব্যাবহার করুন। <br /> <br /> ধন্যবাদ।
            </h2>
          </div>



          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around">
            <div className="d-flex gap-2 px-3 py-2 justify-content-center ">
              <ul className="d-flex gap-2 align-items-end">
                <div className="d-flex gap-2 flex-column flex-md-row">
                  <div className="row  pb-2 text-center">
                    <a style={{ color: "#212529", textDecoration: "underline", fontSize: "1.1rem", fontWeight: "normal" }} href="#">সর্বস্বত্ব সংরক্ষিত  © ২০২৪ শিক্ষা মন্ত্রণালয়, গণপ্রজাতন্ত্রী  বাংলাদেশ
                      সরকার
                    </a>
                  </div>

                </div>
                {/* app and web link */}

              </ul>
            </div>

            <div>

            </div>
            {/* app and web logo */}
            <div className="d-flex justify-content-center align-items-center gap-2">
              <a href="https://accounts.noipunno.gov.bd/app/noipunno.apk">
                <img style={{ width: "100px" }} src={app} alt="web link" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=bd.gov.noipunno&pli=1">
                <img style={{ width: "90px" }} src="../../src/assets/images/play-store-logo2.png" alt="google play store app link" />
              </a>

            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default Maintence;