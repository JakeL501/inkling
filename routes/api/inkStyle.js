// ROUTES => API => inkStyles
const router = require("express").Router();
const inkStylesController = require("../../controllers/inkStylesController");

// Matches with "/api/books"
router.route("/")
  .get(inkStylesController.findAll)
  .post(inkStylesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(inkStylesController.findById)
  .put(inkStylesController.update)
  .delete(inkStylesController.remove);

module.exports = router;
