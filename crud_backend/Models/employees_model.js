const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  from: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  },
  to: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

const EmployeModel = mongoose.model("Employee", employeSchema);
module.exports = EmployeModel;
