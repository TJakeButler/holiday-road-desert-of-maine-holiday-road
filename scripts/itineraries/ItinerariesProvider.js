const eventHub = document.querySelector(".container")

let itinerary = []

export const useItinerary = () => {
    return itinerary.slice()
}

export const getItinerary = () => { 
  return fetch("http://localhost:8088/itineraries")
  
.then(response => response.json())
.then (parsedItineraries => {
   itinerary = parsedItineraries
    // console.log(parsedItineraries)
})
}

export const SaveItinerary = (itineraryObj) => {
    // POST note object to API
    // then get all notes from API
    // then dispatch state change event to event hub that notes have been updated
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraryObj)
    })
    .then(getItinerary)
    // .then(dispatchItineraryChangeEvent)
}


// const dispatchItineraryChangeEvent = () => {
//     const itineraryChangedEvent = new CustomEvent("itineraryChanged")
//     eventHub.dispatchEvent(itineraryChangedEvent)
// }