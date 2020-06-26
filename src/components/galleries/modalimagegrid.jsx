import React from 'react';
import '../style.css';
import ModalImage from "../modal";

export default class ModalImageGrid extends React.Component {
  state = { isOpen: false };

  render() {
    const {
      images
    } = this.props;

    let info = this.props.images['imageinfo'];

    let imageLauncher = []

    for (let image in info) {
      console.log(this.props.images)
      if (image === 'imageinfo') continue;

    let infoJSX = (<div className='artInfo'>
      <a className='title'>{info[image]['title']}</a>
      <br/>
      <a>{info[image]['size']}</a>
      <br/>
      <a>{info[image]['material']}</a>
      <br/>
      <a>{info[image]['year']}</a>
    </div>
    );

      imageLauncher.push(<ModalImage 
        small={this.props.images[image]}
        large={this.props.images[image]}
        className="modalImageView"
        alt={infoJSX}
        hideDownload="true"
      />)
    }
    
    return <div className="imageGrid">
      {imageLauncher}
    </div>
  }
}
