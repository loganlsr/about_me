'use strict';
/*
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
  alert('Wrong! That\'s like the worst color. Green is actually his favorite color!');
}
else {
  alert('Correct! It\'s green! Who likes the color brown?');
}

var answer3 = prompt('Does Logan like to play video games in his free time?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert('Correct! He\'s particularly fond of Overwatch right now');
}
else {
  alert('Incorrect! He has been gaming for forever and he is particularly fond of Overwatch right now!');
}

var answer4 = prompt('Is Logan\'s favorite food pizza?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
  alert('Nope! His favorite food is actually chinese food. And if you want to get specific, he loves General Tsao\'s Chicken!');
}
else {
  alert('Pizza is really good, but you are right. It is not his favorite food, that would be chinese food, but it is a close second!');
}

var answer5 = prompt('Is one of Logan\'s favorite hobbies watching anime?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y') {
  alert('Indeed! If you are looking for suggestions, he recommends Sword Art Online or Clannad!');
}
else {
  alert('Wrong! When he\'s not playing video games or doing his homework, he is watching a bunch of anime!');
}
*/
var logan = 0;
while (logan != 24) {
  var logan = parseInt(prompt('How old is Logan?'));
  if (logan === 24) {
    alert('Correct! The kids these days would probably call him old...');
  }
  else if (logan > 24) {
    alert('Yikes! Does he really look that old! Believe it or not, he is actually younger!');
  }
  else {
    alert('That\'s generous of you to say, but no, he is older!');
  }

}

var question7 = [Arizona, California];
for (var i = 0; i < question7; i++) {
  var answer = prompt();
}
