import {
  welcomeUser,
  getName,
  getAnswer,
} from './helpers.js';

const gameEngine = (questionPart, expectedAnswer, description) => {
  let userAnswer;
  let i = 0;

  welcomeUser();
  const userName = getName();

  console.log(description);
  while (i < 3) {
    console.log(`Question: ${questionPart[i]}`);
    userAnswer = getAnswer();

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