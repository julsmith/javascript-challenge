// from data.js
var tableData = data;

tbody = d3.select("tbody")

function addTable(data){
    tbody.text("")
    data.forEach(function(UFOsight){
        new_tr = tbody.append("tr")
        Object.entries(UFOsight).forEach(function([key, value]){
            new_td = new_tr.append("td").text(value)
        })
    })
}

addTable(tableData)

var UFOInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function JuliaSelect(){
    d3.event.preventDefault();
    console.log("text field set to "+UFOInputText.property("value"));
    var table_two = tableData.filter(UFOsight=>UFOsight.datetime===UFOInputText.property("value"))
    addTable(table_two);
}
UFOInputText.on("change", JuliaSelect) 