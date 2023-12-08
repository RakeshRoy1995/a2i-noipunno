import teacher_photo from '../../public/assets/images/teacher.jpeg';
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./Home.style.module.css";
import Breadcumb from "../layout/Breadcumb";
import { Button, Modal, Spinner } from 'react-bootstrap';
import { subject_name } from "../utils/Utils";
import female_tec_avatar from "../../public/assets/images/teacher_avatar/female_tec_avatar.png";
import "../../src/styles/noipunno_custom_styles.css";

export default function TeachersList() {
  const [teachers, setTeachers] = useState<any>([]);
  const [showModal, setShowModal] = useState<any>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [screenSize, setScreenSize] = useState<any>('');

  const fetchData = async () => {
    const teachersData = JSON.parse(localStorage.getItem('teacher_dashboard'));
    setTeachers(teachersData?.data?.teachers)
  };

  const handleShowModal = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 576) {
      setScreenSize('small-screen');
    } else if (width <= 768) {
      setScreenSize('medium-screen');
    } else {
      setScreenSize('large-screen');
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // console.log("teachers", teachers);


  return (
    <div className='teacher_list_page'>
      <Breadcumb title={"শিক্ষকের তালিকা"} />
      {
        (teachers?.length == 0) ?
          <div className={styles.loading_container}>
            <Spinner animation="border" />
          </div>
          :
          <div className="container">
            <section className="">
              <div className={`${styles.grid_view} p-0 m-0 `}>
                {teachers?.map((teacher, index) => (
                  <div key={index} id={styles.teacher_card_list} className="card p-2 border">
                    <div className="d-flex justify-content-start align-items-center gap-4">
                      <div>
                        <img src={(teacher.gender === 'Male') && teacher_photo || (teacher.gender === 'Female') && female_tec_avatar || teacher_photo} width="60rem" className="img-fluid" />
                      </div>

                      <div className="d-flex flex-column justify-content-center align-items-start gap-1">
                        <div className='d-flex flex-column justify-content-center align-items-start gap-1'>
                          <h5 className={styles.teacherName}>নামঃ {teacher?.name_en || "no-entry"} </h5>
                          <h5 className={styles.teacherName}>পদবিঃ {teacher?.designation || "no-entry"}</h5>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <button onClick={() => handleShowModal(teacher)} className="btn btn-primay btn-sm d-flex justify-content-center align-items-center" style={{ backgroundColor: "#428F92", color: "#fff", }} >
                            বিস্তারিত{" "}
                            <MdOutlineKeyboardArrowRight className="fs-5" />{" "}
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>


              <Modal className="" show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered>

                {/* <Modal.Header closeButton>
                <Modal.Title>
                  Details
                </Modal.Title>
              </Modal.Header> */}

                <Modal.Header>
                  <Modal.Title className="container">
                    শিক্ষকের নামঃ {selectedItem?.name_bn || selectedItem?.name_en || "no-entry"} <br />
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <div className="container">
                    <div className={`${(screenSize === "small-screen") && "w-100" || (screenSize === "large-screen") && "w-75" || "w-75"} text-center text-md-end mx-auto mb-4 mb-md-0 mb-lg-0`} >
                      <img src={(selectedItem?.gender === "Male") && teacher_photo || (selectedItem?.gender === "Female") && female_tec_avatar || teacher_photo} width="100rem" className="img-fluid border border-info p-1" />
                    </div>

                    <table className={`${(screenSize === "small-screen") && "w-100" || (screenSize === "large-screen") && "w-75" || "w-75"} table text-sm mx-auto`}>
                      <tbody>

                        <tr>
                          <td className="p-1">
                            <strong>মোবাইল নাম্বারঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.mobile_no}</td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>জন্ম তারিখঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.date_of_birth || "no-entry"}</td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>লিঙ্গঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.gender || "no-entry"}</td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>আইডিঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.id || "no-entry"}</td>
                        </tr>


                        <tr>
                          <td className="p-1">
                            <strong>ইমেইলঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.email || "no-entry"}</td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>এন-আইডিঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.nid || "no-entry"}</td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>পদবিঃ</strong>
                          </td>
                          <td className="p-1">{selectedItem?.designation || "no-entry"}</td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>অর্পিত বিষয় সমূহঃ</strong>
                          </td>

                          <td className="p-1">
                            {
                              (selectedItem?.assigned_subjects?.length > 0) ?
                                <>
                                  {selectedItem?.assigned_subjects?.map((item: any, index: any) => (
                                    <span key={index}>
                                      {subject_name(item.subject_id)}
                                      {index !== (selectedItem?.assigned_subjects?.length - 1) && <span>, </span>}
                                    </span>
                                  ))}
                                </>
                                : "no-entry"
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>





                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    বন্ধ করুন
                  </Button>
                </Modal.Footer>
              </Modal>
            </section>
          </div>
      }


    </div>
  )
}
