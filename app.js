'use strict';

/* var userName = prompt('Greetings! What is your name?');
console.log(userName + ' started the guessing game!');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Do I listen to Avenged Sevenfold?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  console.log(userName + ' answered correctly!');
  alert('Surprsingly, correct!');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrongo! Maybe next time.');
}

var answer2 = prompt('Do I know how to longboard?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  console.log(userName + ' answered correctly!');
  alert('Correct! Way to be.');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrong, my friend.');
}

var answer3 = prompt('Do I have a candy obsession?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  console.log(userName + ' answered correctly!');
  alert('Right you are!');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrongo.');
}

var answer4 = prompt('Is my favorite color black? If that is even considered a color...').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
  console.log(userName + ' answered correctly!');
  alert('Right you are! The only color that matches my soul.');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Incorrect. Haven\'t you seen my clothes?');
}

var answer5 = prompt('Do I know how to play the flute?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y'){
  console.log(userName + ' answered correctly!');
  alert('Oddly enough, yes! You\'re right. It\'s a gift.');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrong again my friend.');
  */

// var rightNumber = 22;
// var i = 0;
// while (i < 4) {
//   var input = parseInt(prompt('Guess a number between 1 and 50... Don\'t be scared! You\'re probably wrong anyway.'));
//   if (input === rightNumber){
//     alert('Correct!');
//     break;
//   }
//   else if (input < rightNumber){
//     alert('Too Low!');
//     i++;
//   }
//   else if (input > rightNumber){
//     alert('Too High!');
//  i++;
//  }
//}

var correctAnswer = ['Washington', 'Oregon', 'California', 'Hawaii', 'Alaska', 'New York'];
var counter = 0;
while (counter < 6) {
  for (var i = 0; i < correctAnswer.length; i++) {
    var userInput = prompt('What are my favorite states?');
    if (userInput === correctAnswer[i]) {
      alert ('Way to be!');
      counter = 7;
    }
    else {
      alert ('Try again my friend');
    }
  }
}
