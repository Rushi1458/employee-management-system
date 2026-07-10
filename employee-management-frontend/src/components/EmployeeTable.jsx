import { Link } from "react-router-dom";

const EmployeeTable = ({ employees, setSelectedEmployee }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th width="220">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-5">
                No Employees Found
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>

                <td>
                  {employee.firstName} {employee.lastName}
                </td>

                <td>{employee.email}</td>

                <td>
                  <Link
                    to={`/edit-employee/${employee.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    <i className="bi bi-pencil-square"></i> Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
