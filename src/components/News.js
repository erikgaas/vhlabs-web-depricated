import React, { Component } from 'react';
import labNewsJson from '../json/labNews.json';
import '../styles/News.css';
import Image from 'react-image-resizer';


var moment = require('moment');

const newsList = labNewsJson['news'];

const ImageComponent = ({ children, img }) => img ? (
	<Image src={process.env.PUBLIC_URL + "/images/" + img} height={150} width={150}>
	  {children}
	</Image>
  ) : <div>{children}</div>;
  
class News extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(event) {
		this.setState({ search: event.target.value }) 
	}
	render() {
		// let filteredNews = this.props.newsList;
				newsList.sort(function(a, b) {
					var dateA = new Date(a.date), dateB = new Date(b.date);
					return dateB - dateA;
				});

				let filteredNews = newsList.filter((newsItem) => {
					return newsItem.description.toLowerCase().includes(this.state.search.toLowerCase())
					// else return
					// 	   newsItem.date.toLowerCase().includes(this.state.search.toLowerCase())

					}
				);

				const news = filteredNews.map((newsItem, index) => {
					return <div className='newsContainer' key={index}>
					
					<div className="textDiv">
					<h3>{newsItem.title}</h3><p><strong>{newsItem.description}
					
					</strong><br></br>{moment(newsItem.date).format("LL")}</p>
					
					</div>
					<div className="imageDiv">
					<ImageComponent img={newsItem.img}></ImageComponent></div>
					<p>{newsItem.more}</p>
					</div>
				});
				
			
		return (
				<div className='container'>
					<div className='pageTitle'><h1>Lab News</h1></div>
					<p id="searchbox-container"> Search the News: 
					<input id="searchbox" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
					</p>
					 <div>{news}</div>
				
				</div>
			);
	 }
}

export default News;