const mongoose = require("mongoose");
const schema = mongoose.Schema;
const postSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  commentaires: [
    {
      type: schema.Types.ObjectId,
      ref: "commentaire",
    },
  ],

  user: { type: schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("post", postSchema);
