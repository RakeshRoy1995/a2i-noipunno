import '../../assets/dashboard_materials/css/dashboard.css';
import chart from '../../assets/dashboard_materials/images/dashboard/Chart.png';


const ShikkathirHaziraChart = () => {
  return (
    <div className="col-lg-5 col-md-6">
      <div className="student-chart">
        <div className="header">
          <h3>শিক্ষার্থীর হাজিরা</h3>
          <div className="timeline">
            <h4>টাইমলাইন</h4>
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option value="">সাপ্তাহিক </option>
              <option value={1}>মাসিক</option>
              <option value={2}>বছর</option>
            </select>
          </div>
          <div className="all">
            <h4>ক্লাস অনুসারে ফিল্টার</h4>
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option value="">সব</option>
              <option value={2}>দিন</option>
              <option value={3}>মাসিক</option>
            </select>
          </div>
        </div>
        <div className="chart">
          <img src={chart} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default ShikkathirHaziraChart;