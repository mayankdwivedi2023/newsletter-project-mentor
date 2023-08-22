window.onload = function () {
  const content = document.getElementById("main-content");
  setTimeout(function () {
    content.classList.add("show");
  }, 10);
};

let emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    let email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      var content = document.getElementById("main-content");
      content.classList.remove("show");

      // Redirect after the transition completes
      setTimeout(function () {
        window.location.assign(
          "../../html/success-message.html?email=" + encodeURIComponent(email)
        );
      }, 500);
    } else {
      errorMessage.style.display = "block";
      emailInput.classList.add("error-input");
    }
  });

// Clear error when input is focused
document.getElementById("email").addEventListener("focus", function () {
  errorMessage.style.display = "none";
  emailInput.classList.remove("error-input");
});
