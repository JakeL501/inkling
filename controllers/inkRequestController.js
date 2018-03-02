const db = require("../models");

// Defining methods for the inkRequestController
module.exports = {
  findAll: function(req, res) {
    db.InkReq
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.InkReq
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.InkReq
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.InkReq
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.InkReq
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};





///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
// Require express so we can make an express application
 const express = require("express");
// Parses our HTML and helps us find elements
const cheerio = require("cheerio");
// Makes HTTP request for HTML page
const request = require("request");
// Provides utilities for working with file and directory paths.
const path = require("path");
// Middle-ware style router
const router = express.Router();
// Require the article model schema
const db = require("../models");

///////////////////////////////////////////////////////////////////////////////////////
//                              Methods for Controller                               //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    findAll: function(req, res) {
        db.InkRequest
            .findById(req.params.id)
            .then(dbModel => res.JSON(dbModel))
            .catch(err => res.status(422).json(err))
    }
};

///////////////////////////////////////////////////////////////////////////////////////
//                                     Get/Post                                      //
///////////////////////////////////////////////////////////////////////////////////////
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

///////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                       //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = router; 