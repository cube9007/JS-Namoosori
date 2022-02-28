import { question } from 'readline-sync';
import calculator from './calculator.mjs';

function showprompt() {
    while(true){
        let inputData = question('Enter number or operation : ');

        if(inputData !== '='){
            calculator.appendData( inputData );
            console.log(calculator.getInputDatasMessage());
        } else {
            console.log(calculator.getInputDatasMessage() + '=' + calculator.calculate());
            break;
        }
    }
}

showprompt();