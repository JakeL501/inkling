///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
////////////////////////////////////////////////////////////////////////////////
//                                      Schema                                       //
///////////////////////////////////////////////////////////////////////////////////////
// Define and assign the schema for an ink request
const InkerProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    required: "name is Required",
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
  },
  profile: {
    type: String
  },
  styles: {
    type: Array,
    required: true
  },
  website: {
    type: String
  },
  artist: {
    type: Boolean,
    required: true,
    default: true
  }
});

// Make a copy of the above ink request schema and assign it to a variable
const InkerProfile = mongoose.model("InkerProfile", InkerProfileSchema);

///////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                       //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = InkerProfile;