document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select");

  selects.forEach((select) => {
    select.addEventListener("change", (event) => {
      const sectionId = event.target.value;
      if (sectionId) {
        document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});