import {
  getRandomInt,
} from '../src/utils.js';
import gameEngine from '../src/index.js';

const callBrainPrime = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionData = [];
  const expectedAnswers = [];
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    questionData[i] = getRandomInt(minValue, maxValue);
    expectedAnswers[i] = 'yes';
    for (let j = 2; j < questionData[i]; j += 1) {
      if (questionData[i] % j === 0) {
        expectedAnswers[i] = 'no';
        break;
      }
    }
  }

  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainPrime;
