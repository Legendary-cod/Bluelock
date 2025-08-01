const rinTitleEl = document.getElementById("rin-title");
const rinQuoteEl = document.getElementById("rin-quote");
const rivalryBanner = document.getElementById("rivalry-trigger");
const toggleBtn = document.getElementById("theme-toggle");

// Typing text
const rinTitleText = "       -Itoshi Rin";
const rinQuoteText = "I calculate. I execute. I win.";

let rinI = 0;
let rinJ = 0;

function typeRinTitle() {
  if (rinI < rinTitleText.length) {
    rinTitleEl.textContent += rinTitleText.charAt(rinI);
    rinI++;
    setTimeout(typeRinTitle, 100);
  } else {
    setTimeout(typeRinQuote, 300);
  }
}

function typeRinQuote() {
  if (rinJ < rinQuoteText.length) {
    rinQuoteEl.textContent += rinQuoteText.charAt(rinJ);
    rinJ++;
    setTimeout(typeRinQuote, 60);
  } else {
    triggerRivalry();
  }
}

function triggerRivalry() {
  rivalryBanner.style.display = "block";
  setTimeout(() => {
    rivalryBanner.textContent = "⚔️ Rin vs. Kaiser: The Showdown Begins";
    rivalryBanner.style.borderColor = "magenta";
    rivalryBanner.style.color = "magenta";
    rivalryBanner.style.boxShadow = "0 0 15px magenta";
  }, 3000);
}

// Random greeting
const heroTag = document.querySelector(".hero-section h2");
const rinGreetings = [
  "Precision Over Emotion",
  "Calculated Chaos",
  "The Algorithm Wins",
  "No Luck. Just Logic.",
  "Rin—Unshaken"
];
if (heroTag) {
  heroTag.textContent = rinGreetings[Math.floor(Math.random() * rinGreetings.length)];
}

// Theme toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Start typing on load
window.onload = () => {
  typeRinTitle();
  rivalryBanner.style.display = "none";
};
 
  gsap.from(".rin-side", {
    x: "-100%",
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".kaiser-side", {
    x: "100%",
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2
  });

  gsap.to(".clash-intro", {
    boxShadow: "0 0 40px #00ffff, 0 0 40px gold",
    duration: 0.6,
    delay: 1.5,
    ease: "power2.inOut"
  });
 
gsap.from(".rin-btn", {
  opacity: 0,
  y: 30,
  delay: 1.4,
  duration: 0.6,
  ease: "power2.out"
});

gsap.from(".kaiser-btn", {
  opacity: 0,
  y: 30,
  delay: 1.6,
  duration: 0.6,
  ease: "power2.out"
});
gsap.from(".hero-btn", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});
