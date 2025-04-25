import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "./firebase.js";
  
  // Check which page we're on by looking for specific forms
  const loginForm = document.getElementById("login");
  const signupForm = document.getElementById("signup");
  
  // Handle login form
  if (loginForm) {
    // Get the guest login button
    const guestLoginButton = document.getElementById("guest-login");
    
    // Add event listener to the guest login button
    if (guestLoginButton) {
      guestLoginButton.addEventListener("click", () => {
        // Navigate directly to home page
        window.location.href = "home.html";
      });
    }
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in successfully
          alert("Login successful!");
          // Navigate to home page
          window.location.href = "home.html";
        })
        .catch((error) => {
          console.error(error);
          alert("Invalid credentials. Please try again.");
        });
    });
  
    // Add logic for forgot password if needed
    const forgotPasswordLink = document.querySelector(".forgot-link");
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Password reset functionality will be implemented soon.");
      });
    }
  }
  
  // Handle registration form
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Register button clicked");
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      const termsChecked = document.getElementById("terms").checked;
  
      // Basic validation
      if (!termsChecked) {
        alert("Please agree to the Terms & Conditions");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Successfully registered
          // You could store additional user information here if needed
          alert("Registration successful! Please log in with your new account.");
          // Redirect to login page
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error(error);
          if (error.code === "auth/email-already-in-use") {
            alert("This email is already registered. Please log in instead.");
          } else if (error.code === "auth/weak-password") {
            alert("Password is too weak. Please use a stronger password.");
          } else {
            alert("Registration failed: " + error.message);
          }
        });
    });
  }