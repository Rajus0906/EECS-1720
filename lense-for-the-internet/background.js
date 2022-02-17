
const defaultFilters = [
	"*://*.facebook.com/*",

	"*://*.mathgames.com/*",

	"*://*.twitter.com/*",

    "*://*.youtube.com/*",

    "*://*.instagram.com/*",   
    
    "*://*.reddit.com/*",
	
	"*://*.Netflix.com/*",
	
	"*://*.Netflix.ca/*",
	
	"*://*.disneyplus.com/*",
	
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return{cancel:true }},
    { urls: defaultFilters },
    ["blocking"]
)
