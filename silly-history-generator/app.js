/*
Project brief

You have been provided with some raw HTML/CSS and a few text strings and JavaScript functions; you need to write the necessary JavaScript to turn this into a working program, which does the following:

    Generates a silly story when the "Generate random story" button is pressed.
    Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
    Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
    Generates a new random silly story every time the button is pressed.

*/

//DOM elements

let customNameEl = document.getElementById('custom-name');
let usBtnEl = document.getElementById('us');
let ukBtnEl = document.getElementById('uk');
let randomizeBtnEl = document.getElementById('randomize');
let historyParaEl = document.getElementById('history');

let customName = customNameEl.value;

let rawText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let newText = '';
let xValue;
let yValue;
let zValue;

customNameEl.focus();

randomizeBtnEl.addEventListener('click', generateHistory);

function generateHistory() {
    //verificar se customName está vazio
    newText = rawText;
    customName = customNameEl.value;
    
    if (customName !== '') {
        //substituir todos Bob por customName
        newText = newText.replaceAll('Bob', customName);
    }
    //checar se us ou ok está marcado e chamar função pra substituir valores
    if (ukBtnEl.checked) {
        let stones = 300/14;
        let centigrades = (94-32) * (5/9);
        newText = newText.replaceAll('fahrenheit','centigrades');
        newText = newText.replaceAll('pounds','stones');
        newText = newText.replaceAll('94',centigrades.toFixed(0));
        newText = newText.replaceAll('300',stones.toFixed(0));
    }
    //gerar newHistory e atribuir a historyParaEl
    xValue = randomValueFromArray(insertX);
    yValue = randomValueFromArray(insertY);
    zValue = randomValueFromArray(insertZ);

    newText = newText.replaceAll(':insertx:', xValue);
    newText = newText.replaceAll(':inserty:', yValue);
    newText = newText.replaceAll(':insertz:', zValue);

    historyParaEl.innerHTML = newText;
    historyParaEl.style.visibility = 'visible';
    customNameEl.focus();
}

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}