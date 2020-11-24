chrome.runtime.sendMessage(
{
	from: 'content',
	subject: 'getTabId'
});
var prodTitle = (function (){
	return document.getElementById("productTitle").innerText;
})();
var fullPrice = (function (){
	if(document.getElementById('priceblock_dealprice')){
		var getPrice = document.getElementById('priceblock_dealprice').innerHTML;
	return getPrice;
}
  return 'N/A'
})();
 var reviewNo = (function (){
 	var doc = document.getElementById('acrCustomerReviewText');
	if (doc){
	var rev = document.getElementById('acrCustomerReviewText').innerHTML;
	var num = rev.substring(0, rev.indexOf(' '));
            return num
     } else
	return "0"
})();
chrome.runtime.onMessage.addListener(function(message, sender, response){
	if((message.from === 'popup') && (message.subject === 'getData')){
		var objson = {
		title:	prodTitle,
		price: fullPrice,
		reviews: reviewNo,
		};
		response(objson);
	};
});
