import { useParks , getParks } from "./ParkProvider.js"


const contentTarget = document.querySelector(".dropDownContainer")


export const ParkSelect = () => {
    getParks().then(() => {
        const parks = useParks()
        console.log(parks)
        render(parks)
    })
}


const render = (parksCollection) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Please select a Park...</option>
        ${
            parksCollection.map(parkObj => {
                return `<option value="${parkObj.id}">${parkObj.fullName}</option>`
            }).join("")
        }
    </select>
    `
}

const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (changeEvent) => {
    

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "parkSelect") {
        
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: changeEvent.target.value
            }   
        })
        console.log(customEvent)
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)

    }
})
