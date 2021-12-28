const openButtons = document.querySelectorAll("#box1, #box2, #box3, #box4")
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const closeBtn = document.querySelectorAll("#Xbutton");
const element = document.getElementsByClassName('content')[0];

const openModal = () => {
  console.log(modal)
  modal[0].classList.remove("hidden");
}
const closeModal = () => {
  modal[0].classList.add("hidden");
}
function modalContent1() {
  element.innerHTML
    = '<div><div id="img1"></div></div>';
  modal.classList.add("modaldesign1")
}

function modalContent2() {
  element.innerHTML
    = '<div><div>';
    modal.classList.add("modaldesign2")
}

function modalContent3() {
  element.innerHTML
    = '<div><div>';
    modal.classList.add("modaldesign3")
}

function modalContent4() {
  element.innerHTML
    = '<div><div>';
    modal.classList.add("modaldesign4")
}
// overlay.addEventListener("click", closeModal);
// closeBtn.addEventListener("click", closeModal);

for (var i in openButtons) {
  var openButton = openButtons[i]
  if (openButton.addEventListener !== undefined) {
    openButton.addEventListener("click", openModal);
  }
}

for (var i in closeBtn) {
  var closeButton = closeBtn[i]
  if (closeButton.addEventListener !== undefined) {
    closeButton.addEventListener("click", closeModal);
  }
}