const router = require("express").Router();
const listController = require("../../controllers/listController");

router.route("/")
  .get(listController.findAll)
  .post(listController.create);

router
  .route("/:id")
  .get(listController.findById)
  .put(listController.update)
  .delete(listController.remove);

module.exports = router;
