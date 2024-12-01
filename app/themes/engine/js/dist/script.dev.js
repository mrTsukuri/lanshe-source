"use strict";

var _index = _interopRequireDefault(require("../js/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import JsTabs from 'js-tabs';
// import Swiper, {Navigation, Pagination, Grid} from 'swiper';
//Табы
// function tabs(tabName){        
//     if(document.querySelector(tabName)){            
//         document.querySelectorAll(tabName).forEach(item => {
//             let tab = new JsTabs({
//                 elm: item,
//                 shouldScrollTabIntoView: false,
//             });
//             tab.init(); 
//             if(item.querySelector(".js-tabs__tab")){
//                 item.querySelector(".js-tabs__tab").classList.add("active");
//             }
//             if(item.querySelector(".js-tabs__content")){                            
//                 item.querySelector(".js-tabs__content").classList.add("active");
//             }    
//         });            
//     }    
// }
(0, _index["default"])('.catalog-tabs'); //Слайдер
// document.addEventListener('DOMContentLoaded', function () {
//     if(document.querySelector('.slider-5')){
//         document.querySelectorAll('.slider-5').forEach(item => {            
//             let currentCategory = item.dataset.category;             
//             let currentNavigation = document.querySelector(`.slider-navigation-5[data-category="${currentCategory}"]`);                     
//             let navigation = {};
//             let pagination = {};                     
//             if (currentNavigation) {
//                 let next = currentNavigation.querySelector('.slider-next');                
//                 let prev = currentNavigation.querySelector('.slider-prev');                
//                 navigation = {
//                     nextEl: next,
//                     prevEl: prev,
//                 },
//                 pagination = {
//                     el: currentNavigation.querySelector('.slider-pagination'),
//                     type: 'bullets'
//                 };              
//             } 
//             new Swiper(item, {
//                 modules: [Navigation, Pagination, Grid],                                
//                 spaceBetween: 10,
//                 slidesPerView: 'auto',
//                 grid: {
//                     fill: 'row',
//                     rows: 2,
//                 },
//                 speed: 500,          
//                 pagination: pagination,
//                 navigation: navigation,                
//                 watchSlidesVisibility: true,
//                 slideActiveClass: "active",
//                 breakpoints: {
//                     768: {
//                         spaceBetween: 10,
//                         slidesPerView: 3,
//                         slidesPerGroup: 3,                        
//                     },                    
//                     992: {
//                         spaceBetween: 10,
//                         slidesPerView: 4,
//                         slidesPerGroup: 4,                        
//                     },                    
//                     1200: {
//                         spaceBetween: 20,
//                         slidesPerView: 4,
//                         slidesPerGroup: 4,                        
//                     },                    
//                     1554: {
//                         spaceBetween: 20,                                          
//                         slidesPerView: 5,
//                         slidesPerGroup: 5,                                                                          
//                     }                                      
//                 }
//             });
//         });
//     }
//     if(document.querySelector('.slider-2')){
//         document.querySelectorAll('.slider-2').forEach(item => {            
//             let currentCategory = item.dataset.category;             
//             let currentNavigation = document.querySelector(`.slider-navigation-2[data-category="${currentCategory}"]`);                     
//             let navigation = {};
//             let pagination = {};                       
//             if (currentNavigation) {
//                 let next = currentNavigation.querySelector('.slider-next');                
//                 let prev = currentNavigation.querySelector('.slider-prev');                
//                 navigation = {
//                     nextEl: next,
//                     prevEl: prev,
//                 },
//                 pagination = {
//                     el: currentNavigation.querySelector('.slider-pagination'),
//                     type: 'bullets'
//                 };                 
//             } 
//             new Swiper(item, {
//                 modules: [Navigation, Pagination],
//                 loop: true,
//                 spaceBetween: 10,
//                 slidesPerView: 'auto',
//                 navigation: navigation,
//                 pagination: pagination,               
//                 watchSlidesVisibility: true,
//                 slideActiveClass: "active",
//                 breakpoints: {                    
//                     768: {
//                         spaceBetween: 20,
//                         slidesPerView: 2,                                                                           
//                     }                                      
//                 }
//             });
//         });
//     }     
// })
//Слайдер картинок

document.addEventListener('DOMContentLoaded', function () {
  function swipeHover(item) {
    if (item.querySelector('.js_swipeHoverImg')) {
      (function () {
        var img = item.querySelector('.js_swipeHoverImg');
        var defaultSrc = img.dataset.src;

        if (item.querySelector('.js_swipeHoverItem')) {
          item.querySelector('.js_swipeHoverPags').style.display = 'block';
        }

        var hoverItems = item.querySelectorAll('.js_swipeHoverItem');
        var HoverPags = item.querySelector('.js_swipeHoverPags');

        if (!HoverPags.querySelector('.js_swipeHoverPag')) {
          for (var n = 0; n < hoverItems.length; n++) {
            // let HoverPagsItem = parseHTML('<span class="js_swipeHoverPag"></span>')
            HoverPags.innerHtml = '<span class="js_swipeHoverPag"></span>';

            if (n === 0) {
              // HoverPagsItem = parseHTML('<span class="js_swipeHoverPag active"></span>')   
              HoverPags.innerHtml = '<span class="js_swipeHoverPag active"></span>';
            } // HoverPags.append(HoverPagsItem);

          }
        }

        var HoverPagsItem = item.querySelectorAll('.js_swipeHoverPag');

        var _loop = function _loop(i) {
          hoverItems[i].addEventListener('mouseover', function (e) {
            e.preventDefault;
            img.setAttribute('src', hoverItems[i].dataset.src);
            HoverPagsItem.forEach(function (item) {
              item.classList.remove('active');
            });
            HoverPagsItem[i].classList.add('active');
          });
        };

        for (var i = 0; i < hoverItems.length; i++) {
          _loop(i);
        }

        item.addEventListener('mouseleave', function () {
          img.setAttribute('src', defaultSrc);
          HoverPagsItem.forEach(function (item) {
            item.classList.remove('active');
          });
          HoverPagsItem[0].classList.add('active');
        });
      })();
    }
  }

  document.querySelectorAll('.js_swipeHover').forEach(function (item) {
    if (window.outerWidth >= 992) {
      swipeHover(item);
    }

    window.addEventListener('resize', function () {
      if (window.outerWidth >= 992) {
        swipeHover(item);
      }
    });
  });
});