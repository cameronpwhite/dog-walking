import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

//Goal is to display city that walker services.
//Compare the cityId of each walker to cities Id.
//If it is the same, output the name of the city.

//Ideas to refactor - maybe use .forEach()?

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    for (const city of cities) {
                        if (walker.cityId === city.id) { 
                        window.alert(`${walker.name} services ${city.name}`)
                    }
                    
                }
            
            }
        }
    }
}
)




export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

