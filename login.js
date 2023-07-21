const Validate = (event) => {
let error = 0;
let email = document.login.email
let password = document.login.password

// finding errors in an empty field
let emailError = document.getElementById("email-error")
let passwordError = document.getElementById("password-error")

// using if statments
if (email.value == ""){
    email.style.boarder = "2px solid red";
    emailError.textContent = "mwe belamu"
    emailError.style = "color:red; font-family:serif";
    email.focus();
    error++;
}
else{
    email.style.border = "2px solid green";
    emailError.textContent = "";
    password.focus();
}



    


if(error > 0 ){
    event.preventDefault();
}
















}