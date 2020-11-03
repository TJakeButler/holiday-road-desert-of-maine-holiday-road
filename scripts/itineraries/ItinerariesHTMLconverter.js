export const Itinerary = (itineraryObj) => {
    return `
    <div class="itineraryCard">
        <p class="itinerary__name"><h3>${itineraryObj.parkName}</h3></p>
        <div class="itineraryCardItems">
            <p class="itinerary__name">${itineraryObj.eateryName}</p>
            <p class="itinerary__name">${itineraryObj.attractionName}</p>
        </div>
     </div>
     `
}