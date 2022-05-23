let number =  prompt("input a number")

function fizzBuzz (number) {
    if (number % 3 == 0){
        console.log("fizz")
    }
    if (number % 5 == 0){
        console.log("buzz")
    }
    if (number % 3 == 0 && number % 5 == 0){
        console.log("fizzbuzz")
    }
}
fizzBuzz(number)