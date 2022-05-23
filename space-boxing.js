let planet = prompt('Greetings champion, What planet will you be fighting at?')
let weight = prompt('Fighter, what is your current earth weight?')

function dispComputation (planet,reqWeight){
    alert(`Your weight on ${planet} is ${Math.floor(reqWeight)} earth lbs.`)
    return
}
function planetPick (planet, weight){
    if (planet == 'venus'){
        let reqWeight = weight * .78
        dispComputation(planet,reqWeight)
    }
    if (planet == 'mars'){
        let reqWeight = weight * .39
        dispComputation(planet,reqWeight)
    }
    if (planet == 'jupiter'){
        let reqWeight = weight * 2.65
        dispComputation(planet,reqWeight)
    }
    if (planet == 'saturn'){
        let reqWeight = weight * 1.17
        dispComputation(planet,reqWeight)
    }
    if (planet == 'uranus'){
        let reqWeight = weight * 1.05
        dispComputation(planet,reqWeight)
    }
    if (planet == 'neptune'){
        let reqWeight = weight * 1.23
        dispComputation(planet,reqWeight)
    }
}
planetPick(planet,weight)