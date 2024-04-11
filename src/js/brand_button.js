import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const mobile = window.matchMedia("(min-width: 320px) and (max-width: 767px)");
// const desktop = window.matchMedia("(min-width: 768px) and (max-width: 2560px)");

const list = document.querySelector(".swiper-wrapper");

  if(mobile.matches) {
    list.classList.remove("brand-list");
    list.classList.remove("overflow-block");
  }
  else {
      list.classList.add("brand-list");
      list.classList.add("overflow-block");
}



const button = document.querySelector(".more");
const text = document.querySelector(".more__button");
const cursor = document.querySelector(".more__cursor");


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
