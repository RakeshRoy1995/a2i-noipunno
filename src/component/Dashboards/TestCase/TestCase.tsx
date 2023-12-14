import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';

const TestCase = () => {
  Font.register({ family: "Nikosh", src: "Nikosh.ttf", format: "truetype" });
  // Create styles
  const styles = StyleSheet.create({
    page: {

      backgroundColor: 'white',
      margin: 2,
      border: 1,
      borderBottomColor: "red"
    },

    div: { marginVertical: 2 },
    h6: { fontSize: 16, fontWeight: "bold" },
    p: { fontSize: 16, fontWeight: "normal", fontFamily: "Nikosh" },
    font_familty_nikosh: { fontFamily: "Nikosh" }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document pageMode='fullScreen' style={{ width: "100%" }} >
      <Page
        size="A4"
        wrap={true}
        orientation="portrait"
        style={styles.page}
      // debug={true}
      >

        <View >
          <View wrap={true} style={{ fontFamily: "Nikosh", display: "flex", flexDirection: "column", gap: "5", padding: "5px" }}>

            <View style={{
              backgroundColor: "skyblue",
              border: "1px",
              display: "flex",
              flexDirection: "column",
              gap: 2
            }}>
              <Text style={{ marginHorizontal: "auto", textDecoration: "underline", marginBottom: "10px" }}>
                This is English Paragraph
              </Text>
              <Text style={{ lineHeight: "1.5px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam nesciunt ullam quae iure rem ab facilis, nisi deleniti obcaecati, quod perspiciatis iusto. Harum deserunt voluptas optio architecto, doloribus enim!
              </Text>
            </View>

            <Text style={{ lineHeight: "1px", fontSize: "11px", fontWeight: "normal", textAlign: "justify" }}>
              আজ ভোর সোয়া চারটার দিকে ঢাকা-ময়মনসিংহ রেলপথের বনখড়িয়া এলাকায় মোহনগঞ্জ এক্সপ্রেস ট্রেনটি লাইনচ্যুত হয়। ট্রেনটি নেত্রকোনা থেকে ঢাকার দিকে যাচ্ছিল। প্রাথমিকভাবে ধারণা করা হচ্ছে, দুর্বৃত্তরা নাশকতা করতে রেললাইনের অংশ কেটে রাখে। দুর্ঘটনায় ময়মনসিংহের গফরগাঁও উপজেলার রওহা গ্রামের আসলাম হোসেন (৩৫) নামের এক যাত্রী নিহত হয়েছেন। আহত হয়েছেন অন্তত ১০ জন।
            </Text>

            <Text style={{ lineHeight: "1px", fontSize: "16px", fontWeight: "normal" }}>
              ঘটনাস্থলে কথা হয় ওই ট্রেনের যাত্রী হাবিবা খাতুনের সঙ্গে। তিনি দুর্ঘটনার বর্ণনা দিয়ে বলেন, দুই শিশুসহ মাঝামাঝি একটি বগিতে তাঁরা মোট চারজন ছিলেন। হঠাৎ বিকট শব্দে তাঁদের বগিটি পাশের নিচু জমিতে পড়ে যায়। তিনি বলেন, ‘শব্দের সঙ্গে সঙ্গে আমার সন্তানকে পাচ্ছিলাম না। বগি অন্ধকার হয়ে যায়। চিৎকার–চেঁচামেচি করছিলেন সবাই। কিছুক্ষণের মধ্যেই আমার স্বজনদের খুঁজে পেয়ে ওপরের দিকের জানালা দিয়ে বের হই। আমাদের অনেকেই শরীরে আঘাত পেয়েছেন।’
            </Text>

            <Text style={{ lineHeight: "1px" }}>
              আজ ভোর সোয়া চারটার দিকে ঢাকা-ময়মনসিংহ রেলপথের বনখড়িয়া এলাকায় মোহনগঞ্জ এক্সপ্রেস ট্রেনটি লাইনচ্যুত হয়। ট্রেনটি নেত্রকোনা থেকে ঢাকার দিকে যাচ্ছিল। প্রাথমিকভাবে ধারণা করা হচ্ছে, দুর্বৃত্তরা নাশকতা করতে রেললাইনের অংশ কেটে রাখে। দুর্ঘটনায় ময়মনসিংহের গফরগাঁও উপজেলার রওহা গ্রামের আসলাম হোসেন  নামের এক যাত্রী নিহত হয়েছেন। আহত হয়েছেন অন্তত ১০ জন।
            </Text>

          </View>
        </View>

      </Page>
    </Document>
  );

  const pdf_name = "test_case";
  return (
    <section>
      <div>

        <PDFViewer
          // showToolbar={true}
          style={{ width: "100%", height: "100vh" }}
        >
          <MyDocument />
        </PDFViewer>
      </div>
      <div className='' >
        <PDFDownloadLink document={<MyDocument />} fileName={pdf_name} className='text-center'>
          {
            ({ blob, url, loading, error }) => loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>
    </section>
  );
};

export default TestCase;