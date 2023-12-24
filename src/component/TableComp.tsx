import React from "react";
import styles from "./Home.style.module.css";
import DataTable from "react-data-table-component";

function TableComp({ new_student, fetchDataFromAPI, setdata, pdf, data }: any) {
    
  const tableColumns = [
    {
        name: "শিক্ষার্থীর রোল",
        selector: (row) => Number(row.roll),
        sortable: true,
        width:"15%",
      },
      {
      name: "শিক্ষার্থীর নাম",

      selector: (row) => row.student_name_bn || row.student_name_en,
    },
    
    {
      name: "পিডিএফ বাটন",
      width:"25%",
      button: true,
      cell: (row) => (
        <div>
          {data?.uid == row?.uid ? (
            <div>{pdf}</div>
          ) : (
            <button
            className={`${styles.download_btn}`}
              onClick={() => {
                setdata(row);
                fetchDataFromAPI(row.uid);
              }}
            >
              Generate PDF
            </button>
          )}
        </div>
      ),
    },
  ];


  console.log("new_student...iiiiii..", new_student);
  return (
    <div>
      {new_student.length > 0 && (
        <DataTable
          columns={tableColumns}
          data={new_student}
          pagination
          
        />
      )}
    </div>
  );
}

export default TableComp;
