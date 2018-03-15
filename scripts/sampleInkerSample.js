``//  SAMPLE DATA to get that shit populating

const mongoose = require("mongoose");
const db = require("../models/inkerSample");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inkling"
);

const inkerSamps = [
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    website: "inkmasta.com",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    website: "inkmasta.com",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    website: "inkmasta.com",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    website: "inkmasta.com",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    styles: "black and white",
    website: "inkmasta.com",
    img: "",
    description: "gjhgjdhgjhgdjhgdjahgdj",
    date: new Date(Date.now())
  },
];

db.InkerSample
  .remove({})
  .then(() => db.InkerSample.collection.insertMany(inkerSamps))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });