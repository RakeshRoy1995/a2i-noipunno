import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
// import Topbar from "./layout/Topbar";
import Footer from "./layout/Footer";
import Home from "./component/Home";
import { useEffect, useState } from "react";
import StudentMullayon from "./component/StudentMullayon";
import Teacher from "./component/Teacher";
import ClassWiseSubject from "./component/ClassWiseSubject";
import StudentList from "./component/StudentList";
import EditTeacherProfile from "./component/EditTeacherProfile";
import StudentTranscript from "./component/StudentTranscript";
import TeachersList from "./component/TeachersList";
import StudentMullayonBehave from "./component/StudentMullayonBehave";
import StudentMullayonBehaveSubmit from "./component/StudentMullayonBehaveSubmit";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
} from "./Request";
import AmarProfile from "./component/AmarProfile";
import MullayonKoron from "./component/MullayonKoron";
import HeadTeacherDashboard from "./component/Dashboards/HeadTeacherDashboard/HeadTeacherDashboard";
import TeacherDashboard from "./component/Dashboards/TeacherDashboard/TeacherDashboard";

import Navbar from "./layout/Navbar";
import FAQ from "./component/FAQ/FAQ";
import LoginPage from "./component/LoginPage";
import PasswordReset from "./component/PasswordReset";
import ShikarthirReportCard from "./component/ShikarthirReportCard";
import PDFMaker from "./component/PDFMaker/PDFMaker";

function App() {
  const [topbar, settopbar] = useState(false);
  const [render, setRender] = useState(true);
  const fetchData = async () => {
    if (window.location.pathname !== "/login") {
      settopbar(true);
      if (render) {
        // const own_subjet = await teacher_own_subject();
        // localStorage.setItem("own_subjet", JSON.stringify(own_subjet));

        // const data_dash: any = await teacher_dashboard();
        // localStorage.setItem("teacher_dashboard", JSON.stringify(data_dash.data));
        // setRender(false)
      }
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {topbar && <Navbar />}

      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/student-mullayon/:assessment_uid/:competence_uid"
            element={<StudentMullayon />}
          />
          <Route
            path="/student-mullayon-behave/:assessment_uid"
            element={<StudentMullayonBehave />}
          />
          <Route
            path="/student-mullayon-behave-submit/:assessment_uid/:competence_uid"
            element={<StudentMullayonBehaveSubmit />}
          />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/class/:id" element={<ClassWiseSubject />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/student-transcript" element={<StudentTranscript />} />
          <Route path="/edit-teacher-profile" element={<EditTeacherProfile />} />
          <Route path="/teacher-profile" element={<AmarProfile />} />
          <Route path="/teachers-list" element={<TeachersList />} />
          <Route path="/mollayon-koron" element={<MullayonKoron />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/head-teacher-dashboard" element={<HeadTeacherDashboard />} />
          <Route path="/shikkarthir-report-card" element={<ShikarthirReportCard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pdf-maker" element={<PDFMaker />} />
        </Route>

        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password/reset" element={<PasswordReset />} />

      </Routes>

      {topbar && <Footer />}

    </>
  );
}

export default App;
