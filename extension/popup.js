$(function(){
    let blockedWords = [];
    chrome.storage.sync.get(['blockedWords'], function(storageObj){
        blockedWords = storageObj.blockedWords?storageObj.blockedWords:[];
    });
    $('#hideComments').click(function(){
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "hideComments"});
        })
    });
    $('#addWord').click(function(){
        var newWord = $('#controllBlockWord').val().trim().toLowerCase();
        if(blockedWords.indexOf(newWord)==-1){
            blockedWords.unshift(newWord);
            chrome.storage.sync.set({'blockedWords': blockedWords}, function(){
                chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id, {todo: "hideComments"});
                });
            });
        }
        $('#controllBlockWord').val("");
    })
})