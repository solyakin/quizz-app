const toogleIcon = document.querySelector(".toggle-icon");
const white = document.querySelector(".white");
const toogleIcon2 = document.querySelector(".toggle-icon2");
const white2 = document.querySelector(".white2");

if(toogleIcon){
  toogleIcon.addEventListener(("click"), () => {
    white.classList.toggle("toggle-move");
    toogleIcon.classList.toggle('effect');
  })
}
if(toogleIcon2){
    toogleIcon2.addEventListener(("click"), () => {
        white2.classList.toggle("toggle-move2");
        toogleIcon2.classList.toggle('effect2');
      })
}