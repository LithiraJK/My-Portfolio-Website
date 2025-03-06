
console.log("console is loading");
document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".project-modal");
    const openButtons = document.querySelectorAll(".project-card a"); 
    const closeButtons = document.querySelectorAll(".close");

    openButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent scrolling behavior
            modals[index].style.display = "flex";
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            modals[index].style.display = "none";
        });
    });

    // Close modal when clicking outside modal content
    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

