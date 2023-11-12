document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        try {
            const response = await fetch('https://us-central1-bustling-walker-340203.cloudfunctions.net/function-SIGNREGISGISCOY', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login berhasil, alihkan ke dasbor
                window.location.href = '../dashboard/dashboard.html';
            } else {
                // Login gagal, tampilkan pesan kesalahan
                console.error('Login gagal:', data);
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    });
});
