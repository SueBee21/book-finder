const router = require("express").Router();
const listController = require("../../controllers/listController");

router.route("/")
  .get(listController.getList)
  .post(listController.create);

router
  .route("/:id")
  .get(listController.findById)
  .put(listController.updateList)
  .delete(listController.deleteList);

module.exports = router;
