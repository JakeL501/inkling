import inkStyles from "../client/src/pages/Styles";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylesSchema = new Schema({
  style: { type: String, required: true },
  img: { type: String, required: true },
  des: { type: String, required: true },
//   date: { type: Date, default: Date.now }
});

const inkStyles = mongoose.model("inkStyles", stylesSchema);

module.exports = inkStyles;
