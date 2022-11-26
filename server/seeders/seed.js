const db = require('../config/connection');
const { Profile, Post } = require('../models');
const profileSeeds = require('../seeders/profileSeeds.json');
const postSeeds = require('../seeders/postSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    console.log("Profile's Created!n")

    await Post.deleteMany({});
    await Post.create(postSeeds);
    console.log("Post's Created!")

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
