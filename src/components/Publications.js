import React, { Component } from 'react';
import "../styles/Publications.css";
// import { pickBy, updateWith, object } from 'lodash';

let allData = require('./Combined')


class Publications extends Component {
	constructor() {
		
		super();
		this.state = {
			searchTerm: ''
		};
	}

	updateSearch(event) {
		this.setState({ searchTerm: event.target.value }) 
	}


	render() {
		console.log(allData);
		console.log(typeof allData);
		
		const newData = Object.values(allData);
		console.log(newData);



		
			let filteredArticles = newData.filter((dataItem) => {
				console.log(dataItem)
				return dataItem.toLowerCase().includes(this.state.searchTerm.toLowerCase())
			});

			const filteredMap = filteredArticles.map((dataItem, index) => {
					return <div key={index}><li><h5>{dataItem.authors} {dataItem.description} 		
									{dataItem.journal} {dataItem.date} {dataItem.journalID} </h5></li>
							</div>
			})

		console.log(filteredMap);


		// function findBySearch(searchTerm) {

		// 	searchTerm.includes(this.state.searchTerm.toLowerCase())
		// 	// return filteredOArt
		// }
	
		//  let filteredArticles = allData.pickBy(
		// 	object, findBySearch(this.searchTerm))

		// return filteredArticles;
	
		// Array.prototype.slice(allData).sort(function(a, b) {
		// 	var dateA = new Date(a.date), dateB = new Date(b.date);
		// 	return dateB - dateA;
			
		// });



		




		return (
				<div className='container'>
					<h2>PUBLICATIONS</h2>
							{/* <p>{filteredMap}</p> */}
					<h6>Search by author name: <input type="text" value={this.state.searchTerm} onChange={this.updateSearch.bind(this)} /></h6>
					<p>{allData}</p>
{/* 
						<h4><strong>Original Articles</strong></h4>
							<ol>{originalArticles}</ol> */}

						{/* <h4><strong>Review Articles</strong></h4>
							<ol>{reviewA}</ol>
						
						<h4><strong>Books</strong></h4>
							<ol>{booksEdited}</ol>
						
						<h4><strong>Book Chapters</strong></h4>
							<ol>{bookChEdited}</ol>

						<h4><strong>Invited Articles</strong></h4>
							<ol>{invitedA}</ol>	

						<h4><strong>Letters to the Editor</strong></h4>
							<ol>{lettersEd}</ol>

						<h4><strong>Educational Materials</strong></h4>
							<ol>{eduMaterials}</ol> */}

						
				</div>
			);
	}
}			

export default Publications;