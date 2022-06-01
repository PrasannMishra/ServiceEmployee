
const { newEmployeeCall, fetchEmployee, fetchEmployeeById, updateEmployeeCall, deleteEmployeCall } = require('../dao/Employee/employee')

/**
 * @author <Prasann Mishra> <prasann.mishra@outlook.com>
 * This funtion adds new Employee
 * @param {*} req 
 * @param {*} res 
 */
let newEmployee = async (req, res) => {
    try {
        const newEmployee = await newEmployeeCall(req)
        res.json(newEmployee)
    } catch (e) {
        logger.error(e.stack)
        res.status(500).send(e.message)
    }
}
/**
 * This function gets all the employee
 * @param {*} req 
 * @param {*} res 
 */
let getEmployee = async (req, res) => {
    try {
        //const employees = await fetchEmployee()

        res.json(process.pid)
    } catch (e) {
        logger.error(e.stack)
        res.status(500).send(e.message)
    }
}
/**
 * Get employee based on ID
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
let getEmployeeById = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) return res.status(400).send('Id is Required')
        const employee = await fetchEmployeeById(id)
        res.json(employee)
    } catch (e) {
        logger.error(e.stack)
        res.status(500).send(e.message)
    }
}
/**
 * Update Employee informations
 * @param {*} req 
 * @param {*} res 
 */
let updateEmployee = async (req, res) => {
    try {
        const employee = await updateEmployeeCall(req)
        res.json(employee)
    } catch (e) {
        logger.error(e)
        res.status(500).send(e.message)
    }
}
/**
 * Delete Employee from storage
 * @param {*} req 
 * @param {*} res 
 */
let deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) return res.status(400).send('Id is Required')
        await deleteEmployeCall(req)
        res.json("deleted")
    } catch (e) {
        logger.error(e.stack)
        res.status(500).send(e.message)
    }
}

module.exports = {
    newEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}