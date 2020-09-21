const {APP_ID, EXCHANGE_RATE_URL} = require('../config/config');
const fetch = require("node-fetch");
const queryString = require('query-string');

class Client{
    constructor(){
        this.app_id = APP_ID;
        this.base_path = EXCHANGE_RATE_URL
    }
  async request(endpoint = "",options = {}){
        let url = this.base_path + endpoint;
        let headers = {
            "Content-type":"application/json"
        }
        let config = {
            ...options,
            ...headers
        }
       try {
           const response = await fetch(url,config);
           const result = response.json();
           return result
       } catch (error) {
           console.log(error)
       }
    }

   async fetchLatestRate(param){
        let query = param ? "?" + queryString.stringify(param) : ""
        let url = "latest.json" + query
       let config = {
           method:"GET"
       }
        try {
            const latestRate = await this.request(url,config);
            return latestRate
        } catch (error) {
            console.log(error.message)
            Promise.reject(error.message)
        }
      
    }

    async fetchHistoricalRate(param,historical_date){
       
        let query = param ? "?" + queryString.stringify(param) : ""
        let url = "historical/" + historical_date + ".json" + query
       let config = {
           method:"GET"
       }
        try {
            const historicalRate = await this.request(url,config);
            return historicalRate
        } catch (error) {
            console.log(error)
            Promise.reject(error.message)
        }
      
    }

    async fetchCurrencies(){
        let url = "currencies.json";
        let config = {
            method:"GET"
        }
         try {
             const currencies = await this.request(url,config);
             return currencies
         } catch (error) {
             console.log(error)
             Promise.reject(error.message)
         }
    }

    
}

module.exports = new Client();