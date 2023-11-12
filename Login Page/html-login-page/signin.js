// signup.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loadingMessage = document.getElementById("loading");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        loadingMessage.style.display = "block";
        errorMessage.textContent = "";

        try {
            const response = await fetch("https://us-central1-bustling-walker-340203.cloudfunctions.net/function-SIGNREGISGISCOY", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error("Login failed. Please check your credentials and try again.");
            }

            alert("Login successful!");
            // Redirect to dashboard.html
            window.location.href = "../dashboard/dashboard.html";
        } catch (error) {
            console.error("Error during login:", error);
            errorMessage.textContent = error.message;
        } finally {
            loadingMessage.style.display = "none";
        }
    });
});
