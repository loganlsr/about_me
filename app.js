'use strict';
var correct = 0;
var userName = prompt('Greetings! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Logan ride the bus to school?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Correct! At least he does on the days he doesn\'t oversleep!');
  correct += 1;
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
  correct += 1;
}

var answer3 = prompt('Does Logan like to play video games in his free time?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert('Correct! He\'s particularly fond of Overwatch right now');
  correct += 1;
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
  correct += 1;
}

var answer5 = prompt('Is one of Logan\'s favorite hobbies watching anime?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y') {
  alert('Indeed! If you are looking for suggestions, he recommends Sword Art Online or Clannad!');
  correct += 1;
}
else {
  alert('Wrong! When he\'s not playing video games or doing his homework, he is watching a bunch of anime!');
}

var logan = 0;
while (logan != 24) {
  var logan = parseInt(prompt('How old is Logan?'));
  if (logan === 24) {
    alert('Correct! The kids these days would probably call him old...');
    correct += 1;
  }
  else if (logan > 24) {
    alert('Yikes! Does he really look that old! Believe it or not, he is actually younger!');
  }
  else {
    alert('That\'s generous of you to say, but no, he is older!');
  }
}

var states = ['Arizona', 'California'];
var tries = 0;
while (tries < 6) {
  var answer7 = prompt('Can you name a state Logan has lived in besides Washington?').toLowerCase();
  for (var i = 0; i < states.length; i++) {
    if (answer7 === 'arizona' || answer7 === 'california') {
      alert('You got it! Logan has lived in both Arizona and California in addition to Washington!');
      correct += 1;
      tries += 6;
    }
    else {
      alert('Nope! I\'m sure that\'s a lovely state, but Logan has not lived there! Try again!');
      tries += 1;
    }
  }
}

alert('Thanks for participating! You got ' + correct + ' out of 7!');
