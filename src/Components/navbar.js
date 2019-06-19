import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'
import Modal from './Login/modal'
import {Nav} from './NavbarStyle'


const Navbar = ({ username }) => {
	return (
		<Nav>
			{/* <Link style={{textDecoration: 'none'}} to='/'>Home</Link> */}
			<Link to='/favorites'>Favorites</Link>
			<Modal/>
			{/* <Link to='/login'>Login</Link> */}
			<Link to= '/profile'>{username && username}</Link>
			<Link to= '/dashboard'>Dashboard</Link>
		</Nav>
		
	)
}

const mapStateToProps = (reduxState) => {
	return {
		username: reduxState.username
	}
}

export default connect(mapStateToProps)(Navbar)


