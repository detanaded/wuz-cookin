import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

 class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: ''
		}
	}

	handleUserRegister = (e) => {
		e.preventDefault()
		this.props.closeModal()
		const { firstname, lastname, email, username, password } = this.state
		axios
			.post('/auth/register', { firstname, lastname, email, username, password })
			.then((res) => {
				this.props.history.push('/dashboard')
			})
			.catch((err) => {
				console.log(err)
			})
		e.target.firstname.value = ''
		e.target.lastname.value = ''
		e.target.email.value = ''
		e.target.password.value = ''
		e.target.username.value = ''
	}

	handleRegisterInfoUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render() {
		return (
			<>
				
				<RegisterForm onSubmit={this.handleUserRegister}>
					<Regh3>join wuz cookin!</Regh3>
	
					<RegisterInput
						type='text'
						placeholder='first name'
						name='firstname'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<RegisterInput
						type='text'
						placeholder='last name'
						name='lastname'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<RegisterInput
						type='text'
						placeholder='email'
						name='email'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<RegisterInput
						type='text'
						placeholder='username'
						name='username'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<RegisterInput
						type='password'
						placeholder='password'
						name='password'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<RegBtn>Register</RegBtn>
				</RegisterForm>
			</>
		)
	}
}

export default withRouter(Register)


const Regh3 =  styled.h3`
text-transform: uppercase;
font-size: 16px;
margin-bottom: -4px;
`
const RegisterForm = styled.form`
margin-top: 16px;
height: 60%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const RegisterInput = styled.input`
border: 1px dotted grey
text-transform: capitalize;
`

const RegBtn = styled.button`
background-color: black;
  color: white
  width: 65%;
  height: 25px;
	border: none;
	text-transform: uppercase;
	font-size: 11px;
	`