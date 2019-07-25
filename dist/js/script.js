$(document).ready(function () {

    var val_email = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var val_name = /^[a-zа-яё]*$/i;
    var val_password = /[0-9a-zA-Z!@#$%^&*]{6,}/;

    var name = $('#name');
    var username = $('#username');
    var email = $('#email');
    var password = $('#password');
    var second_password = $('#second_password');
    var button = $('input[type="submit"]');
    var form = $('#form_reg');
    var checkbox = $('input[name="checkbox-test"]');
    var mas = [ name , username , email , password , second_password ];

    /*Функция идентификации ошибок*/
    function Message(text){
        return ("<span class=\"invalid\">")+ text +("<img src=\"img/invalid.png\"></span>");
    }
    function Color_border(isinvalid,element){
        if (isinvalid){
            element.css("border-bottom", "2px solid #c80000");
        }
        else{
            element.css("border-bottom", "2px solid #ccc");
        }
    };
    function Proverca_poley(element,text,validation,k){
        element.blur(function () {
            element.siblings().remove();
            if (element.val() != '') {
                if (element.val().search(validation) == 0) {
                    Color_border(false ,element);
                } else {
                    Color_border(true , element);
                    element.after(Message(text));
                }
            } else {
                Color_border(true , element);
                element.after(Message(text));
            }
        });
    };
    /*Поле NAME*/
    (Proverca_poley (name,'Name is required',val_name));
   /* name.blur(function () {
        text='Name is required';
        name.siblings().remove();
        if (name.val() != '') {
            if (name.val().search(val_name) == 0) {
                Color_border(false , name);
            } else {
                Color_border(true , name);
                name.after(Message(text));
            }
        } else {
            Color_border(true , name);
            name.after(Message(text));
        }
    });*/;
    /*Поле USERNAME*/
    (Proverca_poley(username,'User name is required',val_name));
    /*
    username.blur(function () {
        text='User name is required';
        username.siblings().remove();
        if (username.val() != '') {
            if (username.val().search(val_name) == 0) {
                Color_border(false , username);
            } else {
                Color_border(true , username);
                username.after(Message(text));
            }
        } else {
            Color_border(true , username);
            username.after(Message(text));
        }
    });*/;
    /*Поле EMAIL*/
    Proverca_poley(email,'Valid email is required',val_email);
    /*
    email.blur(function () {
        text='Valid email is required';
        email.siblings().remove();
        if (email.val() != '') {
            if (email.val().search(val_email) == 0) {
                Color_border(false , email);
            } else {
                Color_border(true , email);
                email.after(Message(text));
                ;
            }
        } else {
            Color_border(true , email);
            email.after(Message(text));
            ;
        }
    });*/;
    /*Поле PASSWORD*/
    Proverca_poley(password,'Password is required',val_password);
    /*password.blur(function () {
        password.siblings().remove();
        if (password.val().length > 5) {
            Color_border(false ,password);
        } else {
            proverca(true , email);
            Color_border.after(Message(text));
        }
    });*/;
    /*Поле SECONDPASSWORD*/

    //Proverca_poley(second_password,'Passwords don\'t match',password.val());

    second_password.blur(function () {
        text='Passwords don\'t match';
       second_password.siblings().remove();
        if (second_password.val() != '') {
            if (password.val() == second_password.val()) {
            //if (second_password.val().search(password.val())==0) {
                Color_border(false , second_password);
            }
            else{
                Color_border(true , second_password);
                second_password.after(Message(text));
            }
        } else {
            Color_border(true , second_password);
            second_password.after(Message(text));
        }
    })
    /*ЧЕКБОКС*/
    checkbox.click(function() {
        button.siblings('.invalid').remove();
        if(!((checkbox).is(':checked'))){
            button.after(Message('You mast accept terms and conditions'));
        }
    });
    /*КНОПКА*/
    form.submit(function (event) {
        mas.forEach(function (element) {
            element.blur();
        });
        button.siblings('.invalid').remove();
        if (!($('input[name="checkbox-test"]').is(':checked'))) {
            button.after(Message('You mast accept terms and conditions'));
        }
        if ($('.mistakes').find("span.invalid").length != 0) {
            event.preventDefault();
        }
    });
});
