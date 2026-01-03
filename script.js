document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const items = btn.closest(".menu-category").querySelector(".menu-items");
      if (items.style.display === "block") {
        items.style.display = "none";
        btn.classList.remove("open");
      } else {
        items.style.display = "block";
        btn.classList.add("open");
      }
    });
  });
});
