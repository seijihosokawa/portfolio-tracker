const App = Vue.createApp({
    data(){
        
        return {
            name: '',
            stockSymbol: '',
        }
    },
})

App.component('market-index-box', {
    props: ['name', 'stockSymbol'],
    data(){
        return{
            price: Number,
        }
    },
    template: '<div class="bg-black border-red-600 border-opacity-60 | p-1 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-red-600 hover:border-transparent | transition-colors duration-500"><div class="flex flex-col justify-center"><p class="text-base">{{ name }}</p><p class="text-xs">{{ price }}</p><p class="text-xs">-3.26(-0.08%)</p></div></div>',
    methods:{
        async getIndexPrice(stockSymbol){
            try {
                var price = await getMarketPrice(stockSymbol);
                this.price = price;
            } catch(error){
                console.log(error);
                return 'error loading';
            }
        }
    },
    created(){
        this.getIndexPrice(this.stockSymbol);
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


function getMarketPrice(apiStockSymbol){
    return new Promise(function(resolve, reject){
        let url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol="+apiStockSymbol+"&region=US";
        
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c4eac4392cmsh76076d1e061f713p1b7aa9jsn6f47c253ffd9",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            resolve(data["price"]["regularMarketPrice"]["fmt"]);
        });
    })
}
