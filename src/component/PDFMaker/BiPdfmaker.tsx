import { PDFViewer, Document, View, Image, Page, Text, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';

Font.register({ family: 'Nikosh', src: 'Nikosh.ttf', format: "truetype", });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: "Nikosh",
    backgroundColor: '#E4E4E4',
    padding: 40,
    margin: 50
  },

  h1: {
    fontFamily: "Nikosh",
    fontSize: 20,
    fontWeight: 500,
    padding: '10px',
    textAlign: 'center',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    margininlineStart: '0px',
    margininlineEnd: '0px'
  },

  h2: {
    fontFamily: "Nikosh",
    fontSize: 20,
    fontWeight: 500,
    padding: '10px',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    margininlineStart: '0px',
    margininlineEnd: '0px'
  },

  h3: {
    fontFamily: 'Nikosh',
    textAlign: 'center',
    fontSize: 12,
    padding: '5px',
  },

  h4: {
    fontFamily: 'Nikosh',
    textAlign: 'left',
    fontSize: 15,
    padding: '5px',
  },

  h5: {
    fontSize: 10,
    fontWeight: 500,
    padding: '5px',
    fontFamily: "Nikosh",
  },

  footerh1: {
    fontFamily: "Nikosh",
    fontSize: 20,
    fontWeight: 500,
    padding: '10px',
    textAlign: 'left',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    margininlineStart: '0px',
    margininlineEnd: '0px'
  },

  image: {
    width: '100%',
    height: '250px',
  },

  logo: {
    width: '100%',
    height: '150px',
    marginBottom: 10,
  },

  colortext: {
    color: '#000',
  },

  containerMain: {
    backgroundColor: '#DCDDDE',
    marginTop: '20px',
    marginBottom: '30px',
  },

  subjectContainer: {
    width: '80%',
    marginLeft: '40px',
  },

  subjectTitle: {
    fontSize: '30px',
    padding: '20px',
  },

  subjectName: {
    marginTop: '5px'
  },

  borderTop: {
    borderTop: '4px solid black',
  },

  headerTop: {
    marginBottom: '20px'
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: '10px',
  },

  column: {
    flexDirection: 'column',
    marginRight: 5,
    width: '50%',
  },

  row2: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: '10px',
    width: '100%'
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box1: {
    width: '30%', 
    margin: '1.33%', 
    height: 100,
  },

  column2: {
    flexDirection: 'column',
    marginRight: 5,
    width: '500px',
  },

  text: {
    marginBottom: '10px',
    fontFamily: 'Nikosh',
    fontSize: 22,
  },

  paragraph: {
    fontFamily: 'Nikosh',
    whiteSpace: 'nowrap', // Prevent word breaks
    fontSize: 10,
    padding: '5px',
  },

  box: {
    border: '1px solid black',
    padding: '5px',
  },

  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
  },

  tableRow: {
    flexDirection: 'row',
  },

  tableCell: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
  },

  spannedCell: {
    flex: 7,
  },

  center: {
    textAlign: 'center',
  },

  card: {
    border: '1px solid black',
  },

  cardTitle: {
    borderBottom: '1px solid black',
  },

  cardbody: {
    padding: '1px',
  },

  footerBox: {
    borderTop: '1px solid black',
  },

  boxColor: {
    height: '20px',
    border: '1px solid black',
  },

  cardRow: {
    flexDirection: 'row',
  },

  cardColumn: {
    flexDirection: 'column',
    width: '14.50%',
    height: '20px',
    borderRight: '1px solid black',
    borderTop: '1px solid black',
    textAlign: 'center',
  },

  cardHeaderBG: {
    backgroundColor: '#DDDEE0',
    width: '95%',
    marginLeft: '15px',
  },

  itemBG: {
    backgroundColor: '#6C6D70',
    // backgroundColor: 'white',
    borderLeft: '1px solid black',
  },

  itemBG2: {
    backgroundColor: '#6C6D70',
    borderLeft: '1px solid black',
  },

  rowFooter: {
    flexDirection: 'row',
    marginTop: '20px'
  },

  columnFooter1: {
    flexDirection: 'column',
    width: '30%',
    marginLeft: '20px',
  },

  columnFooter2: {
    flexDirection: 'column',
    width: '20%',
    marginLeft: '0px',
    textAlign: 'left',
  },

  columnFooter3: {
    flexDirection: 'column',
    width: '40%',
    marginLeft: '20px',
  },

  mullayonItem: {
    marginRight: '5px',
    marginBottom: '5px',
    border: '1px solid black',
    height: '20px',
  },

  rowMontobboCard: {
    flexDirection: 'row',
    padding: '5px'
  },

  columnMontobboCard: {
    flexDirection: 'column',
    width: '48%',
  },

  montobboCard: {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '5px',
    marginRight: '6px'
  },

  rowSignatureCard: {
    flexDirection: 'row',
    padding: '5px'
  },

  columnSignatureCard: {
    flexDirection: 'column',
    width: '33%',
  },

  signatureCard: {
    padding: '10px',
    textAlign: 'left',
    marginLeft: '20px',
    marginTop: '20px',
  },

  achoronikContainer: {
    marginTop: '20px',
  },

  scalemargin: {
    marginBottom: '8px'
  },

  wordBox: {
    fontFamily: 'Nikosh',
    padding: 2,
  },

  wordText: {
    fontFamily: 'Nikosh',
    fontSize: 12,
  },

  sentenceBox: {
    width: '100%',
    padding: 5,
  },

  sentenceText: {
    fontFamily: 'Nikosh',
    fontSize: 12,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  
})

