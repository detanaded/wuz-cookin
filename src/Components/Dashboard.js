import React, { Component } from 'react'
import axios from 'axios'
import { updateUser, clearUser } from '../redux/userReducer'
import { connect } from 'react-redux'
import Recipe from './Recipe-Search/RecipeSearch'



class Dashboard extends Component {
	componentDidMount() {
		axios
			.get('/auth/user')
			.then((res) => {
				this.props.updateUser(res.data)
			})
			.catch((err) => {
				this.props.history.push('/login')
			})
	}


	handleUserLogout = () => {
		axios.get('/auth/logout').then((res) => {
			this.props.clearUser()
			this.props.history.push('/')
		})
	}

	render() {
		return (
			<div>
			
				<Recipe/>
				{/* {this.props.username && (
					<>
						<h3>{this.props.username}</h3>
					</>
				)} */}
					<button onClick={this.handleUserLogout}>Logout</button>
			</div>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		firstname: reduxState.firstname,
	}
}

const mapDispatchToProps = {
	updateUser,
	clearUser
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)



