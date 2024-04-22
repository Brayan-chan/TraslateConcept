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
    } else if (word.toLowerCase() === 'goodbye') {
        translatedWord = 'adiós';
    } else if (word.toLowerCase() === 'bye') {
        translatedWord = 'hasta luego';
    } else if (word.toLowerCase() === 'thanks') {
        translatedWord = 'gracias';
    } else if (word.toLowerCase() === 'thank') {
        translatedWord = 'gracias';
    } else if (word.toLowerCase() === 'please') {
        translatedWord = 'por favor';
    } else if (word.toLowerCase() === 'good') {
        translatedWord = 'bueno';
    } else if (word.toLowerCase() === 'bad') {
        translatedWord = 'malo';
    } else if (word.toLowerCase() === 'yes') {
        translatedWord = 'si';
    } else if (word.toLowerCase() === 'no') {
        translatedWord = 'no';
    } else if (word.toLowerCase() === 'ok') {
        translatedWord = 'ok';
    } else if (word.toLowerCase() === 'okay') {
        translatedWord = 'bueno';
    } else if (word.toLowerCase() === 'morning') {
        translatedWord = 'mañana';
    } else if (word.toLowerCase() === 'afternoon') {
        translatedWord = 'tarde';
    } else if (word.toLowerCase() === 'evening') {
        translatedWord = 'noche';
    } else if (word.toLowerCase() === 'night') {
        translatedWord = 'noche';
    }  else if (word.toLowerCase() === 'goodnight') {
        translatedWord = 'buenas noches';
    } else if (word.toLowerCase() === 'goodmorning') {
        translatedWord = 'buenos días';
    } else if (word.toLowerCase() === 'goodafternoon') {
        translatedWord = 'buenas tardes';
    } else if (word.toLowerCase() === 'goodevening') {
        translatedWord = 'buenas noches';
    } else if (word.toLowerCase() === 'computer') {
        translatedWord = 'computadora';
    } else if (word.toLowerCase() === 'phone') {
        translatedWord = 'celular';
    } else if (word.toLowerCase() === 'program') {
        translatedWord = 'programa';
    } else if (word.toLowerCase() === 'language') {
        translatedWord = 'idioma';
    } else if (word.toLowerCase() === 'translator') {
        translatedWord = 'traductor';
    } else if (word.toLowerCase() === 'learn') {
        translatedWord = 'aprender';
    } else if (word.toLowerCase() === 'translate') {
        translatedWord = 'traducir';
    } else if (word.toLowerCase() === 'study') {
        translatedWord = 'estudiar';
    } else if (word.toLowerCase() === 'school') {
        translatedWord = 'escuela';
    } else if (word.toLowerCase() === 'class') {
        translatedWord = 'clase';
    } else if (word.toLowerCase() === 'teacher') {
        translatedWord = 'profesor';
    } else if (word.toLowerCase() === 'student') {
        translatedWord = 'estudiante';
    } else if (word.toLowerCase() === 'work') {
        translatedWord = 'trabajo';
    } else if (word.toLowerCase() === 'schoolwork') {
        translatedWord = 'trabajo escolar';
    } else if (word.toLowerCase() === 'homework') {
        translatedWord = 'trabajo de casa';
    } else if (word.toLowerCase() === 'office') {
        translatedWord = 'oficina';
    } else if (word.toLowerCase() === 'home') {
        translatedWord = 'casa';
    } else if (word.toLowerCase() === 'room') {
        translatedWord = 'habitación';
    } else if (word.toLowerCase() === 'bed') {
        translatedWord = 'cama';
    } else if (word.toLowerCase() === 'table') {
        translatedWord = 'mesa';
    } else if (word.toLowerCase() === 'play') {
        translatedWord = 'jugar';
    } else if (word.toLowerCase() === 'game') {
        translatedWord = 'juego';
    } else if (word.toLowerCase() === 'music') {
        translatedWord = 'música';
    } else if (word.toLowerCase() === 'book') {
        translatedWord = 'libro';
    } else if (word.toLowerCase() === 'movie') {
        translatedWord = 'pelicula';
    } else if (word.toLowerCase() === 'tv') {
        translateWord = 'televisión';
    } else if (word.toLowerCase() === 'watch') {
        translatedWord = 'ver';
    } else if (word.toLowerCase() === 'fun') {
        translatedWord = 'diversión';
    } else if (word.toLowerCase() === 'funny') {
        translatedWord = 'divertido';
    } else if (word.toLowerCase() === 'happy') {
        translatedWord = 'feliz';
    } else if (word.toLowerCase() === 'sad') {
        translatedWord = 'triste';
    } else if (word.toLowerCase() === 'angry') {
        translatedWord = 'enojado';
    } else if (word.toLowerCase() === 'surprised') {
        translatedWord = 'sorprendido';
    } else if (word.toLowerCase() === 'scared') {
        translatedWord = 'asustado';
    } else if (word.toLowerCase() === 'hate') {
        translatedWord = 'odiar';
    } else if (word.toLowerCase() === 'love') {
        translatedWord = 'amor';
    } else if (word.toLowerCase() === 'like') {
        translatedWord = 'gustar';
    } else if (word.toLowerCase() === 'dislike') {
        translatedWord = 'no gustar';
    } else if (word.toLowerCase() === 'friend') {
        translatedWord = 'amigo';
    } else if (word.toLowerCase() === 'family') {
        translatedWord = 'familia';
    } else if (word.toLowerCase() === 'father') {
        translatedWord = 'padre';
    } else if (word.toLowerCase() === 'mother') {
        translatedWord = 'madre';
    } else if (word.toLowerCase() === 'brother') {
        translatedWord = 'hermano';
    } else if (word.toLowerCase() === 'sister') {
        translatedWord = 'hermana';
    } else if (word.toLowerCase() === 'uncle') {
        translatedWord = 'tío';
    } else if (word.toLowerCase() === 'aunt') {
        translatedWord = 'tía';
    } else if (word.toLowerCase() === 'this') {
        translatedWord = 'este';
    } else if (word.toLowerCase() === 'that') {
        translatedWord = 'aquí';
    } else if (word.toLowerCase() === 'these') {
        translatedWord = 'estos';
    } else if (word.toLowerCase() === 'those') {
        translatedWord = 'aquellos';
    } else if (word.toLowerCase() === 'other') {
        translatedWord = 'otro';
    } else if (word.toLowerCase() === 'another') {
        translatedWord = 'otro';
    } else if (word.toLowerCase() === 'any') {
        translatedWord = 'cualquier';
    } else if (word.toLowerCase() === 'all') {
        translatedWord = 'todo';
    } else if (word.toLowerCase() === 'is') {
        translatedWord = 'es';
    } else if (word.toLowerCase() === 'are') {
        translatedWord = 'eres';
    } else if (word.toLowerCase() === 'are you there') {
        translatedWord = 'estás ahí';
    } else if (word.toLowerCase() === 'am') {
        translatedWord = 'soy';
    } else if (word.toLowerCase() === 'you') {
        translatedWord = 'tu';
    } else if (word.toLowerCase() === 'word') {
        translatedWord = 'palabra';
    } else if (word.toLowerCase() === 'a') {
        translatedWord = 'una';
    } else if (word.toLowerCase() === 'new') {
        translatedWord = 'nueva';
    } else if (word.toLowerCase() === 'an') {
        translatedWord = 'un';
    } else if (word.toLowerCase() === 'word') {
        translatedWord = 'palabra';
    } else if (word.toLowerCase() === 'code') {
        translatedWord = 'código';
    } else if (word.toLowerCase() === 'this') {
        translatedWord = 'este';
    } else if (word.toLowerCase() === 'is') {
        translatedWord = 'es';
    } else if (word.toLowerCase() === 'a') {
        translatedWord = 'una';
    } else if (word.toLowerCase() === 'test') {
        translatedWord = 'prueba';
    } else if (word.toLowerCase() === 'an') {
        translatedWord = 'un';
    } else if (word.toLowerCase() === 'new') {
        translatedWord = 'nueva';
    } else if (word.toLowerCase() === 'word') {
        translatedWord = 'palabra';
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