function getInputValue(inputId) {
    const inputValueString = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputValueString);
    // document.getElementById(inputId).value = "";
    return inputValue;
}

function getSumInputValueByClasses(inputClasses) {
    const inputFieldAll = document.getElementsByClassName(inputClasses);
    let inputSum = 0;
    for (const inputField of inputFieldAll) {
        const inputValueString = inputField.value;
        const inputValue = parseFloat(inputValueString);
        inputSum += inputValue;
        inputField.value = "";
    }
    return inputSum;
}

function getElementValue(elementId) {
    const elementValueString = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValue(elementId, value) {
    document.getElementById(elementId).innerText = value;
}






