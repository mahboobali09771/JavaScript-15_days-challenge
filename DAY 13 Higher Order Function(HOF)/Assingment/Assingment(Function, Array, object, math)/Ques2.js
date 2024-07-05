/**
 Q2. The following is an array of 10 students ages:
=> const ages = [19, 22,19, 24, 20, 25, 26, 24, 25, 24]
« Sort the array and find the min and max age.
« Find the median age(one middle item or two middle items divided by two)
« Find the average age(all items divided by number of items)
« Find the range of the ages(max minus min)
« Compare the value of (min - average) and (max - average), use abs() method

 */
// solution:-

//Sort the array and find the min and max age.
const ages = [19,22,19,24,20,25,26,24,25,24]
ages.sort((a,b) => a-b)
console.log(`sorted array is = ${ages}`)

const MinAge = ages[0]
console.log(`Min age is = ${MinAge}`)

const MaxAge = ages[ages.length-1]
console.log(`Max age is = ${MaxAge}`)
// Find the median age(one middle item or two middle items divided by two)
let MedianAge;
if(ages.length%2==0){
    const Mid1 = ages[Math.floor(ages.length/2)-1]
    const Mid2 = ages[Math.floor(ages.length/2)]
    MedianAge = (Mid1 + Mid2)/2
}
else{
    MedianAge = ages[Math.floor(ages.length/2)]
}

console.log(`median age is = ${MedianAge}`)

// Find the average age(all items divided by number of items)
const sumAges = ages.reduce((sum, age) => sum + age, 0)
const averageAge = sumAges / ages.length
console.log(`Average Age is = ${averageAge}`)

// Find the range of the ages(max minus min)

const ageRange = MaxAge - MinAge
console.log(`range of the ages = ${ageRange}`)

// Compare the value of (min - average) and (max - average), use abs() method

const MinDifference = Math.abs(MinAge - averageAge)
console.log(`Min average difference = ${MinDifference}`)

const MaxDifference = Math.abs(MaxAge - averageAge)
console.log(`Max average difference = ${MaxDifference}`)