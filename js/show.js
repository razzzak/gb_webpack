const timerHide = document.querySelector(".thide");
const showDivOne = document.querySelector(".show");
timerHide.addEventListener("click", () => {
  showDivOne.style.display = "none";
});

const timerShow = document.querySelector(".tshow");
const showDivTwo = document.querySelector(".show");
timerShow.addEventListener("click", () => {
  showDivTwo.style.display = "flex";
});
