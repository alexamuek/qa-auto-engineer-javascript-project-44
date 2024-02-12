import readlineSync from 'readline-sync';

const welcomeUser = () => console.log('Welcome to the Brain Games!');

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getAnswer = () => readlineSync.question('Your answer: ');

export {
  welcomeUser,
  getName,
  getAnswer,
};
