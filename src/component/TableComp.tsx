import React from 'react'
import DataTable from 'react-data-table-component';



function TableComp({new_student,fetchDataFromAPI}:any) {


    const tableColumns = [
        {
            name: 'Name',
            selector: row => row.student_name_bn || row.student_name_en,
        },
        {
            name: 'Roll',
            selector: row => row.roll
        },
        {
         name: 'Poster Button',
          button: true,
             cell: (row) => <button onClick={ ()=> fetchDataFromAPI(row.uid)}>Download Poster</button>,
         },
    ];
      console.log("new_student...iiiiii.." , new_student);
  return (
    <div>
      {
  new_student.length >0 &&

                                    
              <DataTable
            columns={tableColumns}
            data={new_student}
        />
}

    </div>
  )
}

export default TableComp
