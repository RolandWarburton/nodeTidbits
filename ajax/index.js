window.onload = function() {
	console.log('loaded');
	const url = './file.txt';
	
	// make a new 'request'. 
	// request is an object so we use the keyword 'new' to make an instance of the XMLHttpRequest object
	var request = new XMLHttpRequest();
	// GET data from a location
	request.open('GET', url);
	// prevent caching so when you reload it gets the data again
	request.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
	// what should happen when the data is loaded 
	request.onload = function() {
		console.log(request);
		document.querySelector('#test').innerHTML = request.response;
	}
	// it won't actually run until we tell it to
	request.send();
}