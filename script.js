// Create a function to generate random numbers
let generateRandNum = num => Math.floor(Math.random() * num);

// Create an object to hold 3 array of positive messages for improving one's health and life
const betterLife = {
  lifeLessons: ['Life is like a box of chocolates, which one did you get?', 'When you fall down, get back up again!', 'Keep learning, cause there is always more.', 'Never give up!'],
  healthyEating: ['Eat more fruit: have you had at least one today?', 'Vegetables are good for you!', 'Drink water, not soda!', 'Eat fresh fish like snapper and branzino properly cooked that weigh between 1 and 10 pounds.'],
  exercise: ['Exercise does a body good!', 'Take a walk after a good meal.', 'Yoga is amazing: stretch those ligaments and joints!', 'If you are busy, at least do some jumping jacks in place for a few minutes!'],
};

// Store the messages in an array
let positiveAffirmations = [];

// For loop to iterate over the object
for(let prop in betterLife) {
  let chosenIndex = generateRandNum(betterLife[prop].length)

  // Use the object's properties to customize the message being added to positiveAffirmations
  switch(prop) {
    case 'lifeLessons':
      positiveAffirmations.push(`May I offer a life gem? "${betterLife[prop][chosenIndex]}"`)
      break
    case 'healthyEating':
      positiveAffirmations.push(`If you want to be healthier and live longer: "${betterLife[prop][chosenIndex]}"`)
      break
    case 'exercise':
      positiveAffirmations.push(`And finally in order to have a better quality of life: "${betterLife[prop][chosenIndex]}"`)
      break
    default:
      positiveAffirmations.push('There is not enough info.')    
  }
};

// Format a final 3 line message as the output for when the program is run
const formatAffirmations = lifeGems => {
  const formatted = positiveAffirmations.join('\n');
  console.log(formatted);
};

// Run the program
formatAffirmations(positiveAffirmations);