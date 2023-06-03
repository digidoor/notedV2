const db = require('../config/connection');
const { Note, User } = require('../models');
const noteSeeds = require('./noteSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Note.deleteMany({});
    // await Note.create(noteSeeds);
    
    // await User.deleteMany({});
    // await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
