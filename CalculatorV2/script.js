const display = document.getElementById('display');
let inInvalid = false;

function playAnim() {
    display.classList.add('pop');

    setTimeout(() => {
        display.classList.remove('pop');
    }, 100);
}

function appendToDisplay(input) {
    if (inInvalid) return;
	display.value += input;

    playAnim();
}

function clearDisplay() {
    if (inInvalid) return;
	display.value = "";

    playAnim();
}

function disableInvalid() {
    inInvalid = false;
    clearDisplay();
}

function deleteLast() {
        if (inInvalid) return;
	display.value = display.value.slice(0, -1);

    playAnim();
}

function calculate() {

    if (inInvalid) return;

	try {
		display.value = eval(display.value);
	} catch {
		display.value = "Invalid input";
        inInvalid = true;
		setTimeout(disableInvalid, 1500);
	}
}

display.addEventListener('keydown', (event) => {
    if (inInvalid) return;
    const allowedKeys = ['(', ')','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === 'Enter') {
        calculate();
    }
});