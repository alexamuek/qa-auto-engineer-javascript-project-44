import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const generateRound = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionPart = getRandomInt(minValue, maxValue);
  const result = (questionPart % 2 === 0) ? [questionPart, 'yes'] : [questionPart, 'no'];
  return result;
};

const callBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainEven;
