import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const calculate = (number1) => {
  for (let j = 2; j < number1; j += 1) {
    if (number1 % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionPart = getRandomInt(minValue, maxValue);
  const expectedAnswer = calculate(questionPart);
  return (questionPart === 1) ? [questionPart, 'no'] : [questionPart, expectedAnswer];
};

const callBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainPrime;
