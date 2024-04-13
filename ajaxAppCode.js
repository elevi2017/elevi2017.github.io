async function getData(selected_major){

	var response = await fetch('cit5students.json');

	if(response.ok){
		var data = await response.json();
		
		//Filter data for user input major
		cit5students = data.filter((student) => student.major == selected_major);
		
		var tempTxt = document.getElementById('majorTemplate').innerHTML;
		var compileTempTxt = Handlebars.compile(tempTxt);
		
		compiledHtml = compiledTempTxt({rows: cit5students})
		document.getElementById('majorTable').innerHTML = compiledHtml;
	}
	
	else{
	
		document.querySelector('#majorTable').innerHTML = "There was an error, or major items not found";
		
		}


}
