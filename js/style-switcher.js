/* style switcher */

const sytleSwitcherToggle = () => {
  const styleSwitcher = document.querySelector(".js-style-switcher");
  const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function() {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}
sytleSwitcherToggle(); 
/* theme color */

const themeColor = () => {
  const hueSlider = document.querySelector(".js-hue-slider");
  const html = document.querySelector("html");

  const setHue = (value) => {
    html.style.setProperty("--hue", value);
    document.querySelector(".js-hue").innerHTML = value; 
  }

  hueSlider.addEventListener("input", function() {
    setHue(this.value);
    // set the user's preference in local storage
    localStorage.setItem("--hue", this.value);
  });

  const slider = (value) => {
    hueSlider.value = value;
  }

  // check for saved user preferences,if any, on load of the website
  if(localStorage.getItem("--hue") !== null) {
    setHue(localStorage.getItem("--hue"));
    slider(localStorage.getItem("--hue"));
  } else {
    //default color
    const hue = getComputedStyle(html).getPropertyValue("--hue");
    setHue(hue);
    slider(hue.split(" ").join(""));
  }
}

themeColor();

// theme light and dark mode

const themeLightDark = () => {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  const themeMode = () => {
    if(localStorage.getItem("theme-dark") === "false") {
      document.body.classList.remove("t-dark");
    } else {
      document.body.classList.add("t-dark");
    }
  }

  darkModeCheckbox.addEventListener("click", function() {
    /* set the user's preference in local storage */ 
    localStorage.setItem("theme-dark", this.checked);
    themeMode();
  })

  /* check for saved user preference, if any, on load of the website */
  if(localStorage.getItem("theme-dark") !== null) {
    themeMode();
  }
  if(document.body.classList.contains("t-dark")) {
    darkModeCheckbox.checked = true;
  }
}

themeLightDark();
