import '../../../assets/dashboard_materials/css/dashboard.css';
import PopUpAppInfo from '../../PopUpAppInfo/PopUpAppInfo';
import BannerSection from '../BannerSection';
import ClassRoutine from '../ClassRoutine';
import ParodorshitarSuchokBishoyokTottho from '../ParodorshitarSuchokBishoyokTottho';
import ReportForHeadTeacherDashboard from '../ReportForHeadTeacherDashboard';

import ShikkokerTalika from '../ShikkokerTalika';
import SryniBishoyokTottho from '../SryniBishoyokTottho';

const HeadTeacherDashboard = () => {
  return (
    <div>
      <BannerSection />
      <ReportForHeadTeacherDashboard />
      <SryniBishoyokTottho />
      <ParodorshitarSuchokBishoyokTottho />
      <ShikkokerTalika />
      <ClassRoutine />
      <PopUpAppInfo />
    </div>
  );
};

export default HeadTeacherDashboard;