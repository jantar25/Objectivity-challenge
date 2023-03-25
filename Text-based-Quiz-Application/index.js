import { question as _question, keyInSelect } from 'readline-sync';

import questionsList from './questionaire.js';

console.log('Welcome to the Text Based Quiz Application');
let username = _question("What's your Name: \n");
console.log(`Hello ${username}, Let's Start the Quiz!`);

console.log('\n');
console.log('Rules & Instructions: ');
console.log(`1. ${username}, Answer 5 Compulsory Questions on Africa's Country.`);
console.log('2. All questions are Multiple Choice based,you have to enter the Serial Number / Index Value.');
console.log('3. Each question is over 2 points.');
console.log('\n');

let score = 0;

const textBasedQuizApp = (listofChoices,question,answer) => {
  let userAnswer = keyInSelect(listofChoices, question);
  console.log('\n');
  if(listofChoices[userAnswer] === answer){
    console.log('Corret');
    score += 2;
  } else{
    console.log('Wrong.');
    console.log('The Correct Answer is: ',answer);
  }
  console.log('You score is: ',score);
}

const shuffledQuestionaire = questionsList.sort((a, b) => 0.5 - Math.random());
shuffledQuestionaire.map(({choices,question,answer}) => {
  console.log('\n')
  textBasedQuizApp(choices,question,answer)
  console.log('-----------------------------------------')
})

console.log('\n')
console.log(`${
  score > 5? 
  'Congratulations!!' : 'Sorry!!'} ${username} your Total Score is: ${score}/10
  `)



