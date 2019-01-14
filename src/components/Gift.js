import React, { Component } from 'react';
import '../styles/Gift.css';

class Gift extends Component {
	render() {
		return (
				<div className='container'>
					<h1>Give a Gift</h1>
					<div className='instructions'>
						<h3>How would you like to give a gift to the VHL?</h3>
						<p>For all gift options, please indicate that the gift should be directed to the Iaizzo Lab Education Fund (#18308)</p>
					</div>

					<div className='row'>
						<div className='col-md-2'></div>

						<div className='col-md-3'>
						<a target='_blank' href="https://makingagift.umn.edu/donate/fund-contact-info.html?&amp;fundCode=18308&amp;owner=O_MFVHL&amp;desc_source=UWXXDAADPTLK#formstep-1">
  								<img src="images/icons/iconmac.svg" alt="Online Icon" /></a>
						<h5>Online</h5>
						</div>

						<div className='col-md-3'>
						<a href='#mail'>
						<img src="images/icons/iconmail.svg" alt="Mail Icon" /></a>
							<h5>Mail</h5>
						</div>

						<div className='col-md-3'>
						<a href='#phone'>
						<img src="images/icons/iconphone.svg" alt="Phone Icon" /></a>
							<h5>Phone</h5>
						</div>
					</div>

					<div className='mailGift'>
						<h3 id='mail'>Gift by Mail</h3>
						
						<p className='mailingAddress'>To pay by check, mail to: <br></br>
							University of Minnesota Foundation<br></br>
							P.O. Box 860266<br></br>
							Minneapolis, MN 55486-0266</p>
					</div>

					<div className='phoneGift'>
						<h3 id='phone'>Gift by Phone</h3>
						<p className='phoneNumber'>To pay by phone with a credit card: <br></br>
							Call 800-775-2187 or 612-624-3333.</p>
					</div>

					<p>All gifts are received and processed by the University of Minnesota Foundation. Thank you for your confidence in our work and for your generosity.</p>
				</div>
			);
	}
}

export default Gift;