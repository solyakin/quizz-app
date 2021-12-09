const moreBtn = document.getElementById("moreBtn");
const userMore = document.querySelector("#user_more");
const hamburger = document.querySelector("#hamburger");
const tags = document.querySelector(".dashboard-tags");
const hamList = document.querySelector("#ham-list");
const closeBtn = document.getElementById("close");

let userCard = document.querySelector(".toggler_wrapper");
let profileCard = document.querySelector(".edit-user");

if(moreBtn){
  moreBtn.addEventListener("click", () => {
    if(userCard.style.display === "none"){
      userCard.style.display = "block";
    }else{
      userCard.style.display = "none";
    }
  })
}
if(userMore){
  userMore.addEventListener("click", () => {
    console.log("click")
    if(userCard.style.display === "none"){
      userCard.style.display = "block";
    }else{
      userCard.style.display = "none";
    }
  })
}
if(hamburger){
  hamburger.addEventListener("click", () => {
    hamList.style.display = "block";
  });
}
if(closeBtn){
  closeBtn.addEventListener("click", () => {
    hamList.style.display ="none";
  });
}


const toogleIcon = document.querySelector(".toggle-icon");
const white = document.querySelector(".white");
if(toogleIcon){
  toogleIcon.addEventListener(("click"), () => {
    white.classList.toggle("toggle-move");
    toogleIcon.classList.toggle('effect');
  })
}
