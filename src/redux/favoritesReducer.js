const initialstate = {
  favorites: []
}

const UPDATE_FAVORITES = 'UPDATE_FAVORITES'

export function updateFavorites(favorites){
  return{
    type: UPDATE_FAVORITES,
    payload: favorites
  }
}


function reducer(state = initialstate, action){
  switch(action.type){
    case UPDATE_FAVORITES:
      const favorites = action.payload
      return {favorites}
      default: 
      return state
  }
}

  export default reducer