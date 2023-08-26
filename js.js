



let age = +prompt('Yoshingizni kiriting !');

if (age > 0 && age <= 18 && !isNaN(age)) {
  console.log('Your are very yong. You are must to study');
} else if (age > 18 && age <= 50 && !isNaN(age)) {
  console.log('Your are must to go to job');
} else if (age > 50 && age <= 59 && !isNaN(age)) {
  console.log('You will go to pension');
} else if (age > 59 && age <= 150 && !isNaN(age)) {
  console.log('Your are a pensioneer');
} else {
  console.log('something is wrong');
}