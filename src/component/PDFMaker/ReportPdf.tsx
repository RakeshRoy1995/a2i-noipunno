import {
  PDFViewer,
  Document,
  View,
  Image,
  Page,
  Text,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { convertToBanglaNumber, show_sub_by_religion } from "../../utils/Utils";
import React from "react";

import { styles } from "./ReportStyleSheet";

// Font.register({ family: "Nikosh", src: "Nikosh.ttf", format: "truetype" });
Font.register({
  family: "Kalpurush",
  src: "kalpurush.ttf",
  format: "truetype",
});

const MyDocument = ({
  selected_student,
  student,
  instititute,
  subject_name,
  biData,
}) => (
  <Document>
    {/* First Page */}
    <Page size="A4" wrap>
      <Image src="../reportcard-image.png" style={styles.image} />

      <View style={[styles.borderTop]}>
        <Image src="../logo.png" style={styles.logo} />
      </View>

      {/* student info */}
      <View style={[styles.headerTop]}>
        <View style={[styles.row]}>
          <View style={[styles.columnX]}>
            <Text style={[styles.h2, styles.colortext]}>
              {" "}
              প্রতিষ্ঠানের নাম :{" "}
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginRight: 5, width: "80%" }}
          >
            : <Text style={styles.dot}>{instititute?.branch_name} </Text>
          </View>
        </View>

        <View style={[styles.row]}>
          <View style={[styles.columnX]}>
            <Text style={[styles.h2, styles.colortext]}>
              {" "}
              শিক্ষার্থীর নাম :
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginRight: 5, width: "45%" }}
          >
            <Text style={styles.dot}>
              {" "}
              {student?.student_name_bn || student?.student_name_en}
            </Text>
          </View>
          <View style={[styles.columnX]}>
            <Text style={[styles.h2, styles.colortext]}>
              {" "}
              শিক্ষার্থীর আইডি :
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginRight: 5, width: "15%" }}
          >
            <Text style={styles.dot}>
              {convertToBanglaNumber(student?.roll)}
            </Text>
          </View>
        </View>

        <View style={[styles.row]}>
          <View style={[styles.columnX]}>
            <Text style={[styles.h2, styles.colortext]}> শ্রেণী : </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginRight: 5, width: "45%" }}
          >
            <Text style={styles.dot}>
              {student?.class == "6" ? "ষষ্ঠ শ্রেণী" : "সপ্তম শ্রেণী"}
            </Text>
          </View>
          <View style={[styles.columnX]}>
            <Text style={[styles.h2, styles.colortext]}> শিক্ষাবর্ষ : </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginRight: 5, width: "15%" }}
          >
            <Text style={styles.dot}>
              {convertToBanglaNumber(student?.registration_year)}
            </Text>
          </View>
        </View>
      </View>

      {/* subjects */}
      <View style={[styles.containerMain, styles.borderTop]}>
        <View style={{ width: "80%", margin: "auto" }}>
          <Text
            style={[
              styles.h1,
              styles.colortext,
              // styles.customsubjectTitle,
              {
                borderBottom: "1px solid black",
                marginBottom: "20px",
              },
            ]}
          >
            {" "}
            বিষয়সমূহ{" "}
          </Text>

          <View style={[styles.row, styles.subjectContainer]}>
            <View style={styles.column}>
              {selected_student?.map((item, index) => {
                if (
                  show_sub_by_religion(student?.religion, subject_name(item[0]))
                ) {
                  return null;
                }
                return (
                  index < 5 && (
                    <Text style={styles.text}>
                      <Image src="../graduation-cap.png" />{" "}
                      {subject_name(item[0])}
                    </Text>
                  )
                );
              })}
            </View>

            <View style={styles.column}>
              {selected_student?.map((item, index) => {
                if (
                  show_sub_by_religion(student?.religion, subject_name(item[0]))
                ) {
                  return null;
                }

                return (
                  index >= 5 && (
                    <Text style={styles.text}>
                      <Image src="../graduation-cap.png" />{" "}
                      {subject_name(item[0])}
                    </Text>
                  )
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </Page>

    {/* Dynamic Subject Page */}
    <Page size="A4" wrap>
      {/* Subject -1  */}

      {selected_student.map((item) => {
        if (show_sub_by_religion(student?.religion, subject_name(item[0]))) {
          return null;
        }
        return (
          <View wrap={false}>
            <View>
              <Text
                style={[
                  // styles.h1,
                  styles.colortext,
                  // styles.subjectName,
                  styles.cardHeaderBG,

                  {
                    marginTop:5,
                    fontFamily: "Kalpurush",
      fontSize: 16,
      fontWeight: 500,
      padding: "5px",
      textAlign: "center",
                  }
                ]}
              >
                {" "}
                {subject_name(item[0])}{" "}
              </Text>
            </View>

            <View style={styles.container} wrap={true}>
              {item[1].map((data) => (
                <View style={[styles.box1]}>
                  <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                      <Text style={[styles.h3]}> {data?.dimension_title} </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                      <View>
                        <View style={styles.sentenceBox}>
                          <Text style={styles.sentenceText}>
                            {subject_name(item[0]) == "ইংরেজি"
                              ? data?.dimension_details
                              : data?.dimension_details
                                  .split(" ")
                                  .map((word, index) => (
                                    <React.Fragment key={index}>
                                      {index > 0 && index % 5 === 0 && (
                                        <Text>{"\n"}</Text>
                                      )}
                                      {word}{" "}
                                    </React.Fragment>
                                  ))}
                            {/* {data?.dimension_details
                              .split(" ")
                              .map((word, index) => (
                                <React.Fragment key={index}>
                                  {index > 0 && index % 5 === 0 && (
                                    <Text>{"\n"}</Text>
                                  )}
                                  {word}{" "}
                                </React.Fragment>
                              ))} */}
                            {/* কোন ঘটনা বা বিষয়ে সম্পর্কে নিজের মত দিয়েছে ও অন্যের মতের গঠনমূলক সমালোচনা করছে
                            {data?.dimension_details} {" "} {" "} */}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={[styles.cardRow]}>
                      {data?.dimension_result >= 1 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}

                      {data?.dimension_result >= 2 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}

                      {data?.dimension_result >= 3 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}

                      {data?.dimension_result >= 4 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}

                      {data?.dimension_result >= 5 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}

                      {data?.dimension_result >= 6 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}

                      {data?.dimension_result >= 7 ? (
                        <View style={[styles.cardColumn, styles.itemBG]}>
                          <Text></Text>
                        </View>
                      ) : (
                        <View style={[styles.cardColumn]}>
                          <Text></Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </Page>
    {/* Dynamic Subject Page */}

    {/* Last Page */}
    <Page size="A4" wrap>
      {/* achoronik nidorshon */}

      <View wrap style={[styles.achoronikContainer]}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.cardHeaderBG]}>
            {" "}
            আচরণিক নির্দেশক{" "}
          </Text>
        </View>
        {biData.map((item) => (
          <View style={styles.container}>
            {item[1].map((data) => (
              <View style={[styles.box1]}>
                <View style={[styles.card]}>
                  <View style={[styles.cardTitle]}>
                    <Text style={[styles.h3]}>{data?.dimension_title} </Text>
                  </View>

                  <View style={[styles.cardRow]}>
                    {data?.dimension_result >= 1 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}

                    {data?.dimension_result >= 2 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}

                    {data?.dimension_result >= 3 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}

                    {data?.dimension_result >= 4 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}

                    {data?.dimension_result >= 5 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}

                    {data?.dimension_result >= 6 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}

                    {data?.dimension_result >= 7 ? (
                      <View style={[styles.cardColumn, styles.itemBG]}>
                        <Text></Text>
                      </View>
                    ) : (
                      <View style={[styles.cardColumn]}>
                        <Text></Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Mullayon Skel */}
      <View wrap>
        <View>
          <Text
            style={[
              styles.footerh1,
              styles.colortext,
              styles.subjectName,
              styles.cardHeaderBG,
            ]}
          >
            {" "}
            মূল্যায়নের স্কেল{" "}
          </Text>
        </View>

        <View style={styles.rowFooter}>
          <View style={[styles.columnFooter1]}>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
            </View>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
            </View>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
            </View>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
            </View>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
            </View>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
            </View>
            <View style={[styles.cardRow]}>
              <View
                style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}
              >
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
              <View style={[styles.cardColumn, styles.mullayonItem]}>
                <Text></Text>
              </View>
            </View>
          </View>
          <View style={[styles.columnFooter2]}>
            <Text style={[styles.h5, styles.scalemargin]}>
              - অনন্য (Upgrading){" "}
            </Text>
            <Text style={[styles.h5, styles.scalemargin]}>
              - অর্জনমুখী (Achieving){" "}
            </Text>
            <Text style={[styles.h5, styles.scalemargin]}>
              - অগ্রগামী (Advancing){" "}
            </Text>
            <Text style={[styles.h5, styles.scalemargin]}>
              - সক্রিয় (Activating){" "}
            </Text>
            <Text style={[styles.h5, styles.scalemargin]}>
              - অনুসন্ধানী (Exploring){" "}
            </Text>
            <Text style={[styles.h5, styles.scalemargin]}>
              - বিকাশমান (Developing){" "}
            </Text>
            <Text style={[styles.h5, styles.scalemargin]}>
              - প্রারম্ভিক (Elementary){" "}
            </Text>
          </View>
          <View style={[styles.columnFooter3]}>
            <Text style={[styles.h4]}>
              {" "}
              উপস্থিতির হার : .................. %{" "}
            </Text>
            <Text style={[styles.h4]}> শ্রেণি শিক্ষকের মন্তব্য : </Text>
            <Text style={[styles.paragraph]}>
              {" "}
              ...........................................................................................{" "}
            </Text>
            <Text style={[styles.paragraph]}>
              {" "}
              ...........................................................................................{" "}
            </Text>
            <Text style={[styles.paragraph]}>
              {" "}
              ...........................................................................................{" "}
            </Text>
            <Text style={[styles.paragraph]}>
              {" "}
              ...........................................................................................{" "}
            </Text>
          </View>
        </View>
      </View>

      {/* Montobbo */}
      <View>
        <View style={styles.rowMontobboCard}>
          <View style={[styles.columnMontobboCard]}>
            <View style={[styles.montobboCard]}>
              <Text style={[styles.h4]}> শিক্ষার্থীর মন্তব্য : </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                যে কাজটি সবচেয়ে ভালোভাবে করতে পেরেছি :{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ..........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ..........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                আরো উন্নতির জন্য যা যা করতে চাই :{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ..........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ..........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ..........................................................................................................{" "}
              </Text>
            </View>
          </View>
          <View style={[styles.columnMontobboCard]}>
            <View style={[styles.montobboCard]}>
              <Text style={[styles.h4]}> অভিভাবকের মন্তব্য : </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                আমার সন্তান যে কাজটি ভালোভাবে করতে পারে :{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ...........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ............................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                আমার সন্তানের উন্নয়নে আমি যা করতে পারি :{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ...........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ...........................................................................................................{" "}
              </Text>
              <Text style={[styles.paragraph]}>
                {" "}
                ...........................................................................................................{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Signature */}
      <View>
        <View style={styles.rowSignatureCard}>
          <View style={[styles.columnSignatureCard]}>
            <View style={[styles.signatureCard]}>
              <Text style={[styles.paragraph]}>
                {" "}
                .......................................{" "}
              </Text>
              <Text style={[styles.paragraph]}> শ্রেণি শিক্ষকের স্বাক্ষর </Text>
              <Text style={[styles.paragraph]}> তারিখ : </Text>
            </View>
          </View>
          <View style={[styles.columnSignatureCard]}>
            <View style={[styles.signatureCard]}>
              <Text style={[styles.paragraph]}>
                {" "}
                .......................................{" "}
              </Text>
              <Text style={[styles.paragraph]}> প্রধান শিক্ষকের স্বাক্ষর </Text>
              <Text style={[styles.paragraph]}> তারিখ : </Text>
            </View>
          </View>
          <View style={[styles.columnSignatureCard]}>
            <View style={[styles.signatureCard]}>
              <Text style={[styles.paragraph]}>
                {" "}
                .......................................{" "}
              </Text>
              <Text style={[styles.paragraph]}> অভিভাবকের স্বাক্ষর </Text>
              <Text style={[styles.paragraph]}> তারিখ : </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const BiRawPDFDownload = ({
  selected_student,
  subject_name,
  student,
  instititute,
  biData,
}) => {
  // console.log(`student --- `, student);
  const pdf_name =
    student?.student_name_en +
    "-report-card-result-roll-" +
    student?.roll +
    ".pdf";
  // console.log(`student`, student, biData);
  return (
    <div>
      <div>
        <PDFDownloadLink
          document={
            <MyDocument
              selected_student={selected_student}
              student={student}
              instititute={instititute}
              subject_name={subject_name}
              biData={biData}
            />
          }
          fileName={pdf_name}
        >
          {({ blob, url, loading, error }: any) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
      <PDFViewer width={1200} height={800}>
        <MyDocument
          selected_student={selected_student}
          student={student}
          instititute={instititute}
          subject_name={subject_name}
          biData={biData}
        />
      </PDFViewer>
    </div>
  );
};

export default BiRawPDFDownload;
