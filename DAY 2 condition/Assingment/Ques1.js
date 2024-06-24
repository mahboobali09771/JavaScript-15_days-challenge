/**
 Q1. Write a program that grades students based on their marks.
 if greater than 90 then A Grade
 if berween 70 and 90 then a B grade
 if berween 50 and 70 then a C grade
 Below 50 then an F grade
 */
// solution:-
let marks = 100
if(marks>90){
    console.log("A Grade")
}
else if(marks>70 && marks<90){
    console.log("B Grade")
}
else if(marks>50 && marks<70){
    console.log("C Grade")
}
else{
    console.log("F Grade")
}