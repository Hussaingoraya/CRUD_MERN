import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EmployeeDetail() {
  const navigate = useNavigate()
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const getEmployee = await axios.get("http://localhost:8000/employees");
        setEmployeeData(getEmployee.data);
        console.log(employeeData, "getting data");
      } catch (error) {}
    };
    fetchingData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const deleteEmployee = await axios.delete(
        `http://localhost:8000/employees/${id}`
      );
      console.log(deleteEmployee);
      setEmployeeData((prevData) =>
        prevData.filter((employee) => employee._id !== id)
      );
      // setEmployeeData(deleteEmployee)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Employee Details</h2>
          <button>
            <Link to={"/addEmployee"}>Add Employee</Link>{" "}
          </button>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="tab1-tab"
              data-toggle="tab"
              href="#tab1"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              FROM
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab2-tab"
              data-toggle="tab"
              href="#tab2"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              TO
            </a>
          </li>
        </ul>

        <div className="tab-content mt-4" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-tab"
          >
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData && employeeData.length > 0 ? (
                    employeeData.map((data, i) => (
                      <tr key={i}>
                        <td>{data.from.name}</td>
                        <td>{data.from.email}</td>
                        <td>{data.from.address}</td>
                        <td>{data.from.phone}</td>
                        <td style={{ display: "flex" }}>
                          <div>
                          <button onClick={() => navigate(`/edit/${data._id}`)}>Edit</button>                          </div>
                          <div>
                            <button onClick={() => handleDelete(data._id)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <th scope="row">
                        <span>
                          You have no invoice<span>,</span>{" "}
                          <a href="">add your first Employee today</a>
                        </span>
                      </th>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tab2"
            role="tabpanel"
            aria-labelledby="tab2-tab"
          >
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
