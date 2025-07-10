let message = document.getElementById('message');
let str = document.getElementById('strenght');
let password = document.getElementById('password');
let inputbox = document.querySelector('.input-box');

password.addEventListener('input', () => {
    if (password.value.length == 0) {
        message.style.display = "none";
    }
    else {
        message.style.display = "block";
    };

    if (password.value.length <= 4) {
        str.innerHTML = "weak";
        inputbox.style.borderColor = "#ff0000";
        message.style.color = "#ff0000";
    }
    else if (password.value.length <= 6) {
        str.innerHTML = "medium";
        inputbox.style.borderColor = "#ffff00";
        message.style.color = "#ffff00";
    }
    else if (password.value.length <= 8) {
        str.innerHTML = "strong";
        inputbox.style.borderColor = "#99ff00";
        message.style.color = "#99ff00";
    };
});
