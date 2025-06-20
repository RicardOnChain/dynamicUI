/* eslint-disable no-undef */
import "./styles.css"

// eslint-disable-next-line no-undef
const widgetContent = document.querySelector(".widgetContent")
document.querySelector("#dropdown>svg").addEventListener("click", () => toggleWidget())

const toggleWidget = () => {
    widgetContent.classList.toggle("visible")
}

const createDropdown = (...args) =>{


    for (const option of args){

        const newOption = document.createElement("button")
        newOption.innerText = option
        newOption.setAttribute("data-action",option)
        widgetContent.appendChild(newOption)

    }

}



export{createDropdown}