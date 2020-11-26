const chalk = require('chalk');
var readlineSync = require('readline-sync');

console.log(chalk.bgCyan("Welcome to Data Structures's quiz!"))
console.log(chalk.bgCyan("This quiz will test your knowledge about data structures"))

console.log();

console.log(chalk.bgMagentaBright("-----------------POINT SYSTEM------------------"))
console.log(chalk.greenBright("+10 will be awarded for correct answer"))
console.log(chalk.redBright("-5 for incorrect answer"))
console.log(chalk.redBright("AND -15 for invalid input(pressing anything except a/b/c/d)"))

console.log();

var nameOfUser = readlineSync.question(chalk.bgBlueBright("Enter your name to continue: "))

console.log();

console.log(chalk.bgYellow("Let's gooooo", nameOfUser))
console.log();

var score = 0;