// Kung Fu quotes
const quotes = [
"Patience and practice build true skill.",
"Strength without control is not Kung Fu.",
"The greatest victory is the one without fighting.",
"Discipline is the path to mastery.",
"Balance of body and mind leads to harmony.",
"A calm mind strikes faster than anger."
];

// Generate a new quote
function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[random];
}

// Toggle Yin / Yang mode
function toggleMode() {
    document.body.classList.toggle("yang-mode");
}

