// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function buildTable(arrayData) {
arrayData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
}

var button = d3.select("#filter-btn");

button.on("click", filterTable);

function filterTable() {

  d3.event.preventDefault();
  
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    
tbody.html("")

  buildTable(filteredData);
}




buildTable(tableData)