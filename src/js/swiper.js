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

    }
  }
}


window.addEventListener("load", () => {
  createSlider();
});

window.addEventListener("resize", () => {
  createSlider();
});


