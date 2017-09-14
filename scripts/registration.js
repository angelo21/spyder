
/*****************************************************************************************Register with local storage********************/

var localStorageEmail = document.querySelector("#email_storage"); //email input
var localStoragePassword = document.querySelector("#password_storage"); //password input
var localStorageConfirm = document.querySelector("#confirm_password_storage"); //confirm password input
var localStorageButton = document.querySelector("#local_storage_button"); //button
var registrationError = document.querySelector(".registration_error"); //error message
var successfulRegistration = document.querySelector(".succesful_registration"); //success message
var pleaseEnterEmail = document.querySelector(".please_enter_email");
  
localStorageButton.addEventListener("click", function(e) {
    e.preventDefault();

    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if(localStorageEmail.value === "" && localStoragePassword.value === "" && localStorageConfirm.value === "") {
        pleaseEnterEmail.style.display = "block";
    }
    if(localStorageEmail.value.match(mailFormat) && localStoragePassword.value === "" && localStorageConfirm.value === "") {
        pleaseEnterEmail.style.display = "none";
        registrationError.style.display = "block"
    }
    if(localStoragePassword.value !== localStorageConfirm.value) {
        pleaseEnterEmail.style.display = "none";
        registrationError.style.display = "block";
    }
    if(localStoragePassword.value !== "" && localStorageConfirm.value !== "" && localStoragePassword.value === localStorageConfirm.value) {
        pleaseEnterEmail.style.display = "none";
        registrationError.style.display = "none";
        successfulRegistration.style.display = "block";
        localStorageEmail.value = "";
        localStorageConfirm.value = "";
        localStoragePassword.value = "";
    }
});






