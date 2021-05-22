fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=%5EGSPC&region=US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c4eac4392cmsh76076d1e061f713p1b7aa9jsn6f47c253ffd9",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
    console.log(data["price"]["regularMarketPrice"]["fmt"])
});
