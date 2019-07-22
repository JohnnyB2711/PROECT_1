$(document).ready(function(){

    var val_email = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var val_name = /[^a-zA-Zа-яА-Я]/g;

    var name = $('#name');
    var username=$('#username');
    var email = $('#email');
    var password = $('#password');
    var second_password =$('#second_password');

    var q=$('.pole_registr_flex');

    name.blur(function(){
        if (name.val().length > 0){
            //name.parent().removeClass('error');
            name.removeClass('error');
            name.css("border-bottom","2px solid #ccc");

        }
        else{
            name.css("border-bottom","2px solid #c80000");
            //name.parent().css("border","3px solid red");
            //name.parent().addClass('error');
           // name.addClass('error');
            name.after('<span class="invalid ">Name is required<img src="img/invalid.png"></span>');

        }
    });
    name.focus(function(){
    });

    email.blur(function(){
        if(email.val() != ''){
            if(email.val().search(val_email) == 0){
                $('#valid').text('Подходит');
                email.removeClass('error');
            }else{
                $('#valid').text('Не подходит');
                email.addClass('error');
            }
        }else{
            email.after('<span class="invalid">Valid email is required <img src="img/invalid.png"></span>');
            email.addClass('error');
        }
    });
    password.focus(function () {
        password.prop('type', type);


    })
    second_password.blur(function () {
        password1 = password.val();
        second_password1 = second_password.val();
        if (second_password1.length > 0){
            if (password1 = second_password1){
                second_password.removeClass('error');
            }
        }
        else{
            second_password.addClass('error');
            second_password.after('<span class="invalid">Passwords don\'t match <img src="img/invalid.png"></span>');

        }

    })
});
