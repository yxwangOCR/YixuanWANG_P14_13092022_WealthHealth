import React from "react";
import MUIDataTable from "mui-datatables";

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
        sort: false,
      },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "departement",
      label: "Departement",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "birthday",
      label: "Date of Birth",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "street",
      label: "Street",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "country",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "zipCode",
      label: "Zip Code",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: "dropdown",
  };

  const data = [
    {
      firstName: "Joe James",
      lastName: "Test Corp",
      startDate: "20110909",
      city: "Yonkers",
      country: "Canada",
      state: "NY",
    },
    {
      firstName: "John Walsh",
      lastName: "Test Corp",
      stateDate: "20220901",
      city: "Hartford",
      country: "Canada",
      state: "CT",
    },
  ];
  return (
    <>
      <MUIDataTable data={data} columns={columns} options={options} />
    </>
  );
}

export default Table;
