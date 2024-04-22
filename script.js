var googleTranslate;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

function translateTextarea() {
    var inputText = document.getElementById('input_text').value;
    var languageToTranslate = 'es'; 

    var englishWordRegex = /\b([a-zA-Z]+)\b/g;

    var translatedText = inputText.replace(englishWordRegex, function (match) {
        return translateWord(match);
    });

    document.getElementById('input_text').value = translatedText;
}

function translateWord(word) {
    var translatedWord = word; 

    if (word.toLowerCase() === 'hello') {
        translatedWord = 'hola';
    } else if (word.toLowerCase() === 'world') {
        translatedWord = 'mundo';
    }
 
    return translatedWord;
}

var timer;
function detectAndTranslate() {
    clearTimeout(timer);
    timer = setTimeout(function () {
        translateTextarea();
    }, 2000); 
}

window.onload = function () {
    googleTranslateElementInit();

    googleTranslate = {
        translate: function (text, sourceLang, targetLang, callback) {
            callback(text);
        }
    };

    var input = document.getElementById('input_text');

    input.addEventListener('input', function () {
        detectAndTranslate();
    });
};