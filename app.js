'use strict';

var userName = prompt('Greetings! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Logan ride the bus to school?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Correct! At least he does on the days he doesn\'t oversleep!');
}
else {
  alert('Wrong! Though, I suppose he does drive on the days he oversleeps and misses the bus.');
}

var answer2 = prompt('Is Logan\'s favorite color brown?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('Wrong! That\'s like the worst color. Green is actually his favorite color!')
}
