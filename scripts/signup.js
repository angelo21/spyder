var button = document.querySelector(".sign_up_box_submit");
var signupSuccessful = document.querySelector(".signup_successful");
var signupError = document.querySelector(".signup_error");
var input = document.querySelector(".sign_up_box_input");

button.addEventListener("click", function(e) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    
    e.preventDefault();
    
    if(input.value.match(mailformat)) {
       signupError.style.display = "none";
       signupSuccessful.style.display = "block";
       input.value = "";
    } else {
       signupSuccessful.style.display = "none";
       signupError.style.display = "block";
       input.value = "";
   }
      
});


