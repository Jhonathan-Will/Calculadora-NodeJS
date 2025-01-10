
const screen = document.getElementById('screen')
const divHistory = document.getElementById('history')

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
             
            if(!(Number.isNaN(eval(`${number_1} ${operator} ${number_2}`)))){
                salvar(number_1, operator, number_2);
                screen.value = number_1 + number_2
                number_1 = parseInt(screen.value)
                lastOperator = operator
            }else{
                clearCalculator()
                screen.value = "Error"
            }
            
            break;
        case "-":
              
            if(!(Number.isNaN(eval(`${number_1} ${operator} ${number_2}`)))){
                salvar(number_1, operator, number_2);
                screen.value = number_1 - number_2
                number_1 = parseInt(screen.value)
                lastOperator = operator
            }else{
                clearCalculator()
                screen.value = "Error"
            }

            break;
        case "*":
            
            if(!(Number.isNaN(eval(`${number_1} ${operator} ${number_2}`)))){
                salvar(number_1, operator, number_2);
                screen.value = number_1 * number_2
                number_1 = parseInt(screen.value)
                lastOperator = operator
            }else{
                clearCalculator()
                screen.value = "Error"
            }
                
            break;
        case "/":
              
            if(!(Number.isNaN(eval(`${number_1} ${operator} ${number_2}`)))){
                salvar(number_1, operator, number_2);
                screen.value = number_1 / number_2
                number_1 = parseInt(screen.value)
                lastOperator = operator
            }else{
                clearCalculator()
                screen.value = "Error"
            }

            break;
            
    }
}

function salvar(number1, operator, number2){
        try{
            fetch("/salvar", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number1, operator, number2}),
            }).then(response => {
               if(!response.ok){
                    throw new Error('erro ao buscar dados')
               }
               return response.text()
            }).then(html => {
                divHistory.innerHTML = " "
                divHistory.insertAdjacentHTML('beforeend',html)
            })
        }catch(error){
            console.log(error)
        }
}