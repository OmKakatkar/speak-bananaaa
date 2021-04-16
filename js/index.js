let inputText = document.querySelector("#input-txt");

let btnTranslate = document.querySelector("#btn-translate");

let outputText = document.querySelector("#output-txt");

let url = "https://api.funtranslations.com/translate/minion.json";


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
            let outputVal = json.contents.translated
            outputText.innerText = outputVal
        })
}

btnTranslate.addEventListener("click", clickEventHandler);