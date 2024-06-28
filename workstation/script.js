document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials for demonstration
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password123';

    if (username === hardcodedUsername && password === hardcodedPassword) {
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('skipLogin').addEventListener('click', function() {
    // Skip login logic here
    // Redirect to dashboard or another page
    window.location.href = 'dashboard.html';
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    // Handle forgot password logic here
    alert('Forgot password functionality is not implemented yet.');
});
