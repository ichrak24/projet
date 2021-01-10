const express = require("express");
const router = express.Router();

const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
const User = require("../models/User");
const controllers = require("../controllers/user");


//router.get("/" , (req,res)=>{
//  res.send("hello world");
//})

// register
router.post(
  "/register",

  registerRules(),
  validation,
  controllers.register
);

//login

router.post("/login", loginRules(), validation, controllers.login);
// get current user
router.get("/current", isAuth(), controllers.current);
//@method delete
//desc delete one contact by id
//@path  http://localhost:5000/api/contact/:id
// params

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

//@method put
//@desc update a contact by id
//@path  http://localhost:5000/api/contact/:id
//@params : id  body

router.put("/user/:id", async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "contact updated" })
      : res.send({ message: "contact already  updated" });
  } catch (error) {
    res.status(400).send("not updated");
  }
});


router.get("/user/:id", controllers.getuserbyid);
router.get(
  "/alluser/:role",

  controllers.chercherUser
);





module.exports = router;
