import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createEmployee } from "../services/EmployeeService";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!employee.firstName.trim())
      newErrors.firstName = "First Name is required";

    if (!employee.lastName.trim())
      newErrors.lastName = "Last Name is required";

    if (!employee.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(employee.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    if (!validate()) return;

    createEmployee(employee)
      .then(() => {
        toast.success("Employee Added Successfully!");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable to save employee.");
      });
  };

  return (
    <div className="container py-5">

      <ToastContainer />

      <div className="row justify-content-center">

        <div className="col-lg-6">

          <div className="card shadow-lg border-0">

            <div className="card-header bg-primary text-white text-center">
              <h3>
                <i className="bi bi-person-plus-fill me-2"></i>
                Add Employee
              </h3>
            </div>

            <div className="card-body">

              <form onSubmit={saveEmployee}>

                <div className="mb-3">
                  <label className="form-label">First Name</label>

                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    name="firstName"
                    value={employee.firstName}
                    onChange={handleChange}
                  />

                  <div className="invalid-feedback">
                    {errors.firstName}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>

                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    name="lastName"
                    value={employee.lastName}
                    onChange={handleChange}
                  />

                  <div className="invalid-feedback">
                    {errors.lastName}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>

                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                  />

                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                </div>

                <div className="d-flex justify-content-between">

                  <button className="btn btn-success">
                    <i className="bi bi-check-circle me-2"></i>
                    Save Employee
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

export default AddEmployee;