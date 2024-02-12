import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const callBrainGcd = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionData = [];
  const expectedAnswers = [];
  const description = 'Find the greatest common divisor of given numbers.';
  let number1;
  let number2;
  let result;

  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    number1 = getRandomInt(minValue, maxValue);
    number2 = getRandomInt(minValue, maxValue);
    questionData[i] = `${number1} ${number2}`;
    while (Math.abs(number1 - number2) >= 0) {
      result = Math.abs(number1 - number2);
      if (result === 0) {
        expectedAnswers[i] = String(number1);
        break;
      } else {
        number2 = Math.min(number1, number2);
        number1 = result;
      }
    }
  }

  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainGcd;
