import React from 'react';
import '../style.css';
import ModalLauncher from './modallauncher'

export default class ModalImageGrid extends React.Component {
  state = { isOpen: false };

  render() {
    const {
      images
    } = this.props;

    let imageLauncher = []

    console.log(this.props.images)
    for (let image in this.props.images) {
      console.log(image)
      imageLauncher.push(<ModalLauncher src={this.props.images[image]}>
      </ModalLauncher>)
    }
    
    return <div className="imageGrid">
      {imageLauncher}
    </div>
  }
}
