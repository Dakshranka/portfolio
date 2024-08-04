(function () {
    // Select all elements with class "control"
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            // Remove "active-btn" class from the currently active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            // Add "active-btn" class to the clicked button
            this.classList.add("active-btn");
            // Remove "active" class from the currently active section
            document.querySelector(".active").classList.remove("active");
            // Add "active" class to the section with the id that matches the clicked button's data-id
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Add event listener to the theme button to toggle "light-mode" class on the body
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();

