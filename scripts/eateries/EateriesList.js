import { Eatery } from "./Eatery.js"
import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")

// / Listen for the custom event you dispatched in EaterySelect.js
eventHub.addEventListener('eateryChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.eateryThatWasChosen !== "0"){
        console.log(event.detail)
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appEateries = useEateries()
       const matchingEatery = appEateries.find(currentEatery=> {
        
            return currentEatery.id === parseInt(event.detail.eateryThatWasChosen)
            
        })
       
      renderEatery(matchingEatery)
      console.log(matchingEatery)

    }
})
  
const contentTarget = document.querySelector(".eateryContainer")

const renderEatery = (singleEatery) => {
    let eateryHTMLRepresentations = ""
        eateryHTMLRepresentations += Eatery(singleEatery) 
    contentTarget.innerHTML += `
            <h3>${eateryHTMLRepresentations}</h3>
          `
  }

//   Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("detailButtonChosen", event => {
    
        const detailEvent = new CustomEvent("detailClicked", {
            detail: {
                detailThatWasChosen: event.target.value
            }
        })
    })

    eventHub.addEventListener("detailButtonChosen", event => {
    
        const detailEvent = new CustomEvent("detailClicked", {
            detail: {
                detailThatWasChosen: event.target.value
            }
        })
    })



const renderDetaileatery = (oneEatery) => {
    // const park = Park(onePark);
    // contentTarget.innerHTML = park;
    window.alert("Holiday Road Restaurant")
  }
