const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    // --- Core Job Details ---
    title: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },

    // --- Link to the Recruiter who posted it ---
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // --- Job Requirements ---
    minExp: {
      type: Number,
      required: true,
      min: 0
    },
    maxExp: {
      type: Number,
      required: true,
      validate: [
        // Custom validator
        {
          validator: function (value) {
            return value >= this.minExp;
          },
          message:
            "Max experience must be greater than or equal to min experience."
        }
      ]
    },
    skillsRequired: [
      {
        type: String,
        required: true
      }
    ],

    // --- Compensation ---
    minSalary: {
      type: Number,
      required: true
    },
    maxSalary: {
      type: Number,
      required: true,
      validate: [
        {
          validator: function (value) {
            return value >= this.minSalary;
          },
          message: "Max salary must be greater than or equal to min salary."
        }
      ]
    },

    // --- Job Logistics ---
    jobType: {
      type: String,
      enum: ["Full-time", "Internship", "Apprentice", "Contract"],
      required: true
    },
    workMode: {
      type: String,
      enum: ["Onsite", "Remote", "Hybrid"],
      required: true
    },
    interviewMode: {
      type: String,
      enum: ["In-person", "Online"],
      required: true
    },
    location: {
      type: String,
      required: true
    },
    vacancy: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    },

    // --- Status & Analytics ---
    status: {
      type: String,
      enum: ["Open", "Closed", "Filled"],
      default: "Open"
    },
    impression: {
      type: Number,
      default: 0
    },
    applicationCount: {
      type: Number,
      default: 0
    }
  },
  {
    // Automatically adds createdAt and updatedAt
    timestamps: true
  }
);

module.exports = mongoose.model("Job", jobSchema);
