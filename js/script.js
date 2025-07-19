console.log("JavaScript is working!");

window.onload = function () {
  const userName = prompt("Please enter your name:");
  if (userName && userName.trim() !== "") {
    document.getElementById("welcome-user").textContent = userName;
  }

  const form = document.getElementById("message-form");
  const result = document.getElementById("form-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Harap isi semua data terlebih dahulu.");
      return;
    }

    result.innerHTML = `Terima kasih, <strong>${name}</strong>! Kami telah menerima pesan dari email <strong>${email}</strong>.`;
    form.reset();
  });

  // Dark mode toggle
  const darkToggle = document.getElementById("dark-toggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });
};
