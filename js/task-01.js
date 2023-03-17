const categoriesListEll = document.querySelector("#categories");
const categoriesItemEll = categoriesListEll.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemEll.length}`);

categoriesItemEll.forEach((item) => {
  const categoriesNameEll = item.querySelector("h2").textContent;
  const categoriesItemCountEll = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesNameEll};
Elements: ${categoriesItemCountEll}`);
});
