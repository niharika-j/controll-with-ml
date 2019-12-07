$(function(){
    let blockedWords = [];

    function setBlockedWords(){
        chrome.storage.sync.get(['blockedWords'], function(storageObj){
            blockedWords = storageObj.blockedWords?storageObj.blockedWords:[];
            $('#controllOptionsBlockedWordsList').empty()
            $.each(blockedWords, function(index, word) {
                $('#controllOptionsBlockedWordsList').append('<li class="controllOptionsBlockListItem"><span>'+word+'</span><a class="controllOptionsRemoveWord">x</a></li>');
            });
        });
    }
    setBlockedWords();
    
    $(document).on('click', '.controllOptionsRemoveWord', function() {
        let deleteWord = $(this).closest('li').text();
        deleteWord = deleteWord.slice(0, -1);
        blockedWords = blockedWords.filter(word => word != deleteWord);
        chrome.storage.sync.set({'blockedWords': blockedWords}, function(){
            setBlockedWords();
        });
    });

    $('#controllOptionsAddWord').click(function(){
        let newWord = $("#controllOptionsNewWord").val().trim().toLowerCase();
        if(blockedWords.indexOf(newWord)==-1){
            blockedWords.unshift(newWord);
            chrome.storage.sync.set({'blockedWords': blockedWords}, function(){
                setBlockedWords();
            });
        }
        $("#controllOptionsNewWord").val("");
    });
})