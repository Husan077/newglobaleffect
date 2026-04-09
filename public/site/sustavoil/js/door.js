"use strict";

$(document).ready(function () {
  var o = document.querySelectorAll(".door"),
    r = document.querySelectorAll(".door__sales"),
    c =
      (document.querySelector(".door__wrapper"),
      document.querySelector(".spin-result-wrapper")),
    i =
      (document.querySelector(".pop-up-button"),
      document.querySelector(".order_block"),
      document.getElementById("door__1")),
    u = document.getElementById("door__2"),
    l = document.getElementById("door__3"),
    s = document.getElementById("door__sales1"),
    a = document.getElementById("door__sales2"),
    d = document.getElementById("door__sales3"),
    p = "90%  <br><br> ютуқ";

  function m(e) {
    e.currentTarget.classList.add("open"),
      setTimeout(function () {
        c.style.display = "block";
      }, 2500),
      r.forEach(function (e) {
        i.classList.contains("open")
          ? ((s.innerHTML = p), (a.innerHTML = "—"), (d.innerHTML = "—"))
          : u.classList.contains("open")
          ? ((a.innerHTML = p), (s.innerHTML = "—"), (d.innerHTML = "—"))
          : l.classList.contains("open") &&
            ((s.innerHTML = "—"), (d.innerHTML = p), (a.innerHTML = "—"));
      });

    for (var t = 0; t < o.length; t++)
      !(function (e) {
        o[e].classList.contains("open") ||
          setTimeout(function () {
            o[e].classList.add("open");
          }, 1500);
      })(t);

    for (var n = 0; n < o.length; n++) o[n].removeEventListener("click", m);
    for (var n = 0; n < o.length; n++) o[n].removeEventListener("touchend", m);
  }

  o.forEach(function (e) {
    e.addEventListener("click", m);
  });
}),
  $(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  });

var intr,
  time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3);
}

function tick() {
  if (0 < time) {
    time -= 1;
    var e = Math.floor(time / 60),
      t = 10 <= (t = time - 60 * e) ? t : "0" + t;
    e = e < 10 ? "0" + e : e;
    if (
      (e < 0 && (e = 0), $("#min").html(e), $("#sec").html(t), 0 == e && 0 == t)
    )
      return clearInterval(intr), !1;
  }
}
let flag = false;
function spin() {
  let count_max = 23;
  if (flag == false) {
    let timerId = setInterval(function () {
      if (count_max >= 6) {
        $(".count").text(count_max--);
      } else {
        clearInterval(timerId);
      }
    }, 6000);
    setTimeout(function () {
      $(".door__wrapper").fadeOut(), $(".order_block").fadeIn();
    }, 3e3),
      setTimeout(function () {
        start_timer();
      }, 5e3);
  }
  flag = true;
}
let isClicked = false;
$(".box").click(function () {
  if (!isClicked) {
    spin();
    isClicked = true;
  }
});
