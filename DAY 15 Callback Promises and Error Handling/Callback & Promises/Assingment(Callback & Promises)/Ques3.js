/**
 * Q3. Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
the parsed JSON response.

API to be used
https://jsonplaceholder.typicode.com/todos/1
 */
// solution:-

async function fetchData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}
fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
    console.log(data)
})