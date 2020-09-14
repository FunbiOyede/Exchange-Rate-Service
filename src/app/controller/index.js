const api_client = require("../client/client");
class Controllers{
    async getCurrentRates(req,res){
        const {App_Id} = req.query;
      try{
          const result = await api_client.fetchLatestRate({app_id:App_Id});
         
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
        const {historic_date,App_Id} = req.query
         try{
            const result = await api_client.fetchHistoricalRate({app_id:App_Id},historic_date);
            const {base,rates} = result
            if(!result.error){
                return res.status(200).json({base,rates})
            }
            return res.status(result.status).json(result)
          }catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Controllers();