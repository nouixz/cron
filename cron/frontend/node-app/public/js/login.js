document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TODO: Add AJAX call to backend for authentication
    alert(`Username: ${username}\nPassword: ${password}`);
});
