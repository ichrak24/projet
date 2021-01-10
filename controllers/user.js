const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  // destructuring
  const {
    name,
    lastName,
    email,
    password,
    Address,
    phone,
    datenaiss,
    role,
  } = req.body;

  try {
    const newUser = new User({
      name,
      lastName,
      email,
      password,
      Address,
      phone,
      datenaiss,
      role,
    });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    newUser.password = hashedPassword;

    // save user
 

    const newUserToken = await newUser.save();
    // generate a token
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: "1h",
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user is saved",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send("can not save the user");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await User.findOne({ email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }

    // cree un token
    const payload = {
      _id: searchedUser._id,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: " can not get the user" });
  }
};
exports.getuserbyid = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res
      .status(200)
      .send({ response: result, message: "geeting contact successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id" });
  }
};
exports.chercherUser = async (req, res) => {
  try {
    const result = await User.find({ role: req.params.role });
    res.send({ response: result, message: "geeting users successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not get posts" });
  }
};

exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
};
