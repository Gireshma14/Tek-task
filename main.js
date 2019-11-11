
function getData(that){
	console.log(that.cname.value);
	var cc = that.cname.value
	console.log(cc.length)

	var apiEndPoint = 'https://restcountries.eu/rest/v2'
	if (cc.length>3){
	
	fetch(apiEndPoint+'/name/'+cc)
  .then(response => {
    return response.json()
  })
  .then(data => {
	console.log(data[0].name)
	// data.forEach(country => {
	// 	document.getElementById("result-insert-data").innerHTML = country.capital;
	// 	console.log(country.capital)
	//   })
	let details = `<div><b>Country</b>: ${data[0].name} </div>
	<div><b>Capital City</b>: ${data[0].capital} </div>
	<div><b>Demonym</b> : ${data[0].demonym}</div>
	<div><b>Country Code</b> : ${data[0].alpha3Code}</div>
	<div>
	  <b>Country Flag<?b>:
	  <img id="country_flag" src="${data[0].flag}" width = "100%" ></div>
 	 `
	document.getElementById("result-insert-data").innerHTML = details;
	  document.getElementById("data_Form").reset();
  })
  .catch(err => {
	  document.getElementById("result-insert-data").innerHTML="<h3>No Data Found</h3>";
  })
}

else if(cc.length>0) {
	fetch(apiEndPoint+'/alpha/'+cc)
	.then(response => {
	  return response.json()
	})
	.then(data => {
	  console.log(data)

		//   document.querySelector("#country_name_header").innerHTML = data.name

		  let details = `<div><b>Country</b>: ${data.name} </div>
		  			<div><b>Capital City</b>: ${data.capital} </div>
					  <div><b>Demonym</b> : ${data.demonym}</div>
					  <div><b>Country Code</b> : ${data.alpha3Code}</div>
					  <div>
						<b>Country Flag</b>:
						<img id="country_flag" src="${data.flag}" width = "100%" ></div>
					`
		  document.getElementById("result-insert-data").innerHTML = details;
		  document.getElementById("data_Form").reset();
		  //document.getElementById("country_flag").src=data.flag;

	})
	.catch(err => {
		document.getElementById("result-insert-data").innerHTML="<h3>No Data Found</h3>";
	})
}
else {
	document.getElementById("result-insert-data").innerHTML="<h3>Recevied No Input</h3>";
}
	return false;
}