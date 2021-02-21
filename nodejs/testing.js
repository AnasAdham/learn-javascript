 // Event driven programming 
 const EventEmitter = require('events');
 const eventEmitter = new EventEmitter();


 eventEmitter.on('tutorial', (num1, num2) => {
   console.log('event emitter', num1 + num2);
 })

 eventEmitter.emit('tutorial',1,2);


// require and bla3
const tutorial = require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(tutorial.SomeMathObject);


// console.log(new tutorial.SomeMathObject()); 
//Created an instances of SomeMathObject()


// Person class is part of the EventEmitter 
class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name;
  }
  get name(){
    return this._name;
  }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
pedro.on('name', ()=> {
  console.log('my name is ' + pedro.name);
});
christina.on('name', ()=> {
  console.log('my name is ' + christina.name);
});

// Executed synchronously (pedro first then christina)
pedro.emit('name');
christina.emit('name')


// working with read line module
const readline = require('readline'); 
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1 );
let num2 = Math.floor((Math.random() * 10) + 1 );
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`, 
(userInput)=>{
  if(userInput.trim() == answer){
    // always close the readline 
    rl.close();
  }
  else{
    rl.setPrompt('Incorrect response please try again \n');
    rl.prompt();
    // below is an event listener listening for the line event
    rl.on('line',(userInput)=>{
      if(userInput.trim() == answer)
        rl.close();
      else{
        rl.setPrompt(`Your answer of ${ userInput } is incorrect try again\n`);
        rl.prompt();
      }
    } )
  }
});

// Event listener when the user gets the corret answer i.e when rl.close
rl.on('close', ()=>{
  console.log('Correct!!!!')
})