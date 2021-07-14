const quoteContainer = document.querySelector(".type-writer");
const quoterContainer = document.querySelector(".quoter");

const quotes = [
    "hello",
    "'testing lots of words need more and more anbd more andore '",
    "Stand up",
];

// for (const quote of quotes) {
//     setInterval(() => {
//         var typeText = document.querySelector(".type-writer");
//         var textToBeTyped = quote;
//         var index = 0,
//             isAdding = true;

//         // playAnim();

//         function playAnim() {
//             setTimeout(function () {
//                 // set the text of typeText to a substring of
//                 // the textToBeTyped using index.
//                 typeText.innerText = textToBeTyped.slice(0, index);
//                 if (isAdding) {
//                     // adding text
//                     if (index > textToBeTyped.length) {
//                         // no more text to add
//                         isAdding = false;
//                         //break: wait 2s before playing again
//                         setTimeout(function () {
//                             playAnim();
//                         }, 2000);
//                         return;
//                     } else {
//                         // increment index by 1
//                         index++;
//                     }
//                 } else {
//                     // removing text
//                     if (index === 0) {
//                         // no more text to remove
//                         isAdding = true;
//                     } else {
//                         // decrement index by 1
//                         index--;
//                     }
//                 }
//                 // call itself
//                 playAnim();
//             }, 120);
//         }
//         // start animation
//         playAnim();
//     }, quote.length * 120 * 5);
// }

async function typeSentence(sentence, eleRef, delay = 100) {
    console.log("type called");
    const letters = sentence.split("");
    console.log(letters);
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        quoteContainer.innerText += letters[i];
        i++;
    }
    // return new Promise((resolve, reject) => {
    //     resolve("completed");
    // });
    return;
}

function waitForMs(ms) {
    console.log("wait called");

    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteSentence() {
    console.log("delete called");

    const container = document.querySelector(".type-writer");
    const sentence = container.innerText;
    let phraseLength = sentence.length;
    while (phraseLength > 0) {
        await waitForMs(100);
        container.innerText = container.innerText.substring(
            0,
            container.innerText.length - 1
        );
        phraseLength = container.innerText.length;
    }
}

const test = async (quote) => {
    await typeSentence("testing", quoteContainer);

    console.log("testing");
    setTimeout(deleteSentence, 2000);
};

// await waitForMs(2000).then(deleteSentence(".type-writer"));
// console.log(quoteContainer);
// await deleteSentence(".type-writer");

async function displayQuoteList(quoteList) {
    let i = 0;
    console.log("here ");
    while (i < quoteList.length) {
        console.log(quoteList[i]);
        await typeSentence(quoteList[i], quoteContainer);
        await waitForMs(1500);
        await deleteSentence();
        await waitForMs(1000);
        i++;
        console.log(i);
        if (i >= quoteList.length) {
            i = 0;
        }
    }
}

displayQuoteList(quotes);
