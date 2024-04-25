import React, { useState } from 'react'
import ShikkathirHaziraChart from '../../Dashboards/ShikkathirHaziraChart'
import TeacherAttendance from '../../TeacherAttendance';

export default function AttendanceSubject() {
  const [showTeacherProfileCard, setShowTeacherProfileCard] = useState(true);
  const [showShikkathirHaziraChart, setShowShikkathirHaziraChart] = useState(true);
  const [showTotalStudentTeacherClassRoom, setShowTotalStudentTeacherClassRoom] = useState(true);

  const handleShikkathirHaziraChartClick = () => {
    //console.log("ShikkathirHaziraChart clicked");
    setShowTeacherProfileCard(false);
    setShowTotalStudentTeacherClassRoom(false);
  };

  return (
    <section className="container my-3" style={{backgroundColor: "#F1F1F2"}}>
    <div className="card-container">
      <div className="row g-3" >
        <TeacherAttendance/>
        
      </div>
    </div>
  </section>
  )
}
