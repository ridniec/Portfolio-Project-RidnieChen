let wand = document.querySelector('#wand')
wand.style.position = 'absolute';
let body = document.querySelector("body");
body.addEventListener(
  "mousemove",
  function (event) {
    wand.style.left = event.pageX - 20 + 'px';
    wand.style.top = event.pageY - 20 + 'px'
  }
)
