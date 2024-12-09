function clearDisplay() {
    document.clc.display.value = '';
}

function appendToDisplay(value) {
    document.clc.display.value += value;
}

function calculateResult() {
    try {
        document.clc.display.value = eval(document.clc.display.value);
        } catch (e) {
        alert("Invalid Expression");
            clearDisplay();
        }
}
      
function deleteLast() {
    let currentValue = document.clc.display.value;
        document.clc.display.value = currentValue.slice(0, -1); // Remove the last character
    }