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

var questions = [
    {
      question: "Which data structure should be used for fast retrieval of data at a given index?",
      a: "Tree",
      b: "Stack",
      c: "Array",
      d: "linkedList",
      answer: "c"
    },
    {
      question: "Which of the following is a non-linear data structure?",
      a: "LinkedList",
      b: "Stack",
      c: "HashMap",
      d: "Tree",
      answer: "d"
    },
    {
      question: "Which data structure stores data in a first-in first-out (FIFO) order?",
      a: "Queue",
      b: "Stack",
      c: "Array",
      d: "Graph",
      answer: "a"
    },
    {
      question: "Which data structure organizes data in an interconnected network?",
      a: "Queue",
      b: "HashMap",
      c: "Heap",
      d: "Graph",
      answer: "d"
    },
    {
      question: "Which data structure takes constant time for lookup of data?",
      a: "Stack",
      b: "Heap",
      c: "HashMap",
      d: "Graph",
      answer: "c"
    },
  ]


function play(question, a, b, c, d, answer, index){
console.log(chalk.underline.bgBlue("Q"+(index+1)+" "+question));
console.log(chalk.yellow("(a) "+a));
console.log(chalk.yellow("(b) "+b));
console.log(chalk.yellow("(c) "+c));
console.log(chalk.yellow("(d) "+d));

var answerByUser = readlineSync.question(chalk.bgRed.underline.bold("Select from a, b, c, d: "));

if(!(answerByUser === "a" || answerByUser === "b" || answerByUser === "c" ||answerByUser === "d")){
    score = score-15;
    console.log(chalk.redBright("Invalid input"));
}
else if(answerByUser === answer){
    score = score+10;
    console.log(chalk.green("CORRECT :D"));
}
else{
    score = score-5;
    console.log(chalk.red("WRONG ANSWER :/"));
}
console.log("SCORE:", score);
console.log();  
}

  for(var i = 0; i < questions.length; i++){
    var current = questions[i];
    play(current.question, current.a, current.b, current.c, current.d, current.answer, i);
  }

console.log();

console.log(chalk.bgCyan("Your Final score is:", score));

console.log();