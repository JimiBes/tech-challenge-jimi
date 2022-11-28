const message =
  "Thank you citizen ! We deploy an elite unit especially for you !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });