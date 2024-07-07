console.log("I am at the first line")
try{
    let x  = 5
    console.log(x.toUpperCase())
} catch(err){
    console.log("error has been handled. Please proceed")
    console.log(err)
} finally {
    console.log("I will get invoked always")
}
console.log("I am at the last line")








// try{
//     console.log('abc')
// } catch (error){
//     console.log(error)
// } finally {
//     console.log("stop loader")
// }