let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameField = document.getElementById("nameField")
let title = document.getElementById("title");

let email = document.forms['form']['email'];
let password = document.forms['form']['password'];
let user = document.forms['form']['name']

let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');

signIn.addEventListener('click', ()=> {
    nameError.style.display = "none";
    emailError.style.display = "none";
    passError.style.display = "none";
    register();
    nameError.style.display = "none";
    title.innerHTML = "Sign In";
    nameField.style.display = "none";
    nameField.style.margin = "0"
    signIn.classList.remove('disable');
    signUp.classList.add('disable');
})

signUp.addEventListener("click", () => {
    nameError.style.display = "none";
    emailError.style.display = "none";
    passError.style.display = "none";
    validated();
    title.innerHTML = "Sign Up"
    nameField.style.display = "block";
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
})

function validated() {
    if(user.value.length < 8) {
        user.focus();
        nameError.style.display = "block";
        return false;
    }
    else {
        nameError.style.display = "none";
    }

    if(email.value.length < 9) {
        email.focus();
        emailError.style.display = "block";
        return false;
    }

    else {
        emailError.style.display = "none";
    }

    if (password.value.length < 8) {
        password.focus();
        passError.style.display = "block";
        return false;
    }

    else {
        passError.style.display = "none";
    }
}

function register(){
    if (email.value.length < 9) {
        email.focus();
        emailError.style.display = "block";
        return false;
    }
    
    else {
        emailError.style.display = "none";
    }

    if (password.value.length < 8) {
        password.focus();
        passError.style.display = "block";
        return false;
    } 

    else {
        passError.style.display = "none";
    }
}

