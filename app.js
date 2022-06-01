const express = require("express")
const connection = require("./connection")
const employeeRoute = require('./routes/employee')
const app = express()
const cors = require("./middleware/corsMiddleWare")
const schedule = require('node-schedule')
global.logger = require("./utils/logger")
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerBasicInfo = require('./docs/basicInfo')
const cronFunction = require("./schedulars/cronDemo")
const path = require('path')
const fs = require('fs')
const notificationRoute = require('./routes/notification')

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors)

//Swagger Configuration   
const swaggerDocs = swaggerJSDoc(swaggerBasicInfo)
app.use('/swagger/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

//Api Routes
app.use('/employee', employeeRoute)
app.use('/notification', notificationRoute)


//scheduler Example
/* schedule.scheduleJob('* * * * *', () => {
  cronFunction()
}) */

//Server configuration
app.listen(3000, () => {
  logger.info(`Server Started in port : 3000!`)
  console.log("Listening at port clear", 3000)
})


/* 
Proper PM2-- on starting pm2 in cluster mode, result into same PID?? why
testing
authentication
session management
avoid attacks
Sameer Buna
https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/
*/


