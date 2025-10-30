// Saat klik h1, muncul alert
document.querySelector("h1").addEventListener("click", () => {
  alert("Welcome to my site!");
});

// Menampilkan tahun otomatis di footer
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;