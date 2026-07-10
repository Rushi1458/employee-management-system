import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import Loader from "../components/Loader";
import DeleteModal from "../components/DeleteModal";
import { ToastContainer, toast } from "react-toastify";

import {
  getEmployees,
  deleteEmployee as deleteEmployeeAPI,
} from "../services/EmployeeService";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    setLoading(true);

    getEmployees()
      .then((response) => {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const filtered = employees.filter((employee) =>
      (
        employee.firstName +
        " " +
        employee.lastName +
        " " +
        employee.email
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredEmployees(filtered);
  }, [search, employees]);

  const handleDelete = () => {
    if (!selectedEmployee) return;

    deleteEmployeeAPI(selectedEmployee.id)
      .then(() => {
        toast.success("Employee deleted successfully!");
        loadEmployees();
        setSelectedEmployee(null);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to delete employee.");
      });
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        {/* Dashboard Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow dashboard-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>Total Employees</h6>
                    <h2>{employees.length}</h2>
                  </div>

                  <i
                    className="bi bi-people-fill text-primary"
                    style={{ fontSize: "45px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow dashboard-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>Search Results</h6>
                    <h2>{filteredEmployees.length}</h2>
                  </div>

                  <i
                    className="bi bi-search text-success"
                    style={{ fontSize: "45px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow dashboard-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>Status</h6>
                    <h2 className="text-success">Active</h2>
                  </div>

                  <i
                    className="bi bi-check-circle-fill text-success"
                    style={{ fontSize: "45px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Employee Table */}
        <div className="card shadow border-0">
          <div className="card-body">
            {loading ? (
              <Loader />
            ) : (
              <EmployeeTable
                employees={filteredEmployees}
                setSelectedEmployee={setSelectedEmployee}
              />
            )}
          </div>
        </div>
      </div>

      <DeleteModal
        employee={selectedEmployee}
        onDelete={handleDelete}
      />

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />

      <Footer />
    </>
  );
};

export default Home;