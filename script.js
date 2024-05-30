document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            
            // Here you can add the code to handle the login functionality,
            // for example, making a POST request to your backend API.
            console.log('Login:', email, password);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            
            // Here you can add the code to handle the signup functionality,
            // for example, making a POST request to your backend API.
            console.log('Signup:', name, email, password);
        });
    }
});
