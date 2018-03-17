///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

///////////////////////////////////////////////////////////////////////////////////////
//                                      Schema                                       //
///////////////////////////////////////////////////////////////////////////////////////
// Define and assign the schema for an ink request
const SkinProfileSchema = new Schema({
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
  profile: {
    type: String
  },
  artist: {
    type: Boolean,
    required: true,
    default: true
  }
});

// Make a copy of the above ink request schema and assign it to a variable
const SkinProfile = mongoose.model("SkinProfile", SkinProfileSchema);

///////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                       //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = SkinProfile;