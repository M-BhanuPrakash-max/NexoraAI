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

// ---------SEARCH SECTION OF ARTICLES-------//
const searchInput = document.querySelector("#article-search-input");
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

  for (let i = 0; i < articleCards.length; i++) {
    const heading = articleCards[i].querySelector("h3");

    const title = heading.textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      articleCards[i].style.display = "";
    } else {
      articleCards[i].style.display = "none";
    }
  }
});
