var inputText = document.querySelector("#input-txt");

var btnTranslate = document.querySelector("#btn-translate");

var outputText = document.querySelector("#output-txt");

var url = "https://api.funtranslations.com/translate/minion.json";


function getTranslationUrl(text)
{
    return url + "?" + "text=" + text;
}

function clickEventHandler()
{
    console.log("clicked");
    fetch(getTranslationUrl(inputText.value))
        .then(response => response.json())
        .then(json =>
        {
            var outputVal = json.contents.translated
            outputText.innerText = outputVal
        })
}

btnTranslate.addEventListener("click", clickEventHandler);