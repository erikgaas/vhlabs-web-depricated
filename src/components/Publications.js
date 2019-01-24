import React, { Component } from 'react';
import "../styles/Publications.css";
import originalArticles from "../json/Publications/originalArticles";
import reviewArticles from "../json/Publications/reviewArt.json";
import books from "../json/Publications/books.json";
import bookChapters from "../json/Publications/bookChapters.json";
import invitedArticles from "../json/Publications/invitedArticles.json";
import letterstoEditor from "../json/Publications/letterstoEdi.json";
import educationalMaterials from "../json/Publications/educationalMaterials.json";

// import { pickBy, updateWith, object } from 'lodash';

// let allData = require('./Combined')


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
		// console.log(allData);
		// console.log(typeof allData);
		
		// const newData = Object.values(allData);
		// console.log(newData);



		
		// 	let filteredArticles = newData.filter((dataItem) => {
		// 		console.log(dataItem)
		// 		return dataItem.toLowerCase().includes(this.state.searchTerm.toLowerCase())
		// 	});

		// 	const filteredMap = filteredArticles.map((dataItem, index) => {
		// 			return <div key={index}><li><h5>{dataItem.authors} {dataItem.description} 		
		// 							{dataItem.journal} {dataItem.date} {dataItem.journalID} </h5></li>
		// 					</div>
		// 	})

		// console.log(filteredMap);


	

		let filteredRArt = reviewArticles.filter((revAItem) => {
				return revAItem.authors.toLowerCase().includes(this.state.search.toLowerCase())
			});
			const reviewA = filteredRArt.map((revAItem, index) => {
				return <div className='revAContainer' key={index}><li><h5>{revAItem.authors} {revAItem.description} <i>{revAItem.journal}</i>{revAItem.date}</h5></li></div>
			});



			let filteredBooks = books.filter((bookItem) => {
				return bookItem.editors.toLowerCase().includes(this.state.search.toLowerCase())
			});
			const booksEdited = filteredBooks.map((bookItem, index) => {
				return <div className='booksContainer' key={index}><li><h5>{bookItem.editors} {bookItem.description} <span id="underlineThis">{bookItem.publisher}</span> {bookItem.date}</h5></li></div>
			});



			let filteredBookCh = bookChapters.filter((bookChItem) => {
				return bookChItem.authors.toLowerCase().includes(this.state.search.toLowerCase())
			});
			const bookChEdited = filteredBookCh.map((bookChItem, index) => {
				return <div className='bookChContainer' key={index}><li><h5>{bookChItem.authors} {bookChItem.description} {bookChItem.publisher} {bookChItem.date}</h5></li></div>
			});



			let filteredInviA = invitedArticles.filter((invAItem) => {
				return invAItem.authors.toLowerCase().includes(this.state.search.toLowerCase())
			});
			const invitedA = filteredInviA.map((invAItem, index) => {
				return <div className='invAContainer' key={index}><li><h5>{invAItem.authors} {invAItem.description} {invAItem.journal} {invAItem.date}</h5></li></div>
			});



			let filteredLetEd = letterstoEditor.filter((letEdItem) => {
				return letEdItem.authors.toLowerCase().includes(this.state.search.toLowerCase())
			});
			const lettersEd = filteredLetEd.map((letEdItem, index) => {
				return <div className='letEdContainer' key={index}><li><h5>{letEdItem.authors} {letEdItem.description} {letEdItem.type} {letEdItem.date}</h5></li></div>
			});



			let filteredEduMat = educationalMaterials.filter((eduMatItem) => {
				return eduMatItem.authors.toLowerCase().includes(this.state.search.toLowerCase())
			});
			const eduMaterials = filteredEduMat.map((eduMatItem, index) => {
				return <div className='eduMatContainer' key={index}><li><h5>{eduMatItem.authors} {eduMatItem.description} {eduMatItem.type} {eduMatItem.date}</h5></li></div>
            });

		




		return (
				<div className='container'>
					<h2>Publications</h2>
							{/* <p>{filteredMap}</p> */}
					<h6>Search by author name: <input type="text" value={this.state.searchTerm} onChange={this.updateSearch.bind(this)} /></h6>
					{/* <p>{allData}</p> */}

						<h4><strong>Original Articles</strong></h4>
							<ol>{originalArticles}</ol>

						<h4><strong>Review Articles</strong></h4>
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
							<ol>{eduMaterials}</ol>

						
				</div>
			);
	}
}			

export default Publications;