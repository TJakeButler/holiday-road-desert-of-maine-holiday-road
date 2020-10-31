import { Park } from "./parks/Park.js"
import { ParkSelect } from "./parks/ParkSelect.js"
import "./parks/ParkList.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js"


ParkSelect()


getEateries().then(() => {
   useEateries()
})






