import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import "./Table.css";
import useEmployee from "../../hooks/useEmployee";

function Table() {
  const columns = [
    {
      name: "firstName",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "department",
      label: "Departement",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "birthday",
      label: "Date of Birth",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "street",
      label: "Street",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "country",
      label: "State",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "zipCode",
      label: "Zip Code",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: "dropdown",
  };

  const DataTable = [];
  const { data, setData } = useEmployee();
  DataTable.push(...[data]);

  //setData(DataTable.concat(data));

  //useEmployee(() => data, [data]);

  //console.log(useEmployee());
  /*
  useEffect(() => {
    console.log(data);
    console.log(setData);
    DataTable.push(data);
  }, [data]);
*/

  // Add row:
  /*
  const { data, setData } = useEmployee({ employee: [] });

  const [row] = useEmployee('employee')
  
  return 
   <MUIDataTable row={row} data={DataTable} columns={columns} options={options} />
  */

  return (
    <div className="table-container">
      <h2>Current Employees</h2>
      <MUIDataTable data={DataTable} columns={columns} options={options} />
    </div>
  );
}

export default Table;

// Read : https://github.com/react-hook-form/react-hook-form/issues/494
