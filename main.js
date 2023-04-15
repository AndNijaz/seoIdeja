const items = document.querySelectorAll(".item");
console.log(items[0]);

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
