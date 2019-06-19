import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { device } from "../MaxMedia";
import {Heading, FormBtn, FormContainter, LoginInput, Logo, Containerbtn,WrapBtn,BtnRgb} from './LoginStyle'
import {updateUser} from '../../redux/userReducer'
import {connect} from 'react-redux'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLoginInfoUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUserLogin = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/auth/login", { username, password })
      .then(res => {
        this.props.updateUser(res.data.username)
        this.props.closeModal();
        this.props.history.push("/admin");
      })
      .catch(err => {
        console.log(err);
      });
    e.target.username.value = "";
    e.target.password.value = "";
  };

  render() {
    // console.log('THIS.STATE',this.state)
    // console.log(this.props)
    return (
      <FormContainter onSubmit={this.handleUserLogin}>
        <Heading>welcome</Heading>
        <Logo alt="Logo" src={require("../../Assets/Recipe 2.png")} />
        <LoginInput
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleLoginInfoUpdate}
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleLoginInfoUpdate}
        />
          <FormBtn>Login</FormBtn>
          
      </FormContainter>
    );
  }
}


export default withRouter(connect(null,{updateUser})(Login));
