function writeCards(name, event){
    let emptyArray = []
    for (let i = 0; i < name.length; i++){
        emptyArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return emptyArray
}

function countDown(num){
    let i = num
    while (i >= 0){
        console.log(i)
        i--
    }
}
