const readline = require('readline');
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function one(x) {
  return 10 * Math.sin(x) + Math.abs(Math.pow(x, 4) - Math.pow(x, 5));
}

// console.log(one(number));

userInput.question('Enter a number ', function (answer) {
  printAnswer(one(parseFloat(answer)));
  userInput.close();
});

function printAnswer(answer) {
  console.log('Result = ', answer);
}
