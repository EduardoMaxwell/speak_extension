var menuItem = {
    "id": "speak",
    "title": "Wikit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "speak" && clickData.selectionText) {
        chrome.tts.speak(clickData.selectionText, {'lang': 'pt-BR','rate': 1.0});
        chrome.tts.speak('Made by Eduardo Maxwell', {'lang': 'en-US','enqueue':true, 'rate': 2.0});
    }
});