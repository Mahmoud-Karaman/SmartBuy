const bo = document.querySelector(".btn");

if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light-mode");
  bo.innerText = "black mode";
} else {
  document.body.classList.remove("light-mode");
  bo.innerText = "white mode";
}

bo.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    bo.innerText = "black mode";
    localStorage.setItem("mode", "light");
  } else {
    bo.innerText = "white mode";
    localStorage.setItem("mode", "dark");
  }
});
