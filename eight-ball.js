/*
----------------------------------------------
Intro to Javascript: Magic Eight Ball
----------------------------------------------
In this project we build the Magic Eight Ball 
using control flow in JavaScript.
The user will be able to input a question, 
then our program will output a random fortune.
----------------------------------------------
*/

// Assign username variable
let userName = 'Megan';

// If username, Hello username, otherwise Hello
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

// Assign question for eight ball
let userQuestion = 'Will I win?';

// Print variables to console
console.log(userName + ' asked ' + '"' + userQuestion + '"');

// Pull random number from 1-7
let randomNumber = Math.floor(Math.random() * 8);

// Assign eightBall to empty string
let eightBall = '';

// Depending on the random number, assign a phrase to eight ball
switch (randomNumber) {
  case 0:
    eightBall = "It is certain"
    break;
  case 1:
    eightBall = "It is decidedly so"
    break;
  case 2:
    eightBall = "Reply hazy try again"
    break;
  case 3:
    eightBall = "Cannot predict now"
    break;
  case 4:
    eightBall = "Do not count on it"
    break;
  case 5:
    eightBall = "My sources say no"
    break;
  case 6:
    eightBall = "Outlook not so good"
    break;
  case 7:
    eightBall = "Signs point to yes"
    break;
}

// Print the phrase / outcome
console.log(eightBall);