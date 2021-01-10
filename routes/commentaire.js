const express = require("express");
const router = express.Router();
const commentaire = require("../models/commentaire");
const controllers = require("../controllers/commentaire");
const isAuth = require("../middleware/passport");
const {
  commentaireRules,

  validation,
} = require("../middleware/validatorcommentaire");

router.post(
  "/commentaire",
 
  isAuth(),
  controllers.ajouterCommentaire
);

router.get(
  "/commentaire",

  controllers.chercherCommentaire
);

router.get(
  "/commentaire/:id",

  controllers.chercherCommentairebyid
);

router.delete(
  "/commentaire/:id",
  commentaireRules(),
  validation,
  isAuth(),
  controllers.deleteCommentaire
);

router.put(
  "/commentaire/:id",
  commentaireRules(),
  validation,
  isAuth(),
  controllers.updateCommentaire
);

module.exports = router;
