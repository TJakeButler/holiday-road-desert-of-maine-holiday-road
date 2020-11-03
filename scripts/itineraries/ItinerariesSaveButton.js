const eventHub = document.querySelector(".container")


eventHub.addEventListener("parkChosen", () => {
    console.log("Park Select Drop down was chosen.")
    if(areConditionsMet()){
        enableSaveButton()
    }
}   
)
eventHub.addEventListener("eateryChosen", () => {
    console.log("Eatery Select Drop down was chosen.")
    if(areConditionsMet()){
        enableSaveButton()
    }
}   

)
eventHub.addEventListener("attractionChosen", () => {
    console.log("Attraction Select Drop down was chosen.")
    if(areConditionsMet()){
        enableSaveButton()
    }
}   
    

)

const enableSaveButton = () => {
    let button = document.querySelector('#save-button')
    button.disabled = false
}

const disableSaveButton = () => {
    let button = document.querySelector('#save-button')
    button.disabled = true
}

const hasSelection = (elementClass) => {
     let elem = document.querySelector(`${elementClass}`)
     return elem !== null
}

const areConditionsMet = () => {
    return hasSelection(".parkCard") 
    && hasSelection(".attractionCard") 
    && hasSelection(".eateryCard")
}



   