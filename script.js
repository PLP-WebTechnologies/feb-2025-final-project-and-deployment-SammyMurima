document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault();
      } else {
        alert("Thank you for contacting us!");
      }
    });
  }
});
