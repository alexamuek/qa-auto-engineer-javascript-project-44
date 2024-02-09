import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const welcomeUser = () => console.log('Welcome to the Brain Games!');

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const showQuestion = (data) => {
  readlineSync.question(`Question: ${data}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const sendNegativeDecision = (name, expectedAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

const sendPositiveDecision = (name) => console.log(`Congratulations, ${name}!`);

export {
  getRandomInt,
  welcomeUser,
  getName,
  showQuestion,
  getAnswer,
  sendNegativeDecision,
  sendPositiveDecision,
};
