chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "showPageAction"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});

let contextMenuItem = {
    id: "addBlockWord",
    title: "Add this word to block list",
    contexts: ['selection']
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId === "addBlockWord" && clickData.selectionText){
        chrome.storage.sync.get(['blockedWords'], function(storageObj){
            let blockedWords = storageObj.blockedWords?storageObj.blockedWords:[];
            let newWord = clickData.selectionText.trim().toLowerCase();
            if(blockedWords.indexOf(newWord)==-1){
                blockedWords.unshift(newWord);
                chrome.storage.sync.set({'blockedWords': blockedWords}, function() {
                    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
                        chrome.tabs.sendMessage(tabs[0].id, {todo: "hideComments"});
                    });
                });
            }
        })
    }
});