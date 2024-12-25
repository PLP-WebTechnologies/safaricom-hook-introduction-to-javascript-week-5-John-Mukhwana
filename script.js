
// part 1: Javascript Basics

// 1. Varibles and Data Types

const name='John';
const age=30;
const isStudent=false;
const hobbies=['music','movies','sports'];
const person={name:'Jane',age:20,isStudent:true, course:'Nursing'};

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`isStudent: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${person} (Type: ${typeof person})`);

// 2. Operators
 function calculator(){
    const num1=parseFloat(prompt('Enter first number: '));
    const num2=parseFloat(prompt('Enter second number: '));
    const operation=prompt("chose operation: +, -, *, /");

    if(isNaN(num1) || isNaN(num2)){
        alert("Invalid Input.Please Enter valid numbers.");
        return;
    }

    let result;
    switch(operation){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case '*':
            result=num1*num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";
            break;
        default:
            alert("Invalid operation");
            return;
    }
    alert(`Result: ${result}`);
 }
    calculator();

// 3.functions

function greet(name){
    return `Hello ${name} ! Welcome to Javascript`;
}
document.getElementById("greeting").textContent=greet('John');

/*Part 2: Javascript Control Structures*/
// 1. If Statement

const votingEligibility=()=>{
    const userAge=parseInt(prompt("Enter your age: "));
    const message= userAge >= 18? "You are eligible to vote" : "You are not eligible to vote";
    document.getElementById("vote-message").textContent=message;
}
votingEligibility();

//2. loops

const nameList=document.getElementById("name-list");
const names=['John','Jane','Mary','Mark','James'];
for(let i=0; i<names.length; i++){
    const listItem=document.createElement('li');
    listItem.textContent=names[i];
    nameList.appendChild(listItem);
}

//Part 3: Introduction to DOM Manipulation

// Changing the text <h1> element

document.querySelector("h1").textContent="Javascript Basics";

const dynamicTextDiv=document.getElementById("dynamic-content");
const newParagraph=document.createElement('p');
newParagraph.textContent="This conten is generated dynamically using Javascript";
dynamicTextDiv.appendChild(newParagraph);

