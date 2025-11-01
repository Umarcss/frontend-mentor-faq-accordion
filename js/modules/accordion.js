//* IMPORT MODULES
import {
  changeAccordionIconToMinus,
  changeAccordionIconToPlus,
  updateAttributes,
} from "./ui.js";

//* ACCORDION.JS SCRIPT
const faqs = document.querySelectorAll(".card__faq");

export function isAccordionClose(answerElement) {
  // Check if maxHeight is not set or is set to 0
  const maxHeight = answerElement.style.maxHeight;
  return !maxHeight || maxHeight === "0px";
}

function handleClickAccordion(answerElement, buttonIconElement, buttonElement) {
  if (isAccordionClose(answerElement)) {
    // Open accordion
    const targetHeight = answerElement.scrollHeight;
    answerElement.style.maxHeight = `${targetHeight}px`;
    changeAccordionIconToMinus(buttonIconElement);
    updateAttributes(buttonElement);
  } else {
    // Close accordion
    answerElement.style.maxHeight = null;
    changeAccordionIconToPlus(buttonIconElement);
    updateAttributes(buttonElement);
  }
}

// Update max-height when window resizes if accordion is open
function handleResize() {
  faqs.forEach((faq) => {
    const answer = faq.querySelector(".card__answer");
    const button = faq.querySelector(".card__button");
    
    if (answer && button && !isAccordionClose(answer)) {
      // Accordion is open, update max-height
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
}

function initializeButtonIcon(buttonElement, buttonIconElement) {
  // Initialize icon based on current theme and state
  const isPressed = buttonElement.getAttribute("aria-pressed") === "true";
  
  if (isPressed) {
    changeAccordionIconToMinus(buttonIconElement);
  } else {
    changeAccordionIconToPlus(buttonIconElement);
  }
}

function showFirstFaqAnswerByDefault() {
  const firstFaq = document.querySelector(".card__faq");
  if (!firstFaq) return;

  const firstFaqButton = firstFaq.querySelector(".card__button");
  const firstFaqButtonIcon = firstFaq.querySelector(".card__button-icon");
  const firstFaqAnswer = firstFaq.querySelector(".card__answer");

  if (firstFaqAnswer && firstFaqButton && firstFaqButtonIcon) {
    // Open the first FAQ
    firstFaqAnswer.style.maxHeight = `${firstFaqAnswer.scrollHeight}px`;
    changeAccordionIconToMinus(firstFaqButtonIcon);
    updateAttributes(firstFaqButton);
  }
}

export function initAccordion() {
  faqs.forEach((faq) => {
    const button = faq.querySelector(".card__button");
    const buttonIcon = faq.querySelector(".card__button-icon");
    const answer = faq.querySelector(".card__answer");
    const question = faq.querySelector(".card__question");

    // Initialize icon classes based on theme
    if (button && buttonIcon) {
      initializeButtonIcon(button, buttonIcon);
    }

    if (button && answer && buttonIcon) {
      button.addEventListener("click", () => {
        handleClickAccordion(answer, buttonIcon, button);
      });
    }

    if (question && answer && buttonIcon && button) {
      question.addEventListener("click", () => {
        handleClickAccordion(answer, buttonIcon, button);
      });
    }
  });

  // Handle window resize to update open accordions
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
  });

  // Show first FAQ after a small delay to ensure everything is initialized
  setTimeout(() => {
    showFirstFaqAnswerByDefault();
  }, 0);
}
