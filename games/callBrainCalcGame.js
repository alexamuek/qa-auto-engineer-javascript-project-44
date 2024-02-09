import {
  getRandomInt,
} from '../src/utils.js';

const prepareExpression = (operator, value1, value2) => {
  const firstOperand = getRandomInt(value1, value2);
  const secondOperand = getRandomInt(value1, value2);
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  return [result, expression];
};

const callBrainCalc = () => {
  let mathOperation;
  let minValue;
  let maxValue;

  minValue = 0;
  maxValue = 2;
  const index = getRandomInt(minValue, maxValue);
  switch (index) {
    case 0:
      mathOperation = '+';
      minValue = 0;
      maxValue = 50;
      break;
    case 1:
      mathOperation = '-';
      minValue = 0;
      maxValue = 100;
      break;
    case 2:
      mathOperation = '*';
      minValue = 0;
      maxValue = 10;
      break;
    default:
      break;
  }
  const infoForGame = prepareExpression(mathOperation, minValue, maxValue);
  const answer = infoForGame[0];
  const questionPart = infoForGame[1];

  return [questionPart, String(answer)];
};

export default callBrainCalc;
