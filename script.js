document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.querySelector(".login-btn");
  var signupBtn = document.querySelector(".signup-btn");
  var openModalBtn = document.getElementById("open-modal-btn");
  var loginModal = document.getElementById("login-modal");
  var signupModal = document.getElementById("signup-modal");
  var loginCloseBtn = document.getElementById("close-login");
  var signupCloseBtn = document.getElementById("close-signup");
  var highlightingEnabled = false; // Track whether highlighting is enabled

  openModalBtn.addEventListener("click", function () {
    if (highlightingEnabled) {
      disableHighlighting(); // Disable highlighting if it's enabled
    } else {
      enableHighlighting(); // Enable highlighting if it's disabled
    }
    toggleFontSize(); // Toggle font size
  });

  function showLoginModal() {
    loginModal.style.display = "block";
  }

  function showSignupModal() {
    signupModal.style.display = "block";
  }

  function hideLoginModal() {
    loginModal.style.display = "none";
  }

  function hideSignupModal() {
    signupModal.style.display = "none";
  }

  loginBtn.addEventListener("click", showLoginModal);
  signupBtn.addEventListener("click", showSignupModal);
  loginCloseBtn.addEventListener("click", hideLoginModal);
  signupCloseBtn.addEventListener("click", hideSignupModal);

  window.addEventListener("click", function (event) {
    if (event.target == loginModal) {
      hideLoginModal();
    }
    if (event.target == signupModal) {
      hideSignupModal();
    }
  });

  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });

  document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });

  var body = document.querySelector("body");

  function toggleFontSize() {
    if (body.style.fontSize === "20px") {
      body.style.fontSize = "16px";
    } else {
      body.style.fontSize = "20px";
    }
    body.style.overflow = "auto";
  }

  loginCloseBtn.addEventListener("click", function () {
    body.style.fontSize = "16px";
    body.style.overflow = "auto";
  });

  signupCloseBtn.addEventListener("click", function () {
    body.style.fontSize = "16px";
    body.style.overflow = "auto";
  });

  function enableHighlighting() {
    highlightingEnabled = true;
    addHighlightingListeners();
  }

  function disableHighlighting() {
    highlightingEnabled = false;
    removeHighlightingListeners();
  }

  // Event handler function for mouseenter
  function handleMouseEnter() {
    this.classList.add("text-highlighted");
  }

  // Event handler function for mouseleave
  function handleMouseLeave() {
    this.classList.remove("text-highlighted");
  }

  function addHighlightingListeners() {
    document
      .querySelectorAll("p, h1, h2, h3, h4, h5, h6, a")
      .forEach(function (element) {
        element.addEventListener("mouseenter", handleMouseEnter); // Add event listener using named function
        element.addEventListener("mouseleave", handleMouseLeave); // Add event listener using named function
      });
  }

  function removeHighlightingListeners() {
    document
      .querySelectorAll("p, h1, h2, h3, h4, h5, h6, a")
      .forEach(function (element) {
        element.removeEventListener("mouseenter", handleMouseEnter); // Remove event listener using named function
        element.removeEventListener("mouseleave", handleMouseLeave); // Remove event listener using named function
      });
  }
});
