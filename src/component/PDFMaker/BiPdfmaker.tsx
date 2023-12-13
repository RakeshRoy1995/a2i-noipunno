import { PDFViewer, Document, View, Image, Page, Text, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';

Font.register({ family: 'Nikosh', src: 'Nikosh.ttf' , format: "truetype", });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: "Nikosh",
    backgroundColor: '#E4E4E4',
    padding: 40,
    margin: 50
  },

  section1: {  },
  section2: {  },
  section3: { marginBottom: 50 },
  section4: {  },
  section5: {  },
  section6: { marginBottom: 50 },
  section7: {  },
  section8: {  },
  section9: {  },
  section10: {  },
  section11: {  },
  section12: {  },
  section13: {  },

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
    color: '#000'
  },

  containerMain: {
    backgroundColor: '#DCDDDE',
    marginTop: '20px',
    
  },

  subjectContainer: {
    width: '80%',
    marginLeft: '40px'
  },

  subjectTitle: {
    fontSize: '30px',
    padding: '20px',
  },

  subjectName: {
    marginTop: '20px'
  },

  subjectName2: {

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
  },

  column2: {
    flexDirection: 'column',
    marginRight: 5,
    width: '33%',
  },

  text: {
    marginBottom: '10px',
    fontFamily: 'Nikosh',
    fontSize: 22,
  },

  paragraph: {
    fontFamily: 'Nikosh',
    fontSize: 10,
    padding: '5px',
  },

  icon: {
  
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
    border:'1px solid black',
  },

  cardTitle: {
    borderBottom:'1px solid black',
  },

  communicationTitle: {

  },

  cardbody: {
    padding: '5px',
  },

  cardText: {

  },

  communicationBody: {
    padding: '10px',
    lineHeight: '1.2px',
  },

  cardFooter: {

  },

  communicatinSearch: {

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
    height: '24px',
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

  scalemargin: {
    marginBottom: '8px'
  }

})


const MyDocument = () => (

  <Document>
    <Page size="A4" >

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
        <Text style={[styles.h2, styles.colortext]}> শিক্ষার্থীর নাম  : আলিয়া ওসমান শিক্ষার্থীর আইডি : ................................ </Text>
        <Text style={[styles.h2, styles.colortext]}> শ্রেণী             : .................................... শিক্ষাবর্ষ :          ................................ </Text>
      </View>

      {/* subjects */}
      <View style={[styles.containerMain, styles.borderTop]}>
        <Text style={[styles.h1, styles.colortext, styles.subjectTitle]}> বিষয়সমূহ </Text>
 
        <View style={[styles.row, styles.subjectContainer]}>

          <View style={styles.column}>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> বাংলা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> ইংরেজি</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> গণিত</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> গণিত</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> বিজ্ঞান</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> ডিজিটাল প্রযুক্ত</Text>
          </View>
      
          <View style={styles.column}>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> ইতিহাস ও সামাজিক বিজ্ঞান</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> জীবন ও জীবিকা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> ধর্ম শিক্ষা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> স্বাস্থথ্য সুরক্ষা</Text>
            <Text style={styles.text}><Image src="../graduation-cap.png" style={styles.icon}/> শিল্প ও সংস্কৃতি</Text>
          </View>
        </View>
      </View>

      {/* Bangla */}
      <View style={[styles.section1]}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> বাংলা </Text>
        </View>

        <View style={styles.row2}>
            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> যোগাযোগ </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
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

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> যোগাযোগ </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
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

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> যোগাযোগ </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
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
        </View>
        <View style={styles.row2}>
            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> যোগাযোগ </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
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

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> যোগাযোগ </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
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
        </View>
      </View>

      {/* English */}
      <View style={[styles.section2]}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> English </Text>
        </View>

        <View style={styles.row2}>
            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>
        </View>

        <View style={styles.row2}>
            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>
        </View>
      </View>

      {/* Math */}
      <View style={[styles.section3]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> Math </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>
      </View>

      {/* Biggan */}
      <View style={[styles.section4]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> বিজ্ঞান </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>
      </View>


      {/* Digital Projukti */}
      <View style={[styles.section5]}>
        <View>
          <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> ডিজিটাল প্রযুক্তি </Text>
        </View>

        <View style={styles.row2}>
            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>

            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>
        </View>

        <View style={styles.row2}>
            <View style={[styles.column2]}>
                <View style={[styles.card]}>
                    <View style={[styles.cardTitle]}>
                        <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                    </View>
                    <View style={[styles.cardbody]}>
                        <View style={[styles.cardText]}>
                            <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                        </View>
                    </View>

                    <View style={[styles.cardRow]}>
                        <View style={[styles.cardColumn]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                        <View style={[styles.cardColumn]}><Text></Text></View>                        
                        <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                    </View>
                </View>                                                                           
            </View>
        </View>
      </View>

      {/* etihas o samajik biggan */}
      <View style={[styles.section6]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> ইতিহাস ও সামাজিক বিজ্ঞান </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>
      </View>

      {/* Jibon O Jibika */}
      <View style={[styles.section7]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> জীবন ও জীবিকা </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>
      </View>

      {/* Dhormo Shikkha */}
      <View style={[styles.section8]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName2, styles.cardHeaderBG]}> ধর্ম শিক্ষা </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

      </View>

      {/* Sasto Surokkha */}
      <View style={[styles.section9]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> স্বাস্থথ্য সুরক্ষা </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>
      </View>

      {/* Silpo O Sanskriti */}
      <View style={[styles.section10]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> শিল্প ও সংস্কৃতি </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
                      <View style={[styles.cardbody]}>
                          <View style={[styles.cardText]}>
                              <Text style={[styles.communicationBody, styles.paragraph]}>পরিস্থিতি বিবেচনায় প্রমিত ভাষায় যোগাযোগ করছে </Text>
                          </View>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

      </View>

      {/* achoronik nidorshon */}
      <View style={[styles.section11]}>
          <View>
            <Text style={[styles.h1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> আচরণিক নির্দেশক </Text>
          </View>

          <View style={styles.row2}>
              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> math </Text>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>

                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>

              <View style={[styles.column2]}>
                  <View style={[styles.card]}>
                      <View style={[styles.cardTitle]}>
                          <Text style={[styles.communicationTitle, styles.h3]}> Communcation </Text>
                      </View>
          
                      <View style={[styles.cardRow]}>
                          <View style={[styles.cardColumn]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>
                          <View style={[styles.cardColumn]}><Text></Text></View>                        
                          <View style={[styles.cardColumn, styles.itemBG]}><Text></Text></View>                        
                      </View>
                  </View>                                                                           
              </View>
          </View>

      </View>

      {/* Mullayon Skel */}
      <View style={[styles.section13]}>
        <View>
          <Text style={[styles.footerh1, styles.colortext, styles.subjectName, styles.cardHeaderBG]}> মূল্যায়নের স্কেল </Text>
        </View>
        
        <View style={styles.rowFooter}>
          <View style={[styles.columnFooter1]}>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>                        
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>                        
              </View>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>                        
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
              </View>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
              </View>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
              </View>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
              </View>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
                <View style={[styles.cardColumn, styles.mullayonItem]}><Text></Text></View>                        
              </View>
              <View style={[styles.cardRow]}>
                <View style={[styles.cardColumn, styles.itemBG, styles.mullayonItem]}><Text></Text></View>
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

      <PDFViewer width={1200} height={1200}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default BiRawPDFDownload;
