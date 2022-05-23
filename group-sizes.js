let students = prompt('how many students? (min. 5)')

function splitEm(students){
    if (students % 3 == 0){
        let groups = students / 3;
        alert(`split into ${groups} groups of 3.`)
        return
    }
    if (students % 3 == 2){
        let groups = students / 3;
        alert(`split into ${Math.floor(groups)} groups of 3 and 1 groups of 2.`)
    }
    if (students % 3 < 2){
        let groups = students / 3;
        alert(`split into ${Math.floor(groups) - 1} groups of 3 and 2 groups of 2.`)
    }
}
splitEm(students)