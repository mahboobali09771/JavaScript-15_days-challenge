// simulated function to fetch data from an external API
function fetchDataFromAPI() {
    const date = new Date()
    console.log('Fetching data from the API at:', date.toLocaleString())
    // simulated API call or data fetching logic
}

// set an interval to fetch data from tha API every 3 seconds
const dataFetchInterval = setInterval(fetchDataFromAPI, 3000)
// stop fetching data after 15 seconds (just as an example)
setTimeout(function() {
    clearInterval(dataFetchInterval)
    console.log('Data fetching stopped after 15 seconds.')
}, 15000)