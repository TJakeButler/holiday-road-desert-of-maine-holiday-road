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