import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const callBrainProgression = () => {
  const minValue = 5;
  const maxValue = 10;
  const len = [];
  const step = [];
  const firstNumber = [];
  const indexOfHidden = [];
  const questionData = [];
  const expectedAnswers = [];
  const description = 'What number is missing in the progression?';

  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    questionData[i] = '';
    len[i] = getRandomInt(minValue, maxValue);
    step[i] = getRandomInt(minValue, maxValue);
    firstNumber[i] = getRandomInt(minValue, maxValue);
    indexOfHidden[i] = getRandomInt(0, len[i] - 1);

    for (let j = 0; j < len[i]; j += 1) {
      if (j === indexOfHidden[i]) {
        questionData[i] = `${questionData[i]}.. `;
        expectedAnswers[i] = String(firstNumber[i] + step[i] * j);
      } else {
        questionData[i] = `${questionData[i]}${(firstNumber[i] + step[i] * j)} `;
      }
    }
  }

  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainProgression;
