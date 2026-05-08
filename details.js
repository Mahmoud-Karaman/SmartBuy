const bo = document.querySelector(".btn");
    bo.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
    bo.innerText = "black mode";
  } else {
    bo.innerText = "white mode";
  }
});
