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

const showDescription = (gameName) => {
  switch (gameName){
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
    case 'brain-progression':
      console.log('What number is missing in the progression?');
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    default:
      break;
  }
};

export {
  getRandomInt,
  welcomeUser,
  getName,
  showQuestion,
  getAnswer,
  sendNegativeDecision,
  sendPositiveDecision,
  showDescription,
};
