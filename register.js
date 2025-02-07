document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!name || !email || !password || !confirmPassword) {
            showError("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            showError("Invalid email format.");
            return;
        }

        if (!validatePassword(password)) {
            showError("Password must be at least 8 characters, with letters and numbers.");
            return;
        }

        if (password !== confirmPassword) {
            showError("Passwords do not match.");
            return;
        }

        showError(""); // Clear errors
        alert("Registration successful!");
        
        console.log(name,email);
        
        form.reset();
    });

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    };

    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
    };
});
