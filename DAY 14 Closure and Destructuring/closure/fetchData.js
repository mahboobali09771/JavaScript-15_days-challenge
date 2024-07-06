function fetchData(url, callback) {
    console.log("Initiating data fetch from", url);
    // Simulating an asynchronous request
    setTimeout(function() {
    const data = "Fetched data from "+url;
    callback(data) ;
    }, 1888) ;
    }
    function processData(dataProcessor) {
    const url = 'https://example.com/api/data' ;
    fetchData(url, function(data) {
    dataProcessor(data);
    });
    }
    // Example usage
    processData(function(data) {
    console.log("Processing data:", data);
    })