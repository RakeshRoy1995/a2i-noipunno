import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, Font, PDFDownloadLink, View } from '@react-pdf/renderer';

Font.register({ family: 'Nikosh', src: 'Nikosh.ttf' , format: "truetype", });


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: "Nikosh",
    backgroundColor: '#E4E4E4',
    padding: 40,
    margin: 50
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  h1: {
    fontFamily: "Nikosh",
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 500,
    //   display: 'block',
    //   fontSize: '2em',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    margininlineStart: '0px',
    margininlineEnd: '0px'

  },
  h3: {
    fontFamily: 'Nikosh',
    textAlign: 'center'
  },
  h5: {
    fontSize: 12,
    fontWeight: 500
  },
  colortext: {
    color: '#000'
  },
  table: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cell: {
    padding: 5,
    flexGrow: 1,
  },
  myText: {
    // fontFamily: 'Nikosh',
    textAlign: 'center',
    // other styles
  },

  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: '1px solid black',
  },
  text: {

    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  table: {

    margin: 10,
    padding: 5,
    border: '1px solid black',
    fontSize: 10,
  },
  tableHeader: {

    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid black',
  },
  tableRow: {

    textAlign: 'center',
    borderBottom: '1px solid black',
    flexDirection: 'row',
  },
  tableColumn: {

    textAlign: 'center',
    borderRight: '1px solid black',
  },
  cell: {

    border: '1px solid #E5E5E5',
    flexGrow: 1, // Adjust this to control column width
    // Other styles as needed
    lineBreakMode: 'wrap',
  },
  cell2: {

    
    flexGrow: 1, // Adjust this to control column width
    // Other styles as needed
  },
  colspan3: {
    width: '100%', // Spanning three columns
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust spacing between columns
  },
  border: {
    border: '1px solid #E5E5E5',
    padding: 8, // Adjust padding as needed
  },
})


const MyDocument = () => (

  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.myText}>
          <Text>মডেল একাডেমি</Text>
          <Text>[একটি আদর্শ উচ্চ বিদ্যালয়]</Text>
          <Text>
            প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ কলোনী, মিরপুর-১,
            ঢাকা-১২১৬
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            ষাণ্মাসিক সামষ্টিক মূল্যায়ন (PI)
 এর বিষয়ভিত্তিক ট্রান্সক্রিপ্ট-২০২৩
          </Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.colspan3} >শিক্ষার্থীর নাম: ইনতিশার পারভেজ</Text>
            <Text style={styles.cell}>শিক্ষার্থীর আইডি: ৩২১০০</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>শ্রেণী: ষষ্ঠ</Text>
            <Text style={styles.cell}>শাখা: পদ্মা</Text>
            <Text style={styles.cell}>বিষয়: বাংলা</Text>
            <Text style={styles.cell}>বিষয় শিক্ষকের নাম: তামান্না হাসিন</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.cell}>পারদর্শিতার সূচকের মাত্রা</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>পারদর্শিতা সূচক (PI)</Text>
            <Text style={styles.colspan3}>শিক্ষার্থীর পারদর্শিতা মাত্রা</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>৬.১.১
নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।</Text>
<View style={styles.colspan3}>
            <Text style={styles.cell2}>শিক্ষার্থীর পারদর্শিতা মাত্রা</Text>
            <Text style={styles.cell2}>শিক্ষার্থীর পারদর্শিতা মাত্রা</Text>
            <Text style={styles.cell2}>শিক্ষার্থীর পারদর্শিতা মাত্রা</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);



const RawPDFDownload = () => {

  return (
    <div>


      <PDFDownloadLink document={<MyDocument />} fileName="my_document.pdf">
        {({ blob, url, loading, error }: any) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>


      <button>jnbhjjjjnh</button>

    

      <PDFViewer width={1200} height={1200}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default RawPDFDownload;