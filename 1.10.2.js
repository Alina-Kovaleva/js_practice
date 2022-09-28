const readline = require('readline');
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function two(x, y) {
  return Math.exp(-x) - Math.cos(x) + Math.sin(2 * x * y);
}

userInput.question('Enter x and y\n', function (s) {
  let [x, y] = s.split(' ').map(parseFloat);
  //   console.log(x, y);
  userInput.close();
  console.log(two(x, y));
});

// userInput.question('Enter y', function (n) {});

// console.log('Result = ', two(x, y));
