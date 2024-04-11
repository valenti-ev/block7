let menu = document.querySelector(".menu");
let burger = document.querySelector('.gamburger');
let cross = document.querySelector(".cross");
let blur = document.querySelector(".case");
console.log("blur", blur)
// let transparent = document.querySelector(".transparent")
burger.addEventListener('click', function () {
  if(menu.classList.contains("menu-closed")){
    menu.classList.remove('menu-closed');
  menu.classList.add('menu-opened');
  blur.classList.add("blur")}
else {
    menu.classList.add('menu-closed');
    menu.classList.remove('menu-opened');
    blur.classList.remove("blur")}

});
cross.addEventListener('click', function ()
  {
    if(menu.classList.contains("menu-opened")){
      menu.classList.remove('menu-opened');
      menu.classList.add('menu-closed');
      blur.classList.remove("blur")}

  }
)

blur.addEventListener('click', function ()
{
  if(menu.classList.contains("menu-opened")){
    menu.classList.remove('menu-opened');
    menu.classList.add('menu-closed');
    blur.classList.remove("blur");

  }
})



