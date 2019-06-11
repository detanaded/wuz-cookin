import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
// import Recipe from './Components/Recipe-Search/RecipeSearch'
import Dashboard from './Components/Dashboard';

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		{/* <Route path='/recipesearch' component={Recipe}/> */}
		<Route path='/dashboard' component={Dashboard}/>
	</Switch>
)
