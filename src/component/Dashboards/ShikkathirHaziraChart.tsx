// import '../../assets/dashboard_materials/css/dashboard.css';
// import chart from '../../assets/dashboard_materials/images/dashboard/Chart.png';
// import Teacher from '../Teacher';


// const ShikkathirHaziraChart = () => {
//   return (
//     <div className="col-lg-7 col-md-6">
//       <Teacher />
//     </div>
//   );
// };
// export default ShikkathirHaziraChart;
{/* <div className="student-chart">
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
</div> */}

import React from 'react';
import '../../assets/dashboard_materials/css/dashboard.css';
import chart from '../../assets/dashboard_materials/images/dashboard/Chart.png';
import Teacher from '../Teacher';

const ShikkathirHaziraChart = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="col-lg col-md-6" onClick={handleClick}>
      <Teacher />
    </div>
  );
};

export default ShikkathirHaziraChart;
