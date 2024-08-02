const express = require("express");
const router = express.Router();
const employeeController = require("../Controllers/employees_Controller");

router.get("/", employeeController.getEmployee);
router.get("/:id", employeeController.getEmployeeByID);
router.post("/", employeeController.postEmployyes);
router.delete("/:id", employeeController.deleteEmployees);
router.put("/:id", employeeController.updateEmployees);

module.exports = router;
