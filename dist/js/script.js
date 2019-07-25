$(document).ready(function () {

    var val_email = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var val_name = /^[a-zа-яё]*$/i;
    var val_password = /[0-9a-zA-Z!@#$%^&*]{6,}/;
    //var val_spassword = /[$('#password')]/ig;

    var name = $('#name');
    var username = $('#username');
    var email = $('#email');
    var password = $('#password');
    var second_password = $('#second_password');
    var button = $('input[type="submit"]');
    var form = $('#form_reg');
    var checkbox = $('input[name="checkbox-test"]');
    var label = $('label');
    var mas = [name, username, email, password, second_password];

    /*Функция идентификации ошибок*/
    function Message(text) {
        return ("<span class=\"invalid\">") + text + ("<img src=\"img/invalid.png\"></span>");
    }
    function Proverca_poley(element, text, isvalid) {
        element.siblings('.invalid').remove();
        if (isvalid) {
            element.css("border-bottom", "2px solid #ccc");
        } else {
            element.css("border-bottom", "2px solid #c80000");
            element.after(Message(text));
        }
    };
    /*Поле NAME*/
    name.blur(function () {
        if (name.val() == '') {
            Proverca_poley(name, 'Name is required', false);
            return
        }
        Proverca_poley(name, 'Введите только буквы!', name.val().search(val_name) == 0);
    });
    /*Поле USERNAME*/
    username.blur(function () {
        if (username.val() == '') {
            Proverca_poley(username, 'User name is required', false);
            return
        }
        Proverca_poley(username, 'Введите только буквы!', username.val().search(val_name) == 0);
    });
    /*Поле EMAIL*/
    email.blur(function () {
        if (email.val() == '') {
            Proverca_poley(email, 'Valid email is required', false);
            return
        }
        Proverca_poley(email, 'Некорректный email!', email.val().search(val_email) == 0);
    });
    /*Поле PASSWORD*/
    password.blur(function () {
        if (password.val() == '') {
            Proverca_poley(password, 'Password is required', false);
            return
        }
        Proverca_poley(password, 'Не меньше 6 символов!', password.val().search(val_password) == 0);
    });
    ;
    /*Поле SECONDPASSWORD*/
    second_password.blur(function () {
        if (second_password.val() == '') {
            Proverca_poley(second_password, 'Password is required', false);
            return
        }
        Proverca_poley(second_password, 'Passwords don\'t match', password.val() == second_password.val());
    });
    /*ЧЕКБОКС*/
    label.click(function () {
        Proverca_poley(label, 'You mast accept terms and conditions', (checkbox).is(':checked'));
    });

    /*КНОПКА*/
    form.submit(function (event) {
        mas.forEach(function (element) {
            element.blur();
        });
        Proverca_poley(label, 'You mast accept terms and conditions', (checkbox).is(':checked'));

        if ($('.mistakes').find("span.invalid").length != 0) {
            event.preventDefault();
        }
    });
})
;
