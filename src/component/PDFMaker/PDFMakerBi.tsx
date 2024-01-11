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
  Svg,
} from "@react-pdf/renderer";
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

// const styles = StyleSheet.create({
//   page: {
//     fontFamily: "Kalpurush",
//     padding: 4,
//     textAlign: "left",
//     marginTop: 10
//   },
//   h1: {
//     fontFamily: "Kalpurush",
//     fontSize: 16,
//     textAlign: "center",
//     fontWeight: 700,
//     margin: 5,
//     lineHeight: 1
//   },
//   h2: {
//     fontFamily: "Kalpurush",
//     textAlign: "center",
//     fontSize: 12,
//   },
//   h3: {
//     fontFamily: "Kalpurush",
//     fontSize: 11,
//     textAlign: "center",
//   },
//   h5: {
//     fontSize: 10,
//     fontWeight: 500,
//   },

//   table: {

//     width: "95%",
//     margin: 'auto'

//   },
//   tableRowTop: {
//     flexDirection: "row",
//     borderTopWidth: 1,
//     borderLeftWidth: 1,

//   },
//   tableRowBottom: {
//     flexDirection: "row",
//     borderTopWidth: 0,
//     borderLeftWidth: 0,
//     borderBottomWidth: 1,
//   },
//   tableRow: {

//     flexDirection: "row",
//     borderStyle: "solid",
//     borderWidth: '0.5',
//   },
//   tableCol: {
//     width: "25%",
//     borderStyle: "solid",
//     borderWidth: '0.5',
//     borderLeftWidth: 0,
//     borderTopWidth: 0,

//   },
//   tableColPoint: {

//   },
//   tableColStdNameRoll: {
//     width: "50%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableColTitle: {
//     width: "100%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCell: {
//     fontFamily: "Kalpurush",
//     padding: "5px",
//     fontSize: 11,
//     lineHeight: "1px",
//     textOverflow: "ellipsis",
//     width: '90%',

//   },

//   tableCellTikMark: {
//     fontFamily: "Kalpurush",
//     margin: "auto",
//     marginTop: "3px",
//     padding: 1,
//     fontSize: 10,
//     lineHeight: "1px",
//     textOverflow: "ellipsis",
//     height: "15px"
//   },

//   section: {
//     margin: 20,
//     padding: 10,
//     flexGrow: 1,
//   },

//   tableHeader: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderColor: "#000",
//     marginBottom: 10,
//     fontWeight: "bold",
//   },
//   cell: {
//     border: "1px solid #000 !important",
//     padding: 1,
//     flexGrow: 1,
//     width: "25%",
//   },

//   tikMark: {
//     marginLeft: 50,

//     marginTop: 5,
//     width: "12px",
//     height: "10px",
//   },

//   teacherSignatureContainer: {
//     marginTop: "50px",
//     display: "flex",
//     flexDirection: "row",
//     gap: "150px",
//   },
//   teacherSignature: {
//     fontFamily: "Kalpurush",
//     color: "#000",
//     marginTop: "10px",
//     fontSize: 12,
//     fontWeight: 600,
//   },
// });

const styles = StyleSheet.create({
  page: {
    fontFamily: "kalpurush",
    padding: 4,
    textAlign: "left",
    marginTop: 10,
  },
  h1: {
    fontFamily: "kalpurush",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    margin: 5,
    lineHeight: 1,
  },
  h2: {
    fontFamily: "kalpurush",
    textAlign: "center",
    fontSize: 12,
  },
  h3: {
    fontFamily: "kalpurush",
    fontSize: 10,
    textAlign: "center",
  },
  h5: {
    fontSize: 10,
    fontWeight: 500,
  },

  table: {
    width: "95%",
    margin: "auto",
  },
  tableRowTop: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  tableRowBottom: {
    flexDirection: "row",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: "0.5",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: "0.5",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColPoint: {},
  tableColStdNameRoll: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },

  tableColName: {
    width: "75%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColRoll: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },

  tableColTitle: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },

  tableCell: {
    fontFamily: "kalpurush",
    padding: "2px",
    fontSize: 10,
    lineHeight: "1px",
    textOverflow: "ellipsis",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  tableCellTikMark: {
    fontFamily: "kalpurush",
    margin: "auto",
    marginTop: "3px",
    padding: 1,
    fontSize: 10,
    lineHeight: "1px",
    textOverflow: "ellipsis",
    height: "15px",
  },

  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1,
  },

  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  cell: {
    border: "1px solid #000 !important",
    padding: 1,
    flexGrow: 1,
    width: "25%",
  },

  tikMark: {
    marginLeft: 50,
    marginTop: 5,
    width: "12px",
    height: "10px",
  },
});

