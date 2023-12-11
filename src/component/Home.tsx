import HeadTeacherDashboard from "./Dashboards/HeadTeacherDashboard/HeadTeacherDashboard";
import TeacherDashboard from "./Dashboards/TeacherDashboard/TeacherDashboard";
// import "../../src/assets/project_ca_html/css/dashboard.css";
// import "../../src/assets/dashboard_materials/css/dashboard.css";

export default function Home() {

  return (
    <>
      {<TeacherDashboard />}
      {/* {<HeadTeacherDashboard />} */}
    </>
  );
}
