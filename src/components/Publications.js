import React, { Component } from 'react';
import "../styles/Publications.css";

import originalArticlesJSON from "../json/Publications/originalArticles.json";
import reviewArticlesJSON from "../json/Publications/reviewArt.json";
import booksJSON from "../json/Publications/books.json";
import bookChaptersJSON from "../json/Publications/bookChapters.json"
import invitedArticlesJSON from "../json/Publications/invitedArticles.json";
import lettEditorJSON from "../json/Publications/letterstoEdi.json";
import educationalMaterialsJSON from "../json/Publications/educationalMaterials.json";

const origArt = originalArticlesJSON["originalArticles"];
const reviewArti = reviewArticlesJSON["reviewArticles"];
const books = booksJSON["books"];
const bookCh = bookChaptersJSON["bookChapters"];
const invitedArt = invitedArticlesJSON["invitedArticles"];
const letEd = lettEditorJSON["letterstoE"];
const eduMat = educationalMaterialsJSON["educationalMat"];

class Publications extends Component {



	render() {
		const originalArticles = origArt.map((origAItem, index) => {
			return <div className='revAContainer' key={index}><li><h5>{origAItem.authors} {origAItem.description} <i>{origAItem.journal}</i> {origAItem.date} {origAItem.journalID}</h5></li></div>
		});

		const reviewA = reviewArti.map((revAItem, index) => {
			return <div className='revAContainer' key={index}><li><h5>{revAItem.authors} {revAItem.description} <i>{revAItem.journal}</i>{revAItem.date}</h5></li></div>
		});

		const booksEdited = books.map((bookItem, index) => {
			return <div className='revAContainer' key={index}><li><h5>{bookItem.editors} {bookItem.description} <span id="underlineThis">{bookItem.publisher}</span> {bookItem.date}</h5></li></div>
		});

		const bookChEdited = bookCh.map((bookChItem, index) => {
			return <div className='revAContainer' key={index}><li><h5>{bookChItem.editors} {bookChItem.description} {bookChItem.publisher} {bookChItem.date}</h5></li></div>
		});

		const invitedA = invitedArt.map((invAItem, index) => {
			return <div className='invAContainer' key={index}><li><h5>{invAItem.authors} {invAItem.description} {invAItem.journal} {invAItem.date}</h5></li></div>
		});

		const lettersEd = letEd.map((letEdItem, index) => {
			return <div className='letEdContainer' key={index}><li><h5>{letEdItem.authors} {letEdItem.description} {letEdItem.type} {letEdItem.date}</h5></li></div>
		});

		const eduMaterials = eduMat.map((eduMatItem, index) => {
			return <div className='eduMatContainer' key={index}><li><h5>{eduMatItem.authors} {eduMatItem.description} {eduMatItem.type} {eduMatItem.date}</h5></li></div>
		});




		return (
				<div className='container'>
					<h2>PUBLICATIONS</h2>

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