const MyDocument = ({
  data,
  instititute,
  allFelter,
  student_info_pdf,
  teacher,
}: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View fixed>
        <Text style={[styles.h1]}>
        {instititute?.institute_name}
          <br />
        </Text>
        <Text style={[styles.h2]}> { branch_name(allFelter.branch , true) }  { branch_location(allFelter?.branch) || instititute?.district?.district_name_bn || instititute?.district?.district_name_en  } </Text>

        {/* <Text style={[styles.h2]}>{instititute?.district?.district_name_bn || instititute?.district?.district_name_en  }</Text> */}
        {/* style={{ color: 'white', textAlign: 'center', margin: 30 }} */}
        <Text style={[styles.h3, { marginBottom: 30 }]}>
          আচরণগত ট্রান্সক্রিপ্ট-
          {convertToBanglaNumber(student_info_pdf?.registration_year)}
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
              শিক্ষার্থীর আইডি: {convertToBanglaNumber(student_info_pdf?.roll)}
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
              শ্রেণী: {student_info_pdf?.class == "6" ? "ষষ্ঠ" : "সপ্তম"}
            </Text>
          </View>
          <View
            style={{
              width: "25%",
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
              width: "50%",
              borderStyle: "solid",
              borderWidth: "0.5",
              borderLeftWidth: 0,
              borderTopWidth: 0,
            }}
          >
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              শ্রেণি শিক্ষকের নাম: {teacher}
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
              আচরণগত মূল্যায়ন মাত্রা (BI)
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              আচরণগত মূল্যায়ন(BI)
            </Text>
          </View>
          <View
            style={[styles.tableCol, { width: "75%", textAlign: "center" }]}
          >
            <Text style={[styles.tableCell, { paddingBottom: "5px" }]}>
              শিক্ষার্থীর আচরণগত মাত্রা
            </Text>
          </View>
        </View>

        {data?.all_PI_array?.map((all_pi: any, k: any) => (
          <View style={styles.tableRow} wrap={false}>
            <View style={styles.tableCol} wrap={true}>
              <Text style={styles.tableCell}>
                {convertToBanglaNumber(k + 1)}{" "}
                {all_pi.pi_data.name_bn?.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && index % 4 === 0 && <Text>{"\n"}</Text>}
                    {word}{" "}
                  </React.Fragment>
                ))}
              </Text>
            </View>

            {all_pi.pi_data.weights.map((pi_data: any, key) => (
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
                    { marginBottom: "5px", marginLeft: "0px" },
                  ]}
                >
                  {allFelter?.subject?.split("-")[0] == "ইংরেজি" ? (
                    <>{pi_data?.title_bn || pi_data?.title_en} </>
                  ) : (
                    <>
                      {pi_data?.title_bn?.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && index % 4 === 0 && <Text>{"\n"}</Text>}
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
            শ্রেণি শিক্ষকের স্বাক্ষরঃ <Text>{"\n"}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 11 }}>{teacher}</Text>
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
        style={{ height: 30, fontSize: 7, textAlign: "center", padding: "5px" }}
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
          style={{ fontSize: 7 }}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </Page>
  </Document>
);

const PDFMakerBiTranscript = ({
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
    "-bi-roll-" +
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
                  />
                  {"loading"}
                  {"..."}{" "}
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
    </div>
  );
};

export default PDFMakerBiTranscript;
