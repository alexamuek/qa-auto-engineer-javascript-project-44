import {
  welcomeUser,
  getName,
  showQuestion,
  getAnswer,
  sendNegativeDecision,
  sendPositiveDecision,
  showDescription,
} from './utils.js';

import callBrainEven from '../games/callBrainEvenGame.js';
import callBrainCalc from '../games/callBrainCalcGame.js';
import callBrainGcd from '../games/callBrainGcdGame.js';
import callBrainProgression from '../games/callBrainProgressionGame.js';

const runGame = (gameName) => {
  let questionPart;
  let userAnswer;
  let expectedAnswer;
  let i = 0;
  let info;

  welcomeUser();
  const userName = getName();

  showDescription(gameName);
  while (i < 3) {
    switch (gameName) {
      case 'brain-even':
        info = callBrainEven();
        break;
      case 'brain-calc':
        info = callBrainCalc();
        break;
      case 'brain-gcd':
        info = callBrainGcd();
        break;
      case 'brain-progression':
        info = callBrainProgression();
        break;
      default:
        break;
    }

    [questionPart, expectedAnswer] = info;
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
