let result = '';

function clearResult() {
    result = '0';
    updateDisplay();
}

function appendToResult(value) {
    if (result === '0') {
        result = '';
    }
    result += value;
    updateDisplay();
}

function calculateResult() {
    try {
        result = eval(result).toString();
    } catch (error) {
        result = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').textContent = result;
}
