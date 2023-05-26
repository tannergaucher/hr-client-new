import React from "react";

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link";

export default function IngredientsFormItem({ ingredient, order, optional }) {
  return (
    <div style={{ display: `flex` }}>
      {ingredient && ingredient.ASIN ? (
        <a
          href={getAmazonAffiliateLink(ingredient.ASIN)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="hidden" name={`ASIN.${order}`} value={ingredient.ASIN} />
          <input type="hidden" name={`Quantity.${order}`} value={1} />
          <li style={{ textDecoration: `none` }}>{ingredient.text} </li>
        </a>
      ) : (
        <li style={{ textDecoration: `none` }}>{ingredient.text}</li>
      )}
      {optional && (
        <small
          style={{
            color: `var(--grey)`,
            marginLeft: `8px`,
            fontStyle: `italic`,
          }}
        >
          optional
        </small>
      )}
    </div>
  );
}
