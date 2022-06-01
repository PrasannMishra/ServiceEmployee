/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *        id:
 *           type: string
 *           description: The Auto-generated id of a Employee
 *        name:
 *           type: string
 *           description: Name of Employee
 *        email:
 *           type: string
 *           description: Email of Employee
 *        address:
 *           type: string
 *           description: Address of employee
 *        gender: 
 *            type: string
 *            description: Gender of Employee
 *        dob:
 *            type: string
 *            description: Stores employee dob
 */

/*
   Schema example:
 *         name: prasann Mishra
 *         age: 10
 *         gender: Male
 *         email: p@gmail.com
 *         address:
 *         dob:
*/

/**
 * @swagger
 *  tags:
 *    name: Employee
 *    description: Details of employee
 */
var express = require('express')
var router = express.Router()
const { newEmployee, getEmployee, getEmployeeById, updateEmployee, deleteEmployee } = require('../controller/employee')

/**
 * @swagger
 * /employee:
 *   post:
 *     summary: Create a new Employee
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Some server error
 */
router.post("/", async (req, res) => {
  try {
    newEmployee(req, res)
  } catch (e) {
    logger.error(e)
  }
})
/** 
 * @swagger 
 * /employee: 
 *   get: 
 *     description: Get all Employee 
 *     responses:  
 *       200: 
 *         description: Success  
 */
router.get("/", async (req, res) => {
  try {
    getEmployee(req, res)
  } catch (e) {
    logger.error(e)
  }
})
/**
 * @swagger
 * /employee/{id}:
 *   get:
 *     summary: gets employee by id
 *     tags: [Employee]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of Employee
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Employee by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Employee can not be found
 */
router.get("/:id", async (req, res) => {
  try {
    getEmployeeById(req, res)
  } catch (e) {
    logger.error(e)
  }
})

/**
 * @swagger
 * /employee/{id}:
 *   put:
 *     summary: updates Employee by id
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Employee id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         decsription: The Employee was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router.put("/:id", async (req, res) => {
  try {
    updateEmployee(req, res)
  } catch (e) {
    logger.error(e)
  }
})

/**
 * @swagger
 * /employee/{id}:
 *   delete:
 *     summary: Deletes employee by id
 *     tags: [Employee]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of Employee
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Employee by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Employee can not be found
 */
router.delete("/:id", async (req, res) => {
  try {
    deleteEmployee(req, res)
  } catch (e) {
    logger.error(e)
  }
})

module.exports = router