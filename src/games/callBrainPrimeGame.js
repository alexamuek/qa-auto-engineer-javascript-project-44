import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const generateRound = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionPart = getRandomInt(minValue, maxValue);
  for (let j = 2; j < questionPart; j += 1) {
    if (questionPart % j === 0) {
      return [questionPart, 'no'];
    }
  }
  return (questionPart === 1) ? [questionPart, 'no'] : [questionPart, 'yes'];
};

const callBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainPrime;
