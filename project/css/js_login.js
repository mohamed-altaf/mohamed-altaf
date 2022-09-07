function validate() {
    if( document.myForm.uname.value == "")
      { document.getElementById("userName").style.borderColor ="red";
        return false; 
      }else{
       document.getElementById("userName").style.borderColor ="#ccc";
      }
    if( document.myForm.psw.value== "")
      { document.getElementById("psw").style.borderColor ="red";
        return false; 
      }
      else{
        document.getElementById("psw").style.borderColor ="#ccc";
      }
    }