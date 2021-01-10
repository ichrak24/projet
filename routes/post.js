const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const controllers = require("../controllers/post");
const isAuth = require("../middleware/passport");
const {
  postsRules,

  validation,
} = require("../middleware/validatorpost");

router.post(
  "/post",
 
  isAuth(),
  controllers.ajouterPost
);

router.get(
  "/post",

  controllers.chercherPost
);

router.get("/post/:id", controllers.chercherPostbyid);

router.delete(
  "/post/:id",

  isAuth(),
  controllers.deletePost
);

router.put(
  "/post/:id",

  isAuth(),
  controllers.updatePost
);

module.exports = router;
