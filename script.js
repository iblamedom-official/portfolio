document.addEventListener("DOMContentLoaded", function() {
    // This code runs when the DOM is ready. It can be used to initialize animations or add event listeners.

    // Example: Add a class to the body once the page is fully loaded to trigger animations.
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");

    // Example: Add click event listeners to buttons
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function(e) {
            alert("Button clicked: " + this.textContent);
        });
    });
});
