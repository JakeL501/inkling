//  SAMPLE DATA to get that shit populating

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sampleInkling",
//   {
//     useMongoClient: true
//   }
);

const sampleInk = [
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
}
];


const sampleSkins = [
    {
      name: "Inkling",
      email: "inklingskins@gmail.com",
      profile: '@sinn.skin',
      artist: '',
      date: new Date(Date.now())
    },
];

const sampleSkins = [
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  },
];

db.sampleInk
  .remove({})
  .then(() => db.Style.collection.insertMany(styleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });