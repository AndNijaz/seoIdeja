const items = document.querySelectorAll(".item");
console.log(items[0]);

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

const btnNavEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".navigation-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
