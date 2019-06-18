import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import {updateFavorites} from '../../redux/favoritesReducer'
// import { Images, Container, H1, Box } from "../Recipe-Search/DashboardStyle";
import GrabFavorite from './GrabFavorite'

class Favorites extends Component {
  constructor(){
    super()
      this.state = {
        favorites: []
      }
    }
  componentWillMount(){
    axios
    .get('/api/favorites')
    .then((res) => {
      this.setState({
        favorites: res.data
      })
    })
    .catch((err)=> {
      console.log(err)
    })
  }


  render() {
    const favoriteDisplay = this.state.favorites.map((recipe, i) => {
      return (
        <GrabFavorite key={i} recipe_id={recipe.recipe_id}/> 
    )})
    
    return (
      <div>
        {favoriteDisplay}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    favorites: reduxState.favorites
  }
}

const mapDispatchToProps = {
  updateFavorites
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)





