window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollPosition = window.scrollY;
  var threshold = 100;

  if (scrollPosition > threshold) {
    navbar.style.cssText =
      "background-color:#7e57c2;position:fixed;z-index: 10000;top:0";
  } else {
    navbar.style.backgroundColor = "";
  }
});
