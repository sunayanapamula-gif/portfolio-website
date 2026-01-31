document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Mirror Writing Effect (live typing + glow)
  const mirrorInput = document.getElementById("mirror-input");
  const mirrorText = document.getElementById("mirror-text");
  const glass = document.querySelector(".glass");

  if (mirrorInput && mirrorText) {
    // Show text exactly as typed
    mirrorInput.addEventListener("input", () => {
      mirrorText.textContent = mirrorInput.value || "Your text appears here…";
    });

    // Magical hearts on Enter
    mirrorInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && glass) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "💖";

        // Random horizontal position inside the glass
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 80 + "%";
        heart.style.bottom = "0"; // start at bottom

        glass.appendChild(heart);

        // Remove after animation ends
        setTimeout(() => heart.remove(), 3000); // match animation duration
      }
    });
  }
// Certificates: open PDF in new tab
function openCertificate(path) {
  window.open(path, "_blank");
}

const certificateButtons = document.querySelectorAll("[data-certificate]");
certificateButtons.forEach(button => {
  button.addEventListener("click", () => {
    const path = button.getAttribute("data-certificate");
    if (path) {
      openCertificate(path);
    }
  });
});
