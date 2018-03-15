//  SAMPLE DATA to get that shit populating

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
);

document=({
    name: "Inkling",
    email: "inklingskins@gmail.com",
    profile: '@sinn.skin',
    artist: '',
    date: new Date(Date.now())
  }
);

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });