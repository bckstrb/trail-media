const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('../seeders/profileSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
