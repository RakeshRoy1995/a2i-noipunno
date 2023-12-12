import reportIcon from '../../assets/dashboard_materials/images/dashboard/document-text.png';

const ReportForTeacherDashboard = () => {
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
              <h2>হাজিরা প্রতিবেদন</h2>
            </a>
          </div>
          <div className="col">
            <a href="#" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>পারদর্শিতার মূল্যায়ন প্রতিবেদন (PI)</h2>
            </a>
          </div>
          <div className="col">
            <a href="#" className="student-container">
              <div className="icon">
                <img src={reportIcon} alt="reportIcon" />
              </div>
              <h2>আচরণগত মূল্যায়ন প্রতিবেদন (BI)</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportForTeacherDashboard;