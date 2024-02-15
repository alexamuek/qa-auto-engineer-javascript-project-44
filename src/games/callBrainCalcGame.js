import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
  return 0;
};

const generateRound = () => {
  const boundariesOfNumbers = [0, 0];
  const operators = '+-*';
  const operator = operators[getRandomInt(0, operators.length - 1)];
  switch (operator) {
    case '+':
      boundariesOfNumbers[0] = 0;
      boundariesOfNumbers[1] = 50;
      break;
    case '-':
      boundariesOfNumbers[0] = 0;
      boundariesOfNumbers[1] = 100;
      break;
    case '*':
      boundariesOfNumbers[0] = 0;
      boundariesOfNumbers[1] = 10;
      break;
    default:
      break;
  }
  const firstOperand = getRandomInt(boundariesOfNumbers[0], boundariesOfNumbers[1]);
  const secondOperand = getRandomInt(boundariesOfNumbers[0], boundariesOfNumbers[1]);
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calculate(operator, firstOperand, secondOperand);

  return [expression, String(answer)];
};

const callBrainCalc = () => {
  const description = 'What is the result of the expression?';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainCalc;
