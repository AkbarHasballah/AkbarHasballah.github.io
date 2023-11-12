document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit");
    const loginForm = document.getElementById("loginForm");

    const loginApiUrl = "https://us-central1-bustling-walker-340203.cloudfunctions.net/function-SIGNREGISGISCOY";

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      try {
        const response = await fetch(loginApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          alert("Login successful!");
          window.location.href = "./dashboard/dashboard.html";
        } else {
          const data = await response.json();
          throw new Error(data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        // Handle error, e.g., display an error message
      }
    });
  });