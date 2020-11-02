import { useAttractions , getAttractions } from "./AttractionProvider.js"

const contentTarget = document.querySelector(".attractionsDropDownContainer")

export const AttractionSelect = () => {
    getAttractions().then(() => {
        const attractions = useAttractions()
        console.log(attractions)
        render(attractions)
    })
}
const render = (attractionsCollection) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Please select an attraction...</option>
        ${
            attractionsCollection.map(attractionObj => {
                return `<option value="${attractionObj.id}">${attractionObj.name}</option>`
            }).join("")
        }
    </select>
    `
}

const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (changeEvent) => {
    

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "attractionSelect") {
        
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionThatWasChosen: changeEvent.target.value
            }   
        })
        console.log(customEvent)
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)

    }
})