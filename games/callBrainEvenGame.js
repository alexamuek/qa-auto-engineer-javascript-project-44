import {
  getRandomInt,
} from '../src/utils.js';

const callBrainEven = () => {
  const minValue = 0;
  const maxValue = 100;

  let answer;

  const randomNumber = getRandomInt(minValue, maxValue);
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [randomNumber, answer];
};

export default callBrainEven;
