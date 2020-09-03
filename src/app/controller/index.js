

class Controllers{
    async test(req,res){
        res.json("controller ready")
    }
}

module.exports = new Controllers();