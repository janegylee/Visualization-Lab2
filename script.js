
// TODO: load the dataset 

let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
	attractions = data;
	filterData("all");
	console.log(attractions);
	});



//Filtering data
const filterData = function (category) {
	let filteredData = attractions;
	
	console.log(filteredData);
	
	filteredData = filteredData.sort(function(a,b) {
	   return b.Visitors - a.Visitors;
	});
	
	if (
		category === "all"
	)
	{
		filteredData = filteredData.slice(0,5);
		renderBarChart(filteredData);
	}

	else{
		filteredData = filteredData.filter(datapoint => {
		return datapoint.Category === category
		})
		filteredData = filteredData.slice(0,5);
		renderBarChart(filteredData)
		console.log(filteredData)
	}

}	 


//Interactive dropdown filtering
// TODO: Define an event listener for the dropdown menu

document.querySelector('#attraction-category').addEventListener('change',function(event){
	const category = event.target.value;
	console.log(category);
	filterData(category);
});







	
	



