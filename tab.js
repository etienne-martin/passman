if( !window.passman ){
	window.passman = 1;
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
		  
		if( request.type === 'sendPassword' ){
			if( document.activeElement.type === "password" ){
				document.activeElement.value = request.hash;
			}
			return;
		}
		
	});
}
