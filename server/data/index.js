import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Fluffy",
    lastName: "Paws",
    email: "fluffypaws@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "cat1.jpeg",
    friends: [],
    age: 2,
    species: "Cat",
    breed: "Maine Coon",
    neutered: true,
    gender: "Female",
    location: "Cardiff",
    human: "John Doe",
    bio: "Loves to nap all day long.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Buddy",
    lastName: "Woof",
    email: "buddywoof@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "dog1.jpeg",
    friends: [],
    age: 5,
    species: "Dog",
    breed: "Golden Retriever",
    neutered: true,
    gender: "Male",
    location: "Cardiff",
    human: "Jane Doe",
    bio: "Friendly and loves fetching sticks.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Whiskers",
    lastName: "Meow",
    email: "whiskersmeow@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "cat2.jpeg",
    friends: [],
    age: 4,
    species: "Cat",
    breed: "Siamese",
    neutered: true,
    gender: "Male",
    location: "Bristol",
    human: "Alice Smith",
    bio: "Curious and loves exploring.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Max",
    lastName: "Bark",
    email: "maxbark@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "dog2.jpeg",
    friends: [],
    age: 3,
    species: "Dog",
    breed: "Bulldog",
    neutered: true,
    gender: "Male",
    location: "London",
    human: "Bob Johnson",
    bio: "Loyal and loves belly rubs.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Luna",
    lastName: "Whiskers",
    email: "lunawhiskers@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "cat3.jpeg",
    friends: [],
    age: 1,
    species: "Cat",
    breed: "Bengal",
    neutered: true,
    gender: "Female",
    location: "Cardiff",
    human: "Sara Connor",
    bio: "Energetic and loves chasing lasers.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Rocky",
    lastName: "Howl",
    email: "rockyhowl@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "dog3.jpeg",
    friends: [],
    age: 6,
    species: "Dog",
    breed: "German Shepherd",
    neutered: true,
    gender: "Male",
    location: "Manchester",
    human: "Emily Davis",
    bio: "Strong and loves guarding the house.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Bella",
    lastName: "Purr",
    email: "bellapurr@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "cat4.jpeg",
    friends: [],
    age: 2,
    species: "Cat",
    breed: "Persian",
    neutered: true,
    gender: "Female",
    location: "Cardiff",
    human: "Thomas Lee",
    bio: "Fluffy and loves sunbathing.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Daisy",
    lastName: "Woof",
    email: "daisywoof@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "dog4.jpeg",
    friends: [],
    age: 4,
    species: "Dog",
    breed: "Beagle",
    neutered: true,
    gender: "Female",
    location: "Liverpool",
    human: "Nina Brown",
    bio: "Playful and loves digging.",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Buddy",
    lastName: "Woof",
    location: "Cardiff",
    description: "Had an amazing walk in the park today!",
    picturePath: "post1.jpeg",
    userPicturePath: "dog1.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "That sounds like fun!",
      "I wish I could join you!",
      "Parks are the best!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Max",
    lastName: "Bark",
    location: "London",
    description: "Just had a great nap. Feeling refreshed!",
    picturePath: "post2.jpeg",
    userPicturePath: "dog2.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Naps are the best!",
      "You look so comfy!",
      "Sweet dreams!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Luna",
    lastName: "Whiskers",
    location: "Cardiff",
    description: "Caught a laser today! Almost...",
    picturePath: "post3.jpeg",
    userPicturePath: "cat3.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "Lasers are tricky!",
      "Better luck next time!",
      "You’ll get it eventually!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Rocky",
    lastName: "Howl",
    location: "Manchester",
    description: "Protected the house while my human was away!",
    picturePath: "post4.jpeg",
    userPicturePath: "dog3.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Good job!",
      "You’re the best guard dog!",
      "Your human must be proud!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Bella",
    lastName: "Purr",
    location: "Cardiff",
    description: "Spent the day sunbathing. Perfect weather!",
    picturePath: "post5.jpeg",
    userPicturePath: "cat4.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Sunbathing is the best!",
      "You look so relaxed!",
      "Enjoy the sun!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Daisy",
    lastName: "Woof",
    location: "Liverpool",
    description: "Found a new spot to dig in the garden!",
    picturePath: "post6.jpeg",
    userPicturePath: "dog4.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Digging is so much fun!",
      "What did you find?",
      "Gardens are full of surprises!",
    ],
  },
];