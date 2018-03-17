const router = require("express").Router();
const skinProfileController = require("../../controllers/skinProfileController");

// Matches with "/api/articles"
router.route("/")
  .get(skinProfileController.findAll)
  .post(skinProfileController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(skinProfileController.findById)
  .delete(skinProfileController.remove);

module.exports = router;
