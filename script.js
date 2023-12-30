document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function () {
        var welcome = document.getElementById("welcome");
        var header = document.getElementById("header");
        var title = document.getElementById("title");
        var scrollPosition = window.scrollY;

        // Sticky header functionality
        var stickyPosition = header.offsetTop;

        if (scrollPosition > stickyPosition) {
            header.classList.add("sticky");
            welcome.style.display = "none"; // Hide the welcome text when the header becomes sticky
        } else {
            header.classList.remove("sticky");
            welcome.style.display = "block"; // Show the welcome text when not sticky
        }

        // Move title based on scroll position
        var maxScrollTitle = 0; // Adjust this value as needed
        var translateYTitle = Math.min(0, Math.max(-maxScrollTitle, (maxScrollTitle - scrollPosition)));

        // Move welcome text based on scroll position
        var maxScrollWelcome = 75; // Adjust this value as needed
        var translateYWelcome = Math.min(0, Math.max(-maxScrollWelcome, (maxScrollWelcome - scrollPosition)));

        // Move header based on scroll position
        var maxScrollHeader = 75; // Adjust this value as needed
        var translateYHeader = Math.min(0, Math.max(-maxScrollHeader, (maxScrollHeader - scrollPosition) * 0.8 + translateYTitle));

        // Set the transform property with a smooth transition
        title.style.transition = "transform 0.3s ease-out";
        title.style.transform = "translateY(" + translateYTitle + "px)";

        welcome.style.transition = "transform 0.1s ease-out";
        welcome.style.transform = "translateY(" + translateYWelcome + "px)";

        // Set the bottom of the header dynamically
        var headerBottom = 50 + title.clientHeight + translateYTitle;
        header.style.bottom = headerBottom + "px";

        // Set the transform property with a smooth transition for the header
        header.style.transition = "transform 0.2s ease-out";
        header.style.transform = "translateY(" + translateYHeader + "px)";
    });

    // Event listener for the "GET HEN" image
    var card = document.getElementById("gethencard");

    if (card) {
        card.addEventListener("click", function () {
            // Navigate to the second page when the card is clicked
            window.location.href = "second-page.html";
        });
    }

    // Event listener for the "change-message-btn" button
    var changeMessageBtn = document.getElementById("change-message-btn");

    if (changeMessageBtn) {
        changeMessageBtn.addEventListener("click", function () {
            // Navigate to the "second-page.html" file when the button is clicked
            window.location.href = "second-page.html";
        });
    }

    // Initial call to set heights when the page loads
    window.addEventListener("load", function () {
        var mainContent = document.getElementById("main-content1");
        mainContent.style.minHeight = document.getElementById("title").clientHeight + "px";
    });
});
