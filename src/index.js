import readlineSync from 'readline-sync';

const gameEngine = (questionPart, expectedAnswer, description) => {
  let userAnswer;
  let i = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  while (i < 3) {
    console.log(`Question: ${questionPart[i]}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === expectedAnswer[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer[i]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    i += 1;
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameEngine;