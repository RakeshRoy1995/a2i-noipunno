import BannerSection from "../BannerSection";
import BishoybittikThottoOMullayon from "../BishoybittikThottoOMullayon";
import ClassRoutine from "../ClassRoutine";
import ReportForTeacherDashboard from "../ReportForTeacherDashboard";
import PopUpAppInfo from '../../PopUpAppInfo/PopUpAppInfo';



const TeacherDashboard = () => {
  return (
    <div className="dashboard_page">
      <BannerSection />
      {/* <ReportForTeacherDashboard /> */}
      <BishoybittikThottoOMullayon />
      {/* <ClassRoutine /> */}
      <PopUpAppInfo />
    </div>
  );
};

export default TeacherDashboard;