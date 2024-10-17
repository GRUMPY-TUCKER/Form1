const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const C_password = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();

})

const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const C_passwordValue = C_password.value.trim();
    if(usernameValue === ""){
        setError(username,"Username is required");
    }
    else{
        setSuccess(username);
    }
    if(emailValue === " "){
        setError(email,"Email is required");
    }
    else if(!isValidEmail(emailValue)){
        setError(email,"Provide a valid email");
    }
    else{
        setSuccess(email);
    }
    if(passwordValue === " "){
        setError(password,"Password is reuired");
    }
    else if(passwordValue.length<8){
        setError(password,"Password must be atleast of 8 digits")
    }
    else{
        setSuccess(password);
    }
    if(C_passwordValue === " "){
        setError(C_password,"Please confirm your password");
    }
    else if(C_passwordValue !== passwordValue){
        setError(password,"Password doesn't match");
    }
    else{
        setSuccess(C_password);
    }
}

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}