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
  if (serviceMenuBtn) {
    serviceMenuBtn.addEventListener('click', function () {
      this.classList.toggle('header__service-menu-btn_active');
      serviceMenu.classList.toggle('header__service-menu_active');
    });
  }
  if (gamburger) {
    gamburger.addEventListener('click', function () {
      if (navWrap) {
        navWrap.classList.add('header__nav-wrap_active');
        // document.documentElement.style.overflowY = 'hidden';
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', function () {
      if (navWrap) {
        navWrap.classList.remove('header__nav-wrap_active');
        // document.documentElement.style.overflowY = 'auto';
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function () {
      const menu = document.querySelector('.menu');
      if (menu) {
        menu.classList.remove('menu_active');
        // document.documentElement.style.overflowY = 'auto';
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

// if (IMask) {
//   var element = document.getElementById('phone');
//   var maskOptions = {
//     mask: '+7(000)000-00-00',
//     lazy: false,
//   }
//   var mask = new IMask(element, maskOptions);
//
//   var element = document.getElementById('number');
//   var maskOptions = {
//     mask: '+7(000)000-00-00',
//     lazy: false
//   }
//   var mask = new IMask(element, maskOptions);
//
//   var element = document.getElementById('calc-number');
//   var maskOptions = {
//     mask: '+7(000)000-00-00',
//     lazy: false
//   }
//   var mask = new IMask(element, maskOptions);
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VydmljZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZXJ2aWNlLW1lbnUtYnRuJyk7XG4gIGNvbnN0IHNlcnZpY2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VydmljZS1tZW51Jyk7XG4gIGNvbnN0IGdhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2dhbWJ1cmdlcicpO1xuICBjb25zdCBuYXZXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXdyYXAnKTtcbiAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtY2xvc2UnKTtcbiAgY29uc3QgbWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2Nsb3NlJyk7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbS10cmlnZ2VyJyk7XG5cbiAgaWYgKHNlcnZpY2VNZW51QnRuKSB7XG4gICAgc2VydmljZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19zZXJ2aWNlLW1lbnUtYnRuX2FjdGl2ZScpO1xuICAgICAgc2VydmljZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19zZXJ2aWNlLW1lbnVfYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZ2FtYnVyZ2VyKSB7XG4gICAgZ2FtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobmF2V3JhcCkge1xuICAgICAgICBuYXZXcmFwLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LXdyYXBfYWN0aXZlJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChuYXZDbG9zZSkge1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobmF2V3JhcCkge1xuICAgICAgICBuYXZXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LXdyYXBfYWN0aXZlJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAobWVudUNsb3NlKSB7XG4gICAgbWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICAgIGlmIChtZW51KSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9hY3RpdmUnKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cblxuLyogQWNjb3JkaW9uICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJyk7XG5cbiAgaWYgKGFjY29yZGlvbkl0ZW1zKSB7XG4gICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW0tdHJpZ2dlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faXRlbS1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0tYWN0aXZlJykpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLWFjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS1hY3RpdmUnKTtcbiAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19pdGVtLWFjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cblxuLyogU2xpZGVycyAqL1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnJldmlld3NfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzoyLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBncmFiQ3Vyc29yOiB0cnVlLFxuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnJldmlld3NfX25leHQnLFxuICAgICAgcHJldkVsOiAnLnJldmlld3NfX3ByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTJcbiAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDQwXG4gICAgfVxuICB9XG5cblxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcud29ya3NfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzoyLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBncmFiQ3Vyc29yOiB0cnVlLFxuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy53b3Jrc19fbmV4dCcsXG4gICAgICBwcmV2RWw6ICcud29ya3NfX3ByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gOTk5cHhcblxuICAgIDMyMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEyXG4gICAgfSxcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDQwXG4gIH1cblxufVxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuY2VydGlmaWNhdGVfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzozLFxuICBzcGFjZUJldHdlZW46IDQwLFxuICBncmFiQ3Vyc29yOiB0cnVlLFxuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5jZXJ0aWZpY2F0ZV9fbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuY2VydGlmaWNhdGVfX3ByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDk5OXB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMlxuICAgIH0sXG4gICAgNzY5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXG4gICAgICBzcGFjZUJldHdlZW46IDQwXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgIH1cbn1cbn0pO1xuXG5cblxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmFydGljbGVzLXNsaWRlcicsIHtcbiAgc2xpZGVzUGVyVmlldzozLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBncmFiQ3Vyc29yOiB0cnVlLFxuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc2xpZGVyLWJ0bi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc2xpZGVyLWJ0bi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuMDUsXG4gICAgICBzcGFjZUJldHdlZW46IDEyXG4gICAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDQwXG4gICAgfVxuICB9XG5cblxufSk7XG5cblxuXG5cblxuLyogQXJ0aWNsZSAqL1xuXG5jb25zdCBhcnRpY2xlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlX19idG4nKVxuXG5hcnRpY2xlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gYnRuLmNsb3Nlc3QoJy5hcnRpY2xlJylcbiAgICBpZiAoIWFydGljbGUpIHJldHVyblxuICAgIGNvbnN0IGFydGljbGVDb250ZW50ID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fY29udGVudCcpXG4gICAgaWYgKCFhcnRpY2xlQ29udGVudCkgcmV0dXJuXG5cbiAgICBjb25zdCBoaWRkZW5DbHMgPSAnYXJ0aWNsZV9fY29udGVudC0taGlkZGVuJ1xuXG4gICAgYXJ0aWNsZUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShoaWRkZW5DbHMpXG5cbiAgICBpZiAoYXJ0aWNsZUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGhpZGRlbkNscykpIHtcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQn9C+0LrQsNC30LDRgtGMINCx0L7Qu9GM0YjQtSdcblxuICAgICAgLy8gU2Nyb2xsIHRvIGFydGljbGUgYm90dG9tXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgYnRuLm9mZnNldFRvcCArIGJ0bi5vZmZzZXRIZWlnaHQgLSBlLmNsaWVudFkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQodC60YDRi9GC0YwnXG4gICAgfVxuICB9KVxufSlcblxuLy8gaWYgKElNYXNrKSB7XG4vLyAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk7XG4vLyAgIHZhciBtYXNrT3B0aW9ucyA9IHtcbi8vICAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXG4vLyAgICAgbGF6eTogZmFsc2UsXG4vLyAgIH1cbi8vICAgdmFyIG1hc2sgPSBuZXcgSU1hc2soZWxlbWVudCwgbWFza09wdGlvbnMpO1xuLy9cbi8vICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyJyk7XG4vLyAgIHZhciBtYXNrT3B0aW9ucyA9IHtcbi8vICAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXG4vLyAgICAgbGF6eTogZmFsc2Vcbi8vICAgfVxuLy8gICB2YXIgbWFzayA9IG5ldyBJTWFzayhlbGVtZW50LCBtYXNrT3B0aW9ucyk7XG4vL1xuLy8gICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxjLW51bWJlcicpO1xuLy8gICB2YXIgbWFza09wdGlvbnMgPSB7XG4vLyAgICAgbWFzazogJys3KDAwMCkwMDAtMDAtMDAnLFxuLy8gICAgIGxhenk6IGZhbHNlXG4vLyAgIH1cbi8vICAgdmFyIG1hc2sgPSBuZXcgSU1hc2soZWxlbWVudCwgbWFza09wdGlvbnMpO1xuLy8gfVxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLW1vZGFsLWRpYWxvZycpLFxuICAgIG92ZXJsYXkgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1jbG9zZScpO1xuXG4gIC8qIG9wZW4gbW9kYWwqL1xuICBtb2RhbEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihtb2RhbEJ0bil7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgbW9kYWxJZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpLFxuICAgICAgICBtb2RhbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLicrbW9kYWxJZCk7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgIG1vZGFsRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbW9kYWxFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICB9KTsgLy8gZW5kIGNsaWNrXG4gIH0pOyAvLyBlbmQgZm9yZWFjaFxuXG5cbiAgLyogY2xvc2UgbW9kYWwgKi9cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oY2xvc2VCdG4pIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgIHRoaXMuY2xvc2VzdCgnLm1vZGFsLWRpYWxvZycpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICB9KVxuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZihlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8g0K3RgtC+IC0g0LLQsNGI0LAg0YLQvtGH0LrQsCDQstGF0L7QtNCwINC00LvRjyDRgdC60YDQuNC/0YLQvtCyINGB0YLRgNCw0L3QuNGG0YsuINCY0LzQv9C+0YDRgtC40YDRg9C50YLQtSDRgdGO0LTQsCDQvdGD0LbQvdGL0LUg0LLQsNC8INGE0LDQudC70YsuXG5cbmltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VNZW51QnRuIiwicXVlcnlTZWxlY3RvciIsInNlcnZpY2VNZW51IiwiZ2FtYnVyZ2VyIiwibmF2V3JhcCIsIm5hdkNsb3NlIiwibWVudUNsb3NlIiwiYWNjb3JkaW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwicmVtb3ZlIiwibWVudSIsImZvckVhY2giLCJpdGVtIiwidHJpZ2dlciIsImNvbnRlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY29udGFpbnMiLCJzdHlsZSIsImhlaWdodCIsImNoaWxkIiwic2Nyb2xsSGVpZ2h0Iiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImdyYWJDdXJzb3IiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInNwZWVkIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiYXJ0aWNsZUJ0bnMiLCJidG4iLCJlIiwiYXJ0aWNsZSIsImNsb3Nlc3QiLCJhcnRpY2xlQ29udGVudCIsImhpZGRlbkNscyIsInRleHRDb250ZW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRZIiwibW9kYWxCdXR0b25zIiwib3ZlcmxheSIsImNsb3NlQnV0dG9ucyIsIm1vZGFsQnRuIiwicHJldmVudERlZmF1bHQiLCJtb2RhbElkIiwiZ2V0QXR0cmlidXRlIiwibW9kYWxFbGVtIiwiZGlzcGxheSIsImNsb3NlQnRuIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=