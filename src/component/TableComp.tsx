import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";

import styles from "./Home.style.module.css";
import DataTable from "react-data-table-component";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #039dfc;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

function TableComp({ new_student, fetchDataFromAPI, setdata, pdf, data }: any) {
  const [all_student, setAll_student] = useState<any>([]);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = new_student.filter(
    (item) =>
      (item.student_name_bn &&
        item.student_name_bn
          .toLowerCase()
          .includes(filterText.toLowerCase())) ||
      (item.student_name_en &&
        item.student_name_en.toLowerCase().includes(filterText.toLowerCase()))
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const tableColumns = [
    {
      name: "শিক্ষার্থীর রোল",
      selector: (row) => Number(row.roll),
      sortable: true,
      width: "15%",
      paddingLeft: "10px",
      center: true,
    },
    {
      name: "শিক্ষার্থীর নাম",

      selector: (row) => row.student_name_bn || row.student_name_en,
    },

    {
      name: "পিডিএফ বাটন",
      width: "25%",
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

  useEffect(() => {
    setAll_student(new_student);
  }, [new_student]);

  console.log("new_student...iiiiii..", all_student);
  return (
    <div>
      {new_student.length > 0 && (
        <DataTable
          columns={tableColumns}
          data={filteredItems.length > 0 ? filteredItems : all_student}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
      )}
    </div>
  );
}

export default TableComp;
