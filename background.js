// backround.js
//alert("Backround S running")
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "content2.js"});
});