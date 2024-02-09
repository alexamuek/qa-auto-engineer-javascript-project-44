import {
  welcomeUser,
  getName,
  showQuestion,
  getAnswer,
  sendNegativeDecision,
  sendPositiveDecision,
} from './utils.js';

import callBrainEven from '../games/callBrainEvenGame.js';
import callBrainCalc from '../games/callBrainCalcGame.js';

const runGame = (gameName) => {
  let questionPart;
  let userAnswer;
  let expectedAnswer;
  let i = 0;
  let info;

  welcomeUser();
  const userName = getName();
  if (gameName === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else {
    console.log('What is the result of the expression?');
  }
  while (i < 3) {
    if (gameName === 'brain-even') {
      info = callBrainEven();
    } else {
      info = callBrainCalc();
    }

    questionPart = info[0];
    expectedAnswer = String(info[1]);
    showQuestion(questionPart);
    userAnswer = getAnswer();

    if (userAnswer.toLowerCase() === expectedAnswer) {
      console.log('Correct!');
    } else {
      sendNegativeDecision(userName, expectedAnswer, userAnswer);
      break;
    }
    i += 1;
  }

  if (i === 3) {
    sendPositiveDecision(userName);
  }
};

export default runGame;
