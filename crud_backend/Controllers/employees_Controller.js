const EmployeModel = require("../Models/employees_model");

const getEmployee = async (req, res) => {
  try {
    const employeeData = await EmployeModel.find();
    res.status(200).json(employeeData);
  } catch (error) {
    res.status(500).json({ message: "No data found", error: error.message });
  }
};
const getEmployeeByID = async (req,res)=>{
  try {
    const employee = await EmployeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employee", error: error.message });
  }
}

const postEmployyes = async (req, res) => {
  try {
    let postEmploye = await EmployeModel.create(req.body);
    postEmploye.save();
    res.status(201).json(postEmploye);
  } catch (error) {
    res.status(500).json({ message: "No data found", error: error.message });
  }
};

const deleteEmployees = async (req, res) => {
  try {
    let id = req.params.id;
    const deleteEmpData = await EmployeModel.findByIdAndDelete(id);
    if (!deleteEmpData) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ message: "Employee deleted successfully", data: deleteEmpData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Not able to delete", error: error.message });
  }
};
const updateEmployees = async (req, res) => {
  try {
    let id = req.params.id;
    const updateData = req.body
    const updateEmpData = await EmployeModel.findByIdAndUpdate(id,updateData,{new:true});
    if (!updateEmpData) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(updateEmpData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "unable to update employee", error: error.message });
  }
};
module.exports = {
  getEmployee,
  postEmployyes,
  deleteEmployees,
  updateEmployees,
  getEmployeeByID
};
