import { PDFViewer, Document, Page, Text, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';

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
})


const MyDocument = () => (

  <Document>
    <Page size="A4" >
      <view style={styles.section}>

        <Text style={[styles.h1, styles.colortext]}>মডেল একাডেমি</Text>
        <Text style={[styles.h3, styles.colortext]}>[একটি আদর্শ উচ্চ বিদ্যালয়]<br /></Text>
        <Text style={[styles.h3, styles.colortext]}>প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ কলোনী, মিরপুর-১, ঢাকা-১২১৬</Text>
        <Text style={[styles.h3, styles.colortext]}>ষাণ্মাসিক সামষ্টিক মূল্যায়ন (PI) এর বিষয়ভিত্তিক ট্রান্সক্রিপ্ট-২০২৩</Text>
        <view style={styles.tableHeader}>
          <view style={styles.cell}><Text>Column 1 </Text></view>
          <view style={styles.cell}><Text>Column 2 Header</Text></view>
          <view style={styles.cell}><Text>Column 3 Header</Text></view>
        </view>
        <view style={styles.table}>
          <view style={styles.cell}><Text>Data 1</Text></view>
          <view style={styles.cell}><Text>Data 2</Text></view>
          <view style={styles.cell}><Text>Data 3</Text></view>
        </view>
        <view style={styles.table}>
          <view style={styles.cell}><Text>Data 4</Text></view>
          <view style={styles.cell}><Text>Data 5</Text></view>
          <view style={styles.cell}><Text>Data 6</Text></view>
        </view>

      </view>

    </Page>
  </Document>
);



const RawPDFDownload = () => {

  return (
    <div>

      <div>
        <PDFDownloadLink document={<MyDocument />} fileName="my_document.pdf">
          {({ blob, url, loading, error }: any) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>

      <PDFViewer width={1200} height={1200}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default RawPDFDownload;
