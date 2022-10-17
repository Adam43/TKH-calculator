// open the calculator.js file. you will write all your code for this lab inside this file 
// create functions for each operation: add, subtract, multiply and divide 
// create a function named operate that takes in 3 parameters: 2 numbers and the operation to be performed 
// operate should use the correlating operation function on the 2 number arguments and return the result 
// call calculate passing the arguments console log the returned value 
// based on steps 1+2 of https://www.theodinproject.com/lessons/foundations-calculator 
// if completed early, fellows may continue to next steps in the above article

//Addition
function add(num1, num2){
    return num1 + num2
}
//Subtraction
function subtract(num1, num2){
    return num1 - num2
}
//Multiplication
function multiply(num1, num2){
    return num1 * num2
}
//Division
function divide(num1, num2){
    return num1 / num2
}
//Each Mathematical Operation
// console.log(add(1, 2))
// console.log(subtract(10, 2))
// console.log(multiply(5, 5))
// console.log(divide(4, 20))

//Operate with 3 parameters
//operation = operation.toLowerCase()
// function operate (num1, num2, operation){
//     if(operation.toLowerCase() === 'add'){
//         return add(num1, num2);
//     }
//     else if(operation.toLowerCase() === 'subtract'){
//         return subtract(10, 2);
//     }
//     else if(operation.toLowerCase() === 'multiply'){
//         return multiply(5, 5);
//     }
//     else if(operation.toLowerCase() === 'divide'){
//         return divide(4, 20);
//     }
//     else {
//         return "Error";
//     }
// }


//NEW CODE
function operation (num1, num2, operation){
    if(operation.toLowerCase() === 'add'){
        return add(num1, num2);
    }
    else if(operation.toLowerCase() === 'subtract'){
        return subtract(num1, num2);
    }
    else if(operation.toLowerCase() === 'multiply'){
        return multiply(num1, num2);
    }
    else if(operation.toLowerCase() === 'divide'){
        return divide(num1, num2);
    }
    else {
        return "Error";
    }
}


//console.log(operate(10, 5,'subtract'))

//input varaibles
let num1 = 0;
let num2 = 0;
let operationButton = " ";

function solutionClicked(){
    //this will save the number value
    num1 = document.querySelector("#num1").value; 
    num2 = document.querySelector("#num2").value; 

    //pareInt changes all string data types to numbers
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    operationButton = document.querySelector("#operation").value; 

    const answer = document.getElementById('num-answer');

    const numAnswer = operation(num1, num2, operationButton);

    answer.textContent = numAnswer;
}

//solutionClicked()