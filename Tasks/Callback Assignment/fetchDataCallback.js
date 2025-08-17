function fetchDataWithCallback (callback, shouldFail) {
    setTimeout(() => {
        try {
            if (shouldFail) {
                throw new Error("Fetch failed");
            }
            callback("Data fetched");    
        } catch (err) {
                    console.error("Error:", err.message);
                }
    }, 2000);
}

fetchDataWithCallback((message) => {
    console.log(message);
}, false);

fetchDataWithCallback((message) => {
    console.log(message);
}, true);