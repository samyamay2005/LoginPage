document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form reload

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Check credentials
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // ✅ Redirect to dashboard
    } else {
        alert("Invalid credentials. Try again.");
    }
});
