let currentInput = "";

function btnclick(value) {
    currentInput += value;
    updateScreen();
}

function clearf() {
    currentInput = "";
    updateScreen();
}

function equalclick() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = "Error";
    }
    updateScreen();
}

function updateScreen() {
    document.getElementById("screen").value = currentInput;
}
