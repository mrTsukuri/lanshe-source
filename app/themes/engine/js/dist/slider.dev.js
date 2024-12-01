"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slider-banner').forEach(function (item) {
    var currentNavigation = document.querySelector(".slider-navigation__banner");
    var navigation = {};
    var pagination = {};

    if (currentNavigation) {
      var next = currentNavigation.querySelector('.slider-next');
      var prev = currentNavigation.querySelector('.slider-prev');
      navigation = {
        nextEl: next,
        prevEl: prev
      }, pagination = {
        el: currentNavigation.querySelector('.slider-pagination'),
        type: 'bullets',
        dynamicMainBullets: 1
      };
    }

    new _swiper["default"](item, {
      modules: [_swiper.Navigation, _swiper.Pagination, _swiper.Autoplay],
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: pagination,
      navigation: navigation,
      slideActiveClass: "active",
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      }
    });
  });
  document.querySelectorAll('.slider-4').forEach(function (item) {
    var currentNavigation = document.querySelector(".slider-navigation__4");
    var navigation = {};

    if (currentNavigation) {
      var next = currentNavigation.querySelector('.slider-next');
      var prev = currentNavigation.querySelector('.slider-prev');
      navigation = {
        nextEl: next,
        prevEl: prev
      };
    }

    new _swiper["default"](item, {
      modules: [_swiper.Navigation],
      spaceBetween: 16,
      slidesPerView: 'auto',
      navigation: navigation,
      slideActiveClass: "active",
      breakpoints: {
        1080: {
          slidesPerView: 3,
          spaceBetween: 24
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 32
        }
      }
    });
  });
  document.querySelectorAll('.slider-2').forEach(function (item) {
    var currentNavigation = document.querySelector(".slider-navigation__2");
    var navigation = {};

    if (currentNavigation) {
      var next = currentNavigation.querySelector('.slider-next');
      var prev = currentNavigation.querySelector('.slider-prev');
      navigation = {
        nextEl: next,
        prevEl: prev
      };
    }

    new _swiper["default"](item, {
      modules: [_swiper.Navigation],
      spaceBetween: 16,
      slidesPerView: 'auto',
      navigation: navigation,
      slideActiveClass: "active",
      breakpoints: {
        1080: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1400: {
          slidesPerView: 2,
          spaceBetween: 32
        }
      }
    });
  });
  document.querySelectorAll('.slider-product').forEach(function (productSlider) {
    var swiperProductThumbs = new _swiper["default"]('.slider-product__thumbs', {
      slidesPerView: 'auto',
      spaceBetween: 8,
      direction: 'vertical',
      watchSlidesProgress: true
    });
    var swiperDefOpt = {
      spaceBetween: 10,
      slidesPerView: 'auto',
      direction: 'horizontal',
      breakpoints: {
        1080: {
          slidesPerView: 1,
          direction: 'vertical'
        }
      }
    };
    var swiperProductOpt = {
      modules: [_swiper.Thumbs],
      thumbs: {
        swiper: swiperProductThumbs
      }
    };

    if (document.querySelector('.slider-product__thumbs')) {
      new _swiper["default"](productSlider, Object.assign({}, swiperDefOpt, swiperProductOpt));
    } else {
      new _swiper["default"](productSlider, Object.assign({}, swiperDefOpt));
    }
  });
});