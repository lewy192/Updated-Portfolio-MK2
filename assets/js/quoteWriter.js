const quoteContainer = document.querySelector(".type-writer");
const quoterContainer = document.querySelector(".quoter");

const quotes = [
    "'Strive not to be a success, but rather to be of value'\n- Albert Einstein",
    "'Compare Yourself to who you were yesterday, not to who someone else is today- Jordan B Peterson '",
    "",
];

async function typeSentence(sentence, eleRef, delay = 90) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        quoteContainer.innerText += letters[i];
        i++;
    }
    return;
}

function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteSentence() {
    const container = document.querySelector(".type-writer");
    const sentence = container.innerText;
    let phraseLength = sentence.length;
    while (phraseLength > 0) {
        await waitForMs(90);
        container.innerText = container.innerText.substring(
            0,
            container.innerText.length - 1
        );
        phraseLength = container.innerText.length;
    }
}

async function displayQuoteList(quoteList) {
    let i = 0;
    while (i < quoteList.length) {
        await typeSentence(quoteList[i], quoteContainer);
        await waitForMs(1000);
        await deleteSentence();
        await waitForMs(1000);
        i++;
        if (i >= quoteList.length) {
            i = 0;
        }
    }
}

displayQuoteList(quotes);
