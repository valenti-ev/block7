let call = document.querySelectorAll(".button-call");
console.log("call" , call);
let format = document.querySelector('.call');
let close = document.querySelector(".call__img");
let blur = document.querySelector(".case");
let menu = document.querySelector(".menu");


for (let i=0; i<call.length; i++){
  call[i].addEventListener('click', function () {
    if(format.classList.contains("call-closed")){
      format.classList.remove('call-closed');
      format.classList.add('call-opened');
      blur.classList.add("blur");
      menu.style.visibility='hidden';

    }
    else {
      format.classList.add('call-closed');
      format.classList.remove('call-opened')
      blur.classList.remove("blur");

    }

  });
}

close.addEventListener('click', function ()
  {
    if(format.classList.contains("call-opened")){
      format.classList.remove('call-opened');
      format.classList.add('call-closed');
      blur.classList.remove("blur");
      menu.style.visibility='visible';
    }

  }
)

blur.addEventListener('click', function ()
{
  if(format.classList.contains("call-opened")){
    format.classList.remove('call-opened');
    format.classList.add('call-closed');
    blur.classList.remove("blur");
  }
})
