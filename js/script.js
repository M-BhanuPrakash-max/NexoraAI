// ===============================
// Nexora AI - Main JavaScript File
// ===============================

console.log("🚀 Nexora AI loaded successfully!");

console.log("Welcome to your web development journey!");

// =====================================
// Article Category Filters
// =====================================

const filterButtons = document.querySelectorAll(".filter-button");
const articleCards = document.querySelectorAll(".related-article-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    // Update active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Filter articles
    articleCards.forEach((article) => {
      const articleCategory = article.dataset.category;

      if (selectedCategory === "all" || articleCategory === selectedCategory) {
        article.style.display = "";
      } else {
        article.style.display = "none";
      }
    });
  });
});
