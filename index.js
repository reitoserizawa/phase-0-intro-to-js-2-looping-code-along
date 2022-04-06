function writeCards(arrayStrings, eventName) {
    let newArrays = []

    for (let i = 0; i <arrayStrings.length; i++) {
        newArrays.push(`Thank you, ${arrayStrings[i]}, for the wonderful ${eventName} gift!`)
    }

    return newArrays
 
}

function countDown (number) {
    
    while (number >= 0) {
        console.log(number)
        number--
    }

    return number
}











// function writeCards(name, event){
//     let emptyArray = []
//     for (let i = 0; i < name.length; i++){
//         emptyArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
//     }
//     return emptyArray
// }

// function countDown(num){
//     let i = num
//     while (i >= 0){
//         console.log(i)
//         i--
//     }
// }
