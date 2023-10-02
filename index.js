let calculation = "";

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}

displayCalculation();

function handleClick() {

    let buttonInnerHTML = this.innerHTML;
    
    numberKey(buttonInnerHTML);
}

document.addEventListener("keydown", function(event){
    numberKey(event.key);
});

function numberKey(key) {
    switch (key) {
        case "Delete":
            calculation = '';
            displayCalculation();
            console.log('Cleared');
            break;

        case "/":
            calculation += ' / ';
            displayCalculation();
            console.log(calculation);
            break;

        case "7":
            calculation += '7';
            displayCalculation();
            console.log(calculation);
            break;
        
        case "8":
            calculation += '8';
            displayCalculation();
            console.log(calculation);
            break;

        case "9":
            calculation += '9';
            displayCalculation();
            console.log(calculation);
            break;

        case "*":
            calculation += ' * ';
            displayCalculation();
            console.log(calculation);
            break;

        case "4":
            calculation += '4';
            displayCalculation();
            console.log(calculation);
            break;

        case "5":
            calculation += '5';
            displayCalculation();
            console.log(calculation);
            break;

        case "6":
            calculation += '6';
            displayCalculation();
            console.log(calculation);
            break;

        case "-":
            calculation += ' - ';
            displayCalculation();
            console.log(calculation);
            break;
        
        case "1":
            calculation += '1';
            displayCalculation();
            console.log(calculation);
            break;

        case "2":
            calculation += '2';
            displayCalculation();
            console.log(calculation);
            break;

        case "3":
            calculation += '3';
            displayCalculation();
            console.log(calculation);
            break;

        case "+":
            calculation += ' + ';
            displayCalculation();
            console.log(calculation);
            break;
            
        case "0":
            calculation += '0';
            displayCalculation();
            console.log(calculation);
            break;

        case ".":
            calculation += '.';
            displayCalculation();
            console.log(calculation);
            break;

        case "Enter":
            calculation = eval(calculation);
            displayCalculation();
            console.log(calculation);
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonClear() {
    calculation ='';
    displayCalculation();
    console.log('Cleared');
}

function buttonDivide() {
    calculation += ' / ';
    displayCalculation();
    console.log(calculation);
}

function button7() {
    calculation += '7';
    displayCalculation();
    console.log(calculation);
}

function button8() {
    calculation += '8';
    displayCalculation();
    console.log(calculation);
}

function button9() {
    calculation += '9';
    displayCalculation();
    console.log(calculation);
}

function buttonMultiplication() {
    calculation += ' * ';
    displayCalculation();
    console.log(calculation);
}

function button4() {
    calculation += '4';
    displayCalculation();
    console.log(calculation);
}

function button5() {
    calculation += '5';
    displayCalculation();
    console.log(calculation);
}

function button6() {
    calculation += '6';
    displayCalculation();
    console.log(calculation);
}

function buttonMinus() {
    calculation += ' - ';
    displayCalculation();
    console.log(calculation);
}

function button1() {
    calculation += '1';
    displayCalculation();
    console.log(calculation);
}

function button2() {
    calculation += '2';
    displayCalculation();
    console.log(calculation);
}

function button3() {
    calculation += '3';
    displayCalculation();
    console.log(calculation);
}

function buttonAdd() {
    calculation += ' + ';
    displayCalculation();
    console.log(calculation);
}

function buttonZero() {
    calculation += '0';
    displayCalculation();
    console.log(calculation);
}

function buttonDot() {
    calculation += '.';
    displayCalculation();
    console.log(calculation);
}

function buttonEqual() {
    calculation = eval(calculation);
    displayCalculation();
    console.log(calculation);
}