// import '../../assets/dashboard_materials/css/dashboard.css';
import OnorudhShomohu from './OnorudhShomohu';
import ShikkathirHaziraChart from './ShikkathirHaziraChart';
import TeacherProfileCard from './TeacherProfileCard';
import Total_Student_Teacher_ClassRoom_for_HeadTeacherDashboard from './Total_Student_Teacher_ClassRoom_for_HeadTeacherDashboard';
import Total_Student_Teacher_ClassRoom_for_TeacherDashboard from './Total_Student_Teacher_ClassRoom_for_TeacherDashboard';


const BannerSection = () => {
  return (
    <section className="container my-3">
      <div className="card-container">
        <div className="row g-3 ">
          <TeacherProfileCard />
          {/* <ShikkathirHaziraChart /> */}
          {/* <Total_Student_Teacher_ClassRoom_for_HeadTeacherDashboard /> */}
          <Total_Student_Teacher_ClassRoom_for_TeacherDashboard />
          {/* <OnorudhShomohu /> */}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;