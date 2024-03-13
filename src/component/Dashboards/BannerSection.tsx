import '../../assets/dashboard_materials/css/dashboard.css';
import OnorudhShomohu from './OnorudhShomohu';
import ShikkathirHaziraChart from './ShikkathirHaziraChart';
import TeacherProfileCard from './TeacherProfileCard';
import Total_Student_Teacher_ClassRoom_for_HeadTeacherDashboard from './Total_Student_Teacher_ClassRoom_for_HeadTeacherDashboard';
import Total_Student_Teacher_ClassRoom_for_TeacherDashboard from './Total_Student_Teacher_ClassRoom_for_TeacherDashboard';


const BannerSection = () => {

  return (
    <section className="container my-3" style={{background:"while"}}>
      <div className="card-container">
        <div className="row g-3 ">
          <TeacherProfileCard />
          <ShikkathirHaziraChart />
          <Total_Student_Teacher_ClassRoom_for_TeacherDashboard />
        </div>

      </div>
    </section>
  );
};
export default BannerSection;

{/* <Total_Student_Teacher_ClassRoom_for_HeadTeacherDashboard /> */}
{/* <OnorudhShomohu /> */}

// import React, { useState } from 'react';
// import TeacherProfileCard from './TeacherProfileCard';
// import ShikkathirHaziraChart from './ShikkathirHaziraChart';
// import Total_Student_Teacher_ClassRoom_for_TeacherDashboard from './Total_Student_Teacher_ClassRoom_for_TeacherDashboard';

// const BannerSection = () => {
//   const [showTeacherProfileCard, setShowTeacherProfileCard] = useState(true);
//   const [showShikkathirHaziraChart, setShowShikkathirHaziraChart] = useState(true);
//   const [showTotalStudentTeacherClassRoom, setShowTotalStudentTeacherClassRoom] = useState(true);

//   const handleShikkathirHaziraChartClick = () => {
//     console.log("ShikkathirHaziraChart clicked");
//     setShowTeacherProfileCard(false);
//     setShowTotalStudentTeacherClassRoom(false);
//   };


// const teacherDashboardData = localStorage.getItem("teacher_dashboard");

// // Check if data exists
// if (teacherDashboardData) {
//     // Parse the JSON string to JavaScript object
//     const teacherDashboard = JSON.parse(teacherDashboardData);

//     // Now you can access the data
//     console.log(teacherDashboard);
// } else {
//     // Handle the case where no data is found in local storage
//     console.log("No data found in local storage");
// }
//   return (
//     <section className="container my-3" style={{ background: "white" }}>
//       <div className="card-container">
//         <div className="row g-3 ">
//           {showTeacherProfileCard && <TeacherProfileCard />}
//           {showShikkathirHaziraChart && (
//             <ShikkathirHaziraChart onClick={handleShikkathirHaziraChartClick} />
//           )}
//           {showTotalStudentTeacherClassRoom && <Total_Student_Teacher_ClassRoom_for_TeacherDashboard />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerSection;
