// title, postedBy, img_url[], postedAt, likes_id, comment_Id, body
const mongoose = require("mongoose");

const generalPostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: {
      type: String
    },
    mediaUrl: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("GeneralPost", generalPostSchema);
