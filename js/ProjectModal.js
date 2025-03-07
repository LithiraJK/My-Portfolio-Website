document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".project-card a"); 
    const closeButtons = document.querySelectorAll(".close");

    openButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent scrolling
            const modalId = button.getAttribute("href").substring(1); // Get id without '#'
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest(".project-modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    document.querySelectorAll(".project-modal").forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
