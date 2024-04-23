var googleTranslate;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

function translateTextarea() {
    var inputText = document.getElementById('input_text').value;
    var languageToTranslate = 'es';

    googleTranslate.translate(inputText, 'en', languageToTranslate, function (translatedText) {
        document.getElementById('translated_content').innerText = translatedText;
    });
}

window.onload = function () {
    googleTranslateElementInit();

    googleTranslate = {
        translate: function (text, sourceLang, targetLang, callback) {
            var translatedText = text.replace(/\b(en)\b/g, 'es');
            callback(translatedText);
        }
    };

    translateTextarea();

    var input = document.getElementById('input_text');

    input.addEventListener('keyup', function () {
        translateTextarea();
    });
};

document.getElementById('copy_button').addEventListener('click', function() {
    var content = document.getElementById('translated_content').innerText;
    var tempInput = document.createElement("textarea");
    tempInput.value = content;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    Swal.fire({
        title: 'Traducción copiada',
        text: content,
        icon: 'success',
        confirmButtonText: 'Ok'
    });
});