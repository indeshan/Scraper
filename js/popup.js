chrome.tabs.query(
	{active: true,
	currentWindow: true},
	function (tabs){
	chrome.tabs.sendMessage(tabs[0].id,
		{from: 'popup',
	     subject: 'getData'},
		insertDataInTable);
        }
	);
function insertDataInTable(data){
	document.getElementById('title').innerHTML = data.title;
	document.getElementById('review').innerHTML = data.reviews;
	document.getElementById('price').innerHTML = data.price;
}
function claim() {
 alert("SafeHai");
}
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('claim').onclick = claim;
});
