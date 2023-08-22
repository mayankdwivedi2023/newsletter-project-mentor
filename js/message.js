window.onload = function () {
  let urlParams = new URLSearchParams(window.location.search);
  let email = urlParams.get("email");
  if (email) {
    let userEmail = document.getElementById("user-email");
    userEmail.textContent = decodeURIComponent(email);
  }
};
