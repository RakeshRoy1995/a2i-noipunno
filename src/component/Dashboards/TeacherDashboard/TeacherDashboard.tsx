import BannerSection from "../BannerSection";
import BishoybittikThottoOMullayon from "../BishoybittikThottoOMullayon";
import ClassRoutine from "../ClassRoutine";
import ReportForTeacherDashboard from "../ReportForTeacherDashboard";
import PopUpAppInfo from '../../PopUpAppInfo/PopUpAppInfo';
import PopUpAppInfoInside from "../../PopUpAppInfo/PopUpAppInfoInside";



const TeacherDashboard = () => {
  return (
    <div className="dashboard_page" style={{backgroundColor:"#F1F1F2"}} >
      <BannerSection />
      {/* <ReportForTeacherDashboard /> */}
      <BishoybittikThottoOMullayon />
      {/* <ClassRoutine /> */}
      <PopUpAppInfoInside />
    </div>
  );
};

export default TeacherDashboard;