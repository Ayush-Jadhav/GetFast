const mongoose = require("mongoose");

// Education sub-document
const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String }
});

// Experience Sub-document
const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String }
});

// Project Sub-document
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  link: { type: String },
  techStack: [{ type: String }],
  images: [{ type: String }],
  videos: [{ type: String }]
});

// --- Main User Profile Schema ---
const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    professionalTitle: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    about: {
      type: String
    },
    location: {
      type: String
    },
    resumeUrl: {
      type: String
    },
    githubProfile: {
      type: String
    },
    codingProfile: {
      type: String
    },
    skills: [
      {
        type: String
      }
    ],
    education: [educationSchema],
    experience: [experienceSchema],
    project: [projectSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("UserProfile", userProfileSchema);
