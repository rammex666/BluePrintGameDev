document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Perform login logic here (e.g., API call)
            console.log('Logging in with:', username, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            const confirmPassword = registerForm.confirm_password.value;
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Perform registration logic here (e.g., API call)
            console.log('Registering with:', username, email, password);
        });
    }
});