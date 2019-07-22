$(document).ready(function(){
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var name = $('#name');
    var username=$('#username');
    var email = $('#email');
    var password = $('#password');
    name.blur(function(){
        if(name.val().length > 0){
            name.removeClass('error');

        }else{
            name.addClass('error');
            //name.after('<span class="invalid ">Name is required<img src="img/invalid.png"></span>');
            //name.css({borderBottomColor:$color_red});

        }
    });
    name.focus(function(){
        name.after(none);

    });
    email.blur(function(){
        if(email.val() != ''){
            if(email.val().search(pattern) == 0){
                $('#valid').text('Подходит');
            }else{
                $('#valid').text('Не подходит');
            }
        }else{
            email.after('<span class="invalid">Valid email is required <img src="img/invalid.png"></span>');
            mail.addClass('error');
        }
    });
});
