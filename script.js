$(function()
{
        var formValid=false;
        var agreeValid=false;
        var levelSelected=false;
        var genderSelected=false;
        var firstNameValid=false;
        var lastNameValid=false;
        var emailValid=false;
        var passwordValid=false;

  
//-------------------------- validate First Name -------------------------------------------------
    function validateFirstName()
    {
        console.log('validateFirstName')
        let errMes= $('#errorMessage1');
        let elem =$('#firstName');
        let valFirstName=$('#firstName').val();
        
        if(valFirstName==""){
            errMes.html("<span>Pleace enter your first name</span>");
            errMes.show();
            elem.addClass('-error');
            elem.removeClass('-success');
            firstNameValid=false;
        }
        else   
        {
            errMes.hide();
            elem.addClass('-success');
            elem.removeClass('-error');
            firstNameValid=true;
        }
        console.log(firstNameValid)
    }
//-------------------------- validate Last Name -------------------------------------------------
    function validateLastName()
    {
        console.log('validateLastName')
        let errMes= $('#errorMessage2');
        let elem =$('#lastName');
        let valLastName=$('#lastName').val();
        

        if(valLastName==""){
            errMes.html("<span>Please enter your last name</span>");
            errMes.show();
            elem.addClass('-error');
            elem.removeClass('-success');
            lastNameValid=false;
        }
        else   
        {
            errMes.hide();
            elem.addClass('-success');
            elem.removeClass('-error');
            lastNameValid=true;
        }
        console.log(lastNameValid)
    }

//-------------------------- validate email -------------------------------------------------
    function validateEmail() 
    {
        console.log('validateEmail')
        let errMes= $('#errorMessage3');
        let elem = $("#email");
        let valEmail = elem.val();
        let regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (regEx.test(valEmail))
        {
            errMes.hide();
            elem.removeClass('-error');
            elem.addClass('-success');
            emailValid=true;
        }
        else{
            errMes.html("<span>Please enter your email</span>");
            errMes.show();
            elem.addClass('-error');
            elem.removeClass('-success');
            emailValid=false;
        }    
        console.log(emailValid);
    }
//-------------------------- validate password -------------------------------------------------
    function validatePassword() 
    {
        console.log('validatePassword');
        let errMes= $('#errorMessage4');
        let elem = $("#password"); 
        let valPassword = elem.val();
        let regEx = /(?=\w{6,})(?=\D*\d)/; //6 or more characters and 1 number
       
        if (regEx.test(valPassword)) 
        {
            errMes.hide()
            elem.removeClass("-error");    
            elem.addClass("-success");
            passwordValid=true;
        } 
        else 
        {
            errMes.html("<span>correct password: 6 or more characters and 1 number</span>");
            errMes.show();
            elem.removeClass("-success");    
            elem.addClass("-error");
            passwordValid=false;
        }
        console.log(passwordValid);
    }
//-------------------------- calling validate select level -------------------------------------------------
   
    
    function validateMessage() 
    {
        let errMes= $('#errorMessage4');
        let elem=$("#message");
        let details = elem.val();
    
        if (details.trim().length >= 15)
            {
                errMes.hide()
                messageValid = true;
                elem.removeClass("-error");    
                elem.addClass("-success");
            } 
        else 
            {
                errMes.show()
                messageValid = false;
                elem.removeClass("-success");    
                elem.addClass("-error");  
            }
    }
    //-------------------------- calling validate select level -------------------------------------------------
   
    function validateEntryLevel ()
    { 
        console.log('validateEntryLevel')
        let elem=$("#entryLevel");
        let valEntryLevel = elem.val();
        levelSelected = true;
        console.log(valEntryLevel);
        console.log(levelSelected)
    } 
 //-------------------------- calling validate radiobutton  -------------------------------------------------
   
   
    function validateGender()
    {
        console.log('validateGender')
        let elem=$("input[name='gender']:checked")
        let valGender = elem.val();
        genderSelected = true;
        console.log(valGender);
        console.log(genderSelected)
    }
//-------------------------- verify policy is checked -------------------------------------------------
       
    $("#agree").change(cboAgree );
    function cboAgree() 
        {
            let errMes=$('#errorMessage6');

            if ( $(this).prop("checked")) 
                { 
                    var sure = confirm("Are you sure?");
                    this.checked = sure;
                    
                    if (sure) 
                    {
                        agreeValid = true;
                    }
                    else 
                    {
                        agreeValid = false;
                    }
                } 
            else 
                {
                    agreeValid = false;
                    errMes.html("<span>cYou cannot register if you do not accept the site\'s policy.</span>");
                }
        }
//-------------------------- calling validate functions -------------------------------------------------
function validateForm()
{
    console.log('validateForm')
    if ( firstNameValid  && lastNameValid && emailValid &&  messageValid && passwordValid && agreeValid && levelSelected  && genderSelected )
    {
        formValid=true;
    } 
    else 
    {
        formValid=false;
    }
    
    console.log(formValid)
    console.log('*******Form content************')
    console.log(agreeValid)
    console.log(levelSelected)
    console.log(genderSelected)
    console.log(firstNameValid)
    console.log(lastNameValid)
    console.log(emailValid)
    console.log(passwordValid)
    console.log('**********************')
}

//-------------------------- calling validate functions -------------------------------------------------
   

    $('#regForm').on('submit', function(e) {
        //förhindra att den skickar datat och laddar om sidan
        e.preventDefault();
        validateForm();
    });
    $('#loginForm').on('submit', function(e) {
        //förhindra att den skickar datat och laddar om sidan
        e.preventDefault();
        validateForm();
    });

    
    $('#firstName').focusout(function()
    {
        validateFirstName();
    })
    $('#lastName').focusout(function()
    {
        validateLastName();
    })
    $('#email').focusout(function()
    {
        validateEmail();   
    })
    $('#password').focusout(function()
    {
        validatePassword();   
    })
    $('#message').focusout(function()
    {
        console.log(4)
        validateMessage();   
    })
    $("#entryLevel").change(validateEntryLevel);
    $("input[name='gender']").change(validateGender);
  
})
    // $('#userName').focusout(function(){
    //     // validateInput('#userName')
      

    //     console.log('trigged')
    // })
    // $('#password').focusout(function(){
    //     // validateInput('#password')
    //     console.log('trigged')
    // })
    // $('#regForm').submit((e) => {
    //     e.preventDefault();

    //     isEmpty('#firstName');
    //     isEmpty('#lastName');
    //     ValidateEmail() 

    // })

         // if(1<valFirstName.length && valFirstName.length<3)
        // {
        //     console.log(valFirstName.length)
        //     console.log('less than three')
        //     $('#errorMessage').html("<span>shortast name consist of 3 letters</span>")
        //     $('#errorMessage').show();
        //     elem.addClass('-error');
        //     elem.removeClass('-success');
        // }
        // if (9<valFirstName.length)
        // {
        //     $('#errorMessage').html("<span>longest name consist of 10 letters</span>")
        //     $('#errorMessage').show();
        //     console.log('bigger than 9')
        //     elem.addClass('-error');
        //     elem.removeClass('-success');
        // }

  

