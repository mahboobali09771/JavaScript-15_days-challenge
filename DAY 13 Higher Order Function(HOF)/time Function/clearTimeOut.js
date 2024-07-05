const timeOutId = setTimeout(function() {
    console.log("Mahboob")
}, 1000);

clearTimeout(timeOutId)
console.log('Timeout has been cleared')