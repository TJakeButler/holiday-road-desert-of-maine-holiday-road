import { Park } from "./Park.js"
import { useParks } from "./ParkProvider.js"

    
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('parkChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.parkThatWasChosen !== "0"){
        console.log(event.detail)
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateParks = useParks()
        const matchingParks = appStateParks.filter(currentpark => {
        
            return currentpark.id === event.detail.parkThatWasChosen
        })
        console.log(event.detail.parkThatWasChosen)
        render(matchingParks)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})


const contentTarget = document.querySelector(".previewLeftContainer")

const render = (matchingParks) => {
    let parkHTMLRepresentations = ""
    for (const singlePark of matchingParks) {
      parkHTMLRepresentations += Park(singlePark) 
    }
    contentTarget.innerHTML += `
            <h3>${parkHTMLRepresentations}</h3>
          `
  }