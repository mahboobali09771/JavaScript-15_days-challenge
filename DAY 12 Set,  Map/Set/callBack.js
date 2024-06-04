const setDemo = new Set()
setDemo.add(1)
setDemo.add(2)
setDemo.add(3)
setDemo.add(3)  // this is not count beacause in set is store unique value
setDemo.add('a')
setDemo.add('b')
setDemo.add('c')
setDemo.add('a') // this is not count beacause in set is store unique value

console.log(setDemo.entries()) // passing as parameter == call back