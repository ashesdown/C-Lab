var balls = document.getElementsByClassName("ball");
  document.onmousemove = function(event){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for(var i=0;i<2;i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-"+x+",-"+y+")";}
  };

function mouseAniBefore(){
  let upMouse = document.getElementById('upMouse')
  let downMouse = document.getElementById('downMouse')
  let tooth1 = document.getElementById('toothUp')
  let tooth2 = document.getElementById('toothDown')

  upMouse.style.top = '-50%'
  downMouse.style.bottom = '-50%'
  tooth1.style.top = '0px'
  tooth2.style.bottom = '0px'
}

function mouseAniAfter(){
  let upMouse = document.getElementById('upMouse')
  let downMouse = document.getElementById('downMouse')
  let tooth1 = document.getElementById('toothUp')
  let tooth2 = document.getElementById('toothDown')

  upMouse.style.top = '0px'
  downMouse.style.bottom = '0px'
  tooth1.style.top = '50%'
  tooth2.style.bottom = '50%'
}

