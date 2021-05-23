const App = Vue.createApp({
    data(){
        let indexList = ["%5EGSPC","%5EDJI","%5EIXI"];
        var indexMap = new Map();
        for(stock in indexList){
            //getMarketPrice(stock);
            //let marketPrice = getMarketPrice(indexList[stock]);
            //indexMap.set(indexList[stock], marketPrice);
        }
        console.log(indexMap);
        return {
            name: 'S&P 500'
        }
    }
})

App.component('market-index-box', {
    props: ['name'],
    template: '<div class="bg-black border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-1 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500"><div class="flex flex-col justify-center"><p class="text-base">{{ name }}</p><p class="text-xs">4,155.86</p><p class="text-xs">-3.26(-0.08%)</p></div></div>'
})

App.mount('#App')

//%5EGSPC
//%5EDJI
//%5EIXI


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
