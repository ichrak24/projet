const rdv = require("../models/RDV");

exports.ajouterRdv = async (req, res) => {
  const { name, lastname, email, phone, datenaiss, daterdv,psyyy } = req.body;
  console.log(req.body);
  try {
    const newRdv = new rdv({
      daterdv,
      datenaiss,
      name,
      lastname,
      email,
      phone,
      user: req.user.id,
      psy:psyyy
    });

    const response = await newRdv.save();
    res.send({ response: response, message: "rdv is saved" });
  } catch (error) 
  {
    console.log(error);
    res.status(500).send({ message: "can not save it " });
  }
};

exports.chercherRdv = async (req, res) => {
  let id=req.params.id;
  try {
    const result = await rdv.find({_id:id}).populate("user");
    res.send({ response: result, message: "geeting rdv successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not get rdv" });
  }
};

exports.chercherRdvbyid = async (req, res) => {
  try {
    const result = await rdv.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geeting rdv successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no rdv with this id" });
  }
};

exports.deleteRdv = async (req, res) => {
  try {
    const result = await rdv.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ rseponse: "rdv deleted " })
      : res.send("there is no rdv with this id ");
    console.log(result);
    res.send("deleted");
  } catch (error) {
    res.send("not deleted");
  }
};

exports.updateRdv = async (req, res) => {
  try {
    const result = await rdv.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "rdv updated" })
      : res.send({ message: "rdv already  updated" });
  } catch (error) {
    res.status(400).send("not updated");
  }
};
