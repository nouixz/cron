document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TODO: Add AJAX call to backend for authentication
    alert(`Username: ${username}\nPassword: ${password}`);
});

// 3D tilt effect for login container
const loginContainer = document.querySelector('.login-container');
if (loginContainer) {
    document.addEventListener('mousemove', (e) => {
        const rect = loginContainer.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (y / rect.height) * 15;
        const rotateY = -(x / rect.width) * 15;
        loginContainer.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    document.addEventListener('mouseleave', () => {
        loginContainer.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    });
}
