const mongoose = require("mongoose");
const schema = mongoose.Schema;
const commentaireSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  user: { type: schema.Types.ObjectId, ref: "user" },
  
});

module.exports = mongoose.model("commentaire", commentaireSchema);
