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
    lastOperator = null;
    console.log(operator)
}

function clearCalculator(){
    screen.value= ""
    number_1 = null;
    number_2 = null;
    operator = null;
}

function equals(event){

    event.preventDefault();

    if(lastOperator != operator){
        number_2 = parseInt(screen.value)
    }
    screen.value = " "
    switch(operator){
        case "+":
           salvar(number_1, operator, number_2);

            screen.value = number_1 + number_2
            number_1 = parseInt(screen.value)
            lastOperator = operator
            break;
        case "-":
            salvar(number_1, operator, number_2);

            screen.value = number_1 - number_2
             number_1 = parseInt(screen.value)
             lastOperator = operator
            break;
        case "X":
            salvar(number_1, operator, number_2);

            screen.value = number_1 * number_2
             number_1 = parseInt(screen.value)
             lastOperator = operator
            break;
        case "/":
            salvar(number_1, operator, number_2);

            screen.value = number_1 / number_2
             number_1 = parseInt(screen.value)
             lastOperator = operator
            break;
    }
}

function salvar(number1, operator, number2){
        try{
            const resposta = fetch("/salvar", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number1, operator, number2}),
            })
        }catch(error){
            console.log(error)
        }
}