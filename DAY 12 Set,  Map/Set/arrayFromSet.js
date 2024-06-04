const setDemo = new Set()
setDemo.add('a')
setDemo.add('b')
setDemo.add('c')
console.log(Array.from(setDemo))

const numb = [1,3,4,5,2,6,3,3]
const uniqNum = new Set(numb)
// console.log(Array.from(new Set(numb)))
console.log(Array.from(new Set(uniqNum)))