const boxData = Array.from(Array(5).keys());
const sentence = "পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে।  যোগাযোগ করে কেমন হয় সবাই জানি। দেশ কে জানি , তাজকে কি হবে শেষ ";
const words = sentence.split(" ");
const MyDocument = () => (

  <Document>
    {/* First Page */}
    <Page size="A4" wrap>

      <Image
        src="../reportcard-image.png"
        style={styles.image}
      />

      <View style={[styles.borderTop]}>
        <Image
          src="../logo.png"
          style={styles.logo}
        />
      </View>

      {/* student info */}
      <View style={[styles.headerTop]}>
        <Text style={[styles.h2, styles.colortext]}> প্রতিষ্ঠানের নাম : .......................................................................................... </Text>
        <Text style={[styles.h2, styles.colortext]}> শিক্ষার্থীর নাম  : .................................... শিক্ষার্থীর আইডি : ................................ </Text>
        <Text style={[styles.h2, styles.colortext]}> শ্রেণী             : .................................... শিক্ষাবর্ষ :          ................................ </Text>
      </View>

      {/* subjects */}
      <View style={[styles.containerMain, styles.borderTop]}>
        <Text style={[styles.h1, styles.colortext, styles.subjectTitle]}> বিষয়সমূহ </Text>

        <View style={[styles.row, styles.subjectContainer]}>

          <View style={styles.column}>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> বাংলা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> ইংরেজি</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> গণিত</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> বিজ্ঞান</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> ডিজিটাল প্রযুক্তি</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> ইতিহাস ও সামাজিক বিজ্ঞান</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> জীবন ও জীবিকা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> ধর্ম শিক্ষা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> স্বাস্থথ্য সুরক্ষা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png"/> শিল্প ও সংস্কৃতি</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Dynamic Subject Page */}
    <Page size="A4" wrap>
      {/* Subject -1  */}
      <View wrap={true}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> বাংলা </Text>
        </View>

        <View style={styles.container}>
          {boxData.map((index) => (
            <View style={[styles.box1]}>
              <View style={[styles.card]}>
                <View style={[styles.cardTitle]}>
                  <Text style={[styles.h3]}> যোগাযোগ 1</Text>
                </View>
                <View style={[styles.cardbody]}>
                  <View>
                    <View style={styles.sentenceBox}>
                      <Text style={styles.sentenceText}>গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে</Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.cardRow]}>
                  <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                </View>
              </View>
            </View>
          ))}


        </View>
      </View>

      {/* Subject -2 */}
      <View wrap={true}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> বাংলা </Text>
        </View>

        <View style={styles.container}>
          {boxData.map((index) => (
            <View style={[styles.box1]}>
              <View style={[styles.card]}>
                <View style={[styles.cardTitle]}>
                  <Text style={[styles.h3]}> যোগাযোগ 1</Text>
                </View>
                <View style={[styles.cardbody]}>
                  <View>
                    <View style={styles.sentenceBox}>
                      <Text style={styles.sentenceText}>গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে</Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.cardRow]}>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                </View>
              </View>
            </View>
          ))}


        </View>
      </View>

      {/* Subject -3 */}
      <View wrap={true}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> বাংলা </Text>
        </View>

        <View style={styles.container}>
          {boxData.map((index) => (
            <View style={[styles.box1]}>
              <View style={[styles.card]}>
                <View style={[styles.cardTitle]}>
                  <Text style={[styles.h3]}> যোগাযোগ 1</Text>
                </View>
                <View style={[styles.cardbody]}>
                  <View>
                    <View style={styles.sentenceBox}>
                      <Text style={styles.sentenceText}>গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে</Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.cardRow]}>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                </View>
              </View>
            </View>
          ))}


        </View>
      </View>

      {/* Subject -4 */}
      <View wrap={true} break>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> বাংলা </Text>
        </View>

        <View style={styles.container}>
          {boxData.map((index) => (
            <View style={[styles.box1]}>
              <View style={[styles.card]}>
                <View style={[styles.cardTitle]}>
                  <Text style={[styles.h3]}> যোগাযোগ 1</Text>
                </View>
                <View style={[styles.cardbody]}>
                  <View>
                    <View style={styles.sentenceBox}>
                      <Text style={styles.sentenceText}>গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে গাণিতিক সমস্যা সমাধানে যথাযথ ভাষা ও কৌশলের প্রয়োগ করেছে</Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.cardRow]}>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                  <View style={[styles.cardColumn]}><Text></Text></View>
                </View>
              </View>
            </View>
          ))}


        </View>
      </View>
    </Page>
    {/* Dynamic Subject Page */}


    {/* Last Page */}
    <Page size="A4" wrap>
      {/* achoronik nidorshon */}
      <View wrap style={[styles.achoronikContainer]}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.cardHeaderBG]}> আচরণিক নির্দেশক </Text>
        </View>

        <View style={styles.container}>
          <View style={[styles.box1]}>
            <View style={[styles.card]}>
              <View style={[styles.cardTitle]}>
                <Text style={[styles.h3]}> math </Text>
              </View>

              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
              </View>
            </View>
          </View>

          <View style={[styles.box1]}>
            <View style={[styles.card]}>
              <View style={[styles.cardTitle]}>
                <Text style={[styles.h3]}> Communcation </Text>
              </View>

              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
              </View>
            </View>
          </View>

          <View style={[styles.box1]}>
            <View style={[styles.card]}>
              <View style={[styles.cardTitle]}>
                <Text style={[styles.h3]}> Communcation </Text>
              </View>

              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
                <View style={[styles.cardColumn]}><Text></Text></View>
              </View>
            </View>
          </View>
        </View>

      </View>

      {/* Mullayon Skel */}
      <View wrap>
        <View>
          <Text style={[styles.footerh1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> মূল্যায়নের স্কেল </Text>
        </View>

        <View style={styles.rowFooter}>
          <View style={[styles.columnFooter1]}>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
            </View>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
            </View>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
            </View>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
            </View>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
            </View>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
            </View>
            <View style={[styles.cardRow]}>
              <View style={[styles.cardColumn, styles.itemBG2, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
              <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
            </View>
          </View>
          <View style={[styles.columnFooter2]}>
            <Text style={[styles.h5, styles.scalemargin]}>- অনন্য (Upgrading) </Text>
            <Text style={[styles.h5, styles.scalemargin]}>- অর্জনমুখী (Achieving) </Text>
            <Text style={[styles.h5, styles.scalemargin]}>- অগ্রগামী (Advancing) </Text>
            <Text style={[styles.h5, styles.scalemargin]}>- সক্রিয় (Activating) </Text>
            <Text style={[styles.h5, styles.scalemargin]}>- অনুসন্ধানী (Exploring) </Text>
            <Text style={[styles.h5, styles.scalemargin]}>- বিকাশমান (Developing) </Text>
            <Text style={[styles.h5, styles.scalemargin]}>- প্রারম্ভিক (Elementary) </Text>
          </View>
          <View style={[styles.columnFooter3]}>
            <Text style={[styles.h4]}> উপস্থিতির হার : .................. % </Text>
            <Text style={[styles.h4]}> শ্রেণি শিক্ষকের মন্তব্য : </Text>
            <Text style={[styles.paragraph]}> ........................................................................................... </Text>
            <Text style={[styles.paragraph]}> ........................................................................................... </Text>
            <Text style={[styles.paragraph]}> ........................................................................................... </Text>
            <Text style={[styles.paragraph]}> ........................................................................................... </Text>
          </View>
        </View>

      </View>

      {/* Montobbo */}
      <View>
        <View style={styles.rowMontobboCard}>
          <View style={[styles.columnMontobboCard]}>
            <View style={[styles.montobboCard]}>
              <Text style={[styles.h4]}> শ্রেণি শিক্ষকের মন্তব্য : </Text>
              <Text style={[styles.paragraph]}> যে কাজটি সবচেয়ে ভালোোভাবে করতে পেরেছি : </Text>
              <Text style={[styles.paragraph]}> ...................................................................................... </Text>
              <Text style={[styles.paragraph]}> ...................................................................................... </Text>
              <Text style={[styles.paragraph]}> আরো উন্নতির জন্য যা যা করতে চাই : </Text>
              <Text style={[styles.paragraph]}> ...................................................................................... </Text>
              <Text style={[styles.paragraph]}> ...................................................................................... </Text>
              <Text style={[styles.paragraph]}> ...................................................................................... </Text>
            </View>
          </View>
          <View style={[styles.columnMontobboCard]}>
            <View style={[styles.montobboCard]}>
              <Text style={[styles.h4]}> শ্রেণি শিক্ষকের মন্তব্য : </Text>
              <Text style={[styles.paragraph]}> যে কাজটি সবচেয়ে ভালোোভাবে করতে পেরেছি : </Text>
              <Text style={[styles.paragraph]}> ....................................................................................... </Text>
              <Text style={[styles.paragraph]}> ....................................................................................... </Text>
              <Text style={[styles.paragraph]}> আমার সন্তানের উন্নয়নে আমি যা করতে পারি : </Text>
              <Text style={[styles.paragraph]}> ....................................................................................... </Text>
              <Text style={[styles.paragraph]}> ....................................................................................... </Text>
              <Text style={[styles.paragraph]}> ....................................................................................... </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Signature */}
      <View>
        <View style={styles.rowSignatureCard}>
          <View style={[styles.columnSignatureCard]}>
            <View style={[styles.signatureCard]}>
              <Text style={[styles.paragraph]}> ....................................... </Text>
              <Text style={[styles.paragraph]}> শ্রেণি শিক্ষকের স্বাক্ষর </Text>
              <Text style={[styles.paragraph]}> তারিখ  : </Text>
            </View>
          </View>
          <View style={[styles.columnSignatureCard]}>
            <View style={[styles.signatureCard]}>
              <Text style={[styles.paragraph]}> ....................................... </Text>
              <Text style={[styles.paragraph]}> প্রধান শিক্ষকের স্বাক্ষর </Text>
              <Text style={[styles.paragraph]}> তারিখ  : </Text>
            </View>
          </View>
          <View style={[styles.columnSignatureCard]}>
            <View style={[styles.signatureCard]}>
              <Text style={[styles.paragraph]}> ....................................... </Text>
              <Text style={[styles.paragraph]}> অভিভাবকের স্বাক্ষর </Text>
              <Text style={[styles.paragraph]}> তারিখ  : </Text>
            </View>
          </View>
        </View>
      </View>

    </Page>
    
  </Document>
);



const BiRawPDFDownload = () => {

  return (
    <div>

      <div>
        <PDFDownloadLink document={<MyDocument />} fileName="my_document.pdf">
          {({ blob, url, loading, error }: any) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
      
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default BiRawPDFDownload;
