const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    contact: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["Recruiter", "candidate", "admin"],
      required: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    refreshToken: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);

// deletedAccount : BOOLEAN(flag)
// suggested job = 15; -> 5, 5, 5 ->new suggestion?
// recently rejected -> 10
// job fetch 15 -> role, recent, reject/filled -> avoid repetition
