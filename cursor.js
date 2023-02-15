let cursor = document.createElement("div");
document.querySelector("body").prepend(cursor), (cursor.className = "cursor");
var cursorAnim = {
  delay: 5,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  $cursor: document.querySelector(".cursor"),
  init: function () {
    (this.dotSize = this.$cursor.offsetWidth),
      this.setupEventListeners(),
      this.animateDotOutline();
  },
  setupEventListeners: function () {
    var e = this;
    document
      .querySelectorAll("a")
      .forEach(function (t) {
        t.addEventListener("mouseover", function () {
          t.classList.contains(".titulocard")
            ? (e.toggleCursorSize(!0, 1),
              e.$cursor.classList.add("blur"),(e.$cursor.textContent = t.classList.contains(".titulocard")? "Sound Shape": "View Project")): e.toggleCursorSize(!0);
        }),
          t.addEventListener("mouseout", function () {
            e.toggleCursorSize(!1),
              e.$cursor.classList.remove("blur"),
              (e.$cursor.textContent = "");
          });
      }),
      document.addEventListener("mousemove", function (t) {
        (e.endX = t.clientX), (e.endY = t.clientY);
      }),
      document.addEventListener("mouseenter", function (t) {
        e.$cursor.style.opacity = 1;
      }),
      document.addEventListener("mouseleave", function (t) {
        e.$cursor.style.opacity = 0;
      });
  },
  animateDotOutline: function () {
    var e = this;
    (e._x += (e.endX - e._x) / e.delay),
      (e._y += (e.endY - e._y) / e.delay),
      (e.$cursor.style.translate = `${e._x}px ${e._y}px`),
      requestAnimationFrame(this.animateDotOutline.bind(e));
  },
  toggleCursorSize: function (e, t) {
    this.$cursor.style.transform = e
      ? `translate(-50%, -50%) scale(${t || 0.25})`
      : "translate(-50%, -50%) scale(0.1)";
  },
};
const mediaQuery = window.matchMedia("(min-width: 768px)");
mediaQuery.matches && cursorAnim.init();
