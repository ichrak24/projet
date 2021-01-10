const { check, validationResult } = require("express-validator");

exports.postsRules = () => [
  check("namepsy", "namepsy is required"),
  check("description", "description is required").notEmpty(),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};
