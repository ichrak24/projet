const mongoose = require("mongoose");
const schema = mongoose.Schema;
const rdvSchema = new schema({
  daterdv: {
    type: String,
  },
  datenaiss: {
    type: String,
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  user: { type: schema.Types.ObjectId, ref: "user" },
  psy: { type: schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("rdv", rdvSchema);
