import readlineSync from 'readline-sync';

const gameEngine = (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i <= 2; i += 1) {
    const roundData = generateRound();
    console.log(`Question: ${roundData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === roundData[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundData[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
