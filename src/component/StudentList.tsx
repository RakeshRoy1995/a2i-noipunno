import studentImage from "../../public/assets/noipunno/images/avatar/Layer_1.png";
import styles from "./Home.style.module.css";
import { useState, useEffect } from "react";
import Breadcumb from "../layout/Breadcumb";
import { Button, Modal, Spinner } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { convertToBanglaNumber, section_name, shift_name, version_name } from "../utils/Utils";
import female_avt_img from "../assets/project_ca_html/student_img/female_std.png";
import male_avt_img from "../../public/assets/images/user_avatar/male_std.png";



const StudentList = () => {
  const [student, setStudent] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [screenSize, setScreenSize] = useState("");

  const fetchData = async () => {
    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem("own_subjet"));
    studentsData?.data?.data?.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );

    uniqueObjectsArray.sort(function (a, b) {
      return a.roll - b.roll;
    });

    setStudent(uniqueObjectsArray);
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
      setScreenSize("small_screen");
    } else if (width > 576 && width <= 767) {
      setScreenSize("medium_screen");
    } else if (width > 768 && width <= 1280) {
      setScreenSize("large_screen");
    } else {
      setScreenSize("extra_large_screen");
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <section className="student_list_page">
      <Breadcumb title={"শিক্ষার্থীর তালিকা"} />

      {student?.length == 0 ?
        (<div className="container student_list_page py-5 text-center" >No Student Found</div>) :
        (<div className="container py-3" >
          <section>
            <div className={`${styles.grid_view} p-0 m-0`}>
              {student?.map((student, index) => (
                <div
                  key={index}
                  id={styles.student_card}
                  className="card p-2 border"
                >
                  <div className="d-flex justify-content-start align-items-center gap-4 ">
                    <div>
                      <img
                        src={
                          (student?.gender?.toLowerCase() == "male") && male_avt_img ||
                          (student?.gender?.toLowerCase() == "female") && female_avt_img
                        }

                        width="60rem"
                        className="img-fluid"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-1">
                      <div className="d-flex flex-column justify-content-center align-items-start gap-1">
                        <h5 className={styles.teacherName}>
                          নামঃ {student?.student_name_bn || student?.student_name_en || "-"}{" "}
                        </h5>
                        <h5 className={styles.teacherName}>
                          রোলঃ {convertToBanglaNumber(student?.roll || "-")}{" "}
                        </h5>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          onClick={() => handleShowModal(student)}
                          className="btn btn-primay btn-sm d-flex justify-content-center align-items-center"
                          style={{ backgroundColor: "#428F92", color: "#fff" }}
                        >
                          বিস্তারিত{" "}
                          <MdOutlineKeyboardArrowRight className="fs-5" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* student profile card modal */}
              <Modal
                className="mx-auto pl-0"
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <Modal.Title className="container">
                    শিক্ষার্থীর নামঃ{" "}
                    {selectedItem?.student_name_bn ||
                      selectedItem?.student_name_en ||
                      "not-assigned"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">


                    {/* <table
                      className={`table ${(screenSize === "small_screen" && "w-100") ||
                        ((screenSize === "medium_screen" ||
                          screenSize === "large_screen") &&
                          "w-75") ||
                        (screenSize === "extra_large_screen" && "w-75")
                        }
                     text-sm mx-auto`}
                    >
                      <tbody>
                        <tr>
                          <td className="p-1">
                            <strong>রোলঃ</strong>
                          </td>
                          <td className="p-1">
                            {convertToBanglaNumber(selectedItem?.roll) || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong> শ্রেণীঃ </strong>
                          </td>
                          <td className="p-1">
                            {(selectedItem?.class == "6" && "ষষ্ঠ") ||
                              (selectedItem?.class == "7" && "সপ্তম") ||
                              (selectedItem?.class == "8" && "অষ্টম") ||
                              (selectedItem?.class == "9" && "৯ম") ||

                              "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong> সেকশনঃ </strong>
                          </td>
                          <td className="p-1">
                            {section_name(selectedItem?.section) || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong> শিফটঃ </strong>
                          </td>
                          <td className="p-1">
                            {shift_name(selectedItem?.shift) || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong> ভার্শনঃ </strong>
                          </td>
                          <td className="p-1">
                            {version_name(selectedItem?.version) ||
                              selectedItem?.version ||
                              "no-entry"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>মোবাইলঃ</strong>
                          </td>
                          <td className="p-1">
                            {convertToBanglaNumber(selectedItem?.student_mobile_no) || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>ইমেইলঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.email || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>জন্ম তারিখঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.date_of_birth || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>রক্তের গ্রুপঃ </strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.blood_group || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>পিতার নামঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.father_name_bn || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>মাতার নামঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.mother_name_bn || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong> রেজিস্টেশন তারিখঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.registration_year || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>লিঙ্গঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.gender || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>ধর্মঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.religion || "-"}
                          </td>
                        </tr>

                        <tr>
                          <td className="p-1">
                            <strong>বর্তমান ঠিকানাঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.present_address || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>স্থায়ী ঠিকানাঃ</strong>
                          </td>
                          <td className="p-1">
                            {selectedItem?.present_address || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>পিতার মোবাইল নম্বারঃ</strong>
                          </td>
                          <td className="p-1">
                            {convertToBanglaNumber(selectedItem?.father_mobile_no) || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>মাতার মোবাইল নম্বারঃ</strong>
                          </td>
                          <td className="p-1">
                            {convertToBanglaNumber(selectedItem?.mother_mobile_no) || "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <strong>অভিবাবকের মোবাইল নম্বারঃ</strong>
                          </td>
                          <td className="p-1">
                            {convertToBanglaNumber(selectedItem?.guardian_mobile_no) || "-"}
                          </td>
                        </tr>
                      </tbody>
                    </table> */}

                    <div className="d-flex  justify-content-between align-items-center" >
                          {/* cad */}
                      <div className="row d-flex flex-col-4 justify-content-center align-items-center mx-auto w-50 text-center shadow p-3 mb-5 bg-body rounded"
                     >
                      <div className={`text-center

                  ${(screenSize === "small_screen" && "w-100") ||
                        ((screenSize === "medium_screen" ||
                          screenSize === "large_screen") &&
                          "w-75") ||
                        (screenSize === "extra_large_screen" && "w-75")
                        }mb-1 mx-auto mb-4 mb-md-2 mb-lg-2`}>
                      <img
                        src={
                          (selectedItem?.gender?.toLowerCase() == "male") && male_avt_img ||
                          (selectedItem?.gender?.toLowerCase() == "female") && female_avt_img
                        }
                        width="100rem"
                        className="mt-2"

                      />
                    </div>

                        <div>
                          <p> রোলঃ {convertToBanglaNumber(selectedItem?.roll) || "-"}
                          </p>
                        </div>

                        <div>
                          <p> সেকশনঃ
                            {(selectedItem?.class == " 6" && " ষষ্ঠ") ||
                              (selectedItem?.class == " 7" && " সপ্তম") ||
                              (selectedItem?.class == " 8" && " অষ্টম") ||
                              (selectedItem?.class == " 9" && " ৯ম") ||
                              "-"}
                          </p>
                        </div>
                        <div>
                          <p>শ্রেণীঃ {section_name(selectedItem?.section) || "-"}
                          </p>
                        </div>
                        <div>
                          <p>শিফটঃ {shift_name(selectedItem?.shift) || "-"}
                          </p>
                        </div>
                        <div>
                          <p>ভার্শনঃ {version_name(selectedItem?.version) ||
                            selectedItem?.version ||
                            "no-entry"}
                          </p>
                        </div>

                      </div>

                      {/* more info */}
                      <div className="flex-col-8">
                      <div>
                          <p>মোবাইলঃ {convertToBanglaNumber(selectedItem?.student_mobile_no) || "-"}
                          </p>
                        </div>
                        <div>
                          <p>ইমেইলঃ  {selectedItem?.email || "-"}
                          </p>
                        </div>
                        <div>
                          <p>জন্ম তারিখঃ  {selectedItem?.date_of_birth || "-"}
                          </p>
                        </div>
                        <div>
                          <p>রক্তের গ্রুপঃ   {selectedItem?.blood_group || "-"}
                          </p>
                        </div>
                        <div>
                          <p>পিতার নামঃ  {selectedItem?.father_name_bn || "-"}
                          </p>
                        </div>
                        <div>
                          <p>মাতার নামঃ   {selectedItem?.mother_name_bn || "-"}
                          </p>
                        </div>
                        <div>
                          <p>রেজিস্টেশন তারিখঃ    {selectedItem?.registration_year || "-"}
                          </p>
                        </div>
                        <div>
                          <p>লিঙ্গঃ {selectedItem?.gender || "-"}
                          </p>
                        </div>
                        <div>
                          <p>ধর্মঃ   {selectedItem?.religion || "-"}
                          </p>
                        </div>
                        <div>
                          <p>বর্তমান ঠিকানাঃ   {selectedItem?.present_address || "-"}
                          </p>
                        </div>
                        <div>
                          <p>স্থায়ী ঠিকানাঃ {selectedItem?.present_address || "-"}
                          </p>
                        </div>
                        <div>
                          <p>পিতার মোবাইল নম্বারঃ  {convertToBanglaNumber(selectedItem?.father_mobile_no) || "-"}
                          </p>
                        </div>
                        <div>
                          <p>মাতার মোবাইল নম্বারঃ    {convertToBanglaNumber(selectedItem?.mother_mobile_no) || "-"}
                          </p>
                        </div>
                        <div>
                          <p>অভিবাবকের মোবাইল নম্বারঃ    {convertToBanglaNumber(selectedItem?.guardian_mobile_no) || "-"}
                          </p>
                        </div>

                      </div>
                    </div>


                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button style={{ backgroundColor: "#963293", borderStyle: "none" }} onClick={handleCloseModal}>
                    বন্ধ করুন
                  </Button>
                </Modal.Footer>
              </Modal>

            </div>
          </section>
        </div>
        )}
    </section>
  );
};

export default StudentList;
