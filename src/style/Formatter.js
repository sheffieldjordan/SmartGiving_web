export const StringFromTimeStamp = (time) => {
	// Shout out to StackOverflow
	// https://stackoverflow.com/a/6078873/1031615
	
	var a = new Date(time);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();

	return `${month} ${date}, ${year}`
}

export const StringFromLocation = (location) => {
	if (location === undefined) return ''
	return `${location.address}, ${location.city}, ${location.state}, ${location.country}`
}

export const DollarsToEther = (dollars) => {
	const dollarsPerEther = 421.0 // TODO: Get this price dynamically
	return (parseFloat(dollars)/dollarsPerEther).toFixed(5)
}