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

export  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      fontFamily: "Kalpurush",
      backgroundColor: "#E4E4E4",
      padding: 40,
      margin: 50,
      marginTop: 10
    },
  
    section1: {},
    section2: {},
    section3: { marginBottom: 50 },
    section4: {},
    section5: {},
    section6: { marginBottom: 50 },
    section7: {},
    section8: {},
    section9: {},
    section10: {},
    section11: {},
    section12: {},
    section13: {},
  
    alignCenter: {
      textAlign: 'center',
    },
  
    h1: {
      fontFamily: "Kalpurush",
      fontSize: 20,
      fontWeight: 500,
      padding: "10px",
      textAlign: "center",
      marginBlockStart: "0.67em",
      marginBlockEnd: "0.67em",
      margininlineStart: "0px",
      margininlineEnd: "0px",
    },
    customh1: {
      fontFamily: "Kalpurush",
      fontSize: 20,
      fontWeight: 500,
      textAlign: "center",
      
    },
  
    footerh1: {
      fontFamily: "Kalpurush",
      fontSize: 20,
      fontWeight: 500,
      padding: "10px",
      textAlign: "left",
      marginBlockStart: "0.67em",
      marginBlockEnd: "0.67em",
      margininlineStart: "0px",
      margininlineEnd: "0px",
    },
  
    h2: {
      fontFamily: "Kalpurush",
      fontSize: 12,
      fontWeight: 500,
      padding: "10px",
      marginBlockStart: "0.67em",
      marginBlockEnd: "0.67em",
      margininlineStart: "0px",
      margininlineEnd: "0px",
    },
    h3: {
      fontFamily: "Kalpurush",
      textAlign: "center",
      fontSize: 10,
      padding: "5px",
    },
    h4: {
      fontFamily: "Kalpurush",
      textAlign: "left",
      fontSize: 15,
      padding: "5px",
    },
    h5: {
      fontSize: 10,
      fontWeight: 500,
      padding: "5px",
      fontFamily: "Kalpurush",
    },
    image: {
      width: "100%",
      height: "250px",
    },
  
    logo: {
      width: "100%",
      height: "150px",
      marginBottom: 10,
    },
  
    colortext: {
      color: "#000",
    },
  
    containerMain: {
      backgroundColor: "#DCDDDE",
      //marginTop: "20px",
      //marginBottom: "30px",
      // textAlign: "center",
      height: "280px",
    },
  
    subjectContainer: {
      width: "80%",
      marginLeft: "40px",
    },
  
    subjectTitle: {
      fontSize: "30px",
      padding: "20px",
    },
    customsubjectTitle: {
      fontSize: "30px",
      
    },
  
    subjectName: {
      marginTop: "5px",
    },
  
    borderTop: {
      borderTop: "2px solid black",
    },
  
    headerTop: {
      marginBottom: "20px",
      width:"90%",
      margin:"auto",
    },
  
    row: {
      flexDirection: "row",
      marginBottom: 1,
      paddingRight: "10px",
    },
  
    column: {
      flexDirection: "column",
      marginRight: 5,
      width: "50%",
    },
  
    columnX: {
      flexDirection: "column",
      width: "20%",
    },
  
    columnY: {
      flexDirection: "column",
      marginRight: 5,
      width: "30%",
    },
  
    // column2: {
    //   flexDirection: "column",
    //   marginRight: 5,
    //   width: "20%",
    // },
  
    row2: {
      flexDirection: "row",
      marginBottom: 5,
      padding: "10px",
      width: "100%",
    },
  
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      textAlign: "center",
    },
  
    dot:{
      borderBottom: '1px dotted black',
      fontFamily: "Kalpurush",
      fontSize: "12px",
     marginTop: "10px",
    },
    borderbot:{
      borderBottom: '1px solid black',
      marginBottom: "20px",
    },
  
    box1: {
      width: "30%",
      margin: "1.33%",
      height: 100,
    },
  
    column2: {
      flexDirection: "column",
      marginRight: 5,
      width: "500px",
    },
  
    text: {
      marginBottom: "8px",
      fontFamily: "Kalpurush",
      fontSize: "14px",
      
    },
  
    paragraph: {
      fontFamily: "Kalpurush",
      // Prevent word breaks
      fontSize: 10,
      padding: "5px",
    },
  
    icon: {},
  
    box: {
      border: "1px solid black",
      padding: "5px",
    },
  
    table: {
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 10,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCell: {
      flex: 1,
      borderStyle: "solid",
      borderWidth: 1,
      padding: 5,
    },
  
    spannedCell: {
      flex: 7,
    },
  
    center: {
      textAlign: "center",
    },
  
    card: {
      border: "1px solid black",
    },
  
    cardTitle: {
      fontSize: 10,
      borderBottom: "1px solid black",
      
    },
  
    cardbody: {
      padding: "1px",
      height: "70px",
    },
  
    footerBox: {
      borderTop: "1px solid black",
    },
  
    boxColor: {
      height: "20px",
      border: "1px solid black",
    },
  
    cardRow: {
      flexDirection: "row",
      marginLeft: "0px",
      // marginLeft: "0px",
    },
  
    cardColumn: {
      flexDirection: "column",
      width: "14.50%",
      height: "20px",
      borderRight: "1px solid black",
      borderTop: "1px solid black",
      textAlign: "center",
    },
  
    cardHeaderBG: {
      backgroundColor: "#DDDEE0",
      width: "95%",
      margin: "auto",
    },
  
    itemBG: {
      backgroundColor: "#6C6D70",
      // backgroundColor: 'white',
      borderLeft: "1px solid black",
    },
  
    itemBG2: {
      backgroundColor: "#6C6D70",
      borderLeft: "1px solid black",
    },
  
    rowFooter: {
      flexDirection: "row",
      marginTop: "20px",
    },
  
    columnFooter1: {
      flexDirection: "column",
      width: "30%",
      marginLeft: "20px",
    },
  
    columnFooter2: {
      flexDirection: "column",
      width: "20%",
      marginLeft: "0px",
      textAlign: "left",
    },
  
    columnFooter3: {
      flexDirection: "column",
      width: "40%",
      marginLeft: "20px",
    },
  
    mullayonItem: {
      marginRight: "5px",
      marginBottom: "5px",
      border: "1px solid black",
      height: "20px",
    },
  
    rowMontobboCard: {
      flexDirection: "row",
      padding: "5px",
    },
  
    columnMontobboCard: {
      flexDirection: "column",
      width: "48%",
    },
  
    montobboCard: {
      border: "1px solid black",
      marginTop: "10px",
      borderRadius: "5px",
      marginRight: "6px",
    },
  
    rowSignatureCard: {
      flexDirection: "row",
      padding: "5px",
    },
  
    columnSignatureCard: {
      flexDirection: "column",
      width: "33%",
    },
  
    signatureCard: {
      padding: "10px",
      textAlign: "left",
      marginLeft: "20px",
      marginTop: "20px",
    },
  
    achoronikContainer: {
      marginTop: "20px",
      
    },
  
    scalemargin: {
    //   marginBottom: "2px",
    },
  
    wordBox: {
      fontFamily: "Kalpurush",
      padding: 2,
    },
  
    wordText: {
      fontFamily: "Kalpurush",
      fontSize: 12,
    },
  
    sentenceBox: {
      width: "100%",
      padding: 5,
    },
  
    sentenceText: {
      fontFamily: "Kalpurush",
      fontSize: 9,
      lineHeight: 1,
  
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    positionFixed: {},
  });