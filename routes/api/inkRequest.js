const router = require("express").Router();
const inkRequestController = require("../../controllers/inkRequestController");

// Matches with "/api/articles"
router.route("/")
  .get(inkRequestController.findAll)
  .post(inkRequestController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(inkRequestController.findById)
  .put(inkRequestController.update)
  .delete(inkRequestController.remove);

module.exports = router;
