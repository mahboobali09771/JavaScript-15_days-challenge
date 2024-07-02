function palindromeCheck(sentence){
    let splittedSentence = sentence.split("")
    let reverseword = splittedSentence.reverse().join("")
    return sentence == reverseword
}
console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("mahboob"));