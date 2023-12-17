import BiRawPDFDownload from "./PDFMaker/BiPdfmaker";

const ShikarthirReportCard = ({
  selected_student,
  student,
  instititute,
  subject_name,
  biData,
}: any) => {

  return (
    <>
      <div className="d-flex m-4 justify-content-between flex-md-row flex-column align-items-center flex-end">
        <label>{student?.student_name_bn || student?.student_name_en}</label>

        <BiRawPDFDownload
        selected_student={selected_student}
        student={student}
        instititute={instititute}
        subject_name={subject_name}
        biData={biData}
      />

      </div>
    </>
  );
};

export default ShikarthirReportCard;
