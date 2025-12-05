const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    // comment on and by
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // comment body
    description: {
      type: String,
      required
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", commentSchema);
