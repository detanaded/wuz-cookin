import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'
// import styled from 'styled-components'
import Modal from './Login/modal'
import {Nav} from './NavbarStyle'
import Navigation from 'react-sticky-nav'



const Navbar = ({ username }) => {
	return (
		<Navigation>
		<Nav>
			<Link to='/'>Home</Link>
			<Link to='/favorites'>Favorites</Link>
			<Modal/>
			{/* <Link to='/login'>Login</Link> */}
			<Link to= '/profile'>{username && username}</Link>
			<Link to= '/dashboard'>Dashboard</Link>
		</Nav>
		</Navigation>
	)
}

const mapStateToProps = (reduxState) => {
	return {
		username: reduxState.username
	}
}

export default connect(mapStateToProps)(Navbar)




