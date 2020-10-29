import{useParks , getParks} from "./parks/ParkProvider.js"



getParks().then(() => {
console.log(useParks())
});





