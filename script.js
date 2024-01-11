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

new TypeError("#type", {
  strings: "Ridnie Chen",
  speed: 50,
  waitUntilVisible: true,
})
  .type("Nvver", { delay: 300 })
  .move(-3)
  .delete(1)
  .type("e")
  .move(null, { to: "END" })
  .type(" let yees")
  .pause(300)
  .delete(2)
  .type("sterday use up to muc")
  .move(-4)
  .type("o")
  .move(null, { to: "END" })
  .type("h of today.")
  .pause(500)
  .break({ delay: 500 })
  .break({ delay: 500 })
  .type("<em>- Will Rogers</em>")
  .go();