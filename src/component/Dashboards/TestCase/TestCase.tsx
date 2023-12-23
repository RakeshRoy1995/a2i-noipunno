import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';

const TestCase = () => {
  Font.register({ family: "Kalpurush", src: "kalpurush.ttf", format: "truetype" });
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white',
    },
    div: { marginVertical: 2 },
    h6: { fontSize: 16, fontWeight: "bold" },
    font_familty: { fontFamily: "Kalpurush" }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View  style={{margin:"40"}}>
          <View fixed >
            <Text style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", textDecoration: "underline",marginBottom:"10" }}>
              What makes a great headline?
            </Text>
           </View>
          
          <View wrap={true} style={{display:"flex", flexDirection:"column", gap:"9"}}>
            <View>
              <Text style={[styles.font_familty, { fontSize: "11px",  textOverflow: "ellipsis", textAlign: "justify"}]}>
                কুমিল্লা শব্দটি উক্ত অঞ্চলের আদিনাম কমলাঙ্ক (চীনা পরিব্রাজক ওয়াং চুয়াং-এর মতে, কিয়া-মল-ঙ্কিয়া) এর ক্রমান্বয়ে পরিবর্তিত আঞ্চলিক অপভ্রংশ রূপ, যার অর্থ পদ্মফুলের দীঘি। কুমিল্লা অঞ্চলটি একসময় প্রাচীন সমতট অঞ্চলের অধীনে ছিল। পরবর্তীকালে এটি ত্রিপুরা রাজ্যের সাথে যোগ দেয়। খ্রিস্টীয় নবম শতাব্দীতে কুমিল্লা জেলা হরিকেল অঞ্চলের রাজাদের অধীনে আসে। অষ্টম শতাব্দীতে লালমাই ময়নামতি দেব বংশ এবং দশম থেকে একাদশ শতকের মাঝামাঝি পর্যন্ত চন্দ্র বংশের শাসনাধীনে ছিল। ১৭৬৫ সালে এ অঞ্চলটি ইংরেজ ইস্ট ইন্ডিয়া কোম্পানির অধীনে আসে। ১৭৬৯ সালে রাজস্ব আদায়ের সুবিধার্থে কোম্পানী একজন তত্ত্বাবধায়ক নিয়োগ করে। তখন ঢাকা প্রদেশের অন্তর্গত ছিল কুমিল্লা। কুমিল্লাকে ১৭৭৬ সালে কালেক্টরের অধীনস্থ করা হয়। ১৭৯০ সালে কোম্পানী শাসনামলে ত্রিপুরা নামের জেলার সৃষ্টি হয় করা হয়। তৎকালে বর্তমান কুমিল্লা, চাঁদপুর, ব্রাহ্মনবাড়িয়া, নোয়াখালী, লক্ষ্মীপুর, ফেনী, শাহবাজপুর, হাতিয়া, ত্রিপুরার কিছু অংশ, চট্টগ্রামের সন্দ্বীপ ও মীরসরাই নিয়ে সমতল অঞ্চল নিয়ে ত্রিপুরা জেলা ও পার্বত্য অঞ্চল নিয়ে পার্বত্য ত্রিপুরা নামে ভাগ করা হয়, এই জেলার সদর দপ্তর স্থাপিত হয় কুমিল্লায়। ১৮২১ সালে ত্রিপুরা জেলাকে ভাগ করে বর্তমান নোয়াখালী, ফেনী, লক্ষীপুর নিয়ে ভূলুয়া জেলা গঠিত হয়, যা পরবর্তীতে নোয়াখালী নামকরন করা হয়। ১৯৬০ সালে সদর দপ্তরের নামানুসারে ত্রিপুরা জেলার নামকরণ করা হয় কুমিল্লা এবং তখন থেকে জেলা ম্যাজিস্ট্রেট ও কালেক্টর পদটির নামকরণ জেলা প্রশাসক করা হয়। ১৯৮৪ সালে কুমিল্লার দু'টি মহকুমা চাঁদপুর ও ব্রাহ্মণবাড়িয়াকে পৃথক জেলা হিসেবে পুনর্গঠন করা হয়।[১]

              </Text>
            </View>
            <View>
              <Text style={[styles.font_familty, { fontSize: "12px",  }]}>
                কুমিল্লা বাংলাদেশের দক্ষিণ-পূর্ব প্রান্তে অবস্থিত একটি মহানগরী। নগরীর পাশেই রয়েছে গোমতী নদী। প্রাচীন বাংলার শহর গুলোর মধ্যে কুমিল্লা ছিলো অন্যতম। এছাড়াও কুমিল্লা শহর একসময় এিপুরা রাজ্যের রাজধানী ছিল। কুমিল্লা শহরের ডুলিপাড়া এলাকায় রয়েছে কুমিল্লা বিমানবন্দর। বিমানবন্দরের সাথে গড়ে উঠেছে কুমিল্লার ইকোনমিক জোন ইপিজেড সহ বিভিন্ন শিল্প কারখানা।ফলে বিমানবন্দর এলাকা হয়ে উঠেছে ব্যাবসা বাণিজ্যিক একটি শহর। কুমিল্লা শহর একটি বিভাগ কেন্দ্রীক শহর।এই জেলার আশেপাশের জেলাগুলো থেকে অনেক লোকজন কুমিল্লায় আসে বিভিন্ন কর্মক্ষেত্রে। এছাড়াও কুমিল্লা শহরের ৫ কিলোমিটার দূরে রয়েছে বিবির বাজার স্থলবন্দর। কুমিল্লা সিটি কর্পোরেশনের আয়তন ৫৩.০৪ বর্গ কিলোমিটার, ফলে মূল শহরের আশেপাশের এলাকা গুলো সিটি কর্পোরেশনের বাহিরে পড়ে গেছে। সিটি কর্পোরেশনের বাহিরে পড়ে যাওয়া শহর এলাকা গুলোকে উপশহর হিসেব ধরা হয়।

              </Text>
            </View>
            <View>
              <Text style={[styles.font_familty, { fontSize: "12px", textOverflow: "ellipsis", textAlign: "justify" }]}>
                ১৭৬৪ সালে ত্রিপুরার রাজার বিরুদ্ধে শমসের গাজীর নেতৃত্বে পরিচালিত কৃষক আন্দোলন এ অঞ্চলের একটি ঐতিহাসিক ঘটনা। সাধারণ কৃষক পরিবারে জন্মগ্রহণ করেও শমসের গাজী সম্পূর্ণ চাকলা রওশানাবাদ অঞ্চলের শাসক হয়েছিলেন, যা পরবর্তীকালে দক্ষিণ কুমিল্লা থেকে উত্তর নোয়াখালী পর্যন্ত বিস্তৃত হয়। এক সময় তিনি সমগ্র কুমিল্লাকে তার শাসনাধীনে নিয়ে আসেন। পরবর্তীকালে তিনি নিজামপুর পরগনা জয় করেন। এভাবে, তিনি মেঘনা, মুহুরি ও মনুগঙ্গা নদীসমূহের মধ্যবর্তী বিশাল জনপদের মুকুটবিহীন রাজায় পরিণত হন।[২]

                শমসের গাজী ১৭১২ সালে উত্তর চট্টগ্রামের দক্ষিণ শিক পরগনার কুঙ্গুরা গ্রামে জন্মগ্রহণ করেন, যা পরবর্তীকালে ত্রিপুরার মানিক রাজ্যের অন্তর্ভুক্ত হয়। স্থানীয় জমিদার নাসির মোহাম্মদের অফিসে তেহশিলদার হিসেবে কাজ করার সময় তিনি একজন স্বর্গীয় পীরের আশীর্বাদ পেয়েছিলেন বলে জনশ্রুতি রয়েছে।[৩]

                শিশুকাল থেকেই শমসের গাজী ছিলেন সাহসী এবং বুদ্ধিমান। তৎকালীন সময়ে চাকলা রওশানাবাদ ত্রিপুরা রাজ্যের অধীনে ছিল। এর জমিদার ছিলেন নাসির মাহমুদ। নাসির মাহমুদ শমসেরকে অত্যন্ত যত্নের সাথে বড় করে তোলেন। কিন্তু তরুণ বয়সে শমসের অত্যন্ত উচ্চাভিলাষী ছিলেন। তিনি জমিদারের কন্যাকে বিবাহ করতে চাইলে, তার প্রস্তাব প্রত্যাখ্যান করা হয় এবং তাকে বন্দী করার নির্দেশ দেওয়া হয়। এদিকে শমসের গাজী একটি সশস্ত্র বাহিনী গঠন করেন। এর মাধ্যমে ১৭৪৫ সালে তিনি নাসির মাহমুদের রাজ্য দখল করেন।

                ব্রিটিশ শাসনামলের শুরুর দিকে, জমিদারী প্রথা কৃষকদের জীবনকে দুর্বিষহ করে তুলেছিল। শমসের গাজী ছিলেন বিজ্ঞ, যোগ্য, দয়ালু এবং উদার শাসক। তিনি দরিদ্র কৃষকদের কষ্ট লাঘবের জন্য বিভিন্ন পদক্ষেপ নেন এবং অর্থনৈতিক উন্নয়ন ঘটাতে সক্ষম হন। ফলে, নিত্যপ্রয়োজনীয় জিনিসপত্রের দাম কমতে থাকে। তিনি হিন্দু মুসলমান কৃষকদের জন্য নিষ্কর ভূমির ব্যবস্থা করেন। তিনি রাজধানী জগন্নাথ সোনাপুরের ভিতরে ও বাইরে বহু সংখ্যক দীঘি খনন করেন এবং বিদ্যালয় স্থাপন করেন। তিনি যেসব দীঘি স্থাপন করেছিলেন, তার মধ্যে 'কাইয়ার সাগর' ছিল সবচেয়ে বড়।[৪]

              </Text>
            </View>

        
            <View>
              <Text style={{ fontSize: "11px", textOverflow: "ellipsis", textAlign: "justify" }}>
                Now that we have all fonts loaded, we can layout text into paragraphs. This is a critical and complex step: we first convert characters into glyphs using the appropriate font family and size, embed images or emoji images if present and ultimately break them into lines either on whitespaces or by breaking words based on language (or custom) rules.
                This is the most time-consuming step, since it involves not just calculating where each element is in the document and how much space it will need, but also splitting these elements into different pages.
                We internally use Yoga layout to compute node's size and coordinates inside the document, and perform page breaking based on a set of customizable heuristics.
              </Text>
            </View>
            
            <View>
              <Text style={{ fontSize: "11px", textOverflow: "ellipsis", textAlign: "justify" }}>
                Now that we have all fonts loaded, we can layout text into paragraphs. This is a critical and complex step: we first convert characters into glyphs using the appropriate font family and size, embed images or emoji images if present and ultimately break them into lines either on whitespaces or by breaking words based on language (or custom) rules.
                This is the most time-consuming step, since it involves not just calculating where each element is in the document and how much space it will need, but also splitting these elements into different pages.
                We internally use Yoga layout to compute node's size and coordinates inside the document, and perform page breaking based on a set of customizable heuristics.
              </Text>
            </View>
            
            <View>
              <Text style={{ fontSize: "11px", textOverflow: "ellipsis", textAlign: "justify" }}>
                Now that we have all fonts loaded, we can layout text into paragraphs. This is a critical and complex step: we first convert characters into glyphs using the appropriate font family and size, embed images or emoji images if present and ultimately break them into lines either on whitespaces or by breaking words based on language (or custom) rules.
              </Text>
            </View>
          </View>
          

          <View fixed style={{ height: 70, fontSize: 7, textAlign: 'center', padding: '5px',  }}>
            <Text style={{ textAlign: 'left', bottom: 0 }}>
              This report is generated by the system
            </Text>
            <Text style={{ fontSize: 7 }} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} />
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