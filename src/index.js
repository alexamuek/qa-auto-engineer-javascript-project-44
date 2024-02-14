import readlineSync from 'readline-sync';

const gameEngine = (generateRound, description) => {
  const userAnswer = [];
  const roundData = [];
  let i = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  while (i < 3) {
    roundData[i] = generateRound();
    console.log(`Question: ${roundData[i][0]}`);
    userAnswer[i] = readlineSync.question('Your answer: ');

    if (userAnswer[i].toLowerCase() === roundData[i][1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer[i]}' is wrong answer ;(. Correct answer was '${roundData[i][1]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    i += 1;
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameEngine;
