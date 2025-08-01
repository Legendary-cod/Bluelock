document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Animate section titles on scroll
  gsap.from(".section-title", {
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.3
  });

  // Glowing pulse effect for section titles
  gsap.to(".section-title", {
    textShadow: "0 0 10px gold, 0 0 20px cyan",
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut"
  });

  // Animate project and research cards on scroll
  gsap.from(".project-card, .research-card", {
    scrollTrigger: {
      trigger: ".project-grid",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });

  // Theme toggle logic
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleBtn.innerHTML = document.body.classList.contains("dark-theme")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });

  // Filter button logic (bonus feature)
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide cards
      projectCards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
function typeText(elementId, text, delay = 100, startDelay = 0) {
  const el = document.getElementById(elementId);
  el.textContent = "";
  let i = 0;

  setTimeout(() => {
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    }
    type();
  }, startDelay);
}

// Trigger typing with cinematic delay
typeText("name-type", "Michael Kaiser", 100, 500);         // Starts after 0.5s
typeText("nationality-type", "German Prodigy", 100, 2500); // Starts after 2.5s


gsap.from(".hero-buttons a", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  delay: 2.5
});
gsap.from(".kaiser-clash .kaiser-side", {
  x: "-100%",
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

 