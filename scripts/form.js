const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");
const message = document.querySelector("#formessage");

repeatPassword.addEventListener("focusout",checkSame);
function checkSame() {
    if (password.value !== confirmPass.value) {
        message.textContent = "Incorrect Password";
        message.style.visibility = "show";
        confirmPass.style.backgroundColor = "#fff0f3";
        confirmPass.value = "";
        password.value = "";
        password.focus();
    } else {
        message.style.display = "none";
        confirmPass.style.backgroundColor = "#fff";
        confirmPass.style.color = "#000";
    }
}