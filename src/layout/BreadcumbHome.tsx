
import { AiOutlineHome } from "react-icons/ai";
import { BiSidebar } from "react-icons/bi";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import styles from "../component/Home.style.module.css";
import { useNavigate } from 'react-router-dom';
export default function BreadcumbHome({ setshowMainAssessments, seshowCompitance,  setMullayon_name, breadcumbTitle, showSubjectname, seshowSubject, setShowProfile, title, selected_subject }: any) {
  const navigate = useNavigate();
  return (
    <section className="container pt-3 mb-3" >
      <div className="   d-flex align-items-center gap-2">
        <div className="card" style={{ backgroundColor: "white" }}>
          <button
            className='border-0  rounded shadow-sm bg-white w-100' onClick={() => {
              seshowSubject(false);
              setShowProfile(false)
              seshowCompitance(false)
              setshowMainAssessments(false)
              setMullayon_name("")
              navigate('/')


            }} style={{ padding: "1rem",  }}>
            <MdArrowBackIosNew className="fs-3 text-secondary" />
          </button>
        </div>

        <div className="card shadow-sm p-2 w-100">

          <div className="d-flex align-items-center gap-2">
            <BiSidebar className={`fs-3 ${styles.teacher_info_list}`} />{" "}


            <div className="d-flex flex-column gap-2">
              <div className="d-flex  justify-content-start align-items-center" style={{ fontSize: "14px" }}>
                <span>{showSubjectname}</span>


                <MdOutlineArrowForwardIos />

                <span>
                  <>{
                    (selected_subject?.subject?.class_uid === "6") && "ষষ্ঠ শ্রেণি" || (selected_subject?.subject?.class_uid === "7") && "সপ্তম শ্রেণি" ||
                    (selected_subject?.subject?.class_uid === "8") && " অস্টম শ্রেণি" ||
                    (selected_subject?.subject?.class_uid === "9") && " নবম শ্রেণি" ||
                    (selected_subject?.subject?.class_uid === "10") && " দশম শ্রেণি"
                  }
                  </>
                </span>

              </div>
              <h6 className="d-flex justify-content-lg-center align-items-center gap-1" style={{ color: "#428F92", fontSize: "12px" }}>
                {" "}
                <AiOutlineHome />
                প্রথম পাতা{" "}
                <span style={{ color: "#000" }} className="d-flex justify-content-lg-center align-items-center">
                  {" "}
                  <MdOutlineArrowForwardIos />
                  {title}
                  <MdOutlineArrowForwardIos />
                  {" "}
                  {breadcumbTitle}

                  {/* <strong>{
                    (selected_subject?.subject?.class_uid === "6") && "ষষ্ঠ শ্রেণি" || (selected_subject?.subject?.class_uid === "7") && "সপ্তম শ্রেণি" ||
                    (selected_subject?.subject?.class_uid === "8") && " অস্টম শ্রেণি" ||
                    (selected_subject?.subject?.class_uid === "9") && " নবম শ্রেণি" ||
                    (selected_subject?.subject?.class_uid === "10") && " দশম শ্রেণি"
                  }
                  </strong> */}
                </span>
              </h6>
            </div>
          </div>
          {/* <div className="d-flex gap-2 align-items-center fs-4">
                          <FiStar /> <HiOutlineDotsVertical />
                        </div> */}

        </div>
      </div>





    </section>
  )
}