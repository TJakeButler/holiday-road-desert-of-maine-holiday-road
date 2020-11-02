import { Attraction } from "./Attraction.js"
import { useAttractions } from "./AttractionProvider.js"

    
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('attractionChosen', event => {
    // Use the property you added to the event detail.
    console.log(event.detail)
    if (event.detail.attractionThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appAttractions = useAttractions()
        const singleAttraction = appAttractions.find(currentAttraction => {
        console.log(currentAttraction)
            return currentAttraction.id === parseInt(event.detail.attractionThatWasChosen)
        }) 
        // console.log(matchingAttractions)
        // console.log(event.detail.attractionThatWasChosen)
        renderAttractions(singleAttraction)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const contentTarget = document.querySelector(".attractionContainer")

const renderAttractions = (singleAttraction) => {
    let attractionHTMLRepresentations = ""
      attractionHTMLRepresentations += Attraction(singleAttraction) 
    contentTarget.innerHTML += `
            <h3>${attractionHTMLRepresentations}</h3>
          `
  }