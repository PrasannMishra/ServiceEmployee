const mongoose = require("mongoose")
/**
 * This Model defines the Employee collection schema
 */
 const schema = new mongoose.Schema(
  {
    name: { type: "String", required: true },
    age: "String",
    email: { type: 'String', required: true },
    address: 'String',
    gender: 'String',
    dob: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

const Employee = mongoose.model("Employee", schema)
module.exports = Employee