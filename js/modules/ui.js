//* IMPORT MODULES
import { isDarkTheme } from "./theme.js";

//* UI.JS SCRIPT
function resetClassForIcon(buttonIconElement) {
  buttonIconElement.classList.remove(
    "plus-light",
    "minus-light",
    "plus-dark",
    "minus-dark"
  );
}

export function changeAccordionIconToMinus(buttonIconElement) {
  buttonIconElement.innerHTML = "";
  buttonIconElement.innerHTML = `
  <path
    fill="currentColor"
    d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
  />
  `;
  resetClassForIcon(buttonIconElement);

  if (isDarkTheme()) {
    buttonIconElement.classList.add("minus-dark");
  } else {
    buttonIconElement.classList.add("minus-light");
  }
}

export function changeAccordionIconToPlus(buttonIconElement) {
  buttonIconElement.innerHTML = "";
  buttonIconElement.innerHTML = `
  <path
    fill="currentColor"
    d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
  />
  `;

  resetClassForIcon(buttonIconElement);

  if (isDarkTheme()) {
    buttonIconElement.classList.add("plus-dark");
  } else {
    buttonIconElement.classList.add("plus-light");
  }
}

function isButtonPressed(buttonElement) {
  return buttonElement.getAttribute("aria-pressed") === "false" ? true : false;
}

export function updateAttributes(buttonElement) {
  if (isButtonPressed(buttonElement)) {
    buttonElement.setAttribute("aria-pressed", "true");
    buttonElement.setAttribute("aria-label", "Hide more details");
    buttonElement.setAttribute("title", "Show less");
  } else {
    buttonElement.setAttribute("aria-pressed", "false");
    buttonElement.setAttribute("aria-label", "Click to know more details");
    buttonElement.setAttribute("title", "Show more");
  }
}
