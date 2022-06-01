const EmployeeModel = require("../../model/employee")

/**
 * @author <Prasann Mishra> <prasann.mishra@outlook.com>
 * This funtion adds new Employee
 * @param {*} req 
 * @returns 
 */
let newEmployee = async (req) => {
    try {
        const { name, age, email, address, dob } = req.body
        const newEmployee = await EmployeeModel.create({
            name,
            age,
            email,
            address,
            dob
        })
        return newEmployee
    } catch (e) {
        logger.error(e)
        throw new Error(e.message)
    }
}

/**
 * This function gets all the employee
 * @returns 
 */
let getEmployee = async () => {
    try {
        return await EmployeeModel.find()
    } catch (e) {
        logger.error(e)
        throw new Error(e.message)
    }
}
/**
 * Get employee details by ID
 * @param {*} id 
 * @returns 
 */
let getEmployeeById = async (id) => {
    try {
        return await EmployeeModel.findById(id)
    } catch (e) {
        throw new Error(e.message)
    }
}
/**
 * Update employee details
 * @param {*} req 
 * @returns 
 */
let updateEmployee = async (req) => {
    const { id } = req.params
    const { name, age, email, address, dob } = req.body

    try {
        return await EmployeeModel.findByIdAndUpdate(id, { name, age, email, address, dob })
    } catch (e) {
        throw new Error(e.message)
    }
}
/**
 * Deletes Employee
 * @param {*} req 
 * @returns 
 */
let deleteEmployee = async (req) => {
    const { id } = req.params
    try {
        const employee = await EmployeeModel.findById(id)
        await employee.remove()
        return "deleted"
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    newEmployeeCall: newEmployee,
    fetchEmployee: getEmployee,
    fetchEmployeeById: getEmployeeById,
    updateEmployeeCall: updateEmployee,
    deleteEmployeCall: deleteEmployee
}