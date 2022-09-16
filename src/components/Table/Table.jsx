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
      name: "departement",
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

  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "12-09-2022",
      departement: "Sales",
      birthday: "10-10-1999",
      street: "xxx xxx-xxx",
      city: "NY",
      country: "USA",
      zipCode: "www-yyy-yyy",
    },
    {
      firstName: "Anna",
      lastName: "Lee",
      startDate: "13-09-2012",
      departement: "Marketing",
      birthday: "12-01-1990",
      street: "xss xxx-xxx",
      city: "Paris",
      country: "France",
      zipCode: "yyy-yyy-uuu",
    },
  ];

  return (
    <>
      <MUIDataTable data={data} columns={columns} options={options} />
    </>
  );
}

export default Table;
