window.addEventListener('DOMContentLoaded', () => {

  // Tabs

  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  function hideTAbContent() { 
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTAbContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTAbContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadLine = '2021-12-11';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 *60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    }; // обьект возвращаем
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock(); // убирает мигание таймера (1000 мсек) при обновлении страницы, 

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadLine);

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  };

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  };
      
  // modalTrigger.addEventListener('click', () => {
  //   // modal.classList.add('show');
  //   // modal.classList.remove('hide');
  //   modal.classList.toggle('show');
  //   document.body.style.overflow = 'hidden';
  // });

  modalCloseBtn.addEventListener('click', () => {
    closeModal();
  });

  window.addEventListener('click', (event) => {
    if(event.target == modal) {
    closeModal();
    }
  });

  document.addEventListener('keyup', (event) => {
    if(event.code == 'Escape' && modal.classList.contains('show')) {
    closeModal();
    };
  });
  
  // const modalTimerId = setTimeout(openModal, 5000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  // Классы для карточек

  // let menu__field = document.querySelector('.menu__field');
  // let container = menu__field.querySelector('.container');


  class CardMenu {
    constructor (pic, alt, menuSubtitle, menuDescr, total, parentSelector, ...classes) {
      this.pic = pic;
      this.alt = alt;
      this.menuSubtitle = menuSubtitle;
      this.menuDescr = menuDescr;
      this.total = total;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.total = this.total * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML += `
        <img src=${this.pic} alt=${this.alt}>
        <h3 class="menu__item-subtitle">Меню ${this.menuSubtitle}</h3>
        <div class="menu__item-descr">${this.menuDescr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.total}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  new CardMenu(
    "img/tabs/vegy.jpg",
    "vegy",
    '"Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    13,
    '.menu .container',
    // 'menu__item',
    // 'big',
  ).render();

  new CardMenu(
    "img/tabs/elite.jpg",
    "elite",
    '“Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    6,
    '.menu .container',
    'menu__item',
    'big',
  ).render();

  new CardMenu(
    "img/tabs/post.jpg",
    "post",
    '"Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    '.menu .container',
    'menu__item',
    'big',
  ).render();
});