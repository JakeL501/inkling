``//  SAMPLE DATA to get that shit populating

const mongoose = require("mongoose");
const db = require("../models/inkRequest");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inkling"
);

const inkReqs = [
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    location: "leg",
    price: "100",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    location: "leg",
    price: "100",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    location: "leg",
    price: "100",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "abstract",
    location: "leg",
    price: "100",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "color",
    location: "leg",
    price: "100",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
];

db.InkRequest
  .remove({})
  .then(() => db.InkRequest.collection.insertMany(inkReqs))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });