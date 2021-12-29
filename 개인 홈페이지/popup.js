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
    = '<div id="mlabBox"><p id="mlabTitle">Experiment-1:Jules Verne</p><div id="mlabInnerbox"><div id="mlabImg1"><div id="mlabTape1"></div></div><div id="mlabImg2"><div id="mlabTape2"></div></div></div><p id="mlabText">이 조형물은 쥘베른의 세상을 사각화한 것입니다. 윗면은 물에 떠있는 배와 아랫면은 우주가 있습니다. 이는 현실과 상상의 대비를 나타냅니다. 현실에서 물에 빠진 사람은 반대편, 상상의 세계로 이동합니다. 이때 조형물을 회전하게 되면 위와 아래의 구분이 사라집니다. 이는 상상과 현실의 경게를 허무는 쥘베른의 이야기들을 표현한 것입니다.</p></div>';
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