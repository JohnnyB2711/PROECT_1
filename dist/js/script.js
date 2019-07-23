$(document).ready(function(){

    var val_email = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    //var val_name = /^[a-zа-яё]+$/i;
    var val_name = /^[a-zA-Z]$/i;

    var name = $('#name');
    var username=$('#username');
    var email = $('#email');
    var password = $('#password');
    var second_password =$('#second_password');
    var button = $('input[type="submit"]');
    var accept = $('.accept');
/*Поле NAME*/
    name.blur(function(){
        $("#invalid_name").remove();
        if (name.val() != ''){
            $("#invalid_name").remove();
            if (name.var().search(val_name) == 0 ){
                name.css("border-bottom","2px solid #ccc");
                $("#invalid_name").remove();
            }else{
                name.css("border-bottom","2px solid #c80000");
                name.after('<span class="invalid" id="invalid_name">Name is required<img src="img/invalid.png"></span>');
            }
        }else{
            name.css("border-bottom","2px solid #c80000");
            name.after('<span class="invalid" id="invalid_name">Name is required<img src="img/invalid.png"></span>');
        }
    });
/*Поле USERNAME*/
    username.blur(function(){
        $("#invalid_username").remove();
        if (username.val() != ''){
            $("#invalid_username").remove();
            if (username.var().search(val_name) == 0 ){
                username.css("border-bottom","2px solid #ccc");
                $("#invalid_username").remove();
            }else{
                username.css("border-bottom","2px solid #c80000");
                username.after('<span class="invalid" id="invalid_username">User name is required<img src="img/invalid.png"></span>');
            }
        }else{
            username.css("border-bottom","2px solid #c80000");
            username.after('<span class="invalid" id="invalid_username">User name is required<img src="img/invalid.png"></span>');
        }
    });
/*Поле EMAIL*/
    email.blur(function(){
        $("#invalid_email").remove();
        if(email.val() != ''){
            $("#invalid_email").remove();
            if(email.val().search(val_email) == 0){
                email.css("border-bottom","2px solid #ccc");
                $("#invalid_email").remove();
            }else{
                email.css("border-bottom","2px solid #c80000");
                email.after('<span class="invalid" id="invalid_email">Valid email is required<img src="img/invalid.png"></span>');;
            }
        }else{
            email.css("border-bottom","2px solid #c80000");
            email.after('<span class="invalid" id="invalid_email">Valid email is required<img src="img/invalid.png"></span>');;
        }
    });
/*Поле PASSWORD*/
    password.blur(function(){
        $("#invalid_password").remove();
        if (password.val().length > 5){
            password.css("border-bottom","2px solid #ccc");
            $("#invalid_password").remove();
        }
        else{
            password.css("border-bottom","2px solid #c80000");
            password.after('<span class="invalid" id="invalid_password">Password is required <img src="img/invalid.png"></span>');
        }
    });
/*Поле SECONDPASSWORD*/
    $("#second_password").keyup(checkSecondPasswordMatch);
    function checkSecondPasswordMatch() {
        $("#invalid_secondpassword").remove();
        if (password.val() != second_password.val()){
            second_password.css("border-bottom","2px solid #c80000");
            second_password.after('<span class="invalid" id="invalid_secondpassword">Passwords don\'t match<img src="img/invalid.png"></span>');
        }
        else
        {
            second_password.css("border-bottom","2px solid #ccc");
            $("#invalid_secondpassword").remove();
        }
    }
    $(function(){
        var myFunction = function() { /*Stuff here*/}
        myFunction(); //call it here
        button.click(myFunction);})
/*КНОПКА*/

    button.click(function () {
        $('.pole_registr_flex').each(function(){
            if ($(this).is($('.invalid'))){
                accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
            }
        });

        /*
        $.each($('.pole_registr_flex'), function () {
            if ($(this).is("#invalid")) {
                accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
            }

        });
        /*$.each($('.pole_registr_flex'), function () {
            if ($(this).hasClass("invalid")){
                accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
            }
        });

        $('.pole_registr_flex').children('.invalid')


       // if ($(".pole_registr_flex").find('span'))if ($(".pole_registr_flex").hasClass("invalid")){
        /*$("#invalid_checkbox").remove();
        if ($(".pole_registr_flex").hasClass("invalid")){
            accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
        }




        /*
                      if ((name.val()=="") || (username.val()=="") || (email.val()=="") || (password.val()=="") || (second_password.val()=="")){
                  accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
              }
        if ($(".pole_registr_flex").hasClass("invalid")){
            $("#invalid_checkbox").remove();
            if ($('input[name="checkbox-test"]').is(':checked')) {
                accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
            }
            else {
                $("#invalid_checkbox").remove();
                button.css("color","black");
            }
        }
        else{
            accept.after( '<span class="invalid" id="invalid_checkbox">You mast accept terms and conditions<img src="img/invalid.png"></span>');
        }*/
    });

});
