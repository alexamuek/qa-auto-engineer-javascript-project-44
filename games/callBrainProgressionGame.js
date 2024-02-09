import {
  getRandomInt,
} from '../src/utils.js';

const callBrainProgression = () => {
  const minValue = 5;
  const maxValue = 10;
  const len = getRandomInt(minValue, maxValue);
  const step = getRandomInt(minValue, maxValue);
  const firstNumber = getRandomInt(minValue, maxValue);
  const indexOfHidden = getRandomInt(0, len - 1);
  const sequence = [];
  let task = '';
  let answer;

  for (let i = 0; i < len; i += 1) {
    sequence[i] = firstNumber + step * i;
    if (i === indexOfHidden) {
      task = `${task}.. `;
      answer = sequence[i];
    } else {
      task = `${task}${sequence[i]} `;
    }
  }

  return [task, String(answer)];
};

export default callBrainProgression;
