import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Recipe from './Components/Recipe-Search/RecipeSearch'
import Dashboard from './Components/Dashboard';
import Profile from './Components/ProfileRecipe'
import Favorites from './Components/Profile/favorites';
import AddRecipe from './Components/Recipes/AddRecipe'
import RecipeDisplay from './Components/Recipes/RecipeDisplay'
import AdminPage from './Components/Admin/AdminPage';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/recipesearch' component={Recipe}/>
		<Route path='/dashboard' component={Dashboard}/>
		<Route path='/profile' component={Profile}/>
		<Route path='/favorites' component={Favorites}/>
		<Route path='/add' component={AddRecipe}/>
		<Route path='/display' component={RecipeDisplay}/>
		<Route path='/admin' component={AdminPage}/>
		<Route path='/login' component = {Login}/>
		<Route path='/register' component = {Register}/>
	</Switch>
)
