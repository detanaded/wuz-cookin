import React, { Component } from "react";
import axios from "axios";
import { updateUser, clearUser } from "../redux/userReducer";
import { connect } from "react-redux";
import Recipe from "./Recipe-Search/RecipeSearch";
// import Chicken from "../Assets/Chicken.jpg";
import styled from "styled-components";
// import { device } from "./MediaQueries";
 


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
        <Logout onClick={this.handleUserLogout}>Logout</Logout>
        <Recipe/> 
        {this.props.username && (
          <>
            <h3>{this.props.username}</h3>
          </>
        )}
        
        {/* <Test>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <Favorite>Favorite</Favorite>
           
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <Favorite>Favorite</Favorite>
           
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <Favorite>Favorite</Favorite>
           
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <Favorite>Favorite</Favorite>
           
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <Favorite>Favorite</Favorite>
           
          </Wrap>
          <Wrap>
            <S1>Test Recipe Name</S1>
            <Itest alt="Chicken" src={Chicken} />
            <Favorite>Favorite</Favorite>
           
          </Wrap>
        </Test> */}
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

// const Test = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-evenly;
// @media ${device.mobileS}{
//   flex-direction: column;
//   align-items: center;
//   flex-wrap: nowrap;
// }
// @media ${device.tablet}{
//   flex-wrap: wrap;
//   flex-direction: row
// }
// `;

// const Itest = styled.img`
// @media ${device.mobileS}{
//   width: 90%;
//   height: 60%;
//   border-raduis: 6px;
// }
// `;

// const Wrap = styled.div`
// @media ${device.mobileS}{
//   width: 60%;
//   height: 45vh;
// 	display: flex;
// 	flex-direction: column;
//   align-items: center;
//   margin-bottom: 20px;
//   border: solid rgb(200, 202, 206) 3px;
//   border-radius: 6px;
// }
// @media ${device.tablet}{
//   width: 40%;
// }`;


// const S1 = styled.span`
// @media ${device.mobileS}{
//   font-weight: bold;
//   font-size: 12px;
//   margin-bottom: 15px;
// }

// `
// const Favorite = styled.button`
//   @media ${device.mobileS}{
//     border-radius: 3em;
//     background: #0096D6;
//     color: white;
//     font-weight: bold;
//     height: 40px;
//     margin-top: 10px;
//     padding: 0 24px;
//     border: none;
//     font-size: 14px;
//     text-align: center;
//     text-transform: captilize
//     white-space: nowrap;
//     :hover {
//       background-color: purple;
//       color: black;
//       box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
//     }
//   }`

const Logout = styled.button`
border-radius: 3em;
    background: #0096D6;
    color: white;
    font-weight: bold;
    height: 40px;
    margin-top: 10px;
    padding: 0 24px;
    border: none;
    font-size: 14px;
    text-align: center;
    text-transform: captilize
    white-space: nowrap;
    :hover {
      background-color: purple;
      color: black;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }`