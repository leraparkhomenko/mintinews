const articles = [
  {
    id: 1,
    category: "design",
    title: "The Future of Minimalist UI in 2026",
    excerpt:
      "Exploring how stripped-back interfaces are reshaping digital products and why less continues to be more for modern users.",
    author: "Anna Lee",
    date: "Feb 3, 2026",
    image: "https://picsum.photos/seed/design1/640/400",
  },
  {
    id: 2,
    category: "develop",
    title: "Building Performant Web Apps with Modern JavaScript",
    excerpt:
      "A deep dive into the latest patterns and tools that help developers ship faster, lighter web applications.",
    author: "Mark Chen",
    date: "Feb 2, 2026",
    image: "https://picsum.photos/seed/dev1/640/400",
  },
  {
    id: 3,
    category: "marketing",
    title: "Content Marketing Strategies That Actually Convert",
    excerpt:
      "Data-backed approaches to content creation that move audiences from awareness to action without feeling pushy.",
    author: "Sara Johnson",
    date: "Feb 1, 2026",
    image: "https://picsum.photos/seed/mkt1/640/400",
  },
  {
    id: 4,
    category: "sales",
    title: "Closing Deals in the Age of AI Assistants",
    excerpt:
      "How sales teams are adapting their outreach and negotiation tactics when buyers come armed with AI-powered research.",
    author: "James Park",
    date: "Jan 30, 2026",
    image: "https://picsum.photos/seed/sales1/640/400",
  },
  {
    id: 5,
    category: "design",
    title: "Color Theory for Digital Products",
    excerpt:
      "Practical guidance on choosing palettes that communicate brand identity and improve usability across platforms.",
    author: "Olivia Kim",
    date: "Jan 28, 2026",
    image: "https://picsum.photos/seed/design2/640/400",
  },
  {
    id: 6,
    category: "develop",
    title: "TypeScript Patterns You Should Know",
    excerpt:
      "Essential type-level patterns that make large codebases safer and more maintainable without sacrificing developer speed.",
    author: "Diego Ruiz",
    date: "Jan 27, 2026",
    image: "https://picsum.photos/seed/dev2/640/400",
  },
  {
    id: 7,
    category: "marketing",
    title: "Email Campaigns That Don't End Up in Spam",
    excerpt:
      "Technical and creative best practices for ensuring your emails reach inboxes and actually get opened.",
    author: "Priya Patel",
    date: "Jan 25, 2026",
    image: "https://picsum.photos/seed/mkt2/640/400",
  },
  {
    id: 8,
    category: "sales",
    title: "Building a Repeatable Sales Playbook",
    excerpt:
      "Step-by-step framework for documenting what works so new reps can ramp faster and hit quota sooner.",
    author: "Tom Bradley",
    date: "Jan 23, 2026",
    image: "https://picsum.photos/seed/sales2/640/400",
  },
  {
    id: 9,
    category: "design",
    title: "Responsive Typography Best Practices",
    excerpt:
      "How to scale type across breakpoints while maintaining readability, rhythm, and visual hierarchy.",
    author: "Lena Müller",
    date: "Jan 21, 2026",
    image: "https://picsum.photos/seed/design3/640/400",
  },
];

const grid = document.getElementById("card-grid");
const countEl = document.querySelector(".article-count");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderCards(category) {
  const filtered =
    category === "all"
      ? articles
      : articles.filter((a) => a.category === category);

  countEl.textContent = `[${filtered.length} articles]`;

  grid.innerHTML = filtered
    .map(
      (a) => `
    <article class="card">
      <img class="card-image" src="${a.image}" alt="${a.title}">
      <div class="card-body">
        <span class="card-category">${a.category}</span>
        <h2 class="card-title">${a.title}</h2>
        <p class="card-excerpt">${a.excerpt}</p>
        <div class="card-footer">
          <span class="card-author">${a.author}</span>
          <span class="card-date">${a.date}</span>
        </div>
      </div>
    </article>`
    )
    .join("");
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.category);
  });
});

// Initial render
renderCards("all");
