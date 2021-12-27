const openButton = document.querySelectorAll("#box1, #box2, #box3, #box4")
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay")
const closeBtn = document.querySelectorAll("#Xbutton")
const element = document.getElementsByClassName('content')[0];

const openModal = () => {
  modal.classList.remove("hidden");
}
const closeModal = () => {
  modal.classList.add("hidden")
}
function modalContent1() {
  element.innerHTML
    = '<div style="color:blue">InnerHTML<div>';
}

function modalContent2() {
  element.innerHTML
    = '<div style="color:blue">wow<div>';
}

function modalContent3() {
  element.innerHTML
    = '<div style="color:blue">hey<div>';
}

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);