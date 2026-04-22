onst mongoose = require("mongoose");

// Sub-schema for individual skill assessments
const SkillAssessmentSchema = new mongoose.Schema(
  {
    skillName: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    score: {
      type: Number,
      required: [true, "Skill score is required"],
      min: [0, "Score cannot be less than 0"],
      max: [100, "Score cannot exceed 100"],
    },
    level: {
      type: String,
      enum: {
        values: ["Beginner", "Intermediate", "Advanced", "Expert"],
        message: "{VALUE} is not a valid skill level",
      },
    },
  },
  { _id: false } // No separate _id for sub-documents
);

const AssessmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      index: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack",
        "Data Scientist",
        "DevOps",
      ],
      trim: true,
    },
    score: {
      type: Number,
      required: [true, "Overall score is required"],
      min: [0, "Score cannot be less than 0"],
      max: [100, "Score cannot exceed 100"],
    },
    skillsAssessed: {
      type: [SkillAssessmentSchema],
      default: [],
    },
    recommendations: {
      type: [String],
      default: [],
    },
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: derive grade label from score
AssessmentSchema.virtual("grade").get(function () {
  if (this.score >= 85) return "Excellent";
  if (this.score >= 70) return "Good";
  if (this.score >= 50) return "Average";
  return "Needs Improvement";
});

// Static: get all assessments for a specific user
AssessmentSchema.statics.findByUser = function (userId) {
  return this.find({ userId }).populate("userId", "name email role");
};

// Static: get average score for a role
AssessmentSchema.statics.averageScoreByRole = function (role) {
  return this.aggregate([
    { $match: { role } },
    { $group: { _id: "$role", avgScore: { $avg: "$score" } } },
  ]);
};

// Compound index for efficient queries
AssessmentSchema.index({ userId: 1, completedAt: -1 });
AssessmentSchema.index({ role: 1, score: -1 });

module.exports = mongoose.model("Assessment", AssessmentSchema);
