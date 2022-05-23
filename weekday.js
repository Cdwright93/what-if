let z = prompt('Pick a number 1-7')
function weekday (z){
    if (z == 1){
        alert('Monday')
    }
    if (z == 2){
        alert('Tuesday')
    }
    if (z == 3){
        alert('Wednesday')
    }
    if (z == 4){
        alert('Thursday')
    }
    if (z == 5){
        alert('Friday')
    }
    if (z == 6){
        alert('Saturday')
    }
    if (z == 7){
        alert('Sunday')
    }
    if (z >= 8){
        alert('error')
    }
    if (z <= 0){
        alert('error')
    }
}
weekday(z)