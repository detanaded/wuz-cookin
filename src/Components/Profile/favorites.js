import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import {updateFavorites} from '../../redux/favoritesReducer'
import { Images, Container, H1, Box } from "../Recipe-Search/DashboardStyle";

class Favorites extends Component {
  componentWillMount(){
    axios
    .get('/favorites')
    .then((res) => {
      this.props.updateFavorites(res.data)
      console.log(res.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }


  render() {
    console.log(this.props)
    const recipeDisplay = this.props.favorites.map((recipe, i) => {
      return (
        // Displays recipe title.
        <Container key={i}>
          <Box>
          <H1>{recipe.title}</H1>
          <Images src={recipe.image_url} alt="" />
          <a href={recipe.source_url}>
            <button>View Recipe</button>
          </a>
          <button onClick={() => this.addTofavorites(recipe)}>Favorite</button>
          </Box>
        </Container>
      );
    });
    return (
      <div>
        {recipeDisplay}
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