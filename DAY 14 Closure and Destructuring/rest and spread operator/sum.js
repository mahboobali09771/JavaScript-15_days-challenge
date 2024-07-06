const nums = [1,2,3];
const sum = (a,b,c) => {
    console.log(a+b+c);
}
sum(...nums)


const str = 'abc';
const chars = [...str];
console.log(chars)