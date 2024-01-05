let bow = document.querySelector('#bow')
bow.style.position = 'absolute';
let body = document.querySelector("body");
body.addEventListener(
  "mousemove",
  function (event) {
    bow.style.left = event.pageX - 100 + 'px';
    bow.style.top = event.pageY - 60 + 'px'
  }
)