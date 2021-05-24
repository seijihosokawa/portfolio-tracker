const App = Vue.createApp({
    data(){
        
        return {
            name: '',
        }
    }
})

App.component('market-index-box', {
    props: ['name', 'stockSymbol'],
    template: '<div class="bg-black border-red-600 border-opacity-60 | p-1 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-red-600 hover:border-transparent | transition-colors duration-500"><div class="flex flex-col justify-center"><p class="text-base">{{ name }}</p><p class="text-xs">{{ getIndexPrice(stockSymbol) }}</p><p class="text-xs">-3.26(-0.08%)</p></div></div>',
    methods:{
        async getIndexPrice(stockSymbol){
            let price = await getMarketPrice(stockSymbol);
            console.log(price);
            return price;
        }
    }
})

App.component('portfolio-info-box', {
    props: ['name'],
    template: '<div class="bg-black border-white-600 border-opacity-60 | p-1 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-red-600 hover:border-transparent | transition-colors duration-500"><div class="flex flex-col justify-center"><p class="text-base">${{ overallReturn(name) }}</p><p class="text-xs">{{ name }}</p><p class="text-xs">-3.26(-0.08%)</p></div></div>',
    methods:{
        overallReturn(name){
            if(name === 'Overall Return')return 3000;
            return 5000;
        }
    }
})

App.mount('#App')


async function getMarketPrice(apiStockSymbol){
    let url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol="+apiStockSymbol+"&region=US";
    return apiStockSymbol;
    
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
