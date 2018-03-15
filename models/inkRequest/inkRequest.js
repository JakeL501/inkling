///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

///////////////////////////////////////////////////////////////////////////////////////
//                                      Schema                                       //
///////////////////////////////////////////////////////////////////////////////////////
// Define and assign the schema for an ink request
const InkRequestSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    required: "Name is Required",
    validate: [
      function (input) {
        return input.length >= 1;
      },
      "String should be longer."
    ]
  },
  email: {
    type: String,
    required: true,
    required: "Email is Required",
    
  },
  styles: {
    type: Array,
    required: true
  },
  location: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [25, 'Cannot be less than $25.00'],
        max: 10000
  },
  img: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String
  },
});

// Make a copy of the above ink request schema and assign it to a variable
const InkRequest = mongoose.model("InkRequest", InkRequestSchema);

///////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                       //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = InkRequest;