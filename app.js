const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

 // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("success").textContent = "";

    let isValid = true;

 // Validate name
    if (name.length < 3) {
        document.getElementById("nameError").textContent ="Name must be at least 3 characters.";
        isValid = false;
    }

 // Validate email
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent ="Email must contain @.";
        isValid = false;
    }

 // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").textContent ="Password must be at least 8 characters.";
        isValid = false;
    }

 // Display success message
   if (isValid) {
        document.getElementById("success").textContent ="Sign-up successful!";
    }
});