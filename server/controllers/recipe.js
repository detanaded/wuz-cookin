require('dotenv').config()
const axios = require('axios')
const{REACT_APP_KEY} = process.env



module.exports = {
  getRecipe: async (req, res) => {
    let result = await axios.get(`http://www.food2fork.com/api/search?key=${REACT_APP_KEY}&q=`).then(res => res.data)
    console.log(result)
    res.status(200).send(result)
  },

  addToFavorites: (req,res) => {
    const{recipe}=req.body
    const db = req.app.get('db')
    const{id}=req.session.user
    db.add_to_favorites({recipe_id:+recipe.recipe_id, user_id:id}).then(dbResponse => {res.send('Added to Favorites')})
  }

}