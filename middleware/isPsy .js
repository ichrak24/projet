module.exports = isPatient = function (req, res, next) {
  if (req.user.role == "Psy") {
    return next();
  }
  return res.status(400).send({ msg: " you are not an psy " });
};
