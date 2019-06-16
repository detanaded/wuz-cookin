require('dotenv').config()
// const Promise = require('bluebird')
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
    db.add_to_favorites({recipe_id:+recipe.recipe_id, user_id:id}).then(dbResponse => {res.send('Added to Favorites')})
  },
  getFavorites: (req, res) => {
    const {recipe}=req.body
    const db = req.app.get('db')
    const{id}=req.session.user
    db.get_favorites({recipe,id}).then(dbResponse => {res.send('Displaying Favorites')})
  }
  
  // getFavorites: (req, res) => {
  //   const db = req.app.get('db')
  //   const{id}=req.session.user
  //   const favorites =[]
  //   console.log(id)
  //   const getFavorite = async favorite => {
  //     console.log(favorite,'start of get favorite')
  //     let result = await axios.get(`http://www.food2fork.com/api/get?key=${REACT_APP_KEY}&rId=${favorite.recipe_id}`).then(res => res.data)
  //     console.log(result, 'result of get favorites')
  //     return result
  //   }
  //   db.get_favorites(id).then(dbResponse => {
  //    Promise.each(dbResponse, favorite => getFavorite(favorite).then(recipe => {
  //     favorites.push(recipe)
  //     console.log(recipe, 'result of .then')
  //   })).then(() => {
  //     console.log(favorites, 'final array')
  //     res.status(200).send(favorites)
  //   }) 
  //   })
  // }
}