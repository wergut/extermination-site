/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  const serviceMenuBtn = document.querySelector('.header__service-menu-btn');
  const serviceMenu = document.querySelector('.header__service-menu');
  const gamburger = document.querySelector('.header__gamburger');
  const navWrap = document.querySelector('.header__nav-wrap');
  const navClose = document.querySelector('.header__nav-close');
  const menuClose = document.querySelector('.menu__close');
  const accordionItems = document.querySelectorAll('.accordion__item-trigger');
  const body = document.body;
  if (serviceMenuBtn) {
    serviceMenuBtn.addEventListener('click', function () {
      this.classList.toggle('header__service-menu-btn_active');
      serviceMenu.classList.toggle('header__service-menu_active');
      body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    });
  }
  if (gamburger) {
    gamburger.addEventListener('click', function () {
      if (navWrap) {
        navWrap.classList.add('header__nav-wrap_active');
        body.style.overflow = 'hidden';
      }
    });
  }
  if (navClose) {
    navClose.addEventListener('click', function () {
      if (navWrap) {
        navWrap.classList.remove('header__nav-wrap_active');
        body.style.overflow = 'auto';
      }
    });
  }
  if (menuClose) {
    menuClose.addEventListener('click', function () {
      const menu = document.querySelector('.menu');
      if (menu) {
        menu.classList.remove('menu_active');
        body.style.overflow = 'auto';
      }
    });
  }
});

