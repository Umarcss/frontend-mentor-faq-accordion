// * IMPORT MODULES
import {
  changeAccordionIconToMinus,
  changeAccordionIconToPlus,
} from "./ui.js";

// * THEME-TOGGLE SCRIPT
const iconLight = document.querySelector(".theme__icon--light");
const iconDark = document.querySelector(".theme__icon--dark");
const button = document.querySelector(".theme__button");
const cardButtons = document.querySelectorAll(".card__button");
const backgroundPictureSourceElement = document.querySelector(
  ".main__picture source"
);
const backgroundPictureImgElement =
  document.querySelector(".main__picture img");
const html = document.documentElement;

function showIconLight() {
  iconLight.classList.remove("hidden");
}

function hideIconLight() {
  iconLight.classList.add("hidden");
}

function showIconDark() {
  iconDark.classList.remove("hidden");
}

function hideIconDark() {
  iconDark.classList.add("hidden");
}

function addActiveTheme() {
  button.classList.add("active");
}

function removeActiveTheme() {
  button.classList.remove("active");
}

function addDarkTheme() {
  html.classList.add("dark");
}

function toggleDarkTheme() {
  html.classList.toggle("dark");
}

function savedTheme() {
  return localStorage.getItem("theme");
}

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function updateAriaPressedToTrue() {
  button.setAttribute("aria-pressed", "true");
}

function updateAriaPressedToFalse() {
  button.setAttribute("aria-pressed", "false");
}

function resetAllClassesButtonIcon() {
  // Update all button icons with correct shape and theme classes
  cardButtons.forEach((cardButton) => {
    const cardButtonIcon = cardButton.querySelector(".card__button-icon");
    if (!cardButtonIcon) return;
    
    const isPressed = cardButton.getAttribute("aria-pressed") === "true";
    
    // Update icon shape and class based on state and theme
    if (isPressed) {
      changeAccordionIconToMinus(cardButtonIcon);
    } else {
      changeAccordionIconToPlus(cardButtonIcon);
    }
  });
}

function changeBackgroundImageToLight() {
  backgroundPictureSourceElement.setAttribute(
    "srcset",
    "./assets/img/background-pattern-desktop_1440x320.svg"
  );
  backgroundPictureImgElement.setAttribute(
    "src",
    "./assets/img/background-pattern-mobile_375x232.svg"
  );
}

function changeBackgroundImageToDark() {
  backgroundPictureSourceElement.setAttribute(
    "srcset",
    "./assets/img/background-pattern-desktop-dark_1440x320.svg"
  );
  backgroundPictureImgElement.setAttribute(
    "src",
    "./assets/img/background-pattern-mobile-dark_375x232.svg"
  );
}

function initializeButtonIcons() {
  // Initialize all button icons with proper theme classes
  cardButtons.forEach((cardButton) => {
    const cardButtonIcon = cardButton.querySelector(".card__button-icon");
    if (cardButtonIcon) {
      const isPressed = cardButton.getAttribute("aria-pressed") === "true";
      
      // Remove all theme classes first
      cardButtonIcon.classList.remove(
        "plus-light",
        "minus-light",
        "plus-dark",
        "minus-dark"
      );
      
      // Add appropriate class based on theme and state
      if (isPressed) {
        cardButtonIcon.classList.add(
          isDarkTheme() ? "minus-dark" : "minus-light"
        );
      } else {
        cardButtonIcon.classList.add(
          isDarkTheme() ? "plus-dark" : "plus-light"
        );
      }
    }
  });
}

preLoadDarkTheme();
function preLoadDarkTheme() {
  if (savedTheme() === "dark" || (savedTheme() === null && prefersDark())) {
    addDarkTheme();
    addActiveTheme();
    hideIconLight();
    showIconDark();
    updateAriaPressedToTrue();
    changeBackgroundImageToDark();
  }
  
  // Initialize button icons after theme is set
  setTimeout(() => {
    initializeButtonIcons();
  }, 0);
}

export function isDarkTheme() {
  return html.classList.contains("dark");
}

function savePreferredTheme() {
  localStorage.setItem("theme", isDarkTheme() ? "dark" : "light");
}

export function initThemeToggle() {
  toggleTheme();
  function toggleTheme() {
    button.addEventListener("click", () => {
      toggleDarkTheme();
      
      if (isDarkTheme()) {
        addActiveTheme();
        hideIconLight();
        showIconDark();
        updateAriaPressedToTrue();
        changeBackgroundImageToDark();
      } else {
        removeActiveTheme();
        showIconLight();
        hideIconDark();
        updateAriaPressedToFalse();
        changeBackgroundImageToLight();
      }
      
      // Update all button icons to reflect theme change
      resetAllClassesButtonIcon();

      savePreferredTheme();
    });
  }
}
