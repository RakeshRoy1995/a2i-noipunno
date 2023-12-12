import '../../assets/dashboard_materials/css/dashboard.css';
import reportIcon from '../../assets/dashboard_materials/images/dashboard/document-text.png';

const ReportForHeadTeacherDashboard = () => {
  return (
    <section>
      <div className="container report-container">
        <h2>রিপোর্ট</h2>
        <div className="row mt-2 mb-5">
          <div className="col">
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
          </div>
          <div className="col">
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
          </div>
          <div className="col">
            <a href="#" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportForHeadTeacherDashboard;