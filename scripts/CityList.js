import { getWalkers } from "./database.js"
import { getCities} from "./database.js"

const walkers = getWalkers()
const cities = getCities()

//Create an event listener to get walker who services the city on click.
//Compare the city's id property to walker's cityId property.
//If there is a match, window alert pop-up outputting walker's name for that city.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;
        if (itemClicked.id.startsWith("city")) {
            const [, cityId] = itemClicked.id.split("--")

            for (const city of cities) {
                if (city.id === parseInt(cityId)) {
                    for (const walker of walkers) {
                        if (walker.cityId === city.id) {
                            window.alert(`${city.name} is serviced by ${walker.name}`)
                        }
                    }
                }
            }
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li id="city--${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

