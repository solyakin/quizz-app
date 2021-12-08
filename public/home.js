const moreBtn = document.getElementById("moreBtn");
const hamburger = document.querySelector("#hamburger");
const tags = document.querySelector(".dashboard-tags");
const hamList = document.querySelector("#ham-list");
const closeBtn = document.getElementById("close");

let userCard = document.querySelector(".toggler_wrapper");

if(moreBtn){
  moreBtn.addEventListener("click", () => {
    if(userCard.style.display === "none"){
      userCard.style.display = "block";
    }else{
      userCard.style.display = "none";
    }
  })
}


hamburger.addEventListener("click", () => {
  hamList.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  hamList.style.display ="none";
});