require('dotenv').config()
const axios = require('axios')
const{APP_KEY} = process.env


module.exports = {
  getRecipe: async (req, res) => {
    // const{category} = req.body
    let result = await axios.get(`http://www.food2fork.com/api/search?key=${APP_KEY}&q=shredded%20chicken&count=5`).then(res => res.data)
    console.log(result)
    res.status(200).send(result)
  }


}