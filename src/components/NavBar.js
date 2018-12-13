import React, { Component } from 'react';
import '../styles/NavBar.css';


class NavBar extends Component {
	render() {
		return (
			<div className='NavBar'> 
				<nav class="navbar navbar-expand-lg navbar-light ">
				<span><a class="navbar-brand" href="/">The <span class="vhColor">Visible Heart®</span> Laboratory</a> | <a class="navbar-brand" href="https://www.surgery.umn.edu/">Department of Surgery</a></span>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						
						<ul class="navbar-nav">
						<li class="nav-item">
								<a class="nav-link" href="/" id="navbarDropdownMenuLink" role="button">
									Home
        						</a>
							</li>
									

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									About
        						</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="/about">Meet the Staff</a>
									<a class="dropdown-item" href="/directions">Directions and Maps</a>
									<a class="dropdown-item" href="/collaborators">Collaborators</a>
									<a class="dropdown-item" href="/gift">Give a Gift</a>
									<a class="dropdown-item" href="/affiliations">Affiliations</a>
									<a class="dropdown-item" href="/contact">Contact</a>
								</div>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Research
        						</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="/research-3d">3D Modeling</a>
									<a class="dropdown-item" href="/research-cacardiac">Cardiac</a>
									<a class="dropdown-item" href="/research-pc">Patient Care</a>
									<a class="dropdown-item" href="/research-bb">Black Bears</a>
									<a class="dropdown-item" href="/research-md">Medical Devices</a>
									<a class="dropdown-item" href="/research-sm">Skeletal Muscle</a>
								</div>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									News
        						</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="/news">Lab News</a>
									<a class="dropdown-item" href="/publications">Publications</a>
									<a class="dropdown-item" href="/media">Media</a>
									<a class="dropdown-item" href="http://www.vhlab.umn.edu/atlas/index.shtml">The Atlas</a>
									</div>
							</li>	
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;