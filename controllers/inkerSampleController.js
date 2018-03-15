const db = require("../models");

// Defining methods for the inkerSampleController
module.exports = {
  findAll: (req, res) => {
    db.inkerSample
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.inkerSample
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  remove: (req, res) => {
    db.inkerSample
      .remove({ _id: req.params.id })
      .then(dbModel => res.json({res: dbModel, id: req.params.id}))
      .catch(err => res.status(422).json(err));
  }
};