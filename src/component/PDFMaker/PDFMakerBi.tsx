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
  convertToBanglaNumber,
  section_name,
  subject_name,
} from "../../utils/Utils";
import { BsFiletypePdf } from "react-icons/bs";
import React from "react";
Font.register({ family: "Nikosh", src: "Nikosh.ttf", format: "truetype" });
// Font.register({ family: "Nikosh", src: "Noto-Sans-Bengali-Regular.ttf", format: "truetype" });

const styles = StyleSheet.create({
  page: {
    //flexDirection: "row",
    fontFamily: "Nikosh",
    //  backgroundColor: "#E4E4E4",
    padding: 4,
    // margin: 50,
    textAlign: "left",
    marginTop: 10
  },
  h1: {
    fontFamily: "Nikosh",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    //   display: 'block',
    //   fontSize: '2em',
    // marginBlockStart: '0.67em',
    // marginBlockEnd: '0.67em',
    // margininlineStart: '0px',
    // margininlineEnd: '0px',
    margin: 5,
    lineHeight: 1
  },
  h2: {
    fontFamily: "Nikosh",
    textAlign: "center",
    fontSize: 12,
  },
  h3: {
    fontFamily: "Nikosh",
    fontSize: 11,
    textAlign: "center",
  },
  h5: {
    fontSize: 10,
    fontWeight: 500,
  },

  table: {
    // display: "table",
    width: "95%",
    margin: 'auto'
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderRightWidth: 0,
    // borderBottomWidth: 0,
    // padding: "40px"

  },
  tableRowTop: {
    // margin: "auto",
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
    // margin: "auto",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: '0.5',
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: '0.5',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    // display: "flex !important",
  },
  tableColPoint: {
    // width: "75%",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderLeftWidth: 0,
    // borderTopWidth: 0,
  },
  tableColStdNameRoll: {
    width: "50%",
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
    fontFamily: "Nikosh",
    // margin: "auto",
    padding: "5px",
    // marginTop: 5,
    fontSize: 11,
    lineHeight: "1px",
    // display: "flex",

    textOverflow: "ellipsis",

    // flexDirection: 'row',
    // flexWrap: 'wrap',


  },


  tableCellTikMark: {
    fontFamily: "Nikosh",
    margin: "auto",
    marginTop: "3px",
    padding: 1,
    fontSize: 10,
    lineHeight: "1px",
    textOverflow: "ellipsis",
    height: "15px"
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
    // justifyContent: "center",
    marginTop: 5,
    width: "12px",
    height: "10px",
  },

  teacherSignatureContainer: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "row",
    gap: "150px",
  },
  teacherSignature: {
    fontFamily: "Nikosh",
    color: "#000",
    marginTop: "10px",
    fontSize: 12,
    fontWeight: 600,
  },
});





const MyDocument = ({
  data,
  instititute,
  allFelter,
  student_info_pdf,
  teacher,
  subject_teacher
}: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View fixed >
        <Text style={[styles.h1]}>
          {instititute?.branch_name}
          <br />
        </Text>
        <Text style={[styles.h2]}>
          {instititute?.branch_location}
        </Text>
        {/* style={{ color: 'white', textAlign: 'center', margin: 30 }} */}
        <Text style={[styles.h3, { marginBottom: 30 }]}>
          বিষয়ভিত্তিক আচরণগত ট্রান্সক্রিপ্ট-
          {convertToBanglaNumber(student_info_pdf?.registration_year)}
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRowTop}>
          <View style={styles.tableColStdNameRoll}>
            <Text style={styles.tableCell}>
              শিক্ষার্থীর নাম:{" "}
              {student_info_pdf?.student_name_bn ||
                student_info_pdf?.student_name_en}
            </Text>
          </View>
          <View style={styles.tableColStdNameRoll}>
            <Text style={styles.tableCell}>
              শিক্ষার্থীর আইডি: {convertToBanglaNumber(student_info_pdf?.roll)}
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              শ্রেণী: {convertToBanglaNumber(student_info_pdf?.class)}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              শাখা: {section_name(student_info_pdf?.section)}{" "}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              বিষয়: {subject_name(allFelter?.subject?.split("-")[0])}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>শ্রেণি শিক্ষকের নাম: {teacher}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableColTitle}>
            <Text style={[styles.tableCell, { fontWeight: "bold", fontSize: 12, textAlign: 'center' }]}>আচরণগত মূল্যায়ন মাত্রা (BI)</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>আচরণগত মূল্যায়ন(BI)</Text>
          </View>
          <View style={[styles.tableCol, { width: '75%' }]}>
            <Text style={styles.tableCell}>শিক্ষার্থীর আচরণগত মাত্রা</Text>
          </View>
        </View>

        {data?.all_PI_array?.map((all_pi: any, k: any) => (
          <View style={styles.tableRow} wrap={false} >
            <View style={styles.tableCol} wrap={true}>
              <Text style={styles.tableCell}>
                {" "}
                {convertToBanglaNumber( k+1 )}{" . "}
                {all_pi.pi_data.name_bn || all_pi.pi_data.name_en}
              </Text>
            </View>

            {all_pi.pi_data.weights.map((pi_data: any, key) => (
              <View style={[styles.tableCol]} >
                <View style={styles.tableRowBottom}>
                  <Text style={styles.tableCellTikMark}>
                    {all_pi?.weight_uid == pi_data?.weight_uid && (
                      <Image src={icon} style={[styles.tikMark]} />
                    )}
                  </Text>
                </View>
                <Text style={styles.tableCell}>
                  {/* {pi_data?.title_bn || pi_data?.title_en}{" "} */}

                  {pi_data?.title_bn?.replace(/\s/g, " ").split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && index % 5 === 0 && <Text>{"\n"}</Text>}
                      {word}{' '}
                    </React.Fragment>
                  ))}

                </Text>
              </View>
            ))}

          </View>

        ))}

        <View style={[styles.teacherSignatureContainer]}>
          <Text style={[styles.teacherSignature]}>
            বিষয় শিক্ষকের স্বাক্ষরঃ
            {" "}
            <Text>{"\n"}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 11 }}>
              {subject_teacher?.data?.user?.name}
            </Text>
          </Text>

          <Text style={[styles.teacherSignature]}>
            প্রধান শিক্ষকের স্বাক্ষরঃ
            {" "}
            <Text>{"\n"}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 11 }}>
              {""}
            </Text>
          </Text>
        </View>
      </View>

      <View fixed style={{ height: 70, fontSize: 7, textAlign: 'center', padding: '5px' }}>
        <Text style={{ textAlign: 'left', bottom: 0 }}>এই প্রতিবেদনটি সিস্টেম দ্বারা তৈরি করা হয়েছে</Text>
        <Text style={{ fontSize: 7 }} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} /></View>

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
    student_info_pdf?.student_name_bn ||
    student_info_pdf?.student_name_en +
    "-" +
    convertToBanglaNumber(student_info_pdf?.roll) +
    ".pdf";

    console.log(`student_info_pdf`, student_info_pdf , data);

  const subject_teacher = localStorage.getItem("teacher_dashboard") ? JSON.parse(localStorage.getItem("teacher_dashboard")) : ""
  return (
    <div>
      <div>
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
      </div>

      {/* <PDFViewer width={800} height={800}>
        <MyDocument />
      </PDFViewer> */}
    </div>
  );
};

export default PDFMakerBiTranscript;