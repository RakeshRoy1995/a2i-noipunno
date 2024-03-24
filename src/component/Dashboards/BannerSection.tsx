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

//   // console.log("showTeacherProfileCard:", showTeacherProfileCard);
//   // console.log("showShikkathirHaziraChart:", showShikkathirHaziraChart);
//   // console.log("showTotalStudentTeacherClassRoom:", showTotalStudentTeacherClassRoom);

//   return (
//     <section className="container my-3" style={{ background: "white" }}>
//       <div className="card-container">
//         {/* <div className="row g-3 "> */}
//         <div className="row justify-content-center align-items-center ">

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
