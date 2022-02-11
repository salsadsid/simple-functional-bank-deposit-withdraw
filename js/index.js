document.getElementById('submit-button').addEventListener('click', function () {
    const pinOne = document.getElementById('pin-one');
    const getPinOne = pinOne.value;


    const pinTwo = document.getElementById('pin-two');
    const getPinTwo = pinTwo.value;

    if (getPinOne == "4321" && getPinTwo == "1234") {
        window.location.href = "banking.html";
    }
    else {
        document.getElementById('alert-wrong-pin').innerText = "Wrong PIN"
    }
})
document.getElementById('submit-button').addEventListener('blur', function () {
    const alertMessage = document.getElementById('alert-wrong-pin');
    alertMessage.innerText = ""
})

document.getElementById('showpins-button').addEventListener('click', function () {
    const showPins = document.getElementById('show-pins');
    showPins.innerText = "PIN-1:4321  &  PIN-2:1234"
})
document.getElementById('showpins-button').addEventListener('blur', function () {
    const showPins = document.getElementById('show-pins');
    showPins.innerText = ""
})