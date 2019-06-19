import React, { Component } from "react";
import Modal from "react-awesome-modal";
import Login from "./Login";
import Register from "./Register";
import "./modal.css";
import { connect } from "react-redux";
import styled from "styled-components";
import { device } from "../MediaQueries";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    console.log(this.props);
    return (
      <Test>
        <section>
          {this.props.username === "" ? (
            <Joinbtn
              type="button"
              value="Join Now!"
              onClick={() => this.openModal()}
            />
          ) : null}
          
          <Modal className='modal2'
            visible={this.state.visible}
            width="500"
            height="400"
            onClickAway={() => this.closeModal()}
          >
            <div className="modal">
              {/* <CloseBtn onClick={() => this.closeModal()}>Close</CloseBtn> */}
              <Login closeModal={this.closeModal} />
              <Register closeModal={this.closeModal} />
            </div>
          </Modal>
        </section>
      </Test>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

// const Para = styled.p`
// display: flex;
// flex-direction: column
// align-items: center;`

export default connect(mapStateToProps)(PopUp);

const Test = styled.div`
`

const Joinbtn = styled.input`
@media ${device.mobileS}{
  border-radius: 3em;
  background: #0096D6;
  color: white;
  font-weight: bold;
  height: 40px;
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
}
`


  
 
  
  
 



 