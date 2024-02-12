import getRandomInt from '../src/utils.js';
import gameEngine from '../src/index.js';

const callBrainProgression = () => {
  const minValue = 5;
  const maxValue = 10;
  let len;
  let step;
  let firstNumber;
  let indexOfHidden;
  const questionData = [];
  const expectedAnswers = [];
  const description = 'What number is missing in the progression?';

  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    questionData[i] = '';
    len = getRandomInt(minValue, maxValue);
    step = getRandomInt(minValue, maxValue);
    firstNumber = getRandomInt(minValue, maxValue);
    indexOfHidden = getRandomInt(0, len - 1);

    for (let j = 0; j < len; j += 1) {
      if (j === indexOfHidden) {
        questionData[i] = `${questionData[i]}.. `;
        expectedAnswers[i] = String(firstNumber + step * j);
      } else {
        questionData[i] = `${questionData[i]}${(firstNumber + step * j)} `;
      }
    }
  }

  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainProgression;
