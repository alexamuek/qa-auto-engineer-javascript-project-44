import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const generateRound = () => {
  const minValue = 5;
  const maxValue = 10;
  const len = getRandomInt(minValue, maxValue);
  const step = getRandomInt(minValue, maxValue);
  const firstNumber = getRandomInt(minValue, maxValue);
  const indexOfHidden = getRandomInt(0, len - 1);
  const roundData = ['', ''];

  for (let j = 0; j < len; j += 1) {
    if (j === indexOfHidden) {
      roundData[0] = `${roundData[0]}.. `;
      roundData[1] = String(firstNumber + step * j);
    } else {
      roundData[0] = `${roundData[0]}${(firstNumber + step * j)} `;
    }
  }
  return roundData;
};

const callBrainProgression = () => {
  const description = 'What number is missing in the progression?';
  // call engine
  gameEngine(generateRound, description);
};

export default callBrainProgression;
