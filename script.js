$(function(){
    function validateInput(id){


    }

    $('#userName').focusout(function(){
        validateInput('#userName')
        console.log('trigged')
    })
    $('#password').focusout(function(){
        validateInput('#password')
        console.log('trigged')
    })

    // $('#rpassword').submit((e)=> {
    //     e.preventDefault()

    //     validateInput('#fistName')
    //     validateInput('#lastName')


    // })

})