const api_client = require("../client/client");
const {APP_ID} = require('../config/config');
class Controllers{
    async getCurrentRates(req,res){
     
      try{
          const result = await api_client.fetchLatestRate({app_id:APP_ID});
         
          const {base,rates} = result
       
           if(!result.error){
               return res.status(200).json({base,rates})
           }
           return res.status(result.status).json(result)
        }catch (error) {
          console.log(error)
      }
    }

    async getHistoricalRates(req,res){
        const {historic_date} = req.query
         try{
            const result = await api_client.fetchHistoricalRate({app_id:APP_ID},historic_date);
            const {base,rates} = result
            if(!result.error){
                return res.status(200).json({base,rates})
            }
            return res.status(result.status).json(result)
          }catch (error) {
            console.log(error)
        }
    }

    async getAllCurrencies(req,res){
        try{
            const result = await api_client.fetchCurrencies();
            if(!result.error){
                return res.status(200).json(result)
            }
            return res.status(result.status).json(result)
          }catch (error) {
            console.log(error)
        }
    }

   
}

module.exports = new Controllers();