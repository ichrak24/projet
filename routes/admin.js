const express = require("express");
const router = express.Router();

const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
const User = require("../models/User");
const controllers = require("../controllers/admin");

//router.get("/" , (req,res)=>{
//  res.send("hello world");
//})

// register
router.post("/register", registerRules(), validation, controllers.register);

//login

router.post("/login", loginRules(), validation, controllers.login);

router.get(
  "/psy",

  controllers.chercherPsy
);

router.get("/psy/:id", controllers.chercherPsybyid);

router.delete("/user/:id", async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ rseponse: "user deleted " })
      : res.send("there is no user with this id ");
    console.log(result);
    res.send("deleted");
  } catch (error) {
    res.send("not deleted");
  }
});



module.exports = router;
