document.getElementById("calculate").addEventListener("click", function () {
    const totalIncome = getInputValue("income");
    const totalExpense = getSumInputValueByClasses("input-field");

    console.log(typeof (totalExpense));

    if (isNaN(totalExpense) || isNaN(totalIncome)) {
        alert("Please provide a 'Income & Expenses' input amount")
        return
    } else {
        const balance = totalIncome - totalExpense;
        setElementValue("total-expenses", totalExpense);
        setElementValue("balance", balance);
    }
})

document.getElementById("save-btn").addEventListener("click", function () {
    const savingRate = getInputValue("saving-rate");
    const totalIncome = getInputValue("income");
    const balance = getElementValue("balance");
    if (isNaN(savingRate) || isNaN(totalIncome)) {
        alert("Please provide 'Income & Rate' input number ");
        return
    } else {
        const savingAmount = totalIncome * savingRate / 100;
        const remainingBalance = balance - savingAmount;
        if (balance >= savingAmount) {
            setElementValue("saving-amount", savingAmount);
            setElementValue("remaining-balance", remainingBalance);
        }
        else {

            alert("You have insufficient funds");
            return
        }

    }
})


