let hadithContainer = document.querySelector(".hadithContainer"),
  next = document.querySelector(".buttons .next"),
  prev = document.querySelector(".buttons .prev"),
  number = document.querySelector(".buttons .number");
let hadithIndex = 0;
HadithChanger();
function HadithChanger() {
  fetch("https://api.hadith.gading.dev/books/bukhari?range=300-500")
    .then((response) => response.json())
    .then((data) => {
      let Hadiths = data.data.hadiths;
      changeHadith();
      next.addEventListener("click", () => {
        hadithIndex == 299 ? (hadithIndex = 0) : hadithIndex++;
        changeHadith();
      });
      prev.addEventListener("click", () => {
        hadithIndex == 0 ? (hadithIndex = 299) : hadithIndex--;
        changeHadith();
      });
      function changeHadith() {
        hadithContainer.innerText = Hadiths[hadithIndex].arab;
        number.innerText = `300  -  ${hadithIndex + 1}`;
      }
    });
}

//navbar

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
