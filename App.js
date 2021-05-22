const App = Vue.createApp({
    data(){
        let indexList = ["%5EGSPC","%5EDJI","%5EIXI"];
        var indexMap = new Map();
        for(stock in indexList){
            //getMarketPrice(stock);
            let marketPrice = getMarketPrice(indexList[stock]);
            indexMap.set(indexList[stock], marketPrice);
        }
        console.log(indexMap);
        return {
            firstName: 'John'
        }
    }
})

App.mount('#App')

//%5EGSPC
//%5EDJI
//%5EIXI

async function

async function getMarketPrice(stockSymbol){
    let url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol="+stockSymbol+"&region=US";
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c4eac4392cmsh76076d1e061f713p1b7aa9jsn6f47c253ffd9",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data["price"]["regularMarketPrice"]["fmt"];
    });
}
