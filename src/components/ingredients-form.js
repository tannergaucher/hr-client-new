import React from "react";

import { IngredientsFormItem } from ".";
import { AWS_ASSOCIATE_ID } from "../utils/constants";

export default function IngredientsForm({ ingredients, optionalIngredients }) {
  const [amazonIngredients] = ingredients.filter(
    (ingredient) => ingredient.ASIN !== null
  );

  return (
    <form method="GET" action="https://www.amazon.com/gp/aws/cart/add.html">
      {!amazonIngredients && <hr className="hr" />}
      {amazonIngredients && (
        <>
          <button
            style={{
              width: `100%`,
              marginBottom: `0`,
              marginTop: `var(--space-md)`,
              position: `sticky`,
              top: `var(--space-sm)`,
            }}
            className="btn btn-primary"
            type="submit"
            name="add"
          >
            Ingredients on Amazon
          </button>
          <input type="hidden" name="AssociateTag" value={AWS_ASSOCIATE_ID} />
          <hr className="hr" />
        </>
      )}
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, i) => (
          <IngredientsFormItem
            key={ingredient._id}
            ingredient={ingredient}
            order={i + 1}
          />
        ))}
        {optionalIngredients &&
          optionalIngredients.map((optionalIngredient, i) => (
            <IngredientsFormItem
              key={optionalIngredient._id}
              ingredient={optionalIngredient}
              order={ingredients.length + i + 1}
              optional
            />
          ))}
      </ul>
    </form>
  );
}
