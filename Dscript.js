// Unpredictable UI twist
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-chaos");
});

// Add randomized greeting headline
const heroTag = document.querySelector(".hero h2");
const greetings = [
  "Unpredictable Genius     ",
  "Ace Eater Rises       ",
  "Laughing in the Storm    ",
  "Master of Chaos       ",
  "Logic is My Prey     "
];

heroTag.textContent = greetings[Math.floor(Math.random() * greetings.length)];
const titleEl = document.getElementById("lorenzo-title");
const quoteEl = document.getElementById("lorenzo-quote");

const titleText = "       -Don Lorenzo";
const quoteText = "Predictability is weakness. I thrive where logic trembles.";

let i = 0;
let j = 0;

function typeTitle() {
  if (i < titleText.length) {
    titleEl.textContent += titleText.charAt(i);
    i++;
    setTimeout(typeTitle, 120);
  } else {
    setTimeout(typeQuote, 400);
  }
}

function typeQuote() {
  if (j < quoteText.length) {
    quoteEl.textContent += quoteText.charAt(j);
    j++;
    setTimeout(typeQuote, 80);
  }
}

window.onload = typeTitle;
 