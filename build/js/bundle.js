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
      slidesPerView: 1.05,
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
  var modalButtons = document.querySelectorAll('.open-modal-dialog');
  var overlay = document.querySelector('body');
  var closeButtons = document.querySelectorAll('.modal-dialog .modal-close');
  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src');
      var modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';
      setTimeout(function () {
        modalElem.classList.add('modal-opening');
        resolve();
      }, 0);
    });
  }
  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');
      setTimeout(function () {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500); // Подстраивайте это значение под длительность вашей анимации
    });
  }

  /* open modal */
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', async function (e) {
      await closeModal(closeBtn);
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', async function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBRixZQUFZLENBQUN4RCxPQUFPLENBQUMsVUFBVW1FLFFBQVEsRUFBRTtJQUN2Q0EsUUFBUSxDQUFDckYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQjhDLENBQUMsRUFBRTtNQUNwRCxNQUFNc0MsVUFBVSxDQUFDQyxRQUFRLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUZ0RixRQUFRLENBQUNVLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBVUMsSUFBSSxFQUFFO0lBQ2pFQSxJQUFJLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCOEMsQ0FBQyxFQUFFO01BQ2hELElBQUlBLENBQUMsQ0FBQzBDLE1BQU0sS0FBSzFDLENBQUMsQ0FBQzJDLGFBQWEsRUFBRTtRQUNoQztNQUNGLENBQUMsTUFBTTtRQUNMLE1BQU1MLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7OztVQ3BVRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBzZXJ2aWNlTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlcnZpY2UtbWVudS1idG4nKTtcbiAgY29uc3Qgc2VydmljZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZXJ2aWNlLW1lbnUnKTtcbiAgY29uc3QgZ2FtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fZ2FtYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtd3JhcCcpO1xuICBjb25zdCBuYXZDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1jbG9zZScpO1xuICBjb25zdCBtZW51Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fY2xvc2UnKTtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtLXRyaWdnZXInKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYgKHNlcnZpY2VNZW51QnRuKSB7XG4gICAgc2VydmljZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19zZXJ2aWNlLW1lbnUtYnRuX2FjdGl2ZScpO1xuICAgICAgc2VydmljZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19zZXJ2aWNlLW1lbnVfYWN0aXZlJyk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gYm9keS5zdHlsZS5vdmVyZmxvdyA9PT0gJ2hpZGRlbicgPyAnYXV0bycgOiAnaGlkZGVuJztcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChnYW1idXJnZXIpIHtcbiAgICBnYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChuYXZXcmFwKSB7XG4gICAgICAgIG5hdldyYXAuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtd3JhcF9hY3RpdmUnKTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG5hdkNsb3NlKSB7XG4gICAgbmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChuYXZXcmFwKSB7XG4gICAgICAgIG5hdldyYXAuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtd3JhcF9hY3RpdmUnKTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChtZW51Q2xvc2UpIHtcbiAgICBtZW51Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgICAgaWYgKG1lbnUpIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X2FjdGl2ZScpO1xuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuXG5cbi8qIEFjY29yZGlvbiAqL1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpO1xuXG4gIGlmIChhY2NvcmRpb25JdGVtcykge1xuICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtLXRyaWdnZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2l0ZW0tY29udGVudCcpO1xuXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19pdGVtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS1hY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2l0ZW0tYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19pdGVtLWNvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faXRlbS1hY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cbi8qIFNsaWRlcnMgKi9cblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5yZXZpZXdzX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6MixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5yZXZpZXdzX19uZXh0JyxcbiAgICAgIHByZXZFbDogJy5yZXZpZXdzX19wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuMDUsXG4gICAgICBzcGFjZUJldHdlZW46IDEyXG4gIH0sXG4gICAgOTkyOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgIH1cbiAgfVxuXG5cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLndvcmtzX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6MixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcud29ya3NfX25leHQnLFxuICAgICAgcHJldkVsOiAnLndvcmtzX19wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcblxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDk5OXB4XG5cbiAgICAzMjA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMlxuICAgIH0sXG4gICAgNzY5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXG4gICAgICBzcGFjZUJldHdlZW46IDQwXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICB9XG5cbn1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmNlcnRpZmljYXRlX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6MyxcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuY2VydGlmaWNhdGVfX25leHQnLFxuICAgICAgcHJldkVsOiAnLmNlcnRpZmljYXRlX19wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA5OTlweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTJcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDBcbiAgICB9XG59XG59KTtcblxuXG5cblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5hcnRpY2xlcy1zbGlkZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6MyxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnNsaWRlci1idG4tbmV4dCcsXG4gICAgcHJldkVsOiAnLnNsaWRlci1idG4tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjA1LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMlxuICAgIH0sXG4gICAgOTkyOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgIH1cbiAgfVxuXG5cbn0pO1xuXG5cblxuXG5cbi8qIEFydGljbGUgKi9cblxuY29uc3QgYXJ0aWNsZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZV9fYnRuJylcblxuYXJ0aWNsZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGJ0bi5jbG9zZXN0KCcuYXJ0aWNsZScpXG4gICAgaWYgKCFhcnRpY2xlKSByZXR1cm5cbiAgICBjb25zdCBhcnRpY2xlQ29udGVudCA9IGFydGljbGUucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2NvbnRlbnQnKVxuICAgIGlmICghYXJ0aWNsZUNvbnRlbnQpIHJldHVyblxuXG4gICAgY29uc3QgaGlkZGVuQ2xzID0gJ2FydGljbGVfX2NvbnRlbnQtLWhpZGRlbidcblxuICAgIGFydGljbGVDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoaGlkZGVuQ2xzKVxuXG4gICAgaWYgKGFydGljbGVDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhoaWRkZW5DbHMpKSB7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSAn0J/QvtC60LDQt9Cw0YLRjCDQsdC+0LvRjNGI0LUnXG5cbiAgICAgIC8vIFNjcm9sbCB0byBhcnRpY2xlIGJvdHRvbVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGJ0bi5vZmZzZXRUb3AgKyBidG4ub2Zmc2V0SGVpZ2h0IC0gZS5jbGllbnRZKVxuICAgIH0gZWxzZSB7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSAn0KHQutGA0YvRgtGMJ1xuICAgIH1cbiAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgaWYgKElNYXNrKSB7XG4gICAgdmFyIHBob25lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUnKTtcbiAgICBwaG9uZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHBob25lRWxlbWVudCkge1xuICAgICAgdmFyIHBob25lTWFza09wdGlvbnMgPSB7XG4gICAgICAgIG1hc2s6ICcrNygwMDApMDAwLTAwLTAwJyxcbiAgICAgICAgbGF6eTogZmFsc2UsXG4gICAgICB9O1xuICAgICAgdmFyIHBob25lTWFzayA9IG5ldyBJTWFzayhwaG9uZUVsZW1lbnQsIHBob25lTWFza09wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdmFyIG51bWJlckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlcicpO1xuICAgIG51bWJlckVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG51bWJlckVsZW1lbnQpIHtcbiAgICAgIHZhciBudW1iZXJNYXNrT3B0aW9ucyA9IHtcbiAgICAgICAgbWFzazogJys3KDAwMCkwMDAtMDAtMDAnLFxuICAgICAgICBsYXp5OiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciBudW1iZXJNYXNrID0gbmV3IElNYXNrKG51bWJlckVsZW1lbnQsIG51bWJlck1hc2tPcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHZhciBjYWxjTnVtYmVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsYy1udW1iZXInKTtcbiAgICBjYWxjTnVtYmVyRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2FsY051bWJlckVsZW1lbnQpIHtcbiAgICAgIHZhciBjYWxjTnVtYmVyTWFza09wdGlvbnMgPSB7XG4gICAgICAgIG1hc2s6ICcrNygwMDApMDAwLTAwLTAwJyxcbiAgICAgICAgbGF6eTogZmFsc2VcbiAgICAgIH07XG4gICAgICB2YXIgY2FsY051bWJlck1hc2sgPSBuZXcgSU1hc2soY2FsY051bWJlckVsZW1lbnQsIGNhbGNOdW1iZXJNYXNrT3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1tb2RhbC1kaWFsb2cnKTtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIHZhciBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1jbG9zZScpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbEJ0bikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBtb2RhbElkID0gbW9kYWxCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgICAgdmFyIG1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cuJyArIG1vZGFsSWQpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2xvc2VNb2RhbChjbG9zZUJ0bikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBtb2RhbCA9IGNsb3NlQnRuLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NpbmcnKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWNsb3NpbmcnKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDUwMCk7IC8vINCf0L7QtNGB0YLRgNCw0LjQstCw0LnRgtC1INGN0YLQviDQt9C90LDRh9C10L3QuNC1INC/0L7QtCDQtNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LLQsNGI0LXQuSDQsNC90LjQvNCw0YbQuNC4XG4gICAgfSk7XG4gIH1cblxuICAvKiBvcGVuIG1vZGFsICovXG4gIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RhbEJ0bikge1xuICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGF3YWl0IG9wZW5Nb2RhbChtb2RhbEJ0bik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8qIGNsb3NlIG1vZGFsICovXG4gIGNsb3NlQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9zZUJ0bikge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGF3YWl0IGNsb3NlTW9kYWwoY2xvc2VCdG4pO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nJykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgY2xvc2VNb2RhbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZU1lbnVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic2VydmljZU1lbnUiLCJnYW1idXJnZXIiLCJuYXZXcmFwIiwibmF2Q2xvc2UiLCJtZW51Q2xvc2UiLCJhY2NvcmRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic3R5bGUiLCJvdmVyZmxvdyIsImFkZCIsInJlbW92ZSIsIm1lbnUiLCJmb3JFYWNoIiwiaXRlbSIsInRyaWdnZXIiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIiwiaGVpZ2h0IiwiY2hpbGQiLCJzY3JvbGxIZWlnaHQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZ3JhYkN1cnNvciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwic3BlZWQiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJhcnRpY2xlQnRucyIsImJ0biIsImUiLCJhcnRpY2xlIiwiY2xvc2VzdCIsImFydGljbGVDb250ZW50IiwiaGlkZGVuQ2xzIiwidGV4dENvbnRlbnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImNsaWVudFkiLCJJTWFzayIsInBob25lRWxlbWVudHMiLCJwaG9uZUVsZW1lbnQiLCJwaG9uZU1hc2tPcHRpb25zIiwibWFzayIsImxhenkiLCJwaG9uZU1hc2siLCJudW1iZXJFbGVtZW50cyIsIm51bWJlckVsZW1lbnQiLCJudW1iZXJNYXNrT3B0aW9ucyIsIm51bWJlck1hc2siLCJjYWxjTnVtYmVyRWxlbWVudHMiLCJjYWxjTnVtYmVyRWxlbWVudCIsImNhbGNOdW1iZXJNYXNrT3B0aW9ucyIsImNhbGNOdW1iZXJNYXNrIiwibW9kYWxCdXR0b25zIiwib3ZlcmxheSIsImNsb3NlQnV0dG9ucyIsIm9wZW5Nb2RhbCIsIm1vZGFsQnRuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJtb2RhbElkIiwiZ2V0QXR0cmlidXRlIiwibW9kYWxFbGVtIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsIiwiY2xvc2VCdG4iLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=