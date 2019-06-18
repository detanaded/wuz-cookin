require('dotenv').config()
const Promise = require('bluebird')
const axios = require('axios')
const{REACT_APP_KEY} = process.env




module.exports = {
  getRecipe: async (req, res) => {
    let result = await axios.get(`http://www.food2fork.com/api/search?key=${REACT_APP_KEY}&count=1&q=`).then(res => res.data)
    console.log(result)
    res.status(200).send(result)
  },

  addToFavorites: (req,res) => {
    const{recipe}=req.body
    const db = req.app.get('db')
    const{id}=req.session.user
    console.log(id,recipe.recipe_id)
    db.add_to_favorites({recipe_id:+recipe.recipe_id, user_id:id}).then(dbResponse => {res.send('Added to Favorites')})
  },

  getFavorites: async (req, res) => {
    const db = req.app.get('db')
    console.log(req.session.user)
    const{id}=req.session.user
    const favorites = await db.get_favorites([id])
    console.log(favorites)
    res.status(200).send(favorites)
},

grabFavorite: async (req,res) => {
    const{recipe}=req.params
    const result = await axios.get(`https://www.food2fork.com/api/get?key=${REACT_APP_KEY}&rId=${recipe}`).then(res => res.data)
    console.log(result)
    res.status(200).send(result)
}
}