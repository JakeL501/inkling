const router = require("express").Router();
const inkerSampleController = require("../../controllers/inkerSampleController");

// Matches with "/api/articles"
router.route("/")
  .get(inkerSampleController.findAll)
  .post(inkerSampleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(inkerSampleController.findById)
  .put(inkerSampleController.update)
  .delete(inkerSampleController.remove);

module.exports = router;