//* IMPORT MODULES
import {
  changeAccordionIconToMinus,
  changeAccordionIconToPlus,
  updateAttributes,
} from "./ui.js";

//* ACCORDION.JS SCRIPT
const faqs = document.querySelectorAll(".card__faq");

export function isAccordionClose(answerElement) {
  return !answerElement.style.maxHeight ? true : false;
}

function handleClickAccordion(answerElement, buttonIconElement) {
  if (isAccordionClose(answerElement)) {
    answerElement.style.maxHeight = `${answerElement.scrollHeight}px`;
    changeAccordionIconToMinus(buttonIconElement);
  } else {
    answerElement.style.maxHeight = null;
    changeAccordionIconToPlus(buttonIconElement);
  }
}

function showFirstFaqAnswerByDefault() {
  const firstFaqButton = document.querySelector(".card__button--default");

  firstFaqButton.click();
}

export function initAccordion() {
  faqs.forEach((faq) => {
    const button = faq.querySelector(".card__button");
    const buttonIcon = faq.querySelector(".card__button-icon");
    const answer = faq.querySelector(".card__answer");
    const question = faq.querySelector(".card__question");

    button.addEventListener("click", () => {
      handleClickAccordion(answer, buttonIcon);
      updateAttributes(button);
    });

    question.addEventListener("click", () => {
      handleClickAccordion(answer, buttonIcon);
      updateAttributes(button);
    });
  });

  showFirstFaqAnswerByDefault();
}
