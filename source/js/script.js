document.addEventListener('DOMContentLoaded', function() {
  const serviceMenuBtn = document.querySelector('.header__service-menu-btn');
  const serviceMenu = document.querySelector('.header__service-menu');
  const gamburger = document.querySelector('.header__gamburger');
  const navWrap = document.querySelector('.header__nav-wrap');
  const navClose = document.querySelector('.header__nav-close');
  const menuClose = document.querySelector('.menu__close');
  const accordionItems = document.querySelectorAll('.accordion__item-trigger');

  if (serviceMenuBtn) {
    serviceMenuBtn.addEventListener('click', function() {
      this.classList.toggle('header__service-menu-btn_active');
      serviceMenu.classList.toggle('header__service-menu_active');
    });
  }

  if (gamburger) {
    gamburger.addEventListener('click', function() {
      if (navWrap) {
        navWrap.classList.add('header__nav-wrap_active');
        // document.documentElement.style.overflowY = 'hidden';
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', function() {
      if (navWrap) {
        navWrap.classList.remove('header__nav-wrap_active');
        // document.documentElement.style.overflowY = 'auto';
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function() {
      const menu = document.querySelector('.menu');
      if (menu) {
        menu.classList.remove('menu_active');
        // document.documentElement.style.overflowY = 'auto';
      }
    });
  }

  if (accordionItems) {
    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
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
  slidesPerView:2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
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
  slidesPerView:2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,

  navigation: {
      nextEl: '.works__next',
      prevEl: '.works__prev',
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
  slidesPerView:3,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,

  navigation: {
      nextEl: '.certificate__next',
      prevEl: '.certificate__prev',
  }

});

/* Article */

const articleBtns = document.querySelectorAll('.article__btn')

articleBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const article = btn.closest('.article')
    if (!article) return
    const articleContent = article.querySelector('.article__content')
    if (!articleContent) return

    const hiddenCls = 'article__content--hidden'

    articleContent.classList.toggle(hiddenCls)

    if (articleContent.classList.contains(hiddenCls)) {
      btn.textContent = 'Показать больше'

      // Scroll to article bottom
      window.scrollTo(0, btn.offsetTop + btn.offsetHeight - e.clientY)
    } else {
      btn.textContent = 'Скрыть'
    }
  })
})

var element = document.getElementById('phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false,
}
var mask = new IMask(element, maskOptions);

var element = document.getElementById('number');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
var mask = new IMask(element, maskOptions);

var element = document.getElementById('calc-number');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
var mask = new IMask(element, maskOptions);




