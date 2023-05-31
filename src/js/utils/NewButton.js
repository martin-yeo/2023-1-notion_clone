import { pushUrl } from "./Router.js"

export default function NewButton({ $target, initialState}) {
  const $newButton = document.createElement("buttion")
  $target.appendChild($newButton)

  this.state = initialState

  this.render = () => {
    const { text, name } = this.state

    $newButton.textContent = text

    if (name) {
      $newButton.className = name
    } 

  }
  
  this.render()

  $newButton.addEventListner('click', (e) => {
    const { lint } = this.state
    pushUrl(`documents/${link}`)
  })

}