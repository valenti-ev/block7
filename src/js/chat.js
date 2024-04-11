let chat = document.querySelectorAll(".button-chat");
console.log("чат" , chat);
let form = document.querySelector('.chat');
let cros = document.querySelector(".chat__img");
let blur = document.querySelector(".case");
let menu = document.querySelector(".menu");

for (let i=0; i<chat.length; i++){
  chat[i].addEventListener('click', function () {
    if(form.classList.contains("chat-closed")){
      form.classList.remove('chat-closed');
      form.classList.add('chat-opened');
      blur.classList.add("blur");
      menu.style.visibility='hidden';
    }
    else {
      form.classList.add('chat-closed');
      form.classList.remove('chat-opened')
      blur.classList.remove("blur");

    }

  });
}

cros.addEventListener('click', function ()
  {
    if(form.classList.contains("chat-opened")){
      form.classList.remove('chat-opened');
      form.classList.add('chat-closed');
      blur.classList.remove("blur");
      menu.style.visibility='visible';}

  }
)


blur.addEventListener('click', function ()
{
  if(form.classList.contains("chat-opened")){
    form.classList.remove('chat-opened');
    form.classList.add('chat-closed');
    blur.classList.remove("blur");
  }
})
