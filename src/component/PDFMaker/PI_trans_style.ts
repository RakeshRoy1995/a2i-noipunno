import {
    StyleSheet,
    Font,
  } from "@react-pdf/renderer";

Font.register({ family: "kalpurush", src: "kalpurush.ttf", format: "truetype" });

export const styles = StyleSheet.create({
  page: {
    fontFamily: "kalpurush",
    padding: 4,
    textAlign: "left",
    marginTop: 10
  },
  h1: {
    fontFamily: "kalpurush",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    margin: 5,
    lineHeight: 1
  },
  h2: {
    fontFamily: "kalpurush",
    textAlign: "center",
    fontSize: 12,
  },
  h3: {
    fontFamily: "kalpurush",
    fontSize: 11,
    textAlign: "center",
  },
  h5: {
    fontSize: 10,
    fontWeight: 500,
  },

  table: {
    width: "95%",
    margin: 'auto'
  },
  tableRowTop: {
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
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: '0.5',
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: '0.5',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColPoint: {

  },
  tableColStdNameRoll: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },

  tableColName: {
    width: "75%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColRoll: {
    width: "25%",
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
    fontFamily: "kalpurush",
    padding: "2px",
    fontSize: 9,
    lineHeight: "1px",
    textOverflow: "ellipsis",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },


  tableCellTikMark: {
    fontFamily: "kalpurush",
    margin: "auto",
    marginTop: "3px",
    padding: 1,
    fontSize: 10,
    lineHeight: "1px",
    textOverflow: "ellipsis",
    height: "15px"
  },

  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1,
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
  },

  tikMark: {
    marginLeft: 50,
    marginTop: 5,
    width: "12px",
    height: "10px",
  },

});