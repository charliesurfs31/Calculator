let firstNumber = '';
let operator = '';
let isSecondNumber = false;

function add(a, b) {
    const sum = a + b;
    return sum;
}

function subtract(a, b) {
    const difference = a - b;
    return difference;
}

function multiply(a, b) {
    const product = a * b;
    return product;
}

function divide(a, b) {
    const quotient = a / b;
    return quotient;
}

const numButtons = document.querySelectorAll('.frontButtons #num');
for (let i=0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', () => {
        const digit = numButtons[i].textContent;
        const screen = document.querySelector('.screen');
        if(isSecondNumber) {
            screen.textContent = '';
            isSecondNumber = false;
        }
<<<<<<< HEAD
        screen.innerHTML += digit;
=======
        if((digit === '.') && (screen.textContent.includes('.'))) {
        }
        if(screen.textContent.length >= 9) {

        }
        else{
        screen.innerHTML += digit;
        }
>>>>>>> working
    })
}

const operButtons = document.querySelectorAll('.frontButtons #oper');
for (let i=0; i < operButtons.length; i++) {
    operButtons[i].addEventListener('click', () => {
        const screen = document.querySelector('.screen');
        if(operButtons[i].textContent === '=') {
            const secondNumber = screen.textContent;
            if(operator === '+') {
                const result = add(Number(firstNumber), Number(secondNumber));
<<<<<<< HEAD
                screen.textContent = result;
            }
            if(operator === '-') {
                const result = subtract(Number(firstNumber), Number(secondNumber));
                screen.textContent = result;
            }
            if(operator === '×') {
                const result = multiply(Number(firstNumber), Number(secondNumber));
                screen.textContent = result;
            }
            if(operator === '÷') {
                const result = divide(Number(firstNumber), Number(secondNumber));
                screen.textContent = result;
=======
                if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                    const charsBeforeDecimal = result.toString().indexOf('.');
                    screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1);
                }
                else {
                screen.textContent = result;
                }
            }
            if(operator === '−') {
                const result = subtract(Number(firstNumber), Number(secondNumber));
                if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                    const charsBeforeDecimal = result.toString().indexOf('.');
                    screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1);
                }
                else {
                screen.textContent = result;
                }
            }
            if(operator === '×') {
                const result = multiply(Number(firstNumber), Number(secondNumber));
                if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                    const charsBeforeDecimal = result.toString().indexOf('.');
                    screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1);
                }
                else {
                screen.textContent = result;
                }
            }
            if(operator === '÷') {
                const result = divide(Number(firstNumber), Number(secondNumber));
                if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                    const charsBeforeDecimal = result.toString().indexOf('.');
                    screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1);
                }
                else {
                screen.textContent = result;
                }
>>>>>>> working
            }
        }
        else {
            firstNumber = screen.textContent;
            operator = operButtons[i].textContent;
            isSecondNumber = true;
        }

        }
    )
}