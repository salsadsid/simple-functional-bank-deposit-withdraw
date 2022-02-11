function getInputValue(inputId) {
    const inputAmountText = document.getElementById(inputId);
    const inputAmount = parseFloat(inputAmountText.value);

    inputAmountText.value = "";
    return inputAmount
}

function updateAmount(totalId, currentInput) {
    const previousTotalText = document.getElementById(totalId);
    const previousTotalAmount = parseFloat(previousTotalText.innerText);
    const newTotalAmount = currentInput + previousTotalAmount;
    previousTotalText.innerText = newTotalAmount;
}

function getAccountBalance() {
    const previousAccountBalanceText = document.getElementById('account-balance');
    const previousAccountBalance = parseFloat(previousAccountBalanceText.innerText);
    return previousAccountBalance
}


function updateTotalAmount(inputAmount, isAdd) {
    // debugger;
    const previousAccountBalanceText = document.getElementById('account-balance');
    const accountBalance = getAccountBalance();
    if (isAdd == true) {
        const newAccountBalance = accountBalance + inputAmount;
        previousAccountBalanceText.innerText = newAccountBalance;
    }
    else {
        const newAccountBalance = accountBalance - inputAmount;
        previousAccountBalanceText.innerText = newAccountBalance;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateAmount('current-deposit', depositAmount);
        updateTotalAmount(depositAmount, true);
        document.getElementById('alert-deposit').innerText = "টাকা :D"
    }
    else {
        document.getElementById('alert-deposit').innerText = "টাকা ছাড়া কিছু বুঝি না"
    }

})
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const accountBalance = getAccountBalance();
    if (withdrawAmount > 0) {
        if (withdrawAmount > accountBalance) {
            document.getElementById('alert-withdraw').innerText = "এত টাকা নাই রে কপালে"
        }
        else {
            updateAmount('current-withdraw', withdrawAmount);
            updateTotalAmount(withdrawAmount, false);
            document.getElementById('alert-withdraw').innerText = "টাকা :D"
        }
    }
    else {
        document.getElementById('alert-withdraw').innerText = "টাকা ছাড়া কিছু বুঝি না"
    }
})
document.getElementById('deposit-button').addEventListener('blur', function () {
    const alertMessage = document.getElementById('alert-deposit');
    alertMessage.innerText = "----";
})
document.getElementById('withdraw-button').addEventListener('blur', function () {
    const alertMessage = document.getElementById('alert-withdraw');
    alertMessage.innerText = "----";
})