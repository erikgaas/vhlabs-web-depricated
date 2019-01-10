import "../json/Publications/originalArticles.json";
import "../json/Publications/reviewArt.json";
import "../json/Publications/books.json";
import "../json/Publications/bookChapters.json"
import "../json/Publications/invitedArticles.json";
import "../json/Publications/letterstoEdi.json";
import "../json/Publications/educationalMaterials.json";
import $ from "jquery"

var allData = [];

$.getJSON("data/originalArticles.json", function(data) {
    allData = allData.concat(data);
    allData.push(data);
});

$.getJSON("data/reviewArt.json", function(data2) {
    allData = allData.concat(data2);
    allData.push(data2);
});

$.getJSON("data/books.json", function(data3) {
    allData = allData.concat(data3);
    allData.push(data3);
});

$.getJSON("data/bookChapters.json", function(data4) {
    allData = allData.concat(data4);
    allData.push(data4);
});

$.getJSON("data/invitedArticles.json", function(data5) {
    allData = allData.concat(data5);
    allData.push(data5);
});

$.getJSON("data/letterstoEdi.json", function(data6) {
    allData = allData.concat(data6);
    allData.push(data6);
});

$.getJSON("data/educationalMaterials.json", function(data7) {
    allData = allData.concat(data7);
    allData.push(data7);
});

export default allData;