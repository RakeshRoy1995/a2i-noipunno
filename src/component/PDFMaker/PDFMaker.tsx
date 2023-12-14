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
Font.register({ family: "Nikosh", src: "Nikosh.ttf", format: "truetype" });

const styles = StyleSheet.create({
  table: {
    // display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: "40px",
  },
  tableRowTop: {
    margin: "auto",
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
    margin: "auto",
    flexDirection: "row",
    borderLeftWidth: 1,
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    // display: "flex !important",
  },
  tableColPoint: {
    width: "75%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
    margin: "auto",
    padding: 2,
    marginTop: 5,
    fontSize: 8,
    lineHeight: "1px",
    // display: "flex",

    textOverflow: "ellipsis",

    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  tableCellTikMark: {
    fontFamily: "Nikosh",
    margin: "auto",
    marginTop:"3px",
    padding: 1,
    fontSize: 10,
    lineHeight: "1px",
    textOverflow: "ellipsis",
    height:"15px"
  },
  page: {
    flexDirection: "row",
    fontFamily: "Nikosh",
    backgroundColor: "#E4E4E4",
    padding: 40,
    margin: 50,
  },

  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1,
  },
  h1: {
    fontFamily: "Nikosh",
    fontSize: 24,
    textAlign: "center",
    fontWeight: 500,
    //   display: 'block',
    //   fontSize: '2em',
    // marginBlockStart: '0.67em',
    // marginBlockEnd: '0.67em',
    // margininlineStart: '0px',
    // margininlineEnd: '0px',
    margin: 10,
  },
  h2: {
    fontFamily: "Nikosh",
    textAlign: "center",
    fontSize: 10,
  },
  customh2: {
    fontFamily: "Nikosh",

    fontSize: 10,
  },
  h3: {
    fontFamily: "Nikosh",
    textAlign: "center",
  },
  h5: {
    fontSize: 12,
    fontWeight: 500,
  },
  colortext: {
    margin: 5,
    color: "#000",
  },
  // table: {
  //   flexDirection: "row",
  //   borderBottomWidth: 1,
  //   borderColor: "#000",

  // },
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
  cell2: {
    border: "1px solid #000 !important",
    padding: 5,
    flexGrow: 1,
    width: "75%",
    textAlign: "justify",
    // textJustify: "inter-word",
    // backgroundColor: "red",
  },
  tikMark: {
    marginLeft: 50,
    // justifyContent: "center",
    marginTop: 5,
    width: "12px",
    height: "10px",
  },

  teacherSignatureContainer: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "row",
    gap: "150px",
  },
  teacherSignature: {
    fontFamily: "Nikosh",
    color: "#000",
    marginTop: "10px",
    fontSize: 14,
    fontWeight: 600,
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
    <Page>
      <View style={styles.table}>
        <Text style={[styles.h3, styles.colortext]}>
          {instititute?.branch_name}
          <br />
        </Text>
        <Text style={[styles.h3, styles.colortext]}>
          {instititute?.branch_location} 
        </Text>

        <Text style={[styles.h3, styles.colortext]}>
          বিষয়ভিত্তিক ট্রান্সক্রিপ্ট-
          {convertToBanglaNumber(student_info_pdf?.registration_year)}
        </Text>
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
            <Text style={styles.tableCell}>বিষয় শিক্ষকের নাম: {teacher}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableColTitle}>
            <Text style={styles.tableCell}>পারদর্শিতার সূচকের মাত্রা</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>পারদর্শিতা সূচক (PI)</Text>
          </View>
          <View style={styles.tableColPoint}>
            <Text style={styles.tableCell}>শিক্ষার্থীর পারদর্শিতা মাত্রা</Text>
          </View>
        </View>

        {data?.all_PI_array?.map((all_pi: any, k: any) => (
          <View style={styles.tableRow} wrap>
            <View style={styles.tableCol} wrap={true}>
              <Text style={styles.tableCell}>
                {" "}
                {convertToBanglaNumber(all_pi.pi_data.pi_no)}{" "}
                {all_pi.pi_data.name_bn || all_pi.pi_data.name_en}
              </Text>
            </View>

            {all_pi.pi_data.pi_attribute.map((pi_data: any, key) => (
              <View style={[styles.tableCol]} >
                <View style={styles.tableRowBottom}>
                  <Text style={styles.tableCellTikMark}>
                  {all_pi?.weight_uid == pi_data?.weight_uid && (
                  <Image src={icon} style={[styles.tikMark]} />
                )}
                  </Text>
                </View>
                <Text style={styles.tableCell}>
                  {pi_data?.title_bn || pi_data?.title_en}{" "}
                </Text>
              </View>
            ))}
          </View>
        ))}

        <View style={[styles.teacherSignatureContainer]}>
          <Text style={[styles.teacherSignature, styles.colortext]}>
            বিষয় শিক্ষকের স্বাক্ষরঃ
            <br />
          </Text>
          {/* <Text style={[styles.teacherSignature, styles.colortext]}>
            {teacher}
          </Text> */}
          <Text style={[styles.teacherSignature, styles.colortext]}>
            প্রধান শিক্ষকের স্বাক্ষরঃ
            <br />
          </Text>
        </View>
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
  console.log(`instititute ddddd `, instititute);

  const pdf_name =
    student_info_pdf?.student_name_bn ||
    student_info_pdf?.student_name_en +
      "-" +
      convertToBanglaNumber(student_info_pdf?.roll) +
      ".pdf";
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

export default RawPDFDownload;
