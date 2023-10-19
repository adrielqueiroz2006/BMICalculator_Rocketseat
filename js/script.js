import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateBMI, notANumber } from "./utils.js"

// Variables
const form = document.querySelector("form")

export const inputWeight = document.querySelector("#weight")
export const inputHeight = document.querySelector("#height")
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateBMI(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Your BMI is ${result}`

  Modal.message.innerText = message
  Modal.open()
}
