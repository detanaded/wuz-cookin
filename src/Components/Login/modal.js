import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Login from './Login'
import Register from './Register'
import './modal.css'



export default class PopUp  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal = () => {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <input type="button" value="Login/Register" onClick={() => this.openModal()} />
                
                <Modal visible={this.state.visible} width="500" height="400" onClickAway={() => this.closeModal()}>
                    <div className='modal'>
                        {/* <CloseBtn onClick={() => this.closeModal()}>Close</CloseBtn> */}
                        <Login closeModal={this.closeModal}/>
                      <Register closeModal={this.closeModal}/>
                      
                    </div>
                    
                </Modal>
            </section>
        );
    }
}



// const Para = styled.p`
// display: flex;
// flex-direction: column
// align-items: center;`