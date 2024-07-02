const arrayOfWords = ["Hii", "I", "am", "mahboob", "I","am","software developer"]
console.log(arrayOfWords)
console.log(arrayOfWords.join(" "))

function myOwnJoin(arr){
    let sentence = arr.reduce((prevValue, presentValue) => prevValue + " " + presentValue)
    return sentence
}

console.log(myOwnJoin(arrayOfWords))