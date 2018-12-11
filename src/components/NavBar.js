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
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Home
        						</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="/research">Research</a>
									<a class="dropdown-item" href="/education">Outreach & Education</a>
									<a class="dropdown-item" href="/clinical">Clinical</a>
									<a class="dropdown-item" href="http://www.vhlab.umn.edu/atlas/index.shtml">The Atlas</a>
								</div>
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
									<a class="dropdown-item" href="/news">Lab News</a>
								</div>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Media
        						</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="/media">Articles</a>
									<a class="dropdown-item" href="https://www.youtube.com/channel/UCwcaO45GJ_v-WrWXEUKCXKw">Videos</a>
								</div>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Publications
        						</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="#">Original Articles</a>
									<a class="dropdown-item" href="#">Review Articles</a>
									<a class="dropdown-item" href="#">Books</a>
									<a class="dropdown-item" href="#">Book Chapters</a>
									<a class="dropdown-item" href="#">Invited Articles</a>
									<a class="dropdown-item" href="#">Letters to the Editor</a>
									<a class="dropdown-item" href="#">Educational Materials</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Contact
        						</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;