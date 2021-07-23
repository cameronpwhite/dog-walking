import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

//Write a function that takes the result of findWalker as an argument (use the variable)
//Compare the petwalker cityId to cities.id
//Output city name where there is a match.

const findWalkerCity = (walker) => {
    let cityName = null;

    for (const city of cities) {
        if (walker.cityId === city.id) {
            cityName = city.name;
        }
    }
    
    return cityName
}

export const Assignments = () => {
    let assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const walkerCity = findWalkerCity(currentPetWalker)

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${walkerCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

