var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    records: {
      type: Array,
      default: [],
    },

    history: {
      type: Array,
      default: [],
    },

    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },

    Designation: {
      type: String,
    },
    HOD: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
