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
        renderParks(matchingParks)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})


const contentTarget = document.querySelector(".previewLeftContainer")

const renderParks = (matchingParks) => {
    let parkHTMLRepresentations = ""
    for (const singlePark of matchingParks) {
      parkHTMLRepresentations += Park(singlePark) 
    }
    contentTarget.innerHTML += `
            <h3>${parkHTMLRepresentations}</h3>
          `
  }

//   Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('detailButtonChosen', event => {
 
        const appParkDetails = useParks()
        console.log(appParkDetails)
        const matchingParkDetails = appParkDetails.find(currentDetail => {
        
            return currentDetail.id === event.detail.detailThatWasShown
        })
        console.log(event.detail.detailThatWasShown)
        console.log("ParkdetailObject",matchingParkDetails)
        renderDetail(matchingParkDetails)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    
})

const renderDetail = (onePark) => {
    // const park = Park(onePark);
    // contentTarget.innerHTML = park;
    window.alert("Holiday Road")
  };