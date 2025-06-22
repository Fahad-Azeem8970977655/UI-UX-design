document.addEventListener("DOMContentLoaded", () => {
    // Select all screens
    const screens = document.querySelectorAll(".screen");
    let currentScreenIndex = 0;

    // Function to show a specific screen
    const showScreen = (index) => {
        screens.forEach((screen, i) => {
            screen.style.display = i === index ? "block" : "none";
        });
    };

    // Show the first screen initially
    showScreen(currentScreenIndex);

    // Handle navigation to the next screen
    document.querySelectorAll(".arrow").forEach((arrow) => {
        arrow.addEventListener("click", () => {
            if (currentScreenIndex < screens.length - 1) {
                currentScreenIndex++;
                showScreen(currentScreenIndex);
            }
        });
    });

    // Handle navigation to the previous screen
    document.querySelectorAll(".back-arrow").forEach((backArrow) => {
        backArrow.addEventListener("click", () => {
            if (currentScreenIndex > 0) {
                currentScreenIndex--;
                showScreen(currentScreenIndex);
            }
        });
    });

    // Handle "Sign up" link (navigate to screen 2)
    const signUpLink = document.querySelector("a[href='#screen2']");
    if (signUpLink) {
        signUpLink.addEventListener("click", (e) => {
            e.preventDefault();
            currentScreenIndex = 1; // Set to the second screen (sign up)
            showScreen(currentScreenIndex);
        });
    }

    // Handle "Sign in" link (navigate to screen 3)
    const signInLink = document.querySelector("a[href='#screen3']");
    if (signInLink) {
        signInLink.addEventListener("click", (e) => {
            e.preventDefault();
            currentScreenIndex = 2; // Set to the third screen (sign in)
            showScreen(currentScreenIndex);
        });
    }

    // Sign-up form submission (Screen 2)
    const signUpForm = screens[1].querySelector("form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent actual form submission
            alert("Sign-up successful! Welcome!");
        });
    } else {
        console.log("Sign-up form not found on screen 2.");
    }

    // Sign-in form submission (Screen 3)
    const signInForm = screens[2].querySelector("form");
    if (signInForm) {
        signInForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent actual form submission
            alert("Welcome back! You are signed in.");
        });
    } else {
        console.log("Sign-in form not found on screen 3.");
    }

    // Forgot password functionality (Screen 3)
    const forgotPasswordLink = screens[2].querySelector(".forgot-password");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Forgot Password? Please check your email for reset instructions.");
        });
    } else {
        console.log("Forgot Password link not found.");
    }
});


