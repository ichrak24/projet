const Commentaire = require("../models/commentaire");

exports.ajouterCommentaire = async (req, res) => {
  const { description } = req.body;
  try {
    const newCommentaire = new Commentaire({ user: req.user.id, post : req.body.id, description });

    const response = await newCommentaire.save();
    res.send({ response: response, message: "commentaire is saved" });
  } catch (error) {
    console.log(error);
    res.statuts(500).send({ message: "can not save it " });
  }
};

exports.chercherCommentaire = async (req, res) => {
  try {
    const result = await Commentaire.find().populate("post").populate("user");;
    res.send({ response: result, message: "geeting commentaires successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not get commentaires" });
  }
};

exports.chercherCommentairebyid = async (req, res) => {
  try {
    const result = await Commentaire.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geeting commtaire successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no commentaire with this id" });
  }
};

exports.deleteCommentaire = async (req, res) => {
  try {
    const result = await Commentaire.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ rseponse: "commentaire deleted " })
      : res.send("there is no commentaire with this id ");
    console.log(result);
    res.send("deleted");
  } catch (error) {
    res.send("not deleted");
  }
};

exports.updateCommentaire = async (req, res) => {
  try {
    const result = await Commentaire.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "commentaire updated" })
      : res.send({ message: "commentaire already  updated" });
  } catch (error) {
    res.status(400).send("not updated");
  }
};
