import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/PersonCard.css';
import pdf from '../pdfs/mBatemanCV.pdf';
import $ from 'jquery';


class PersonCard extends Component {

  render() {
    function show(){
      $('.cv-style').display='block' ;
    }
    
    
    return (
      <div className="card-container">
        <div class="card">
          <div className="side">
            <Image class="card-img-top" src={process.env.PUBLIC_URL + "/images/bios/" + this.props.data.img_name} height={249} width={249} />{$('.card-title').click(show())}</div>
          <div class="card-body">

            <div className="cv-style"><embed src={pdf} type="application/pdf" width="100%" height="600px" /></div>
            <h5 class="card-title">{this.props.data.name + " " + this.props.data.credentials}</h5>
            <h6 class="card-text">{this.props.data.position}</h6>
            <p class="card-text">{this.props.data.email}</p>
            <p class="card-text">{this.props.data.phone}</p>
          </div>
        </div>
      </div>
			);
  }
}

export default PersonCard;