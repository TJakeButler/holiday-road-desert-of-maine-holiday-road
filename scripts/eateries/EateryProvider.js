// import keys from "../Settings.js"

let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => { 
  return fetch(`http://holidayroad.nss.team/eateries`)
.then(response => response.json())
.then (parsedEateries => {
   eateries = parsedEateries.data
    console.log()
})
}
