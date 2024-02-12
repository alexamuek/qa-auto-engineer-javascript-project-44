import {
  getRandomInt,
} from '../src/utils.js';
import gameEngine from '../src/index.js';

const callBrainEven = () => {
  const minValue = 0;
  const maxValue = 100;
  const questionData = [];
  const expectedAnswers = [];
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  // three rounds
  for (let i = 0; i <= 2; i += 1) {
    questionData[i] = getRandomInt(minValue, maxValue);
    if (questionData[i] % 2 === 0) {
      expectedAnswers[i] = 'yes';
    } else {
      expectedAnswers[i] = 'no';
    }
  }

  // call engine
  gameEngine(questionData, expectedAnswers, description);
};

export default callBrainEven;
