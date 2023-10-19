import { inputHeight, inputWeight } from "./script.js"

export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open: () => {
    Modal.wrapper.classList.add("open")
  },
  close: () => {
    Modal.wrapper.classList.remove("open")
    inputWeight.value = ""
    inputHeight.value = ""
  },
}

Modal.buttonClose.addEventListener("click", Modal.close)

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}
