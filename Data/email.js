
              function checkEmail()
              { 
              const emailInput=document.getElementById("email").value;
              
              const submit=document.getElementById("submit");
              if(emailInput.trim()===""){
                
                  alert('Enter your email');
                }
                else{
                 
                  alert(`Your Email ${emailInput} saved`);
                   localStorage.getItem("username");
                }
                localStorage.setItem("useremail",emailInput);
              
            }