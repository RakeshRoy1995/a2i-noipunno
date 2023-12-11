import React from "react";
import html2pdf from "html2pdf.js";
import { BsCheckCircle, BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import styles from "./Home.style.module.css";
import { TiTick } from "react-icons/ti";
import {
  section_name,
  shift_name,
  teacher_name,
  branch_name,
  convertToBanglaNumber,
  subject_name,
} from "../utils/Utils";

function Pdf({
  data,
  instititute,
  selectedSunject,
  allFelter,
  student_info_pdf,
  handleConvertToPdf,
  unique_id,
  teacher,
}: any) {
  const imageShow = JSON.parse(localStorage.getItem("teacher_sign_show"));
  const image = localStorage.getItem("teacher_sign");
  return (
    <div>
      <div>
        <div id={"contentToConvert_" + unique_id} className="container border">
          <div className="row p-2">
            <div className="text-center py-3">
              <h6 style={{ fontSize: "14px" }}>
                {instititute?.institute_name}
              </h6>
              <h6 style={{ fontSize: "14px" }}>
                {instititute?.unions} ,{" "}
                {instititute?.district?.district_name_bn}
              </h6>

              {/* <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>
                
              {allFelter?.mullayon == 1234567890 && "শিখনকালীন মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567891 && "ষাষ্মাসিক সামষ্টিক মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567892 && "বার্ষিক সামষ্টিক মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567893 && "ষান্মাসিক আচরণিক মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567894 && "বার্ষিক আচরণিক মূল্যায়ন"  }
                
                এর বিষয়ভিত্তিক
                ট্রান্সক্রিপ্ট-২০২৩
              </h6> */}
            </div>
            <div className="pdf_table">
              <table className="table table-bordered border-dark table-sm table-responsive ">
                <thead>
                  <tr>
                    <th
                      colSpan={3}
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শিক্ষার্থীর নাম:{" "}
                      {student_info_pdf.student_name_bn ||
                        student_info_pdf.student_name_en}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শিক্ষার্থীর রোল :{" "}
                      {convertToBanglaNumber(student_info_pdf.roll)}
                    </th>
                  </tr>
                  <tr>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শ্রেণী: {student_info_pdf.class}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শাখা: {section_name(student_info_pdf.section)}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      বিষয়:
                      {subject_name(allFelter?.subject?.split("-")[0])}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      বিষয় শিক্ষকের নাম: {teacher}
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-center"
                      colSpan={4}
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      পারদর্শিতার সূচকের মাত্রা
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={2}
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      পারদর্শিতা সূচক (PI)
                    </th>
                    <th
                      colSpan={2}
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শিক্ষার্থীর পারদর্শিতা মাত্রা
                    </th>
                  </tr>
                </thead>
                <tbody className="pdf_table_pi_show">
                  {data?.all_PI_array?.map((all_pi: any, k: any) => (
                    <tr key={k}>
                      <td className="w-25">
                        {convertToBanglaNumber(all_pi.pi_data.pi_no)} <br />
                        {all_pi.pi_data.name_bn || all_pi.pi_data.name_en}
                      </td>

                      {all_pi.pi_data.pi_attribute.map((pi_data: any, key) => (
                        <td className="w-25">
                          {all_pi.weight_uid == pi_data.weight_uid && (
                            <BsCheckCircle className="fs-5 pe-1" />
                          )}

                          {pi_data.title_bn || pi_data.title_en}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex pt-5 pb-1">
                <div
                  className="w-50"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  <p>বিষয় শিক্ষকের নাম: {teacher}</p>
                  
                  {imageShow && <img src={image} style={{ width: "40%" }} />}
                   
                  <p>বিষয় শিক্ষকের স্বাক্ষরঃ</p>
                </div>

                <div
                  className="w-50"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  প্রধান শিক্ষকের স্বাক্ষরঃ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="d-flex gap-2 pointer"
          onClick={(e) => handleConvertToPdf()}
        >
          <div className={`${styles.download_btn}`}>
            <BsFillFileEarmarkArrowDownFill className="fs-4 me-2" />
            ডাউনলোড করুন
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Pdf;
