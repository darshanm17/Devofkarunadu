var read= require('readline-sync');
var username=read.question("Whats your name?");
console.log("Welcome "+username + " To Darshans console ");
let count=0;
console.log("Are you A SRK FAN?")
const play=(question,answer)=>{
  var readq=require('readline-sync');
  var useranswer=readq.question(question);
  if(useranswer===answer){
    console.log("Right");
    count++;
    console.log(Number(count));
  }
  if(useranswer!==answer){
    console.log("Wrong");
    --count;
    console.log(Number(count));
  }
}
let arr=[
  q1={
    one:"What is the full form srk?",
    answer:"Sharukh Khan"
  },
  q2={
  one:"Which is the last movie he has made?",
  answer:"Pathaan"
  },
  q3={
  one:`In which movie he says${"Don Ko pakadna mushkil Hi nahi na mumkin hai"}?`,
  answer:"Don"
  }
  
]
for(let i=0;i<arr.length;i++){
  let num=arr[i];
  play(num.one,num.answer);
}
