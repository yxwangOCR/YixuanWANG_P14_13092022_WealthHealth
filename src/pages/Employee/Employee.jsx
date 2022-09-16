import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";

function Employee() {
  return (
    <div>
      <h1>Current Employees</h1>

      <Table />
      <Link to="/" className="view-home-link">
        Home
      </Link>
    </div>
  );
}

export default Employee;

/* Fetch data by hooks: 
function fetchEmployees(query = "") {
  return new Promise(getEmployees(query));
}

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    (async function () {
      setEmployees(await fetchEmployees(props));
    })();
  }, [props]);

  return  <Table employees={employees} />
*/
