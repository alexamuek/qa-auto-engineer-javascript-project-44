import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

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
  return [expression, String(result)];
};

const callBrainCalc = () => {
  let mathOperation;
  let minValue;
  let maxValue;
  const questionData = [];
  const expectedAnswers = [];
  const description = 'What is the result of the expression?';

  minValue = 0;
  maxValue = 2;
  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    switch (getRandomInt(minValue, maxValue)) {
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
    [questionData[i], expectedAnswers[i]] = prepareExpression(mathOperation, minValue, maxValue);
  }
  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainCalc;
