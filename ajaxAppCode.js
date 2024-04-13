async function getData(selected_major){

	var response = await fetch('cit5students.json');

	if(response.ok){
		var response = await response.json();
		
		//Filter data for user input major
		major_items = data.filter((item) => item.major == selected_major);
		
		var tempTxt = document.getelementbyID('majorTemplate').innerHTML;
		var compileTempTxt = Handlebars.compile(tempTxt);
		
		compiledHtml = compileTempTxt({rows: major_items})
		document.getElementById('majorTable').innerHTML = compiledHtml;
	}
	
	else{
	
		document.querySelector('#majorTable').innerHTML = "There was an error, or major items not found";
		
		}


}