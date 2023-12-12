import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import { clssWiseSubject } from "../Request";
import Breadcumbtitle from "../layout/Breadcumb";
import { Spinner } from "react-bootstrap";
import bookIcon from '../assets/dashboard_materials/images/dashboard/bicon.svg';
import card from '../assets/dashboard_materials/css/dashboard.css';




const ClassWiseSubject = () => {
  const { id } = useParams();
  const [subjects, setSubjects] = useState<any>([])

  const getClassData = async () => {
    const { data }: any = await clssWiseSubject(id);
    setSubjects(data.data)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    getClassData()
  }, [id]);


  return (
    <section className="class_wise_subject_page">
      <div className="container row mx-auto ">
        <Breadcumbtitle title={(id == "6") && "ষষ্ঠ শ্রেণির বিষয় " || (id == "7") && "সপ্তম শ্রেণির বিষয় "} />

        {/* <div className="my-4">
        <h4> {(id == "6") && "ষষ্ঠ" || (id == "7") && "সপ্তম"} শ্রেণির বিষয় সমুহ </h4>
      </div> */}

        {/* {(subjects?.length == 0) ? <div className={styles.loading_container}><Spinner animation="border" /> </div> : <>
        {subjects?.map((subject, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 mx-auto" >
            <div id={styles.class_card} className="card shadow-sm border-1 p-1 p-lg-3 my-3 teacher-list-card">
              <div className="gap-1 gap-lg-3 justify-content-center">
                <div className="d-flex justify-content-center py-2 pb-4">
                  <div
                    className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                  >
                    <div className={styles.icons}>
                      <SlBookOpen className="fs-3" />
                    </div>
                  </div>
                </div>
                <h5 className={styles.subject}>{subject?.name}</h5>
                <h5 className={styles.std_class}>{(subject?.class_uid === "6") && "ষষ্ঠ শ্রেণি" || (subject?.class_uid === "7") && "সপ্তম শ্রেণি"}</h5>
              </div>
            </div>
          </div>))}
      </>} */}

        {
          (subjects?.length == 0) ?
            <div className={styles.loading_container}>
              <Spinner animation="border" />
            </div>
            :
            <section>
              <div className="container subject-container">
                <h2>{(id == "6") && "ষষ্ঠ" || (id == "7") && "সপ্তম"} শ্রেণির বিষয় সমুহ </h2>
                <div className="row">
                  {subjects?.map((subject, index) => (
                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2">
                      <a href="#" className="subject-number">
                        <div className="icon">
                          <img src={bookIcon} alt="bookIcon" />
                        </div>
                        <h2 className="mt-3">{subject?.name}</h2>
                        <div className="total-student">
                          <p>
                            {
                              (subject?.class_uid === "6") && "ষষ্ঠ শ্রেণি" ||
                              (subject?.class_uid === "7") && "সপ্তম শ্রেণি"
                            }
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
        }
      </div>
    </section>

  );
};

export default ClassWiseSubject;