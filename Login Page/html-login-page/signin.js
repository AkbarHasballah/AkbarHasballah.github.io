document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");
    const submitButton = document.getElementById("submit");
    const loginForm = document.getElementById("loginForm");

    const loginApiUrl = "https://us-central1-bustling-walker-340203.cloudfunctions.net/function-SIGNREGISGISCOY";
    const dashboardUrl = "./dashboard/dashboard.html";

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const remember = rememberCheckbox.checked;

        try {
            const response = await fetch(loginApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, remember }),
            });

            if (response.ok) {
                window.location.href = dashboardUrl;
            } else {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            // Handle error, display message, etc.
        }
    });
});
