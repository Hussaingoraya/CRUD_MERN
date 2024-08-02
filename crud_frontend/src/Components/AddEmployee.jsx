import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  from: {
    name: "",
    email: "",
    address: "",
    phone: "",
  },
  to: {
    name: "",
    email: "",
    address: "",
    phone: "",
  },
};
export default function AddEmployee() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        let postData = await axios.post(
          "http://localhost:8000/employees",
          values
        );
        console.log(postData, "DataPosted");
      } catch (error) {
        console.error("Error posting data:", error);      }
    },
  });

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <h1>From</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fromname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fromname"
                  value={values.from.name}
                  name="from.name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fromEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="fromEmail"
                  aria-describedby="emailHelp"
                  name="from.email"
                  value={values.from.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fromAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fromAddress"
                  aria-describedby="emailHelp"
                  name="from.address"
                  value={values.from.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fromPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fromPhone"
                  aria-describedby="emailHelp"
                  name="from.phone"
                  value={values.from.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </form>
          </div>
          <div className="col">
            <h1>To</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="toname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="toname"
                  name="to.name"
                  value={values.to.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="toEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="toEmail"
                  aria-describedby="emailHelp"
                  name="to.email"
                  value={values.to.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="toAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="toAddress"
                  aria-describedby="emailHelp"
                  name="to.address"
                  value={values.to.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="toPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="toPhone"
                  aria-describedby="emailHelp"
                  name="to.phone"
                  value={values.to.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </form>
          </div>
          <div className="btn btn-primary" type="submit" onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
}
