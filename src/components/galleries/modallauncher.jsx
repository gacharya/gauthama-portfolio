import React, { Component } from 'react';
import Modal from './modal'; // Import SimpleModal component

// Declaration of the component as React Class Component
class ModalLauncher extends Component {
  
  // Init of the component before it is mounted.
  // Sets the modal visibility (showModal) to false.
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  
  // Handle the visibility of the modal.
  // If `state.showModal` is false, sets it to true,
  // if is true, sets it to false.
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { src } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <img 
          src={src} 
          className="modalButton" 
          onClick={() => this.handleToggleModal()}
        />

        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
          </Modal>}
      </div>
    );
  }
}

export default ModalLauncher;