export default function getSortedPostIngredients(ingredients) {
  const withImage = [];
  const noImage = [];

  ingredients.forEach((ingredient) => {
    if (ingredient.image) {
      withImage.push(ingredient);
    } else {
      noImage.push(ingredient);
    }
  });

  return [...withImage, ...noImage];
}
