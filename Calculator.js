let Calcform = document.forms['calculator'];

let ResultDOM = document.getElementById('result');

function check(){
    let number1 = parseInt(Calcform['num1'].value);  //parseInt converts the output in bracket into a number.
    let number2 = parseInt(Calcform['num2'].value);
    let operation = Calcform['operation'].value;
   let result;

   if(operation == '+'){
       result = number1 + number2;
   }

   if(operation == '-'){
    result = number1 - number2;
    }

    if(operation == '*'){
        result = number1 * number2;
        }

    if(operation == '/'){
        result = number1 / number2;
        }   
    ResultDOM.innerText = result;
    ResultDOM.style.border = "1px blue solid";

    
}

