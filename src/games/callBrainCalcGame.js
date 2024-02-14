import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const prepareExpression = (data) => {
  const firstOperand = getRandomInt(data[1], data[2]);
  const secondOperand = getRandomInt(data[1], data[2]);
  const expression = `${firstOperand} ${data[0]} ${secondOperand}`;
  switch (data[0]) {
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

const generateRound = () => {
  const dataForPrepering = ['', 0, 0];
  const minIndexValue = 0;
  const maxIndexValue = 2;
  switch (getRandomInt(minIndexValue, maxIndexValue)) {
    case 0:
      dataForPrepering[0] = '+';
      dataForPrepering[1] = 0;
      dataForPrepering[2] = 50;
      break;
    case 1:
      dataForPrepering[0] = '-';
      dataForPrepering[1] = 0;
      dataForPrepering[2] = 100;
      break;
    case 2:
      dataForPrepering[0] = '*';
      dataForPrepering[1] = 0;
      dataForPrepering[2] = 10;
      break;
    default:
      break;
  }

  return prepareExpression(dataForPrepering);
};

const callBrainCalc = () => {
  const description = 'What is the result of the expression?';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainCalc;
