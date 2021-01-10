const express = require("express");
const router = express.Router();

const controllers = require("../controllers/RDV");
const isAuth = require("../middleware/passport");

router.post("/rdv", isAuth(), controllers.ajouterRdv);
router.get("/rdv/:id", controllers.chercherRdvbyid);
router.get(
  "/allrdv/",

  controllers.chercherRdv
);

router.delete(
  "/rdv/:id",

  isAuth(),
  controllers.deleteRdv
);

router.put("/rdv/:id", isAuth(), controllers.updateRdv);

module.exports = router;
