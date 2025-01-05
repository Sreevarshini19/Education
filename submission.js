// Extract URL parameters
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const title = params.get("title");
const description = params.get("description").split(","); // Assuming instructions are comma-separated
const due = params.get("due");
const points = params.get("points");

// Populate the page dynamically
document.getElementById("subject-name").textContent = subject;
document.getElementById("assignment-title").textContent = title;

const dueDateElement = document.getElementById("due-date");
dueDateElement.innerHTML = `<strong>Due:</strong> ${due}`;

const instructionsElement = document.getElementById("instructions");
instructionsElement.innerHTML = "<strong>Instructions:</strong><ul>" + 
    description.map(instr => `<li>${instr.trim()}</li>`).join('') + 
    "</ul>";

document.getElementById("points").innerHTML = `<strong>Points:</strong> ${points}`;

// Handle "Hand In" button click
const handInButton = document.getElementById("hand-in-button");
handInButton.addEventListener("click", () => {
    // Disable button and change text
    handInButton.disabled = true;
    handInButton.textContent = "Submitted";

    // Show overlay with thumbs-up image
    const overlayContainer = document.querySelector(".overlay-container");
    overlayContainer.style.display = "flex";

    // Hide the overlay after animation completes
    setTimeout(() => {
        overlayContainer.style.display = "none";
    }, 3000); // 3 seconds delay
});