/* Accordion */

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion__item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion__item-trigger');
      const content = item.querySelector('.accordion__item-content');
      trigger.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('accordion__item-active')) {
          parent.classList.remove('accordion__item-active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion__item').forEach(child => {
            child.classList.remove('accordion__item-active');
            child.querySelector('.accordion__item-content').style.height = '0';
          });
          parent.classList.add('accordion__item-active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});

/* Sliders */

var swiper = new Swiper('.reviews__swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
var swiper = new Swiper('.works__swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  speed: 500,
  navigation: {
    nextEl: '.works__next',
    prevEl: '.works__prev'
  },
  breakpoints: {
    // when window width is <= 999px

    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    769: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
var swiper = new Swiper('.certificate__swiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  grabCursor: true,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  speed: 500,
  navigation: {
    nextEl: '.certificate__next',
    prevEl: '.certificate__prev'
  },
  breakpoints: {
    // when window width is <= 999px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    769: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
var swiper = new Swiper('.articles-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  speed: 500,
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1.05,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

/* Article */

const articleBtns = document.querySelectorAll('.article__btn');
articleBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const article = btn.closest('.article');
    if (!article) return;
    const articleContent = article.querySelector('.article__content');
    if (!articleContent) return;
    const hiddenCls = 'article__content--hidden';
    articleContent.classList.toggle(hiddenCls);
    if (articleContent.classList.contains(hiddenCls)) {
      btn.textContent = 'Показать больше';

      // Scroll to article bottom
      window.scrollTo(0, btn.offsetTop + btn.offsetHeight - e.clientY);
    } else {
      btn.textContent = 'Скрыть';
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  if (IMask) {
    var phoneElements = document.querySelectorAll('.phone');
    phoneElements.forEach(function (phoneElement) {
      var phoneMaskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
      };
      var phoneMask = new IMask(phoneElement, phoneMaskOptions);
    });
    var numberElements = document.querySelectorAll('.number');
    numberElements.forEach(function (numberElement) {
      var numberMaskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
      };
      var numberMask = new IMask(numberElement, numberMaskOptions);
    });
    var calcNumberElements = document.querySelectorAll('.calc-number');
    calcNumberElements.forEach(function (calcNumberElement) {
      var calcNumberMaskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
      };
      var calcNumberMask = new IMask(calcNumberElement, calcNumberMaskOptions);
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');

  /* open modal*/
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = "block";
      modalElem.classList.add('modal-opening');
    }); // end click
  }); // end foreach

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      this.closest('.modal-dialog').style.display = "none";
      overlay.classList.remove('modal-open');
      this.closest('.modal-dialog').classList.remove('modal-opening');
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        this.style.display = "none";
        this.classList.remove('modal-opening');
      }
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDdkQsTUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztFQUMxRSxNQUFNQyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHVCQUF1QixDQUFDO0VBQ25FLE1BQU1FLFNBQVMsR0FBR0wsUUFBUSxDQUFDRyxhQUFhLENBQUMsb0JBQW9CLENBQUM7RUFDOUQsTUFBTUcsT0FBTyxHQUFHTixRQUFRLENBQUNHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUMzRCxNQUFNSSxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLG9CQUFvQixDQUFDO0VBQzdELE1BQU1LLFNBQVMsR0FBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3hELE1BQU1NLGNBQWMsR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztFQUM1RSxNQUFNQyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ1csSUFBSTtFQUUxQixJQUFJVCxjQUFjLEVBQUU7SUFDbEJBLGNBQWMsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7TUFDbEQsSUFBSSxDQUFDVyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztNQUN4RFQsV0FBVyxDQUFDUSxTQUFTLENBQUNDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztNQUMzREYsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBR0osSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsS0FBSyxRQUFRLEdBQUcsTUFBTSxHQUFHLFFBQVE7SUFDNUUsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxJQUFJVixTQUFTLEVBQUU7SUFDYkEsU0FBUyxDQUFDSixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUM3QyxJQUFJSyxPQUFPLEVBQUU7UUFDWEEsT0FBTyxDQUFDTSxTQUFTLENBQUNJLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQztRQUNoREwsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO01BQ2hDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxJQUFJUixRQUFRLEVBQUU7SUFDWkEsUUFBUSxDQUFDTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUM1QyxJQUFJSyxPQUFPLEVBQUU7UUFDWEEsT0FBTyxDQUFDTSxTQUFTLENBQUNLLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztRQUNuRE4sSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRyxNQUFNO01BQzlCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxJQUFJUCxTQUFTLEVBQUU7SUFDYkEsU0FBUyxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUM3QyxNQUFNaUIsSUFBSSxHQUFHbEIsUUFBUSxDQUFDRyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzVDLElBQUllLElBQUksRUFBRTtRQUNSQSxJQUFJLENBQUNOLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNwQ04sSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsR0FBRyxNQUFNO01BQzlCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7O0FBSUY7O0FBRUFmLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxNQUFNUSxjQUFjLEdBQUdULFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7RUFFcEUsSUFBSUQsY0FBYyxFQUFFO0lBQ2xCQSxjQUFjLENBQUNVLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO01BQzdCLE1BQU1DLE9BQU8sR0FBR0QsSUFBSSxDQUFDakIsYUFBYSxDQUFDLDBCQUEwQixDQUFDO01BQzlELE1BQU1tQixPQUFPLEdBQUdGLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztNQUU5RGtCLE9BQU8sQ0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO1FBQzNDLE1BQU1zQixNQUFNLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTlCLElBQUlELE1BQU0sQ0FBQ1gsU0FBUyxDQUFDYSxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtVQUN2REYsTUFBTSxDQUFDWCxTQUFTLENBQUNLLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztVQUNqREssT0FBTyxDQUFDUixLQUFLLENBQUNZLE1BQU0sR0FBRyxHQUFHO1FBQzVCLENBQUMsTUFBTTtVQUNMMUIsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDUyxPQUFPLENBQUNRLEtBQUssSUFBSTtZQUM3REEsS0FBSyxDQUFDZixTQUFTLENBQUNLLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztZQUNoRFUsS0FBSyxDQUFDeEIsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUNXLEtBQUssQ0FBQ1ksTUFBTSxHQUFHLEdBQUc7VUFDcEUsQ0FBQyxDQUFDO1VBQ0ZILE1BQU0sQ0FBQ1gsU0FBUyxDQUFDSSxHQUFHLENBQUMsd0JBQXdCLENBQUM7VUFDOUNNLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDWSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ00sWUFBWSxHQUFHLElBQUk7UUFDcEQ7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQzs7QUFHRjs7QUFFQSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO0VBQzFDQyxhQUFhLEVBQUMsQ0FBQztFQUNmQyxZQUFZLEVBQUUsRUFBRTtFQUNoQkMsVUFBVSxFQUFFLElBQUk7RUFDaEJDLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxVQUFVLEVBQUU7SUFDUkMsRUFBRSxFQUFFLG9CQUFvQjtJQUN4QkMsU0FBUyxFQUFFO0VBQ2YsQ0FBQztFQUNEQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QkMsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxXQUFXLEVBQUU7SUFDWCxHQUFHLEVBQUU7TUFDSGIsYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0MsR0FBRyxFQUFFO01BQ0hELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUdGLENBQUMsQ0FBQztBQUVGLElBQUlILE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7RUFDeENDLGFBQWEsRUFBQyxDQUFDO0VBQ2ZDLFlBQVksRUFBRSxFQUFFO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsUUFBUSxFQUFFLElBQUk7RUFDZEMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLEtBQUssRUFBRSxHQUFHO0VBQ1ZJLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUUsY0FBYztJQUN0QkMsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxXQUFXLEVBQUU7SUFFWDs7SUFFQSxHQUFHLEVBQUU7TUFDRGIsYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0QsR0FBRyxFQUFFO01BQ0hELGFBQWEsRUFBRSxHQUFHO01BQ2xCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKRCxhQUFhLEVBQUUsQ0FBQztNQUNoQkMsWUFBWSxFQUFFO0lBQ2xCO0VBRUY7QUFDQSxDQUFDLENBQUM7QUFFRixJQUFJSCxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFO0VBQzlDQyxhQUFhLEVBQUMsQ0FBQztFQUNmQyxZQUFZLEVBQUUsRUFBRTtFQUNoQkMsVUFBVSxFQUFFLElBQUk7RUFDaEJDLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxLQUFLLEVBQUUsR0FBRztFQUNWSSxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFLG9CQUFvQjtJQUM1QkMsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxXQUFXLEVBQUU7SUFDWDtJQUNBLEdBQUcsRUFBRTtNQUNIYixhQUFhLEVBQUUsQ0FBQztNQUNoQkMsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxHQUFHLEVBQUU7TUFDSEQsYUFBYSxFQUFFLEdBQUc7TUFDbEJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0pELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEI7RUFDSjtBQUNBLENBQUMsQ0FBQztBQUtGLElBQUlILE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7RUFDMUNDLGFBQWEsRUFBQyxDQUFDO0VBQ2ZDLFlBQVksRUFBRSxFQUFFO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsUUFBUSxFQUFFLElBQUk7RUFDZEMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLEtBQUssRUFBRSxHQUFHO0VBQ1ZJLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsa0JBQWtCO0lBQzFCQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYLEdBQUcsRUFBRTtNQUNIYixhQUFhLEVBQUUsSUFBSTtNQUNuQkMsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxHQUFHLEVBQUU7TUFDSEQsYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBR0YsQ0FBQyxDQUFDOztBQU1GOztBQUVBLE1BQU1hLFdBQVcsR0FBRzdDLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBRTlEbUMsV0FBVyxDQUFDMUIsT0FBTyxDQUFFMkIsR0FBRyxJQUFLO0VBQzNCQSxHQUFHLENBQUM3QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUc4QyxDQUFDLElBQUs7SUFDbkMsTUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDdkMsSUFBSSxDQUFDRCxPQUFPLEVBQUU7SUFDZCxNQUFNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQzdDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRSxJQUFJLENBQUMrQyxjQUFjLEVBQUU7SUFFckIsTUFBTUMsU0FBUyxHQUFHLDBCQUEwQjtJQUU1Q0QsY0FBYyxDQUFDdEMsU0FBUyxDQUFDQyxNQUFNLENBQUNzQyxTQUFTLENBQUM7SUFFMUMsSUFBSUQsY0FBYyxDQUFDdEMsU0FBUyxDQUFDYSxRQUFRLENBQUMwQixTQUFTLENBQUMsRUFBRTtNQUNoREwsR0FBRyxDQUFDTSxXQUFXLEdBQUcsaUJBQWlCOztNQUVuQztNQUNBQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUVSLEdBQUcsQ0FBQ1MsU0FBUyxHQUFHVCxHQUFHLENBQUNVLFlBQVksR0FBR1QsQ0FBQyxDQUFDVSxPQUFPLENBQUM7SUFDbEUsQ0FBQyxNQUFNO01BQ0xYLEdBQUcsQ0FBQ00sV0FBVyxHQUFHLFFBQVE7SUFDNUI7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRnBELFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxJQUFJeUQsS0FBSyxFQUFFO0lBQ1QsSUFBSUMsYUFBYSxHQUFHM0QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDdkRpRCxhQUFhLENBQUN4QyxPQUFPLENBQUMsVUFBVXlDLFlBQVksRUFBRTtNQUM1QyxJQUFJQyxnQkFBZ0IsR0FBRztRQUNyQkMsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QkMsSUFBSSxFQUFFO01BQ1IsQ0FBQztNQUNELElBQUlDLFNBQVMsR0FBRyxJQUFJTixLQUFLLENBQUNFLFlBQVksRUFBRUMsZ0JBQWdCLENBQUM7SUFDM0QsQ0FBQyxDQUFDO0lBRUYsSUFBSUksY0FBYyxHQUFHakUsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDekR1RCxjQUFjLENBQUM5QyxPQUFPLENBQUMsVUFBVStDLGFBQWEsRUFBRTtNQUM5QyxJQUFJQyxpQkFBaUIsR0FBRztRQUN0QkwsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QkMsSUFBSSxFQUFFO01BQ1IsQ0FBQztNQUNELElBQUlLLFVBQVUsR0FBRyxJQUFJVixLQUFLLENBQUNRLGFBQWEsRUFBRUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQyxDQUFDO0lBRUYsSUFBSUUsa0JBQWtCLEdBQUdyRSxRQUFRLENBQUNVLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUNsRTJELGtCQUFrQixDQUFDbEQsT0FBTyxDQUFDLFVBQVVtRCxpQkFBaUIsRUFBRTtNQUN0RCxJQUFJQyxxQkFBcUIsR0FBRztRQUMxQlQsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QkMsSUFBSSxFQUFFO01BQ1IsQ0FBQztNQUNELElBQUlTLGNBQWMsR0FBRyxJQUFJZCxLQUFLLENBQUNZLGlCQUFpQixFQUFFQyxxQkFBcUIsQ0FBQztJQUMxRSxDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQztBQU1GdkUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBRXZELElBQUl3RSxZQUFZLEdBQUd6RSxRQUFRLENBQUNVLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ2hFZ0UsT0FBTyxHQUFRMUUsUUFBUSxDQUFDRyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzdDd0UsWUFBWSxHQUFHM0UsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQzs7RUFFeEU7RUFDQStELFlBQVksQ0FBQ3RELE9BQU8sQ0FBQyxVQUFTeUQsUUFBUSxFQUFDO0lBQ3JDQSxRQUFRLENBQUMzRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUzhDLENBQUMsRUFBRTtNQUM3Q0EsQ0FBQyxDQUFDOEIsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSUMsT0FBTyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUN6Q0MsU0FBUyxHQUFHaEYsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLEdBQUMyRSxPQUFPLENBQUM7TUFDOURKLE9BQU8sQ0FBQzlELFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNuQ2dFLFNBQVMsQ0FBQ2xFLEtBQUssQ0FBQ21FLE9BQU8sR0FBRyxPQUFPO01BQ2pDRCxTQUFTLENBQUNwRSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBR0o7RUFDQTJELFlBQVksQ0FBQ3hELE9BQU8sQ0FBQyxVQUFTK0QsUUFBUSxFQUFFO0lBQ3RDQSxRQUFRLENBQUNqRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVThDLENBQUMsRUFBRTtNQUM5QyxJQUFJLENBQUNFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQ25DLEtBQUssQ0FBQ21FLE9BQU8sR0FBRyxNQUFNO01BQ3BEUCxPQUFPLENBQUM5RCxTQUFTLENBQUNLLE1BQU0sQ0FBQyxZQUFZLENBQUM7TUFDdEMsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDckMsU0FBUyxDQUFDSyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ2pFLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGakIsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQ1MsT0FBTyxDQUFDLFVBQVNDLElBQUksRUFBRTtJQUNoRUEsSUFBSSxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVU4QyxDQUFDLEVBQUU7TUFDMUMsSUFBR0EsQ0FBQyxDQUFDb0MsTUFBTSxLQUFLcEMsQ0FBQyxDQUFDcUMsYUFBYSxFQUFFO1FBQy9CO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDdEUsS0FBSyxDQUFDbUUsT0FBTyxHQUFHLE1BQU07UUFDM0IsSUFBSSxDQUFDckUsU0FBUyxDQUFDSyxNQUFNLENBQUMsZUFBZSxDQUFDO01BQ3hDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7VUNoVEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VydmljZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZXJ2aWNlLW1lbnUtYnRuJyk7XG4gIGNvbnN0IHNlcnZpY2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VydmljZS1tZW51Jyk7XG4gIGNvbnN0IGdhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2dhbWJ1cmdlcicpO1xuICBjb25zdCBuYXZXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXdyYXAnKTtcbiAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtY2xvc2UnKTtcbiAgY29uc3QgbWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2Nsb3NlJyk7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbS10cmlnZ2VyJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGlmIChzZXJ2aWNlTWVudUJ0bikge1xuICAgIHNlcnZpY2VNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fc2VydmljZS1tZW51LWJ0bl9hY3RpdmUnKTtcbiAgICAgIHNlcnZpY2VNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fc2VydmljZS1tZW51X2FjdGl2ZScpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IGJvZHkuc3R5bGUub3ZlcmZsb3cgPT09ICdoaWRkZW4nID8gJ2F1dG8nIDogJ2hpZGRlbic7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZ2FtYnVyZ2VyKSB7XG4gICAgZ2FtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobmF2V3JhcCkge1xuICAgICAgICBuYXZXcmFwLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LXdyYXBfYWN0aXZlJyk7XG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChuYXZDbG9zZSkge1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobmF2V3JhcCkge1xuICAgICAgICBuYXZXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LXdyYXBfYWN0aXZlJyk7XG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAobWVudUNsb3NlKSB7XG4gICAgbWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICAgIGlmIChtZW51KSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9hY3RpdmUnKTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cblxuXG4vKiBBY2NvcmRpb24gKi9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKTtcblxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbS10cmlnZ2VyJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9faXRlbS1hY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLWFjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbS1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2l0ZW0tYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuXG4vKiBTbGlkZXJzICovXG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcucmV2aWV3c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OjIsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcucmV2aWV3c19fbmV4dCcsXG4gICAgICBwcmV2RWw6ICcucmV2aWV3c19fcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMlxuICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgICB9XG4gIH1cblxuXG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy53b3Jrc19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OjIsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLndvcmtzX19uZXh0JyxcbiAgICAgIHByZXZFbDogJy53b3Jrc19fcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG5cbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA5OTlweFxuXG4gICAgMzIwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTJcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgfVxuXG59XG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5jZXJ0aWZpY2F0ZV9fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OjMsXG4gIHNwYWNlQmV0d2VlbjogNDAsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLmNlcnRpZmljYXRlX19uZXh0JyxcbiAgICAgIHByZXZFbDogJy5jZXJ0aWZpY2F0ZV9fcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gOTk5cHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyXG4gICAgfSxcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDQwXG4gICAgfVxufVxufSk7XG5cblxuXG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuYXJ0aWNsZXMtc2xpZGVyJywge1xuICBzbGlkZXNQZXJWaWV3OjMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zbGlkZXItYnRuLW5leHQnLFxuICAgIHByZXZFbDogJy5zbGlkZXItYnRuLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS4wNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTJcbiAgICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgICB9XG4gIH1cblxuXG59KTtcblxuXG5cblxuXG4vKiBBcnRpY2xlICovXG5cbmNvbnN0IGFydGljbGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGVfX2J0bicpXG5cbmFydGljbGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGFydGljbGUgPSBidG4uY2xvc2VzdCgnLmFydGljbGUnKVxuICAgIGlmICghYXJ0aWNsZSkgcmV0dXJuXG4gICAgY29uc3QgYXJ0aWNsZUNvbnRlbnQgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19jb250ZW50JylcbiAgICBpZiAoIWFydGljbGVDb250ZW50KSByZXR1cm5cblxuICAgIGNvbnN0IGhpZGRlbkNscyA9ICdhcnRpY2xlX19jb250ZW50LS1oaWRkZW4nXG5cbiAgICBhcnRpY2xlQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKGhpZGRlbkNscylcblxuICAgIGlmIChhcnRpY2xlQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoaGlkZGVuQ2xzKSkge1xuICAgICAgYnRuLnRleHRDb250ZW50ID0gJ9Cf0L7QutCw0LfQsNGC0Ywg0LHQvtC70YzRiNC1J1xuXG4gICAgICAvLyBTY3JvbGwgdG8gYXJ0aWNsZSBib3R0b21cbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBidG4ub2Zmc2V0VG9wICsgYnRuLm9mZnNldEhlaWdodCAtIGUuY2xpZW50WSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnRuLnRleHRDb250ZW50ID0gJ9Ch0LrRgNGL0YLRjCdcbiAgICB9XG4gIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGlmIChJTWFzaykge1xuICAgIHZhciBwaG9uZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBob25lJyk7XG4gICAgcGhvbmVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwaG9uZUVsZW1lbnQpIHtcbiAgICAgIHZhciBwaG9uZU1hc2tPcHRpb25zID0ge1xuICAgICAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXG4gICAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgfTtcbiAgICAgIHZhciBwaG9uZU1hc2sgPSBuZXcgSU1hc2socGhvbmVFbGVtZW50LCBwaG9uZU1hc2tPcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHZhciBudW1iZXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXInKTtcbiAgICBudW1iZXJFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChudW1iZXJFbGVtZW50KSB7XG4gICAgICB2YXIgbnVtYmVyTWFza09wdGlvbnMgPSB7XG4gICAgICAgIG1hc2s6ICcrNygwMDApMDAwLTAwLTAwJyxcbiAgICAgICAgbGF6eTogZmFsc2VcbiAgICAgIH07XG4gICAgICB2YXIgbnVtYmVyTWFzayA9IG5ldyBJTWFzayhudW1iZXJFbGVtZW50LCBudW1iZXJNYXNrT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB2YXIgY2FsY051bWJlckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGMtbnVtYmVyJyk7XG4gICAgY2FsY051bWJlckVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNhbGNOdW1iZXJFbGVtZW50KSB7XG4gICAgICB2YXIgY2FsY051bWJlck1hc2tPcHRpb25zID0ge1xuICAgICAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXG4gICAgICAgIGxhenk6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIGNhbGNOdW1iZXJNYXNrID0gbmV3IElNYXNrKGNhbGNOdW1iZXJFbGVtZW50LCBjYWxjTnVtYmVyTWFza09wdGlvbnMpO1xuICAgIH0pO1xuICB9XG59KTtcblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLW1vZGFsLWRpYWxvZycpLFxuICAgIG92ZXJsYXkgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1jbG9zZScpO1xuXG4gIC8qIG9wZW4gbW9kYWwqL1xuICBtb2RhbEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihtb2RhbEJ0bil7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgbW9kYWxJZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpLFxuICAgICAgICBtb2RhbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLicrbW9kYWxJZCk7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgIG1vZGFsRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbW9kYWxFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICB9KTsgLy8gZW5kIGNsaWNrXG4gIH0pOyAvLyBlbmQgZm9yZWFjaFxuXG5cbiAgLyogY2xvc2UgbW9kYWwgKi9cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oY2xvc2VCdG4pIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgIHRoaXMuY2xvc2VzdCgnLm1vZGFsLWRpYWxvZycpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICB9KVxuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZihlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8g0K3RgtC+IC0g0LLQsNGI0LAg0YLQvtGH0LrQsCDQstGF0L7QtNCwINC00LvRjyDRgdC60YDQuNC/0YLQvtCyINGB0YLRgNCw0L3QuNGG0YsuINCY0LzQv9C+0YDRgtC40YDRg9C50YLQtSDRgdGO0LTQsCDQvdGD0LbQvdGL0LUg0LLQsNC8INGE0LDQudC70YsuXG5cbmltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VNZW51QnRuIiwicXVlcnlTZWxlY3RvciIsInNlcnZpY2VNZW51IiwiZ2FtYnVyZ2VyIiwibmF2V3JhcCIsIm5hdkNsb3NlIiwibWVudUNsb3NlIiwiYWNjb3JkaW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInN0eWxlIiwib3ZlcmZsb3ciLCJhZGQiLCJyZW1vdmUiLCJtZW51IiwiZm9yRWFjaCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29udGVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjb250YWlucyIsImhlaWdodCIsImNoaWxkIiwic2Nyb2xsSGVpZ2h0Iiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImdyYWJDdXJzb3IiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInNwZWVkIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiYXJ0aWNsZUJ0bnMiLCJidG4iLCJlIiwiYXJ0aWNsZSIsImNsb3Nlc3QiLCJhcnRpY2xlQ29udGVudCIsImhpZGRlbkNscyIsInRleHRDb250ZW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRZIiwiSU1hc2siLCJwaG9uZUVsZW1lbnRzIiwicGhvbmVFbGVtZW50IiwicGhvbmVNYXNrT3B0aW9ucyIsIm1hc2siLCJsYXp5IiwicGhvbmVNYXNrIiwibnVtYmVyRWxlbWVudHMiLCJudW1iZXJFbGVtZW50IiwibnVtYmVyTWFza09wdGlvbnMiLCJudW1iZXJNYXNrIiwiY2FsY051bWJlckVsZW1lbnRzIiwiY2FsY051bWJlckVsZW1lbnQiLCJjYWxjTnVtYmVyTWFza09wdGlvbnMiLCJjYWxjTnVtYmVyTWFzayIsIm1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbnMiLCJtb2RhbEJ0biIsInByZXZlbnREZWZhdWx0IiwibW9kYWxJZCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsRWxlbSIsImRpc3BsYXkiLCJjbG9zZUJ0biIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiXSwic291cmNlUm9vdCI6IiJ9