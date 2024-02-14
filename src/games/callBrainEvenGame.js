import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const generateRound = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionPart = getRandomInt(minValue, maxValue);
  return (questionPart % 2 === 0) ? [questionPart, 'yes'] : [questionPart, 'no'];
};

const callBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainEven;
