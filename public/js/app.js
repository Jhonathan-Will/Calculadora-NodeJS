const screen = document.getElementById('screen')

let number_1 = 0;
let number_2 = 0;
let operator;
let lastOperator;

function addNumber(num){
    screen.value += num
}

function setOperator(op){
    number_1 = parseInt(screen.value)
    screen.value= ""
    operator = op
    console.log(operator)
}

function clearCalculator(){
    screen.value= ""
    number_1 = null;
    number_2 = null;
    operator = null;
}

function equals(){
    if(lastOperator != operator){
        number_2 = parseInt(screen.value)
    }
    screen.value = " "
    switch(operator){
        case "+":
            screen.value = number_1 + number_2
            number_1 = parseInt(screen.value)
            lastOperator = operator
            break;
        case "-":
            screen.value = number_1 - number_2
             number_1 = parseInt(screen.value)
             lastOperator = operator
            break;
        case "X":
            screen.value = number_1 * number_2
             number_1 = parseInt(screen.value)
             lastOperator = operator
            break;
        case "/":
            screen.value = number_1 / number_2
             number_1 = parseInt(screen.value)
             lastOperator = operator
            break;
    }
}