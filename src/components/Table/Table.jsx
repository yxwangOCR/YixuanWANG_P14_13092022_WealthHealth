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
  const data = [
    {
      firstName: "Joe",
      lastName: "James",
      startDate: "Test Corp",
      city: "Yonkers",
      state: "NY",
    },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  ];

  const options = {
    filterType: "checkbox",
  };
  return <MUIDataTable data={data} columns={columns} options={options} />;
}

export default Table;
