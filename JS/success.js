document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting traditionally

    var name = document.getElementById("name").value;

    var successMessage = document.createElement("h1");
    successMessage.classList.add("success-message");
    successMessage.textContent =
      name + ", your response was sent successfully.";
    document.querySelector(".contact").appendChild(successMessage);

    this.reset(); // Reset the form fields
  });
});
