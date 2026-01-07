const buttons = document.querySelectorAll('.frontButtons button');
for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const digit = buttons[i].textContent;
        const screen = document.querySelector('.screen');
        screen.innerHTML += digit;
    })
}
