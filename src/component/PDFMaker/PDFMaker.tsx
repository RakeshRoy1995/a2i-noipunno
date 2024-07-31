import {
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  PDFDownloadLink,
  View,
  Image,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
// import icon from "../../assets/images/Vector.png"
import icon from "../../../src/assets/project_ca_html/icons/OK_Icon.png";
// import myIcon from 'icons/myIcon.svg'
import {
  branch_location,
  branch_name,
  convertToBanglaNumber,
  section_name,
  subject_name,
} from "../../utils/Utils";
import { BsFiletypePdf } from "react-icons/bs";
import React from "react";
Font.register({
  family: "kalpurush",
  src: "kalpurush.ttf",
  format: "truetype",
});
import { styles } from "./PI_trans_style";

const MyDocument = ({
  data,
  instititute,
  allFelter,
  student_info_pdf,
  teacher,
  subject_teacher,
}: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View fixed>
        <Text style={[styles.h1]}>
          { instititute?.institute_name_bn || instititute?.institute_name}
        </Text>

        <Text style={[styles.h2]}>
          EIIN -{ instititute?.eiin }
        </Text>
        <Text style={[styles.h2]}>
          {" "}
          {branch_name(allFelter.branch, true)}{" "}
          {branch_location(allFelter?.branch) ||
            instititute?.district?.district_name_bn ||
            instititute?.district?.district_name_en}{" "}
        </Text>
        {/* style={{ color: 'white', textAlign: 'center', margin: 30 }} */}
        <Text style={[styles.h3, { marginBottom: 30 }]}>
          বিষয়ভিত্তিক ট্রান্সক্রিপ্ট-
          {convertToBanglaNumber(student_info_pdf?.session_year)}
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRowTop}>
          <View style={styles.tableColName}>
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              শিক্ষার্থীর নাম:{" "}
              {student_info_pdf?.student_name_bn ||
                student_info_pdf?.student_name_en}
            </Text>
          </View>
          <View style={styles.tableColRoll}>
            <Text style={[styles.tableCell]}>
              শিক্ষার্থীর রোল: {convertToBanglaNumber(student_info_pdf?.roll)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View
            style={{
              width: "25%",
              borderStyle: "solid",
              borderWidth: "0.5",
              borderLeftWidth: 0,
              borderTopWidth: 0,
            }}
          >
            <Text style={styles.tableCell}>
              {/* শ্রেণী: {convertToBanglaNumber(student_info_pdf?.class)} */}
              শ্রেণী: {student_info_pdf?.class == "6" ? "ষষ্ঠ" : "সপ্তম"}
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              borderStyle: "solid",
              borderWidth: "0.5",
              borderLeftWidth: 0,
              borderTopWidth: 0,
            }}
          >
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              শাখা: {section_name(student_info_pdf?.section)}{" "}
            </Text>
          </View>
          <View
            style={{
              width: "15%",
              borderStyle: "solid",
              borderWidth: "0.5",
              borderLeftWidth: 0,
              borderTopWidth: 0,
            }}
          >
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              বিষয়: {subject_name(allFelter?.subject?.split("-")[0])}{" "}
            </Text>
          </View>
          <View
            style={{
              width: "40%",
              borderStyle: "solid",
              borderWidth: "0.5",
              borderLeftWidth: 0,
              borderTopWidth: 0,
            }}
          >
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              শ্রেণি শিক্ষকের নাম: {teacher}{" "}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableColTitle}>
            <Text
              style={[
                styles.tableCell,
                {
                  fontWeight: "bold",
                  fontSize: 12,
                  textAlign: "center",
                  paddingBottom: "5px",
                },
              ]}
            >
              পারদর্শিতার সূচকের মাত্রা
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              পারদর্শিতা সূচক (PI)
            </Text>
          </View>
          <View
            style={[styles.tableCol, { width: "75%", textAlign: "center" }]}
          >
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              শিক্ষার্থীর পারদর্শিতা মাত্রা
            </Text>
          </View>
        </View>

        {data?.all_PI_array?.map((all_pi: any, k: any) => (
          <View style={styles.tableRow} wrap={false}>
            <View style={styles.tableCol} wrap={true}>
              <Text style={styles.tableCell}>
                {/* {(all_pi.pi_data.pi_no).split('').reverse().join('')}{" "} */}
                {convertToBanglaNumber(all_pi.pi_data.pi_no)}
                {/* {all_pi.pi_data.name_bn || all_pi.pi_data.name_en}{"  "} */}
                {all_pi.pi_data.name_bn?.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && index % 4 === 0 && <Text>{"\n"}</Text>}
                    {word}{" "}
                  </React.Fragment>
                ))}
              </Text>
            </View>

            {all_pi.pi_data.pi_attribute.map((pi_data: any, key) => (
              <View style={[styles.tableCol]}>
                <View style={styles.tableRowBottom}>
                  <Text style={styles.tableCellTikMark}>
                    {all_pi?.weight_uid == pi_data?.weight_uid && (
                      <Image src={icon} style={[styles.tikMark]} />
                    )}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.tableCell,
                    { marginBottom: "8px", marginLeft: "0px" },
                  ]}
                >
                  {allFelter?.subject?.split("-")[0] == "ইংরেজি" ? (
                    <>
                      {pi_data?.title_bn?.replaceAll("\r\n", " ") ||
                        pi_data?.title_en?.replaceAll("\r\n", " ")}{" "}
                    </>
                  ) : (
                    <>
                      {pi_data?.title_bn
                        ?.replaceAll("\r\n", " ")
                        .split(" ")
                        .map((word, index) => (
                          <React.Fragment key={index}>
                            {index > 0 && index % 4 === 0 && (
                              <Text>{"\n"}</Text>
                            )}
                            {word.trim()}{" "}
                          </React.Fragment>
                        ))}
                    </>
                  )}
                </Text>
              </View>
            ))}
          </View>
        ))}

        <View
          style={{
            marginVertical: "70px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontFamily: "kalpurush",
              color: "#000",
              marginTop: "10px",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            বিষয় শিক্ষকের স্বাক্ষরঃ <Text>{"\n"}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 11 }}>
              {subject_teacher?.data?.user?.name}
            </Text>
          </Text>

          <Text
            style={{
              fontFamily: "kalpurush",
              color: "#000",
              marginTop: "10px",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            প্রধান শিক্ষকের স্বাক্ষরঃ
            <br />
          </Text>
        </View>
      </View>

      <View
        fixed
        style={{ height: 50, fontSize: 7, textAlign: "center", padding: "5px" }}
      >
        <Text style={{ textAlign: "center", bottom: 0 }}>
          {instititute?.institute_name} { " " }.
          {student_info_pdf?.student_name_bn ||
            student_info_pdf?.student_name_en} { " " } .
          রোল : {convertToBanglaNumber(student_info_pdf?.roll)} { " " }
        </Text>

        <Text style={{ textAlign: "left", bottom: 0 }}>
          এই প্রতিবেদনটি সিস্টেম দ্বারা তৈরি করা হয়েছে
        </Text>

        <Text
          style={{ fontSize: 7 , textAlign: "right", }}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </Page>
  </Document>
);

const RawPDFDownload = ({
  data,
  instititute,
  allFelter,
  student_info_pdf,
  unique_id,
  teacher,
}: any) => {
  const pdf_name =
    student_info_pdf?.student_name_en +
    "-class-" +
    student_info_pdf?.class +
    "-pi-roll-" +
    student_info_pdf?.roll +
    ".pdf";
  const subject_teacher = localStorage.getItem("teacher_dashboard")
    ? JSON.parse(localStorage.getItem("teacher_dashboard"))
    : "";


  return (
    <div>
      <div>
        {data?.all_PI_array.length > 0 && student_info_pdf ? (
          <PDFDownloadLink
            document={
              <MyDocument
                data={data}
                instititute={instititute}
                allFelter={allFelter}
                student_info_pdf={student_info_pdf}
                unique_id={unique_id}
                teacher={teacher}
                subject_teacher={subject_teacher}
              />
            }
            fileName={pdf_name}
          >
            {({ blob, url, loading, error }: any) =>
              loading ? (
                <>
                  {" "}
                  <BsFiletypePdf
                    title="loading"
                    className="fs-4 me-2 text-secoundery"
                  />{" "}
                  {"loading..."}{" "}
                </>
              ) : (
                <BsFiletypePdf
                  title="download"
                  className="fs-4 me-2 text-success"
                />
              )
            }
          </PDFDownloadLink>
        ) : (
          "Loading..."
        )}
      </div>

      {/* <PDFViewer width={800} height={800}>
        <MyDocument />
      </PDFViewer> */}
    </div>
  );
};

export default RawPDFDownload;
