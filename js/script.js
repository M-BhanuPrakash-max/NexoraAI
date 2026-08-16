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
const noResultsMessage = document.querySelector("#no-results-message");
let selectedCategory = "all";
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

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

// ---------INPUT SEARCH SECTION OF ARTICLES-------//
// --------- INPUT SEARCH SECTION OF ARTICLES ------- //

const searchInput = document.querySelector("#article-search-input");

function filterArticles() {
  const searchTerm = searchInput.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

  let matchCount = 0;

  for (let i = 0; i < articleCards.length; i++) {
    const articleCategory = articleCards[i].dataset.category;

    const heading = articleCards[i].querySelector("h3");

    const title = heading.textContent.toLowerCase();

    if (
      (selectedCategory === "all" || articleCategory === selectedCategory) &&
      title.includes(searchTerm)
    ) {
      articleCards[i].style.display = "";
      matchCount++;
    } else {
      articleCards[i].style.display = "none";
    }
  }

  // Check after ALL articles have been checked
  if (matchCount === 0 && searchTerm !== "") {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}

searchInput.addEventListener("input", filterArticles);
