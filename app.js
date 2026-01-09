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

  function operate(operator, num1, num2) {
    const screen = document.querySelector('.screen');
    if((operator === '÷') && (num2 === 0)) {
        return String('Really?');
    }
    else if(operator === '+') {
        return add(num1, num2)
    }
    else if(operator === '−') {
        return subtract(num1, num2)
    }
    else if(operator === '×') {
        return multiply(num1, num2)
    }
    else if(operator === '÷') {
        return divide(num1, num2)
    }
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
        if((digit === '.') && (screen.textContent.includes('.'))) {
        }
        else if(screen.textContent.length >= 9) {

        }
        else{
        screen.innerHTML += digit;
        }
    })
}

const operButtons = document.querySelectorAll('.frontButtons #oper');
for (let i=0; i < operButtons.length; i++) {
    operButtons[i].addEventListener('click', () => {
        const screen = document.querySelector('.screen');
        const secondNumber = screen.textContent;
        if(operButtons[i].textContent === '=') {
            if((firstNumber !== '') && (operator !== '') && (secondNumber !== '') && (isSecondNumber === false))  {
                const result = operate(operator, Number(firstNumber), Number(secondNumber));
                if(typeof result === 'string') {
                    screen.textContent = result;
                    return;
                }                
                else if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                    const charsBeforeDecimal = result.toString().indexOf('.');
                    screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1)
                }
                else {
                    screen.textContent = result;
                }
            }
        }
        else {
            if ((firstNumber !== '') && (operator !== '') && (isSecondNumber === false)) {
            const result = operate(operator, Number(firstNumber), Number(secondNumber));
                if(typeof result === 'string') {
                    screen.textContent = result;
                    return;
                }
                else if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                    const charsBeforeDecimal = result.toString().indexOf('.');
                    screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1)
                }
                else {
                screen.textContent = result;
                }            
        }
    firstNumber = screen.textContent;
    operator = operButtons[i].textContent;
    isSecondNumber = true;
        }
    })
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
    firstNumber = '';
    operator = '';
    isSecondNumber = false;
    const screen = document.querySelector('.screen');
    screen.textContent = '';
});

/* Keyboard Compatibility */

document.addEventListener("keydown", (event) => {
  const screen = document.querySelector('.screen');
  if((event.key >= 0) && (event.key <= 9)) {
    const digit = event.key;
        if(isSecondNumber) {
            screen.textContent = '';
            isSecondNumber = false;
        }
        if((digit === '.') && (screen.textContent.includes('.'))) {
        }
        else if(screen.textContent.length >= 9) {

        }
        else{
        screen.innerHTML += digit;
        }
  }
  else if((event.key === '+') || (event.key === '-') || (event.key === '/') || event.key === '*') {
        let operatorSymbol = event.key;
        if (event.key === '*') {
            operatorSymbol = '×';
        } else if (event.key === '/') {
            operatorSymbol = '÷';
        } else if (event.key === '-') {
            operatorSymbol = '−'
        }
        if ((firstNumber !== '') && (operator !== '') && (isSecondNumber === false)) {
        const secondNumber = screen.textContent;
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
            if(typeof result === 'string') {
                screen.textContent = result;
                return;
            }            
            else if((result.toString().length >= 9) && (result.toString().includes('.'))) {
                const charsBeforeDecimal = result.toString().indexOf('.');
                screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1)
            }
            else {
            screen.textContent = result;
            }            
}
        firstNumber = screen.textContent;
        operator = operatorSymbol;
        isSecondNumber = true;
  }
  else if((event.key === '=') || (event.key === 'Enter')) {
    const secondNumber = screen.textContent;
    if((firstNumber !== '') && (operator !== '') && (secondNumber !== '') && (isSecondNumber === false))  {
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        if(typeof result === 'string') {
            screen.textContent = result;
            return;
        }       
        else if((result.toString().length >= 9) && (result.toString().includes('.'))) {
            const charsBeforeDecimal = result.toString().indexOf('.');
            screen.textContent = result.toFixed(9 - charsBeforeDecimal - 1)
        }
        else {
            screen.textContent = result;
        }
    }
  }
  else if((event.key === '.')) {
    if(screen.textContent.includes('.')) {
    
    }
    else if(screen.textContent.length >=9) {

    }
    else {
        screen.innerHTML += '.';
    }
  }
  else if(event.key === 'Escape') {
    const screen = document.querySelector('.screen');
    screen.textContent = '';
    firstNumber = '';
    operator = '';
    isSecondNumber = false;
  }
});
    