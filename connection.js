const mongoose = require("mongoose")
require("dotenv").config()
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
const uri=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ftars.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database successfully")
  })
  .catch((err) => {
    console.log("Error connecting to the database", err)
  })
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination')
    logger.info('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})
module.exports = connexion