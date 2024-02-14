import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const generateRound = () => {
  const minValue = 0;
  const maxValue = 100;
  let number1;
  let number2;
  let gcd = 0;

  number1 = getRandomInt(minValue, maxValue);
  number2 = getRandomInt(minValue, maxValue);
  const questionPart = `${number1} ${number2} `;
  while (Math.abs(number1 - number2) >= 0) {
    gcd = Math.abs(number1 - number2);
    if (gcd === 0) {
      break;
    } else {
      number2 = Math.min(number1, number2);
      number1 = gcd;
    }
  }
  return [questionPart, String(number1)];
};

const callBrainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainGcd;
