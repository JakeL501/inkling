const router = require("express").Router();
const inkRequestController = require("../../controllers/inkRequestController");

// Matches with "/api/inkRequest"
router
  .route("/")
  .post(inkRequestController.create)
  .get(inkRequestController.findAll)

// Matches with "/api/inkRequest/:id"
router
  .route("/:id")
  .delete(inkRequestController.remove);

module.exports = router;