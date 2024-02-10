import {
  getRandomInt,
} from '../src/utils.js';

const callBrainPrime = () => {
  const minValue = 0;
  const maxValue = 100;
  let answer;
  const randomNumber = getRandomInt(minValue, maxValue);
  answer = 'yes';

  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      answer = 'no';
      break;
    }
  }
  return [randomNumber, answer];
};

export default callBrainPrime;
