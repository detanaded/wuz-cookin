import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'



class Login extends Component {
  constructor(){
  super()
  this.state ={
    username: '',
    password: ''
  }
}
handleLoginInfoUpdate = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
    }

    handleUserLogin = (e) => {
      e.preventDefault()
      const {username, password} = this.state
    
      axios.post('/auth/login', {username, password}).then((res) => {
       this.props.closeModal()
        // this.props.history.push('/add')
      })
      .catch((err) => {
        console.log(err)
      })
      e.target.username.value = ''
      e.target.password.value = ''
    }
  
    render(){
      // console.log('THIS.STATE',this.state)
      // console.log(this.props)
      return (
        <FormContainter onSubmit={this.handleUserLogin}>
          <Heading>member sign in</Heading>
          <Logo alt="Logo" src = {require('../../Assets/Recipe 2.png')}/>
            <LoginInput type='text' name='username' placeholder='Username' onChange={this.handleLoginInfoUpdate}/>
            <LoginInput type='password' name='password' placeholder='Password' onChange={this.handleLoginInfoUpdate}/>
            <FormBtn>Login</FormBtn>
        </FormContainter>
      )
    }
  }

  


  const Heading = styled.h3`
  text-transform: uppercase;
  padding-top: 13px;
  font-size: 16px;
  margin-top: -2px;
  `

  const FormBtn = styled.button`
  background-color: black;
  color: white
  width: 65%;
  height: 25px;
  border: none;
  text-transform: uppercase;
  font-size: 11px;
  `
const FormContainter= styled.form`
margin-top: 16px;
display: flex;

height: 61%;
width: 50%;
border-right: 1px grey solid;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
const LoginInput = styled.input `
border: 1px dotted grey
`
const Logo = styled.img`
height: 45px;
width: 35%;
`

export default withRouter(Login)

