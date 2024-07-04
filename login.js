document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Normally you would perform validation and send data to server for authentication
    // For demonstration purposes, just redirect to another page

    window.location.href = 'index.html'; // Replace with your target page
});
