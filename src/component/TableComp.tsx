import React from "react";
import DataTable from "react-data-table-component";

function TableComp({ new_student, fetchDataFromAPI, setdata, pdf, data }: any) {
  const tableColumns = [
    {
      name: "Name",
      selector: (row) => row.student_name_bn || row.student_name_en,
    },
    {
      name: "Roll",
      selector: (row) => row.roll,
    },
    {
      name: "Poster Button",
      button: true,
      cell: (row) => (
        <div>
          {data?.uid == row?.uid ? (
            <div>{pdf}</div>
          ) : (
            <button
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
        <DataTable columns={tableColumns} data={new_student} />
      )}
    </div>
  );
}

export default TableComp;
