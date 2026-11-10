const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  image: {
    type: String,
    require: true,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  comments: [
    {
      user: String,
      content: String,
      likes: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now() },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Posts", postSchema);
