import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/PersonCard.css';


class PersonCard extends Component {

  render() {
    return (
      <div className="card-container">
        <div class="card">
          <div className="side">
            <Image class="card-img-top" src={process.env.PUBLIC_URL + "/images/bios/" + this.props.data.img_name} height={249} width={249} /></div>
          <div class="card-body">
          <a href="https://www.surgery.umn.edu/about"><h4 class="card-title">{this.props.data.name + " " + this.props.data.credentials}</h4></a>
            <h6 class="card-text">{this.props.data.position}</h6>
            <p class="card-text">{this.props.data.email}</p>
            <p class="card-text">{this.props.data.phone}</p>
            <a href="https://www.surgery.umn.edu/about" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
			);
  }
}

export default PersonCard;