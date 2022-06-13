const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
// Drop existing thougts
  await Thought.deleteMany({});
// Drop existing users
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();

    users.push({
      username: getRandomName(),
      email:getRandomName(),
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved thoughts, for each thought we need to generate a thought reaction and insert the thought reactions
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});