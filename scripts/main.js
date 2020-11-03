import { Park } from "./parks/Park.js"
import { ParkSelect } from "./parks/ParkSelect.js"
import "./parks/ParkList.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { EaterySelect } from "./eateries/EaterySelect.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js"
import "./eateries/EateriesList.js"
import "./attractions/AttractionList.js"
import "./itineraries/ItinerariesProvider.js"
import { useItinerary, getItinerary, SaveItinerary } from "./itineraries/ItinerariesProvider.js"

import "./itineraries/ItinerariesList.js"
import "./itineraries/ItinerariesSaveButton.js"

AttractionSelect()
ParkSelect()
EaterySelect()

getItinerary()











