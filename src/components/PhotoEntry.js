import React from 'react';

class PhotoEntry extends React.Component {

  render() {
    console.log("this.props.caption = " + this.props.caption);
    console.log("this.props.location = " + this.props.location);
    console.log("this.props.src = " + this.props.src);
    console.log("-------------------------------");

    const image_path = "../images/" + this.props.src;

    return (
        <div className="item" >
            <a href={image_path} target="_blank" className="photo">
                <img className="photo-img" src={image_path} alt={image_path} />
            </a>
            <h5>{this.props.caption}</h5>
            <h6>{this.props.location}</h6>
        </div>
    )
  }
}

export default PhotoEntry;
