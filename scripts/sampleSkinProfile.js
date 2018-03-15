``//  SAMPLE DATA to get that shit populating

const mongoose = require("mongoose");
const db = require("../models/skinProfile");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inkling"
);

const skins = [
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  },
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  }, 
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  }, 
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  }, 
  {
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  }
];

db.SkinProfile
  .remove({})
  .then(() => db.SkinProfile.collection.insertMany(skins))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });