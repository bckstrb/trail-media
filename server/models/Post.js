const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  // trailId: {
  //   type: String,
  //   required: "Needs the trailId from the api",
  //   trim: true,
  // },
  postText: {
    type: String,
    required: 'You need to write a post!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;