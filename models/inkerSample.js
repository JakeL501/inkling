///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

///////////////////////////////////////////////////////////////////////////////////////
//                                      Schema                                       //
///////////////////////////////////////////////////////////////////////////////////////
// Define and assign the schema for an ink request
const inkerSampleSchema = new Schema({
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
  website: {
    type: String
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
const InkerSample = mongoose.model("InkerSample", inkerSampleSchema);

///////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                       //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = InkerSample;