import { Link } from 'react-router-dom';
import '../../assets/dashboard_materials/css/dashboard.css';
import reportIcon from '../../assets/dashboard_materials/images/dashboard/document-text.png';

const ReportForHeadTeacherDashboard = () => {
  return (
    <section>
      <div className="container report-container">
        <h2>রিপোর্ট</h2>
        <div className="row mt-2 mb-5">
          <div className="col">
            <Link to="/student-transcript-pi" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>শিক্ষার্থীর ট্রান্সক্রিপ্ট (PI)</h2>
            </Link>
          </div>
          <div className="col">
            <Link to="#" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>শিক্ষার্থীর ট্রান্সক্রিপ্ট (BI)</h2>
            </Link>
          </div>
          <div className="col">
            <Link to="/shikkarthir-report-card" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>শিক্ষার্থীদের রিপোর্ট কার্ড</h2>
            </Link>
          </div>
          {/* <div className="col">
            <a href="#" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
            </a>
          </div>
          <div className="col">
            <a href="#" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ReportForHeadTeacherDashboard;