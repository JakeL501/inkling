const router = require("express").Router();
const inkerProfileController = require("../../controllers/inkerProfileController");

// Matches with "/api/articles"
router.route("/")
  .get(inkerProfileController.findAll)
  .post(inkerProfileController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(inkerProfileController.findById)
  .delete(inkerProfileController.remove);

module.exports = router;
