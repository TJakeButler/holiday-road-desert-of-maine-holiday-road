<<<<<<< HEAD
=======
// import keys from "../Settings.js"

let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => { 
  return fetch(`http://holidayroad.nss.team/eateries`)
.then(response => response.json())
.then (parsedEateries => {
  console.log(parsedEateries)
   eateries = parsedEateries
    
})
}
>>>>>>> master


