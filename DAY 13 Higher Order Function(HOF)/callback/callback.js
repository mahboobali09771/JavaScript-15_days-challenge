function calculateMatches(isMatch){
    other_person_match_interest = ['l','l','l','r','l','r','l','r']

    for( i of other_person_match_interest){
        if(isMatch(i)){
            console.log("yaay, i got a match")
        }
    }
}

calculateMatches((m) => m=='r')