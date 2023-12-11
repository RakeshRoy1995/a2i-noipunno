import BannerSection from "../BannerSection";
import BishoybittikThottoOMullayon from "../BishoybittikThottoOMullayon";
import ClassRoutine from "../ClassRoutine";
import ReportForTeacherDashboard from "../ReportForTeacherDashboard";
import PopUpAppInfo from '../../PopUpAppInfo/PopUpAppInfo';
import SryniBishoyokTottho from "../SryniBishoyokTottho";



const TeacherDashboard = () => {
  return (
    <div className="dashboard_page">
      <BannerSection />
      {/* <ReportForTeacherDashboard /> */}
      <BishoybittikThottoOMullayon />
      {/* <SryniBishoyokTottho /> */}
      {/* <ClassRoutine /> */}
      <PopUpAppInfo />
    </div>
  );
};

export default TeacherDashboard;