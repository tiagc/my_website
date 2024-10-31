document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("nachricht").value;
    if (!name || !email || !message) {
      alert("Bitte füllen Sie alle Felder aus.");
      event.preventDefault();
    }
  });
