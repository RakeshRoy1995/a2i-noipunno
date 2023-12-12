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
Font.register({ family: "Nikosh", src: "Nikosh.ttf", format: "truetype" });

const styles = StyleSheet.create({
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
  table: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    // marginBottom: 10,
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
    textAlign: "justify",
    textJustify: "inter-word",
    // backgroundColor: "red",
  },
  cell2: {
    border: "1px solid #000 !important",
    padding: 5,
    flexGrow: 1,
    width: "75%",
    textAlign: "justify",
    textJustify: "inter-word",
    // backgroundColor: "red",
  },
  tikMark: {
    width: "15px",
  },
});

const MyDocument = ({
  data,
  instititute,
  allFelter,
  student_info_pdf,
  unique_id,
  teacher,
}: any) => (
  <Document>
    <Page size="A4">
      <View style={styles.section}>
        <Text style={[styles.h3, styles.colortext]}>
          {instititute?.institute_name}
          <br />
        </Text>
        <Text style={[styles.h3, styles.colortext]}>
          {instititute?.unions} {instititute?.district?.district_name_bn}
        </Text>

        <Text style={[styles.h3, styles.colortext]}>
          (PI) এর বিষয়ভিত্তিক ট্রান্সক্রিপ্ট-
          {convertToBanglaNumber(student_info_pdf?.registration_year)}
        </Text>

        <View style={styles.tableHeader}>
          <View style={[styles.h2, styles.cell]}>
            <Text>
              শিক্ষার্থীর নাম:{" "}
              {student_info_pdf?.student_name_bn ||
                student_info_pdf?.student_name_en}
            </Text>
          </View>

          <View style={[styles.h2, styles.cell]}>
            <Text>
              শিক্ষার্থীর আইডি: {convertToBanglaNumber(student_info_pdf?.roll)}
            </Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={[styles.h2, styles.cell]}>
            <Text>শ্রেণী: {student_info_pdf?.class}</Text>
          </View>
          <View style={[styles.h2, styles.cell]}>
            <Text>শাখা: {section_name(student_info_pdf?.section)} </Text>
          </View>
          <View style={[styles.h2, styles.cell]}>
            <Text>বিষয়: {subject_name(allFelter?.subject?.split("-")[0])}</Text>
          </View>
          <View style={[styles.h2, styles.cell]}>
            <Text>বিষয় শিক্ষকের নাম: {teacher}</Text>
          </View>
        </View>
        <Text style={[styles.h3, styles.colortext]}>
          পারদর্শিতার সূচকের মাত্রা
        </Text>
        <View style={styles.table}>
          <View style={[styles.h2, styles.cell]}>
            <Text>পারদর্শিতা সূচক (PI)</Text>
          </View>
          <View style={[styles.h2, styles.cell2]}>
            <Text>শিক্ষার্থীর পারদর্শিতা মাত্রা</Text>
          </View>
        </View>

        {data?.all_PI_array?.map((all_pi: any, k: any) => (
          <View style={styles.table}>
            <View style={[styles.customh2, styles.cell, { padding: 2 }]}>
              <Text>{convertToBanglaNumber(all_pi.pi_data.pi_no)} </Text>
              <Text>{all_pi.pi_data.name_bn || all_pi.pi_data.name_en}</Text>
            </View>

            {all_pi.pi_data.pi_attribute.map((pi_data: any, key) => (
              <View style={[styles.h2, styles.cell]}>
                {" "}
                {all_pi?.weight_uid == pi_data?.weight_uid && (
                  <Image src={icon} style={[styles.tikMark]} />
                )}
                <Text>{pi_data?.title_bn || pi_data?.title_en}</Text>
              </View>
            ))}
          </View>
        ))}
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
          fileName="my_document.pdf"
        >
          {({ blob, url, loading, error }: any) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>

      <PDFViewer width={800} height={800}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default RawPDFDownload;
