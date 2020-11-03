import { SaveItinerary } from "./ItinerariesProvider.js"

const eventHub = document.querySelector(".container")


const itineraryObject = {
    park: "",
    eatery: "",
    attraction: ""
}


eventHub.addEventListener('parkChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.parkThatWasChosen !== "0"){
        console.log("itineraries listener", event.detail.parkThatWasChosen)
        itineraryObject.park = event.detail.parkThatWasChosen
    }})

eventHub.addEventListener('eateryChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.eateryThatWasChosen !== "0"){
        console.log("itineraries listener", event.detail.eateryThatWasChosen)
        itineraryObject.eatery = event.detail.eateryThatWasChosen
    }})

eventHub.addEventListener('attractionChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.attractionThatWasChosen !== "0"){
        console.log("itineraries listener", event.detail.attractionThatWasChosen)
        itineraryObject.attraction = event.detail.attractionThatWasChosen
    }})



eventHub.addEventListener('click', event => {
    if (event.target.id === "save-button"){
        
        console.log("save button was clicked")
        console.log("itinerary object", itineraryObject)

        const saveButtonClick = SaveItinerary(itineraryObject)

        // eventHub.dispatchEvent(saveButtonClick)
        console.log(saveButtonClick.detail)
        }
    })

eventHub.addEventListener("saveClicked", event => {
    console.log("save button was heard")

})


// const saveButtonClick = new CustomEvent("saveClicked", {
//     detail: {
        
//         eateryThatWasChosen: eateryChosen.target.value,
//         parkThatWasChosen: itineraryObject.park.target.value,
//         attractionThatWasChosen: attractionChosen.target.value
//     }
    
// })