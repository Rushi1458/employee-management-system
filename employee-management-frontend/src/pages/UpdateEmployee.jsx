import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    getEmployee(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to load employee.");
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let temp = {};

    if (!employee.firstName.trim())
      temp.firstName = "First Name is required";

    if (!employee.lastName.trim())
      temp.lastName = "Last Name is required";

    if (!employee.email.trim())
      temp.email = "Email is required";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    updateEmployee(id, employee)
      .then(() => {
        toast.success("Employee Updated Successfully!");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Update Failed");
      });
  };

  return (
    <div className="container py-5">
      <ToastContainer />

      <div className="row justify-content-center">
        <div className="col-lg-6">

          <div className="card shadow-lg border-0">

            <div className="card-header bg-warning text-dark text-center">
              <h3>
                <i className="bi bi-pencil-square me-2"></i>
                Update Employee
              </h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                  />

                  <div className="invalid-feedback">
                    {errors.firstName}
                  </div>
                </div>

                <div className="mb-3">
                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                  />

                  <div className="invalid-feedback">
                    {errors.lastName}
                  </div>
                </div>

                <div className="mb-4">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />

                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                </div>

                <div className="d-flex justify-content-between">

                  <button className="btn btn-warning">
                    <i className="bi bi-arrow-repeat me-2"></i>
                    Update
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;