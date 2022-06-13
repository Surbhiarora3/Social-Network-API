const usernames = [
    'Olivia',
    'Emma',
    'Charlotte',
    'Amelia',
    'Ava',
    'Sophia',
    'Isabella',
    'Mia',
    'Evelyn',
    'Harper',
    'Raya',
    'Wrenley',
    'Vida',
    'Emberlynn',
    'Flora',
    'Murphy',
    'Arleth',
    'Ocean',
    'Oakleigh',
    'Freyja',
    'Mylah',
    'Taytum',
    'Elia',
    'Jaylani',
    'Zayla',
    'Navy',
    'Della',
    'Clover',
    'Nyra',
    'Phat',
    'Duy',
    'Phung',
    'Phuc',
    'Truong',
    'Hung',
    'Bao',
    'Gao',
    'Caphe',
    'Coca',
    'Vanie',
    ``,
  ];

  // const emails = [
      
  // ]
  
  const ppThought = [
    'Thor new movie trailer looks great',
    'I want to see the Colosseum',
    'How do developers make money?',
    'Try trekking',
    'Next year I will travel to Europe',
    'Replika has an amazing AI system',
    'The seven wonders of the world are majestic',
    'Feel you are invincible? try Elden Ring',
    'Time to get a ramen',
  ];
  
  const ppReactions = [
    'Joy!',
    'Surprise!',
    'Trust!',
    'Fear!',
    'Anticipation!',
    'Anger!',
    'Sadness!',
    'Disgust!',
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random videos that we can add to the database. Includes video responses.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        thoughtText: getRandomArrItem(ppThought),
        advertiserFriendly: Math.random() < 0.5,
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each video
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(ppReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(ppReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts, getThoughtReactions, getRandomArrItem };