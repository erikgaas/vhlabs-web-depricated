import React, { Component } from 'react';
import HomeElement from '../components/HomeElement.js';
import homeJson from '../json/homePage.json';
import '../styles/Home2.css';
import { Timeline } from 'react-twitter-widgets'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

const carousel = homeJson['carousel'];
const homeElements = homeJson['homeElements'];

class Home2 extends Component {
    makeElement(data) {
		return (
			<div key={data.img_path}>
				<img src={process.env.PUBLIC_URL + "/images/carousel/".concat(data.img_path)} />
				<a className="legend" href={data.link}>{data.legend}</a>
			</div>
		);
	}

    render() {
		return (
				<div className='Home'>
				<div className="row" id="row1">
				<div className="col-md-1"></div>
					<div className="col-md-7">
						<div className='CarouselContainer'>
							<Carousel className="Carousel" 
										dynamicHeight={false} 
										infiniteLoop={true} 
										autoPlay={true} 
										swipeable={true} 
										emulateTouch={true}
										showThumbs={false}>
								{carousel.map(el => this.makeElement(el))}
							</Carousel>
						</div>
					</div>
					{/* <div className="col-md-1" id="emptyDiv"></div> */}
					<div className="col-md-4" id="twitterDiv">
							<Timeline dataSource={{sourceType: "profile", screenName: "VisibleHeartLab"}}
								options={{username:"VisibleHeartLab", width:"300px", height:"350"}}/>
					</div>


											{/* Home Element Cards */}

									<div className="row" id="row2">
									
											<div className="col-md-2">
															<div class="card" >
																<h3>Our Lab</h3>	
																<img class="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/ourlab3.jpg"} alt="The Atlas" />
																<div class="card-body">
																	<p class="card-text">Information here about The Atlas.</p>
																	<a href="/about" class="btn btn-primary">More Information</a>
																</div>
															</div>
											</div>

											<div className="col-md-2">
													<div class="card" >
														<h3>Research</h3>
														<img class="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/Research.jpg"} alt="Research" />
														<div class="card-body">
															<p class="card-text">Information here about Research.</p>
															<a href="/research" class="btn btn-primary">More Information</a>
														</div>
													</div>
											</div>

											<div className="col-md-2">
													<div class="card" >
														<h3>Outreach</h3>
														<img class="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/education5.jpg"} alt="Outreach & Education" />
														<div class="card-body">
															<p class="card-text">Information here about Outreach and Education.</p>
															<a href="/education" class="btn btn-primary">More Information</a>
														</div>
													</div>
											</div>

											<div className="col-md-2">
													<div class="card" >
														<h3>Clinical</h3>	
														<img class="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/mhlogo.jpg"} alt="The Atlas" />
														<div class="card-body">
															<p class="card-text">Information here about The Atlas.</p>
															<a href="http://www.vhlab.umn.edu/atlas/index.shtml" class="btn btn-primary">More Information</a>
														</div>
													</div>
											</div>

											<div className="col-md-2">
													<div class="card" >
														<h3>The Atlas</h3>	
														<img class="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/Happaratus.jpg"} alt="The Atlas" />
														<div class="card-body">
															<p class="card-text">Information here about The Atlas.</p>
															<a href="http://www.vhlab.umn.edu/atlas/index.shtml" class="btn btn-primary">More Information</a>
														</div>
													</div>
											</div>
									</div>



</div>
</div>

			
        )}}
export default Home2;
