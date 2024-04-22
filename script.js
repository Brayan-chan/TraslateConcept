var googleTranslate;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

function translateTextarea() {
    var inputText = document.getElementById('input_text').value;
    var languageToTranslate = 'es'; // El idioma al que se quiere traducir

    // Traducir el contenido del textarea
    googleTranslate.translate(inputText, 'en', languageToTranslate, function (translatedText) {
        // Mostrar el texto traducido
        document.getElementById('translated_content').innerText = translatedText;
    });
}

window.onload = function () {
    googleTranslateElementInit();

    // Inicializar la variable googleTranslate
    googleTranslate = {
        translate: function (text, sourceLang, targetLang, callback) {
            // Simular la traducción con un simple reemplazo de texto
            // En una implementación real, se usaría la API de Google Translate
            var translatedText = text.replace(/\b(en)\b/g, 'es');
            callback(translatedText);
        }
    };

    // Traducir una vez al cargar la página
    translateTextarea();

    // Agregar un evento al textarea para traducir una vez que el usuario haya terminado de escribir
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
