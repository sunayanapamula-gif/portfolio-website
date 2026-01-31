document.addEventListener("DOMContentLoaded", () => {
  // 🌗 Dark Mode Toggle
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // ✨ Mirror Writing Effect
  const mirrorInput = document.getElementById("mirror-input");
  const mirrorText = document.getElementById("mirror-text");
  const glass = document.querySelector(".glass");

  if (mirrorInput && mirrorText) {
    // Show text exactly as typed
    mirrorInput.addEventListener("input", () => {
      mirrorText.textContent = mirrorInput.value || "Your text appears here…";
    });

    // 💖 Magical hearts on Enter
    mirrorInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && glass) {
        event.preventDefault(); // stop newline

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "💖";

        // Random horizontal position inside the glass
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 80 + "%";
        heart.style.bottom = "0";

        // Random color for fun
        const colors = ["#ff65a3", "#ff7eb9", "#6a11cb", "#2575fc"];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        glass.appendChild(heart);

        // Limit hearts so glass doesn’t overflow
        if (glass.querySelectorAll(".heart").length > 10) {
          glass.removeChild(glass.firstChild);
        }

        // Remove after animation ends
        setTimeout(() => heart.remove(), 3000);
      }
    });
  }
});
