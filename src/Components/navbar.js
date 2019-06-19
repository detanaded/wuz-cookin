import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";
import Modal from "./Login/modal";
import { Nav } from "./NavbarStyle";

function Navbar(props) {
	console.log(props)
  return (
    <Nav>
      {/* <Link style={{textDecoration: 'none'}} to='/'>Home</Link> */}
      {props.username ? <Link to="/favorites">Favorites</Link> : null}
     {props.username ?  null: <Modal />}
      {/* <Link to='/login'>Login</Link> */}
      {props.username ? <Link to="/profile">Profile</Link> : null}
      {props.username ? <Link to="/dashboard">Dashboard</Link> : null}
    </Nav>
  );
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps)(Navbar);
