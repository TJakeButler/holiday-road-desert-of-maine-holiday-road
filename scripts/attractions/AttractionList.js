import { Attraction } from "./Attraction.js"
import { useAttractions } from "./AttractionProvider.js"

    
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('attractionChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.attractionThatWasChosen !== "0"){
        console.log(event.detail)
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appAttractions = useAttractions()
        const matchingAttractions = appAttractions.filter(currentAttraction => {
        
            return currentAttraction.id === event.detail.attractionThatWasChosen
        })
        console.log(event.detail.attractionThatWasChosen)
        renderAttractions(matchingAttractions)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const contentTarget = document.querySelector(".attractionContainer")

const renderAttractions = (matchingAttractions) => {
    let attractionHTMLRepresentations = ""
    for (const singleAttraction of matchingAttractions) {
      attractionHTMLRepresentations += Attraction(singleAttraction) 
    }
    contentTarget.innerHTML += `
            <h3>${attractionHTMLRepresentations}</h3>
          `
  }