import {
  getRandomInt,
} from '../src/utils.js';

const callBrainGcd = () => {
  const minValue = 0;
  const maxValue = 50;

  let answer;
  let number1;
  let number2;
  let result;
  number1 = getRandomInt(minValue, maxValue);
  number2 = getRandomInt(minValue, maxValue);
  const task = `${number1} ${number2}`;
  while (Math.abs(number1 - number2) >= 0) {
    result = Math.abs(number1 - number2);
    if (result === 0) {
      answer = number1;
      break;
    } else {
      number2 = Math.min(number1, number2);
      number1 = result;
    }
  }

  return [task, String(answer)];
};

export default callBrainGcd;
