const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrediendsEll = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientsLiEll = document.createElement('li');
  ingredientsLiEll.classList.add('.item');
  ingredientsLiEll.textContent = ingredient;
  return ingredientsLiEll;
});

ingrediendsEll.append(...elements);
