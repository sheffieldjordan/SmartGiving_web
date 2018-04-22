export const StringFromUnixTime = (time) => {
	// Shout out to StackOverflow
	// https://stackoverflow.com/a/6078873/1031615
	
	var a = new Date(time * 1000);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();

	return `${month} ${date}, ${year}`
}
