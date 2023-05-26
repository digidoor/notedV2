const db = require('../config/connection');
const { Note } = require('../models');
const noteSeeds = require('./noteSeeds.json');

db.once('open', async () => {
  try {
    await Note.deleteMany({});
    await Note.create(noteSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
