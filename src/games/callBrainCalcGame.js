import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const prepareExpression = (operator, value1, value2) => {
  const firstOperand = getRandomInt(value1, value2);
  const secondOperand = getRandomInt(value1, value2);
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  switch (operator) {
    case '+':
      return [expression, String(firstOperand + secondOperand)];
    case '-':
      return [expression, String(firstOperand - secondOperand)];
    case '*':
      return [expression, String(firstOperand * secondOperand)];
    default:
      break;
  }
  return ['', 0];
};

const callBrainCalc = () => {
  const mathOperation = [];
  const minValue = [];
  const maxValue = [];
  const questionData = [];
  const expectedAnswers = [];
  const description = 'What is the result of the expression?';

  const minIndexValue = 0;
  const maxIndexValue = 2;
  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    switch (getRandomInt(minIndexValue, maxIndexValue)) {
      case 0:
        mathOperation[i] = '+';
        minValue[i] = 0;
        maxValue[i] = 50;
        break;
      case 1:
        mathOperation[i] = '-';
        minValue[i] = 0;
        maxValue[i] = 100;
        break;
      case 2:
        mathOperation[i] = '*';
        minValue[i] = 0;
        maxValue[i] = 10;
        break;
      default:
        break;
    }
    [questionData[i],
      expectedAnswers[i]] = prepareExpression(mathOperation[i], minValue[i], maxValue[i]);
  }

  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainCalc;
