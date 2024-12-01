"use strict";

var _jsTabs = _interopRequireDefault(require("js-tabs"));

var _mmenuLight = _interopRequireDefault(require("mmenu-light"));

var _bootstrapEsm = require("./../../../../node_modules/bootstrap/dist/js/bootstrap.esm.min");

var _choices = _interopRequireDefault(require("choices.js"));

var _starRating = _interopRequireDefault(require("star-rating.js"));

var _tippy = _interopRequireDefault(require("tippy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import IMask from 'imask';
function parseHTML(html) {
  var t = document.createElement('template');
  t.innerHTML = html;
  return t.content.cloneNode(true);
}

document.addEventListener('DOMContentLoaded', function () {
  //Количество товаров
  function newCount(item) {
    var plus = item.querySelector('.count-btn_plus');
    var min = item.querySelector('.count-btn_min');
    var input = item.querySelector('.count-input');
    plus.addEventListener('click', function () {
      +input.value++;

      if (+input.value >= 999) {
        input.value = 999;
      } // if(input.value > 9 && input.value < 100){
      //     input.style.width = '2ch'
      // } else if (input.value > 99){                
      //     input.style.width = '3ch'
      // }            

    });
    min.addEventListener('click', function () {
      +input.value--;

      if (+input.value < 1) {
        +input.value++;
      } // if(input.value < 100 && input.value > 9){
      //     input.style.width = '2ch'
      // } else if (input.value < 10){
      //     input.style.width = '1ch'
      // }                       

    });
    input.addEventListener('change', function () {
      if (+input.value < 1) {
        input.value = 1;
      }

      if (+input.value >= 999) {
        input.value = 999;
      } // if(input.value <= 9){
      //     input.style.width = '1ch'    
      // } else if(input.value > 9 && input.value < 100){
      //     input.style.width = '2ch'
      // } else if (input.value > 99){
      //     input.style.width = '3ch'
      // }            

    });
  }

  function count() {
    document.querySelectorAll('.count-number').forEach(function (item) {
      newCount(item);
    });
  }

  count();
  var map = document.querySelectorAll('.map');
  map.forEach(function (mapItem) {
    if (mapItem) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A033336e3a15a7f573012bc040f9daead26b2e3500cdaa2e7090cfabe76d3062a&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";

            if (mapItem.classList.contains('PNZ')) {
              src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6ef15981c2819eadacb4224d8cc3f1b41205f5b67683a740b671a1cf94f9c9b5&amp;width=100%25&amp;height=250&amp;lang=ru_RU&amp;scroll=true";
            } else if (mapItem.classList.contains('SAR')) {
              src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A033336e3a15a7f573012bc040f9daead26b2e3500cdaa2e7090cfabe76d3062a&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";
            }

            var script = document.createElement('script');
            script.async = true;
            script.src = src;
            document.querySelector('.map-block').replaceWith(script);
            obs.unobserve(entry.target);
          }
        });
      });
      observer.observe(mapItem);
    }
  });
  document.querySelectorAll('.js_benefit').forEach(function (item) {
    item.querySelector('.btn-close').addEventListener('click', function () {
      item.style.display = 'none';
    });
  });

  if (document.querySelector('.rating')) {
    document.querySelectorAll('.star-rating').forEach(function (item) {
      new _starRating["default"](item, {
        clearable: true,
        tooltip: false,
        maxStars: 5
      });
    });
  } //tabs


  function tabs(tabName) {
    if (document.querySelector(tabName)) {
      document.querySelectorAll(tabName).forEach(function (item) {
        var tab = new _jsTabs["default"]({
          elm: item,
          shouldScrollTabIntoView: false
        });
        tab.init();
      });
    }
  }

  tabs('.account-tabs'); //spoiler      

  document.querySelectorAll('.spoiler').forEach(function (item) {
    var btn = item.querySelector('.spoiler-btn');
    var container = item.querySelector('.spoiler-block');

    if (container.classList.contains('active')) {
      container.style.height = 'auto'; // container.style.height = container.clientHeight + 'px';
    }

    btn.addEventListener('click', function (event) {
      event.preventDefault();
      btn.classList.toggle('active');
      event.target.closest('.spoiler').classList.toggle('active');

      if (!container.classList.contains('active')) {
        container.classList.add('active');
        container.style.height = 'auto';
        var height = container.clientHeight + 'px';
        container.style.height = '0px';
        setTimeout(function () {
          container.style.height = height;
        }, 0);
      } else {
        container.style.height = container.clientHeight + 'px';
        setTimeout(function () {
          container.style.height = '0px';
        }, 0); // container.style.height = '0px';               

        setTimeout(function () {
          container.classList.remove('active');
        }, 350);
      }
    });
  }); //mobileMenu

  if (document.querySelector('#mobile-menu') && document.querySelector('a[href="#mobile-menu"]')) {
    var mobileMenu = new _mmenuLight["default"](document.querySelector("#mobile-menu"));
    mobileMenu.navigation({
      title: "Меню",
      theme: "dark"
    });
    var drawerMenu = mobileMenu.offcanvas();
    document.querySelectorAll('a[href="#mobile-menu"]').forEach(function (mmenu) {
      mmenu.addEventListener('click', function (evnt) {
        evnt.preventDefault();
        drawerMenu.open();
      });
    });
  } //notice


  var notice = function notice(message) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000;
    var container = document.querySelector('.js_toast_container');

    if (!container) {
      container = parseHTML("<div aria-live=\"polite\" aria-atomic=\"true\">\n                                            <div class=\"toast-container position-fixed top-0 end-0 p-3 js_toast_container\" style=\"z-index: 10000;\"> \n                                            </div>\n                                        </div>");
      document.querySelector('body').append(container);
    }

    var id = Math.random().toString().substring(2);
    var element = parseHTML("<div class=\"toast\" id=\"toast_".concat(id, "\" role=\"alert\" aria-live=\"assertive\" data-bs-animation=\"true\" data-bs-delay=\"").concat(delay, "\" aria-atomic=\"true\">\n                                            <div class=\"d-flex align-items-center\">\n                                                <div class=\"toast-body\">\n                                                    ").concat(message, "\n                                                </div>\n                                                <button type=\"button\" class=\"bg-transparent border-0 ms-auto d-flex basket-item-close btn-close btn-close-white\" data-bs-dismiss=\"toast\" aria-label=\"Close\">\n                                                    <i class=\"icon close lh-1\"></i> \n                                                </button>\n                                            </div>    \n                                        </div>"));
    container.append(element);
    var to = document.querySelector("#toast_".concat(id));
    var t = new _bootstrapEsm.Toast(to);
    t.show();
    to.addEventListener('hidden.bs.toast', function () {
      return to.remove();
    });
  };

  window.noty = notice; //Mask

  function isNumber(val) {
    return /^[-]?\d+$/.test(val);
  }

  function format(targetInput, e) {
    var tel = targetInput.value.replace(/[^0-9]/g, '');
    var result = '';
    var position = getCursorPosition(targetInput);

    if (tel.length) {
      if ("1" !== tel[0] && "2" !== tel[0] && "3" !== tel[0] && "4" !== tel[0] && "5" !== tel[0] && "6" !== tel[0] && "9" !== tel[0] || (tel = "7" + tel), "8" === tel[0]) result = "7";else {
        if ("7" !== tel[0]) return;
        result = tel[0];
      }
      result = '+' + result, result = result + " (" + tel.substring(1, 4), tel.length > 3 && (result = result + ") " + tel.substring(4, 7)), tel.length > 6 && (result = result + " " + tel.substring(7, 9)), tel.length > 9 && (result = result + "-" + tel.substring(9, 11));
    }

    targetInput.value = result;

    if (e.keyCode === 46 || e.keyCode === 8) {
      setCaretPosition(targetInput, position);
    }
  }

  function setCaretPosition(elem, caretPos) {
    var range = void 0;

    if (elem.createTextRange) {
      range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      elem.focus();

      if (elem.selectionStart !== undefined) {
        elem.setSelectionRange(caretPos, caretPos);
      }
    }
  }

  function getCursorPosition(element) {
    var el = element;
    var pos = 0;

    if ('selectionStart' in el) {
      pos = el.selectionStart;
    } else if ('selection' in document) {
      el.focus();
      var Sel = document.selection.createRange();
      var SelLength = document.selection.createRange().text.length;
      Sel.moveStart('character', -el.value.length);
      pos = Sel.text.length - SelLength;
    }

    return pos;
  }

  function formatUp(e) {
    // format(e.currentTarget, e);                
    if (isNumber(e.key) || e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39) {
      format(e.currentTarget, e);
    }
  }

  function formatDown(e) {
    if (!isNumber(e.key) && e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 9) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.keyCode);
    }
  }

  document.querySelectorAll('input[type="tel"]').forEach(function (input) {
    input.addEventListener('keydown', formatDown);
    input.addEventListener('keyup', formatUp);
  }); //скролл до верха

  if (document.querySelector('.scroll-item')) {
    document.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        document.querySelectorAll('.scroll-item').forEach(function (item) {
          item.classList.add('active');
        });
      } else {
        document.querySelectorAll('.scroll-item').forEach(function (item) {
          item.classList.remove('active');
        });
      }
    });
  }

  document.querySelectorAll('.scroll-top').forEach(function (item) {
    item.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  if (document.querySelector('.js-buy')) {
    if (window.scrollY > 800) {
      document.querySelector('.js-buy').classList.add('active');
    } else {
      document.querySelector('.js-buy').classList.remove('active');
    }

    document.addEventListener('scroll', function () {
      if (window.scrollY > 800) {
        document.querySelector('.js-buy').classList.add('active');
      } else {
        document.querySelector('.js-buy').classList.remove('active');
      }
    });
  } //call_modal


  if (document.querySelector('.js_callModal')) {
    var forms = document.querySelectorAll('.js_callModal');
    var sModal = document.querySelector('.modal-success');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var modalBoot = new _bootstrapEsm.Modal(sModal);
        modalBoot.show(); // setTimeout(function(){                    
        //     modalBoot.hide();
        // }, 4000)
      });
    });
  }

  document.querySelectorAll('.modal').forEach(function (item) {
    item.addEventListener('shown.bs.modal', function () {
      if (item.querySelector('input[type="tel"]')) {
        item.querySelector('input[type="tel"]').focus();
      }
    });
  });

  if (document.querySelector('.js_callFModal')) {
    var _forms = document.querySelectorAll('.js_callFModal');

    var _sModal = document.querySelector('.modal-fail');

    _forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var modalBoot = new _bootstrapEsm.Modal(_sModal);
        modalBoot.show(); // setTimeout(function(){                    
        //     modalBoot.hide();
        // }, 4000)
      });
    });
  } //dropdawn            


  document.querySelectorAll('.dropdawn').forEach(function (item) {
    item.addEventListener("mouseover", function () {
      item.querySelector('.dropdawn-btn').classList.add('active');
      item.querySelector('.dropdawn-menu').classList.add('active');
    });
    item.addEventListener("mouseleave", function () {
      var timer = setTimeout(function () {
        item.querySelector('.dropdawn-menu').classList.remove('active');
        item.querySelector('.dropdawn-btn').classList.remove('active');
      }, 100);
      item.addEventListener('mouseover', function () {
        item.querySelector('.dropdawn-btn').classList.add('active');
        item.querySelector('.dropdawn-menu').classList.add('active');
        clearTimeout(timer);
      });
    });
  });
  document.querySelectorAll('[type="file"]').forEach(function (el) {
    if (el.getAttribute('type') === 'file') {
      el.addEventListener('change', function () {
        return changeInputFile(el);
      });
    }
  });

  var changeInputFile = function changeInputFile(input) {
    if (input.files && input.files[0]) {
      var file = input.files[0];

      if (!file.type.match('image/*')) {
        // notice('Формат файла не прошел проверку');
        input.value = "";
        return;
      } else {
        console.log(file);
        var fileWrapper = input.closest('.js-form_wrapper');
        var fileList = fileWrapper.querySelector('.js-form_files');
        var img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        fileList.appendChild(img);
      }
    }
  };

  document.querySelectorAll('.steps-spy').forEach(function (item) {
    function stepsSpy(item) {
      new _bootstrapEsm.ScrollSpy(document.body, {
        target: item
      });
    }

    stepsSpy(item); // if(window.outerWidth >= 992){ 
    //     stepsSpy(item);  
    // }
    // window.addEventListener('resize', function(){            
    //     if(window.outerWidth >= 992){                        
    //         stepsSpy(item);
    //     }    
    // })
  });
});