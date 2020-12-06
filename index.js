var readlineSync = require("readline-sync");
var score =0;
console.log("Welcome to the developer job portal")
var name = readlineSync.question("Enter your name->");


function qna()
{
  console.log("Rate yourself from 1-100 in every ques");
  var array = [
    "How good are you in DSA? ->",
    "How good are you in web development? ->",
    "Rate yourself in terms of knowledge in React ->"
  ]
  score=0;
  for(var i=0;i<array.length;i++)
  {
    if(readlineSync.question(array[i])>60)
      score++;
  }
  if(score==3)
  {
    console.log("You seems to be a good fit for our company,we'll get in touch soon:)");
  }
  else
  {
    console.log("You seem to us a developer of huge potential,work hard and we expect to see you next time ");
  }
}


function round2(){
console.log("Hey! "+ name +",Welcome to the job portal!");
var enter = readlineSync.question("We have few job openings at FAANG, are you interested in finding the job you fit at most---");
if(enter.toUpperCase()==="YES")
{
    qna();
}
else
{
  console.log("Ok!."+name+",We hope to see you soon till then take care and don't let anybody tell you that you are not good enough");
}
}


function round1()
{
  var array = [
    {
      question:"Is c++ object oriented->",
      answer: "YES"
    },
    {
      question: "How many types of polymorphism are there in c+ ->",
      answer: "2"
    },
  ]
  for(var i=0;i<array.length;i++)
  {
    var ques = array[i];
    if(readlineSync.question("Q"+(i+1)+":"+ques.question).toUpperCase()===ques.answer)
    {
      score++;
      console.log("score increased");
    }
    else{
      score--;
      console.log("score decreased");
    }
    if(score>=2)
    {
      round2();
      break;
    }
  }
  console.log("Play again!");
}

console.log("Entering the round1");
round1();
