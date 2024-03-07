import noipunnoLogo from "../assets/login_page_materials/images/noipunno-new-logo.svg";
import appIcon1 from "../assets/login_page_materials/play-store-logo.png";
import appIcon2 from "../assets/login_page_materials/play-store-logo2.png";
import chatIcon from "../assets/login_page_materials/chat.svg";
import listIcon from "../assets/login_page_materials/list.svg";
import supportIcon from "../assets/login_page_materials/support.svg";
const apps = '../assets/app/noipunno.apk';
import { Link } from "react-router-dom";

export default function LoginPageCommonLeft() {
  return (
    <div>
      
        <div className="card transparent-card mb-3">
            <div className="logo text-center">
                <img src={noipunnoLogo} style={{ width: '130px', height: '130px' }} alt="" />
            </div>

            <div className="card-body-custom">
                <div id="carouselExampleIndicators" className="carousel carousel-inner-custom slide mb-0" data-bs-ride="carousel">
                    <ol className="carousel-indicators mb-0">
                    <li style={{ width: '15px', height: '15px', backgroundColor: '#92278f', borderRadius: '50%', marginBottom: '0px' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="" aria-label="Slide 1"></li>
                    <li style={{ width: '15px', height: '15px', backgroundColor: '#92278f', borderRadius: '50%' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></li>
                    <li style={{ width: '15px', height: '15px', backgroundColor: '#92278f', borderRadius: '50%' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item">
                        <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                        সকলের অবগতির জন্য জানানো যাচ্ছে যে, বর্তমানে ব্রাঞ্চ, শিফট, ভার্সন, সেকশন, শিক্ষক ও বিদ্যালয়ের তথ্য আপডেট করা যাবে। বিদ্যালয়ের তথ্য সম্পাদনা করে বোর্ড, বিভাগ, জেলা, উপজেলা নির্বাচন করতে হবে। সবার সহযোগিতার জন্য ধন্যবাদ।
                        </p>
                        <br />
                    </div>
                    <div className="carousel-item active">
                        <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                        শিক্ষার্থী ব্যবস্থাপনার সকল কার্যক্রম সম্পন্ন করার জন্য অনুরোধ করা যাচ্ছে। গত বছরের শিক্ষার্থীদের নতুন শ্রেণীতে যুক্ত করুন এবং নতুন শিক্ষার্থীদের নতুন শিক্ষার্থী রেজিস্ট্রেশন থেকে নতুন শিক্ষার্থী যুক্ত করুন।
                        </p>
                        <br />
                    </div>
                    <div className="carousel-item">
                        <p className="mb-2" style={{ letterSpacing: '0.5px', textAlign: 'justify' }}>
                        বিষয় শিক্ষক নির্বাচনের কার্যক্রম চলমান রয়েছে। অনুগ্রহপূর্বক বিষয় শিক্ষক নির্বাচন মেনু থেকে সেকশন ভিত্তিক বিষয় শিক্ষক ও শ্রেণী শিক্ষকের তথ্য যুক্ত করুন।
                        </p>
                        <br />
                    </div>
                    </div>
                </div>
        </div>

        <div className="container noipunno-app mb-2">
        <div className="row">
            <div className="col-sm-5 text-center"><p className="mt-2 bn">অ্যাপ ডাউনলোড করতে ক্লিক করুন</p></div>
            <div className="col-sm-3 mb-2 app-download" style={{ marginRight: '7px' }}><a href={apps} download><img style={{ height: '40px' }} src={ appIcon1 } /></a></div>
            <div className="col-sm-3 mb-2 app-download"><a href="https://play.google.com/store/apps/details?id=bd.gov.noipunno" target="_blank"><img style={{ height: '40px' }} src={ appIcon2 }/></a></div>
        </div>
        </div>

        </div>

        <div className="footer-card-custom d-flex justify-content-center">
        <div className="d-flex align-items-center">
        <div>
            <p className="text-center bn" style={{ fontSize: '17px', color: '#B5248E' }}> <b>হেল্প ডেস্ক:</b> &nbsp;</p>
        </div>
        <div className="d-flex justify-content-center">
            <img src={supportIcon} data-bs-toggle="modal" data-bs-target="#exampleModal1" className="card-footer-image" alt="Logo 1" />
        </div>
        <div className="d-flex justify-content-center">
            <img src={listIcon} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="card-footer-image" alt="Logo 2" />
        </div>
        <div className="d-flex justify-content-center">
            <img src={chatIcon} data-bs-toggle="modal" data-bs-target="#exampleModal3" className="card-footer-image" alt="Logo 3" />
        </div>
        <div>

            <p className="text-center bn">
            &nbsp; <Link to="#" className="" style={{ fontSize: '17px', textDecoration: 'underline', color: '#B5248E' }}> <b>গোপনীয়তার নীতিমালা </b> </Link>
            </p>
        </div>
        </div>
        </div>
    </div>
  )
}
