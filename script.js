// Assignments data
const assignments = {
    forthcoming: [
      {
        subject: "Mathematics",
        title: "Math Homework",
        description: "Complete exercises 1 to 10 from Chapter 5.",
        due: "Jan 10, 2025",
        points: 10,
      },
      {
        subject: "Science",
        title: "Science Project",
        description: "Prepare a working model of the Solar System.",
        due: "Jan 15, 2025",
        points: 15,
      },
    ],
    "past-due": [],
    completed: [
      {
        subject: "English",
        title: "English Essay",
        description: "Write an essay on 'The Future of Technology.'",
        completed: "Jan 5, 2025",
        points: 20,
      },
    ],
};
  
// References to DOM elements
const tabs = document.querySelectorAll(".tab");
const assignmentsContainer = document.getElementById("assignments-container");
  
// Render assignments
function renderAssignments(type) {
    assignmentsContainer.innerHTML = ""; // Clear the container
  
    if (assignments[type].length === 0) {
        assignmentsContainer.innerHTML = `<p>No assignments found in this category.</p>`;
        return;
    }
  
    assignments[type].forEach((assignment) => {
        const assignmentDiv = document.createElement("div");
        assignmentDiv.className = "assignment-item";
        assignmentDiv.innerHTML = `
            <h3>${assignment.title}</h3>
            <p>${assignment.description}</p>
            <p><strong>Due:</strong> ${assignment.due || assignment.completed}</p>
            ${assignment.completed ? '' : `<a href="Assignment_submission.html?subject=${encodeURIComponent(
            assignment.subject
            )}&title=${encodeURIComponent(assignment.title)}&description=${encodeURIComponent(
            assignment.description
            )}&due=${encodeURIComponent(
            assignment.due
            )}&points=${encodeURIComponent(
            assignment.points
            )}" class="submit-link">Submit</a>`}
        `;
        assignmentsContainer.appendChild(assignmentDiv);
    });
}
  
// Handle tab switching
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Update active tab
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
  
        // Render assignments for the selected tab
        const target = tab.getAttribute("data-target");
        renderAssignments(target);
    });
});
  
// Initial render
renderAssignments("forthcoming");
