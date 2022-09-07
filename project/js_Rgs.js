
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var cheaks  = document.getElementById("input_field");

//cheak inputField is empty or not
function validate() {
 if( document.myForm.Name.value == "")
   { document.getElementById("input_name").style.borderColor ="red";
     return false; 
   }else{
    document.getElementById("input_name").style.borderColor ="#ccc";
   }
 if( document.myForm.user.value== "")
   { document.getElementById("input_user").style.borderColor ="red";
     return false; 
   }
   else{
    document.getElementById("input_user").style.borderColor ="#ccc";
   }
 if( document.myForm.EMail.value == "")
   {document.getElementById("input_EMail").style.borderColor ="red";
     return false; 
   }
   else{
    document.getElementById("input_EMail").style.borderColor ="#ccc";
   }
 if( document.myForm.phone.value == "")
   { document.getElementById("input_phone").style.borderColor ="red";
     return false; 
   }
   else{
    document.getElementById("input_phone").style.borderColor ="#ccc";
   }
   if( document.myForm.phone.value == "")
   { document.getElementById("input_phone").style.borderColor ="red";
     return false; 
   }
   else{
    document.getElementById("input_phone").style.borderColor ="#ccc";
   }
   if( document.myForm.password.value == "")
   { document.getElementById("psw").style.borderColor ="red";
     return false; 
   }
   else{
    document.getElementById("psw").style.borderColor ="#ccc";
   }
   if( document.myForm.cpassword.value == "")
   { document.getElementById("psw1").style.borderColor ="red";
     return false; 
   }
   if( document.myForm.password.value != document.myForm.cpassword.value)
   { 
    alert("Password did't match");
     return false; 
   }
   else{
    alert("successfully");
   }
}
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
// Validate lowercase letters
myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}
// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}
// Validate length
if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
