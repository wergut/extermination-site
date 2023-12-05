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

  if (accordionItems) {
    accordionItems.forEach(item => {
      item.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('accordion__item-active')) {
          parent.classList.remove('accordion__item-active');
        } else {
          document.querySelectorAll('.accordion__item').forEach(child => {
            child.classList.remove('accordion__item-active');
          });
          parent.classList.add('accordion__item-active');
        }
      });
    });
  }
});

/* Sliders */

var swiper = new Swiper('.reviews__swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
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
  loop: true,
  grabCursor: true,
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
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.certificate__next',
    prevEl: '.certificate__prev'
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
var element = document.getElementById('phone');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);
var element = document.getElementById('number');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);
var element = document.getElementById('calc-number');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDZEMsSUFBSSxFQUFFLGtCQUFrQjtFQUN4QkMsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUNELElBQUlELElBQUksR0FBRyxJQUFJRSxLQUFLLENBQUNMLE9BQU8sRUFBRUUsV0FBVyxDQUFDO0FBRTFDLElBQUlGLE9BQU8sR0FBR2hELFFBQVEsQ0FBQ2lELGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDL0MsSUFBSUMsV0FBVyxHQUFHO0VBQ2RDLElBQUksRUFBRSxrQkFBa0I7RUFDeEJDLElBQUksRUFBRTtBQUNWLENBQUM7QUFDRCxJQUFJRCxJQUFJLEdBQUcsSUFBSUUsS0FBSyxDQUFDTCxPQUFPLEVBQUVFLFdBQVcsQ0FBQztBQUUxQyxJQUFJRixPQUFPLEdBQUdoRCxRQUFRLENBQUNpRCxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3BELElBQUlDLFdBQVcsR0FBRztFQUNkQyxJQUFJLEVBQUUsa0JBQWtCO0VBQ3hCQyxJQUFJLEVBQUU7QUFDVixDQUFDO0FBQ0QsSUFBSUQsSUFBSSxHQUFHLElBQUlFLEtBQUssQ0FBQ0wsT0FBTyxFQUFFRSxXQUFXLENBQUM7Ozs7OztVQ3BMMUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VydmljZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZXJ2aWNlLW1lbnUtYnRuJyk7XG4gIGNvbnN0IHNlcnZpY2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VydmljZS1tZW51Jyk7XG4gIGNvbnN0IGdhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2dhbWJ1cmdlcicpO1xuICBjb25zdCBuYXZXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXdyYXAnKTtcbiAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtY2xvc2UnKTtcbiAgY29uc3QgbWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2Nsb3NlJyk7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbS10cmlnZ2VyJyk7XG5cbiAgaWYgKHNlcnZpY2VNZW51QnRuKSB7XG4gICAgc2VydmljZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19zZXJ2aWNlLW1lbnUtYnRuX2FjdGl2ZScpO1xuICAgICAgc2VydmljZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19zZXJ2aWNlLW1lbnVfYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZ2FtYnVyZ2VyKSB7XG4gICAgZ2FtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobmF2V3JhcCkge1xuICAgICAgICBuYXZXcmFwLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LXdyYXBfYWN0aXZlJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChuYXZDbG9zZSkge1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobmF2V3JhcCkge1xuICAgICAgICBuYXZXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LXdyYXBfYWN0aXZlJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAobWVudUNsb3NlKSB7XG4gICAgbWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICAgIGlmIChtZW51KSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9hY3RpdmUnKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChhY2NvcmRpb25JdGVtcykge1xuICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS1hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cbi8qIFNsaWRlcnMgKi9cblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5yZXZpZXdzX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6MixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbG9vcDogdHJ1ZSxcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcucmV2aWV3c19fbmV4dCcsXG4gICAgICBwcmV2RWw6ICcucmV2aWV3c19fcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMlxuICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgICB9XG4gIH1cblxuXG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy53b3Jrc19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OjIsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGxvb3A6IHRydWUsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLndvcmtzX19uZXh0JyxcbiAgICAgIHByZXZFbDogJy53b3Jrc19fcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG5cbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA5OTlweFxuXG4gICAgMzIwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTJcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgfVxuXG59XG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5jZXJ0aWZpY2F0ZV9fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OjMsXG4gIHNwYWNlQmV0d2VlbjogNDAsXG4gIGxvb3A6IHRydWUsXG4gIGdyYWJDdXJzb3I6IHRydWUsXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLmNlcnRpZmljYXRlX19uZXh0JyxcbiAgICAgIHByZXZFbDogJy5jZXJ0aWZpY2F0ZV9fcHJldicsXG4gIH1cblxufSk7XG5cbi8qIEFydGljbGUgKi9cblxuY29uc3QgYXJ0aWNsZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZV9fYnRuJylcblxuYXJ0aWNsZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGJ0bi5jbG9zZXN0KCcuYXJ0aWNsZScpXG4gICAgaWYgKCFhcnRpY2xlKSByZXR1cm5cbiAgICBjb25zdCBhcnRpY2xlQ29udGVudCA9IGFydGljbGUucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2NvbnRlbnQnKVxuICAgIGlmICghYXJ0aWNsZUNvbnRlbnQpIHJldHVyblxuXG4gICAgY29uc3QgaGlkZGVuQ2xzID0gJ2FydGljbGVfX2NvbnRlbnQtLWhpZGRlbidcblxuICAgIGFydGljbGVDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoaGlkZGVuQ2xzKVxuXG4gICAgaWYgKGFydGljbGVDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhoaWRkZW5DbHMpKSB7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSAn0J/QvtC60LDQt9Cw0YLRjCDQsdC+0LvRjNGI0LUnXG5cbiAgICAgIC8vIFNjcm9sbCB0byBhcnRpY2xlIGJvdHRvbVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGJ0bi5vZmZzZXRUb3AgKyBidG4ub2Zmc2V0SGVpZ2h0IC0gZS5jbGllbnRZKVxuICAgIH0gZWxzZSB7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSAn0KHQutGA0YvRgtGMJ1xuICAgIH1cbiAgfSlcbn0pXG5cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk7XG52YXIgbWFza09wdGlvbnMgPSB7XG4gICAgbWFzazogJys3KDAwMCkwMDAtMDAtMDAnLFxuICAgIGxhenk6IGZhbHNlLFxufVxudmFyIG1hc2sgPSBuZXcgSU1hc2soZWxlbWVudCwgbWFza09wdGlvbnMpO1xuXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1iZXInKTtcbnZhciBtYXNrT3B0aW9ucyA9IHtcbiAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXG4gICAgbGF6eTogZmFsc2Vcbn1cbnZhciBtYXNrID0gbmV3IElNYXNrKGVsZW1lbnQsIG1hc2tPcHRpb25zKTtcblxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FsYy1udW1iZXInKTtcbnZhciBtYXNrT3B0aW9ucyA9IHtcbiAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXG4gICAgbGF6eTogZmFsc2Vcbn1cbnZhciBtYXNrID0gbmV3IElNYXNrKGVsZW1lbnQsIG1hc2tPcHRpb25zKTtcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlTWVudUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzZXJ2aWNlTWVudSIsImdhbWJ1cmdlciIsIm5hdldyYXAiLCJuYXZDbG9zZSIsIm1lbnVDbG9zZSIsImFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZCIsInJlbW92ZSIsIm1lbnUiLCJmb3JFYWNoIiwiaXRlbSIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjb250YWlucyIsImNoaWxkIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJncmFiQ3Vyc29yIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiYXJ0aWNsZUJ0bnMiLCJidG4iLCJlIiwiYXJ0aWNsZSIsImNsb3Nlc3QiLCJhcnRpY2xlQ29udGVudCIsImhpZGRlbkNscyIsInRleHRDb250ZW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRZIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFza09wdGlvbnMiLCJtYXNrIiwibGF6eSIsIklNYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==