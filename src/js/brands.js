import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const mobile = window.matchMedia("(min-width: 320px) and (max-width: 767px)");
// const desktop = window.matchMedia("(min-width: 768px) and (max-width: 2560px)");

let sliders;
const swiperContainer = document.querySelector(".swiper-container");
const list = document.querySelector(".swiper-wrapper");
Swiper.use([Navigation, Pagination]);
function createSlider(){

  if(mobile.matches) {
    list.classList.remove("brand-list");
    list.classList.remove("overflow-block");
    if (!swiperContainer.classList.contains("swiper-initialized")){
      sliders = new Swiper(".swiper", {centeredSlides: false,
        centeredSlidesBounds: true,
        watchOverflow: true,
        direction: 'horizontal',
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          390: {
            slidesPerView: 1.4,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 1.8,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 40
          }
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 12,
          clickable: true,
        },

      }) ;
    }
  }
  else {
    if (swiperContainer.classList.contains("swiper-initialized") && !sliders[0].destroyed) {
      for (let i=0; i< sliders.length; i++) {
        sliders[i].destroy();
      }
      list.classList.add("brand-list");
    // list.classList.remove("swiper-wrapper");
    // // скрываем часть блока
    list.classList.add("overflow-block");
    }
  }
}


window.addEventListener("load", () => {
  createSlider();
});

window.addEventListener("resize", () => {
  createSlider();
});




const button = document.querySelector(".more");
const text = document.querySelector(".more__button");
const cursor = document.querySelector(".more__cursor");

// /* On Load
//  **************************************************************/
// window.addEventListener("load", function () {
//   if (mobile.matches) {
//     list.classList.add("swiper-wrapper");
//     swiperInit();
//   }
//
//   if (desktop.matches) {
//     list.classList.add("swiper-wrapper");
//     const slider = swiperInit();
//     slider.destroy();
//     // добавляем гриды
//     list.classList.add("brand-list");
//     list.classList.remove("swiper-wrapper");
//     // скрываем часть блока
//     list.classList.add("overflow-block");
//   } else {
//     list.classList.remove("brand-list");
//     list.classList.remove("overflow-block");
//   }
// });

/* On Resize
 **************************************************************/
// window.addEventListener("resize", function () {
//   if (mobile.matches) {
//     list.classList.add("swiper-wrapper");
//     swiperInit();
//   }
//
//   if (desktop.matches) {
//     list.classList.add("swiper-wrapper");
//     const slider = swiperInit();
//     slider.destroy();
//     // добавляем гриды
//     list.classList.add("brand-list");
//     list.classList.remove("swiper-wrapper");
//     // скрываем часть блока
//     list.classList.add("overflow-block");
//   } else {
//     list.classList.remove("brand-list");
//     list.classList.remove("overflow-block");
//   }
// });




button.addEventListener("click", function () {
  if (list.classList.contains("add-width")) {
    list.classList.remove("add-width");
    text.innerHTML = "<p class='more__button'>Показать все</p>";
    cursor.classList.remove("more__cursor__active");
  } else {
    list.classList.add("add-width");
    text.innerHTML = "<p class='more__button'>Скрыть</p>";
    cursor.classList.add("more__cursor__active");
  }
});
