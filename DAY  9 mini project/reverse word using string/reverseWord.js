function reverseWord(sentence){
    let splittedSentence = sentence.split("")
    return splittedSentence.reverse().join("")
}
console.log(reverseWord("maboob"))