import React, { Component } from "react";
import axios from "axios";
import {Container, Box, Images, View, S1} from './StyleFavorite'
class GrabFavorite extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {
        title: "",
        image_url: "",
        source_url: "",
        recipe_id: ""
      }
    };
  }

  componentDidMount() {
    let recipe = this.props.recipe_id;
    axios.get(`/api/favorites/${recipe}`).then(res => {
      this.setState({
        recipe: res.data.recipe
      });
    });
  }
  render() {
    return (
      <Container>
        <Box>
          <S1>{this.state.recipe.title}</S1>
          <Images src={this.state.recipe.image_url} alt="" />
          <a href={this.state.recipe.source_url}>
            <View>View Recipe</View>
          </a>
          <button
            onClick={() => this.addTofavorites(this.state.recipe.recipe_id)}
          >
            Favorite
          </button>
        </Box>
      </Container>
    );
  }
}

export default GrabFavorite;

//  on the co mponentdidmount do an axios request on the endpoint that grabs the single favorite
// in the params pass the recipe ID. Gonna pass teh recipe id down from props when you map over it in favorites
