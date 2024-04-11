import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const mobile = window.matchMedia("(min-width: 320px) and (max-width: 767px)");
// const desktop = window.matchMedia("(min-width: 768px) and (max-width: 2560px)");

const list = document.querySelector(".repairs");

if(mobile.matches) {
  list.classList.remove("brand-list");
  list.classList.remove("overflow-block");
}
else {
  list.classList.add("brand-list");
  list.classList.add("overflow-block");
}



const point = document.querySelector(".repairs");
const snap = document.querySelector(".over");
const info = document.querySelector(".over__button");
const finger = document.querySelector(".over__cursor");


snap.addEventListener("click", function () {
  console.log("нажать");
  if (point.classList.contains("append-width")) {
    point.classList.remove("append-width");
    info.innerHTML = "<p class='over__button'>Показать все</p>";
    finger.classList.remove("over__cursor__active");
  } else {
    point.classList.add("append-width");
    info.innerHTML = "<p class='over__button'>Скрыть</p>";
    finger.classList.add("over__cursor__active");
  }
});
