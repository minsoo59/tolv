const header = document.getElementById("header");

function scroolHandler() {
  header.style.backgroundColor = "white";
  header.style.transition = "all 0.1s linear";
  header.style.boxShadow = "0px 5px 10px 0px rgba(0, 0, 0, 0.25)";
}

function init() {
  header.addEventListener("scroll", scroolHandler);
}

init();
