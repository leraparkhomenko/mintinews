const articles = [
  {
    id: 1,
    category: "design",
    source: "Designer News",
    day: "Sunday",
    title: "The Rise of Spatial Design",
    excerpt:
      "How AR/VR is reshaping interface design and what skills designers need to adapt.",
    tags: ["ui", "product"],
    readTime: 8,
    image: "https://picsum.photos/seed/design1/640/400",
  },
  {
    id: 2,
    category: "develop",
    source: "Nielsen Norman Group",
    day: "Yesterday",
    title: "The Psychology of Microinteractions",
    excerpt:
      "How subtle animations and feedback loops create delightful user experiences that keep users engaged.",
    tags: ["ux", "ui"],
    readTime: 10,
    image: "https://picsum.photos/seed/micro1/640/400",
  },
  {
    id: 3,
    category: "marketing",
    source: "Growth Hackers",
    day: "Friday",
    title: "Content Marketing Strategies That Actually Convert",
    excerpt:
      "Data-backed approaches to content creation that move audiences from awareness to action.",
    tags: ["strategy", "product"],
    readTime: 6,
    image: "https://picsum.photos/seed/mkt1/640/400",
  },
  {
    id: 4,
    category: "sales",
    source: "SaaStr",
    day: "Thursday",
    title: "Closing Deals in the Age of AI Assistants",
    excerpt:
      "How sales teams are adapting their outreach when buyers come armed with AI research.",
    tags: ["strategy", "product"],
    readTime: 7,
    image: "https://picsum.photos/seed/sales1/640/400",
  },
  {
    id: 5,
    category: "design",
    source: "Smashing Magazine",
    day: "Wednesday",
    title: "Color Theory for Digital Products",
    excerpt:
      "Practical guidance on choosing palettes that communicate brand identity and improve usability.",
    tags: ["ui", "product"],
    readTime: 9,
    image: "https://picsum.photos/seed/design2/640/400",
  },
  {
    id: 6,
    category: "develop",
    source: "Dev.to",
    day: "Tuesday",
    title: "TypeScript Patterns You Should Know",
    excerpt:
      "Essential type-level patterns that make large codebases safer and more maintainable.",
    tags: ["code", "product"],
    readTime: 12,
    image: "https://picsum.photos/seed/dev2/640/400",
  },
  {
    id: 7,
    category: "marketing",
    source: "HubSpot Blog",
    day: "Monday",
    title: "Email Campaigns That Don't End Up in Spam",
    excerpt:
      "Technical and creative best practices for ensuring your emails reach inboxes.",
    tags: ["strategy", "product"],
    readTime: 5,
    image: "https://picsum.photos/seed/mkt2/640/400",
  },
  {
    id: 8,
    category: "sales",
    source: "Close Blog",
    day: "Sunday",
    title: "Building a Repeatable Sales Playbook",
    excerpt:
      "Step-by-step framework for documenting what works so new reps can ramp faster.",
    tags: ["strategy", "product"],
    readTime: 8,
    image: "https://picsum.photos/seed/sales2/640/400",
  },
  {
    id: 9,
    category: "design",
    source: "Dribbble Blog",
    day: "Saturday",
    title: "Responsive Typography Best Practices",
    excerpt:
      "How to scale type across breakpoints while maintaining readability and visual hierarchy.",
    tags: ["ui", "product"],
    readTime: 7,
    image: "https://picsum.photos/seed/design3/640/400",
  },
];

const TAG_CLASSES = {
  ui: "tag-ui",
  ux: "tag-ux",
  product: "tag-product",
  strategy: "tag-strategy",
  code: "tag-code",
};

const clockSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 1.5"/></svg>`;

const bookmarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/></svg>`;

const grid = document.getElementById("card-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const sortBtn = document.getElementById("sort-btn");

let sortAsc = true;

function renderCards(category) {
  let filtered =
    category === "all"
      ? [...articles]
      : articles.filter((a) => a.category === category);

  if (!sortAsc) {
    filtered = filtered.slice().reverse();
  }

  grid.innerHTML = filtered
    .map(
      (a) => `
    <article class="card">
      <div class="card-image-wrapper">
        <img class="card-image" src="${a.image}" alt="${a.title}">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-meta-dot"></span>
          <span class="card-meta-source">${a.source}</span>
          <span class="card-meta-sep">&middot;</span>
          <span class="card-meta-day">${a.day}</span>
        </div>
        <h2 class="card-title">${a.title}</h2>
        <p class="card-excerpt">${a.excerpt}</p>
        <div class="card-footer">
          <div class="card-tags">
            ${a.tags
              .map(
                (t) =>
                  `<span class="tag ${TAG_CLASSES[t] || "tag-ui"}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`
              )
              .join("")}
          </div>
          <div class="card-read-info">
            <span class="read-time">${clockSvg} ${a.readTime} min read</span>
            <button class="bookmark-btn" aria-label="Bookmark">${bookmarkSvg}</button>
          </div>
        </div>
      </div>
    </article>`
    )
    .join("");
}

function getActiveCategory() {
  const active = document.querySelector(".filter-btn.active");
  return active ? active.dataset.category : "all";
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.category);
  });
});

sortBtn.addEventListener("click", () => {
  sortAsc = !sortAsc;
  sortBtn.classList.toggle("active", !sortAsc);
  renderCards(getActiveCategory());
});

// Initial render
renderCards("all");
