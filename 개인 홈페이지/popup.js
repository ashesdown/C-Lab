    const openButton = document.getElementById("box1")
    const modal = document.querySelector(".modal");
    const overlay = modal.querySelector(".overlay")
    const closeBtn = modal.querySelector("#Xbutton")
    const openModal = () => {
      modal.classList.remove("hidden");
    }
    const closeModal = () => {
      modal.classList.add("hidden")
    }
    overlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    openButton.addEventListener("click", openModal);

    // const openButton2 = document.getElementById("box2")
    // const modal2 = document.querySelector(".modal2");
    // const closeBtn2 = modal.querySelector("#Xbutton")
    // const openModal2 = () => {
    //   modal2.classList.remove("hidden");
    // }
    // const closeModal2 = () => {
    //   modal2.classList.add("hidden")
    // }
    // overlay.addEventListener("click", closeModal);
    // closeBtn2.addEventListener("click", closeModal);
    // openButton2.addEventListener("click", openModal);

    // const anistop = document.getElementById("box1")
    // const anibox = document.querySelector(".aniStop");

    // const anipaused = () => {
    //   anibox.classList.remove("aniStop");
    // }

    // const closeModal = () => {
    //   anibox.classList.add("aniStop")
    // }

    // openButton.addEventListener("click", anipaused);