import '../../assets/dashboard_materials/css/dashboard.css';
import threeDoots from '../../assets/dashboard_materials/images/dashboard/dots-vertical.svg';
import abedonIcon from '../../assets/dashboard_materials/images/dashboard/alertico.png';
import biggoftiIcon from '../../assets/dashboard_materials/images/dashboard/info-circle.png';
import PhoneNuberChangeiIcon from '../../assets/dashboard_materials/images/dashboard/ico2.svg';
import bishoiPoribortonIcon from '../../assets/dashboard_materials/images/dashboard/arrow-right2.svg';
import rightArrow from '../../assets/dashboard_materials/images/dashboard/arrow-right.svg';

const OnorudhShomohu = () => {
  return (

    <div className="col-lg-3 col-md-6 ">
      <div className="request-container">
        <div className="header">
          <div className="title">
            <h5 className="request">অনুরোধ</h5>
            <img src={threeDoots} alt="threeDoots" />
          </div>
          <p className="request_paragraph">
            বিষয়গুলি আপনার পর্যালোচনা করা দরকার
          </p>
        </div>
        <div className="tab-bar">
          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="apply-tab"
                data-bs-toggle="tab"
                data-bs-target="#apply"
              >
                <img src={abedonIcon} alt="abedonIcon" />
                <h2>আবেদন</h2>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="notice-tab"
                data-bs-toggle="tab"
                data-bs-target="#notice"
              >
                <img src={biggoftiIcon} alt="biggoftiIcon" />
                <h2>বিজ্ঞপ্তি</h2>
              </a>
            </li>
          </ul>
        </div>
        {/* Tab Content */}
        <div className="tab-content" id="tabContent">
          <div
            className="tab-pane fade show active"
            id="apply"
            role="tabpanel"
            aria-labelledby="apply-tab"
          >
            <div className="tab-container">
              <a href="#">
                <div className="heading">
                  <div className="icon">
                    <img
                      src={PhoneNuberChangeiIcon}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                </div>
                <div className="teachers">
                  <h3>সামিনা চৌধুরী</h3>
                  <h3>|</h3>
                  <h3>সহকারী শিক্ষক</h3>
                </div>
                <div className="class-section">
                  <div className="class-day-section">
                    <h6>ষষ্ঠ শ্রেণী</h6>
                    <h6>Day</h6>
                    <h6>Section A</h6>
                  </div>
                  <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                </div>
              </a>
            </div>
            <div className="tab-container">
              <a href="#">
                <div className="heading">
                  <div className="icon">
                    <img
                      src={bishoiPoribortonIcon}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h2>বিষয় পরিবর্তনের অনুরোধ করেছেন</h2>
                </div>
                <div className="teachers">
                  <h3>সামিনা চৌধুরী</h3>
                  <h3>|</h3>
                  <h3>সহকারী শিক্ষক</h3>
                </div>
                <div className="class-section">
                  <div className="class-day-section">
                    <h6>ষষ্ঠ শ্রেণী</h6>
                    <h6>Day</h6>
                    <h6>Section A</h6>
                  </div>
                  <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                </div>
              </a>
            </div>
            <div className="tab-container">
              <a href="#">
                <div className="heading">
                  <div className="icon">
                    <img
                      src={PhoneNuberChangeiIcon}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                </div>
              </a>
            </div>
            <div className="button">
              <a>সব অনুরোধগুলি দেখুন</a>
              <img src={rightArrow} alt="rightArrow" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="notice"
            role="tabpanel"
            aria-labelledby="notice-tab"
          >
            <div className="tab-container">
              <a href="#">
                <div className="heading">
                  <div className="icon">
                    <img
                      src={PhoneNuberChangeiIcon}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                </div>
                <div className="teachers">
                  <h3>সামিনা চৌধুরী</h3>
                  <h3>|</h3>
                  <h3>সহকারী শিক্ষক</h3>
                </div>
                <div className="class-section">
                  <div className="class-day-section">
                    <h6>ষষ্ঠ শ্রেণী</h6>
                    <h6>Day</h6>
                    <h6>Section A</h6>
                  </div>
                  <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                </div>
              </a>
            </div>
            <div className="tab-container">
              <a href="#">
                <div className="heading">
                  <div className="icon">
                    <img
                      src={bishoiPoribortonIcon}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h2>বিষয় পরিবর্তনের অনুরোধ করেছেন</h2>
                </div>
                <div className="teachers">
                  <h3>সামিনা চৌধুরী</h3>
                  <h3>|</h3>
                  <h3>সহকারী শিক্ষক</h3>
                </div>
                <div className="class-section">
                  <div className="class-day-section">
                    <h6>ষষ্ঠ শ্রেণী</h6>
                    <h6>Day</h6>
                    <h6>Section A</h6>
                  </div>
                  <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                </div>
              </a>
            </div>
            <div className="tab-container">
              <a href="#">
                <div className="heading">
                  <div className="icon">
                    <img
                      src={PhoneNuberChangeiIcon}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                </div>
              </a>
            </div>
            <div className="button">
              <a>সব অনুরোধগুলি দেখুন</a>
              <img src={rightArrow} alt="rightArrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnorudhShomohu;