document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Dark Mode Toggle
  // =========================
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // =========================
  // Mirror Writing Effect (live typing + glow)
  // =========================
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

  // =========================
  // Certificates: open PDF in new tab
  // =========================
  const certificateButtons = document.querySelectorAll("[data-certificate]");
  certificateButtons.forEach(button => {
    button.addEventListener("click", () => {
      const path = button.getAttribute("data-certificate");
      if (path) {
        window.open(path, "_blank"); // open certificate in new tab
      } else {
        console.error("No certificate path found for button:", button);
      }
    });
  });

  // =========================
  // To-Do App Functionality
  // =========================
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  if (todoInput && todoList) {
    // Add task on Enter
    todoInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && todoInput.value.trim() !== "") {
        addTask(todoInput.value.trim());
        todoInput.value = "";
      }
    });

    // Function to add a task
    function addTask(taskText) {
      const li = document.createElement("li");
      li.classList.add("todo-item");

      const span = document.createElement("span");
      span.textContent = taskText;

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
          span.textContent = newTask.trim();
        }
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    }
  }
});
