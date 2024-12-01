"use strict";

require('zangdar');

document.querySelectorAll('.zangdar__wizard').forEach(function (form) {
  window.wizard = new Zangdar(form, {
    onValidation: function onValidation(step, fields, form) {
      if (step.labeled('2')) {
        var err_message = form.querySelector('.error__message');

        if (err_message) {
          err_message.parentNode.removeChild(err_message);
        }

        return true;
      }

      return true;
    },
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      this.getCurrentStep().active = false;
      this.getCurrentStep().completed = true;
      return false;
    }
  });
  document.querySelectorAll('.next-step').forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelector('.choosing-block').scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });
  });
  document.querySelectorAll('.prev-step').forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelector('.choosing-block').scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });
  });
});