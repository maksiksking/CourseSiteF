document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementsByClassName("darkMode")[0];
  const themeChange = document.getElementsByClassName("themeColor");
  const all = document.getElementsByTagName("*");
  console.log("hai");
  let ifDark = localStorage.getItem("IfDarkMode");

  if (ifDark === "true") {
    darkModify(true);
  }

  function darkModify(auto) {
    darkModeButton.classList.remove("flip")
    darkModeButton.offsetWidth;
    ifDark = localStorage.getItem("IfDarkMode");
    if (ifDark === "true" && auto === false) {
      console.log("haiii");

      for (let i = 0; i < themeChange.length; i++) {
        themeChange[i].classList.remove("themeDark");
      }

      for (let i=0, max=all.length; i < max; i++) {
        all[i].style.color = "black";
      }

      darkModeButton.classList.add("flip")
      darkModeButton.classList.remove("darkModeImgSwap")

      localStorage.setItem("IfDarkMode", "false");
    } else {
      for (let i = 0; i < themeChange.length; i++) {
        themeChange[i].className += " themeDark";
      }

      for (let i=0, max=all.length; i < max; i++) {
        all[i].style.color = "white";
      }

      darkModeButton.classList.add("flip")
      darkModeButton.className += " darkModeImgSwap";

      localStorage.setItem("IfDarkMode", "true");
    }


  }

  darkModeButton.addEventListener("click", () => {
    darkModify(false);
  });
});
