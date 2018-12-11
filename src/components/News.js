import React, { Component } from 'react';
import labNewsJson from '../json/labNews.json';
import '../styles/News.css';
var moment = require('moment');

const newsList = labNewsJson['news'];

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
				newsList.sort(function(a, b) {
					var dateA = new Date(a.date), dateB = new Date(b.date);
					return dateB - dateA;
				});

				const news = this.state.newsList.map((newsItem, index) => {
					return <div className='newsContainer' key={index}><h3>{newsItem.title}</h3><p><strong>{newsItem.description}</strong><br></br>{moment(newsItem.date).format("LL")}</p></div>
				});
				
			
		return (
			
				<div className='container'>
					<div className='pageTitle'><h1>Lab News</h1></div>
					
					 <div>{news}</div>
				<input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
					
				</div>
			);
	 }
}

export default News;