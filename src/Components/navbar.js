import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'
import styled from 'styled-components'
import Modal from './Login/modal'



const Navbar = ({ username }) => {
	return (
		<Nav>
			<Link to='/'>Home</Link>
			<Modal/>
			{/* <Link to='/login'>Login</Link> */}
			<span>{username && username}</span>
		</Nav>
	)
}

const mapStateToProps = (reduxState) => {
	return {
		username: reduxState.username
	}
}

export default connect(mapStateToProps)(Navbar)





const Nav = styled.nav`

width: 100vw
height: 60px;
display:flex;
align-items: center;
justify-content: flex-end;
`