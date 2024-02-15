import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const calculate = (number1, number2) => {
  let operand1;
  let operand2;
  let gcd = 0;
  operand1 = number1;
  operand2 = number2;
  while (Math.abs(operand1 - operand2) >= 0) {
    gcd = Math.abs(operand1 - operand2);
    if (gcd === 0) {
      break;
    } else {
      operand2 = Math.min(operand1, operand2);
      operand1 = gcd;
    }
  }
  return operand1;
};

const generateRound = () => {
  const minValue = 1;
  const maxValue = 100;
  const number1 = getRandomInt(minValue, maxValue);
  const number2 = getRandomInt(minValue, maxValue);
  const questionPart = `${number1} ${number2}`;
  const answer = calculate(number1, number2);
  return [questionPart, String(answer)];
};

const callBrainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainGcd;
