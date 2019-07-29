$(document).ready(function () {
  // объявила список полей как объект, чтобы обращаться к ним как fields.username
  // и иметь возможность пройтись по ним циклом
  var fields = {
    name: $('#name'),
    username: $('#username'),
    email: $('#email'),
    password: $('#password'),
    passwordConfirmation: $('#password-confirmation'),
    terms: $('#terms')
  }

  // объявила, как отдельные функции
  // делается это затем, чтобы когда вызываешь .blur, человеку, читающему код, сразу стало понятно, что случается, когда происходит blur
  // валидируется поле name
  var validateName = function () {
    // this - это html-элемент, обернув его в $, получаем все возможности jquery
    var $this = $(this)

    // сокращенная запись $this.val() == '', это следствие слабой типизации. выражение в if будет всегда автоматически приведено к типу boolean
    // пустой объект и пустой массив это true! это нужно обязательно помнить
    if (!$this.val()) {
      validateField($this, true, 'Name is required')
      return
    }

    // оператор === учитывает тип операндов. оператор == приводит операнды к одному типу. это бывает полезно, но если есть возможность
    // лучше использовать всегда ===. пример: 0 === '' (false), 0 == '' (true)
    validateField($this, $this.val().search(/^[a-zа-яё]*$/i) !== 0, 'Name must contain only alphabetic characters')
  }
  var validateUsername = function () {
    var $this = $(this)
    if (!$this.val()) {
      validateField($this, true, 'User name is required')
      return
    }
    validateField($this, $this.val().search(/^[a-z]*$/i) !== 0, 'Username must contain only latin characters')
  }
  var validateTerms = function () {
    var $this = $(this)
    validateField($this, !$this.is(':checked'), 'You must accept terms and conditions')
  }

  var validateAndSendForm = function (event) {
    // всегда должно выполняться. либо делаем запрос, либо валидируем, показываем ошибки
    // перехода на другую страницу быть не должно
    event.preventDefault()

    // так выглядит цикл для объектов и массивов, в key будет ключ объекта или индекс массива
    // forEach работает только для массивов
    for (var key in fields) {
      fields[key].blur()
    }
    validateField(fields.terms, !fields.terms.is(':checked'), 'You must accept terms and conditions')

    // я добавила только класс invalid к div-обертке. все остальное вынесла в css
    if ($('.form-field.invalid').length === 0) {
      // request to server
    }
  }

  // показываем названиями функций, что именно мы собираемся сделать при каждом событии
  $('form').submit(validateAndSendForm)
  fields.name.blur(validateName)
  fields.username.blur(validateUsername)

  // используем change вместо click. тогда не нужно дополнительно объявлять переменную для label
  fields.terms.change(validateTerms)
})

function validateField ($element, isError, errorText) {
  var $formField = $element.closest('.form-field') // обертка для всех полей
  var $message = $formField.find('.form-message') // сообщение уже внутри каждого поля есть в html

  if (isError) {
    // с помощью css-класса скрываем/показываем ошибку и добавляем рамку
    // текст просто пишем в готовый div
    $formField.addClass('invalid')
    $message.text(errorText)
  } else {
    // убираем класс, убирается рамка и ошибка. сам текст нам не мешает, когда он скрыт
    $formField.removeClass('invalid')
  }
}

