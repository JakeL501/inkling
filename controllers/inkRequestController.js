const db = require("../models/inkRequest");

// Defining methods for the inkRequestController
module.exports = {
  findAll: (req, res) => {
    db.InkRequest
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.InkRequest
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.InkRequest
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
    db.InkRequest
      .remove({ _id: req.params.id })
      .then(dbModel => res.json({res: dbModel, id: req.params.id}))
      .catch(err => res.status(422).json(err));
  }
};