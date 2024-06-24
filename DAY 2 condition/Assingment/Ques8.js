/**
Q8. you are creating a program to calculate the sum of numbers. write a javascript program that takes a positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the given integer.
 */
// solution:-
let n = 5;
let i=1;
sum = 0;
do{
    sum = sum + i;
    i++;
}while(i<=n);
console.log(sum)