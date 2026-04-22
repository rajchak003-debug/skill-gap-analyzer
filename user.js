const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: {
        values: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack",
          "Data Scientist",
          "DevOps",
        ],
        message: "{VALUE} is not a supported role",
      },
    },
    skills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.virtual("skillCount").get(function () {
  return this.skills.length;
});


UserSchema.methods.hasSkill = function (skill) {
  return this.skills
    .map((s) => s.toLowerCase())
    .includes(skill.toLowerCase());
};


UserSchema.statics.findByRole = function (role) {
  return this.find({ role });
};


UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });

module.exports = mongoose.model("User", UserSchema);
