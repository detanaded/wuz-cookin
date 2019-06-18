import React, { Component } from "react";
import axios from "axios";
import { updateUser, clearUser } from "../redux/userReducer";
import { connect } from "react-redux";
import Recipe from "./Recipe-Search/RecipeSearch";
import Chicken from "../Assets/Chicken.jpg";
import styled from "styled-components";
import { device } from "./MediaQueries";


class Dashboard extends Component {
  componentDidMount() {
    axios
      .get("/auth/user")
      .then(res => {
        this.props.updateUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUserLogout = () => {
    axios.get("/auth/logout").then(res => {
      this.props.clearUser();
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        {/* <Recipe/> */}
        {this.props.username && (
          <>
            <h3>{this.props.username}</h3>
          </>
        )}
        <button onClick={this.handleUserLogout}>Logout</button>
        <Test>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <button>Favorite</button>
            <button>View Recipe</button>
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <button>Favorite</button>
            <button>View Recipe</button>
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <button>Favorite</button>
            <button>View Recipe</button>
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <button>Favorite</button>
            <button>View Recipe</button>
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <button>Favorite</button>
            <button>View Recipe</button>
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <button>Favorite</button>
            <button>View Recipe</button>
          </Wrap>
        </Test>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    firstname: reduxState.firstname
  };
}

const mapDispatchToProps = {
  updateUser,
  clearUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

const Test = styled.div`
    background-color: purple;
    display: flex;
    flex-wrap: wrap;
`;

const Itest = styled.img`
  width: 100%;
  height: 50%;
  border-raduis: 6px;
`;

const Wrap = styled.div`
@media ${device.mobileS}{
  width: 45vw;
  height: 35vh;
	display: flex;
	flex-direction: column;
  align-content: center;
  padding: 1.7%
  margin-left: 1%
}`;


const S1 = styled.span`
margin: 0;
`