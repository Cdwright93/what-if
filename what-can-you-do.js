let x = prompt("How old are you?")

function whatDo (x){
    if (x >= 25) {
        alert("You can do pretty much anything.")
    }
    if (x < 16) {
        alert("You can't drive.")
    }
    if (x <= 17 && x >= 16){
        alert("You can drive but you cant vote")
    }
    if (x <= 24 && x >= 18){
        alert("You can vote but you cant rent a car")
    }
}
whatDo(x)