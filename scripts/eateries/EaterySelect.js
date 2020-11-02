import {getEateries, useEateries} from "./EateryProvider.js"

const contentTarget = document.querySelector(".eateryDropDownContainer")

export const EaterySelect = () => {
    getEateries().then(() => {
        const arrayOfEateries = useEateries()
        // console.log(parks)
        render(arrayOfEateries)
    })
}

const render = (eateryCollection) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="eaterySelect">
        <option value="0">Please select an Eatery...</option>
        ${
            eateryCollection.map(eateryObj => {
                return `<option value="${eateryObj.id}">${eateryObj.businessName}</option>`
            }).join("")
        }
    </select>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", (changeEvent) => {
    

    // Only do this if the `eaterySelect` element was changed
    if (changeEvent.target.id === "eaterySelect") {
        
        // Create custom event. Provide an appropriate name.
        const eateryEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: changeEvent.target.value
            }   
        })
        console.log(eateryEvent)
        // Dispatch to event hub
        eventHub.dispatchEvent(eateryEvent)

    }
})