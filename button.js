// Function to show the portfolio content when the button is clicked
function showPortfolioContent() {
    const message = document.getElementById("message");
    const portfolio = document.getElementById("portfolio");
    const accessButton = document.getElementById("accessButton");

    // Hide the message and button, show the portfolio content
    message.style.display = "none";
    accessButton.style.display = "none";
    portfolio.style.display = "block";
}

// Function to initialize the page
function initPage() {
    const message = document.getElementById("message");
    const accessButton = document.getElementById("accessButton");
    const portfolio = document.getElementById("portfolio");

    if (isMobile()) {
        message.style.display = "block";
        accessButton.style.display = "none";
        portfolio.style.display = "none";
    } else {
        message.style.display = "none";
        accessButton.style.display = "block";
        portfolio.style.display = "none";
    }

    // Add a click event listener to the button
    accessButton.addEventListener("click", showPortfolioContent);
}

// Call the initPage function when the page loads
window.addEventListener("load", initPage);
