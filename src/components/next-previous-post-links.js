import React from "react";
import { Link } from "gatsby";

export default function NextPreviousPostLinks({ nextPost, previousPost }) {
  return (
    <div
      style={{
        display: `grid`,
        gap: `0 var(--space-md)`,
        gridTemplateColumns: `1fr 1fr`,
        marginTop: `var(--space-xl)`,
      }}
    >
      {nextPost && (
        <Link
          to={`/${nextPost.slug.current}`}
          style={{ textDecoration: `none` }}
        >
          <div className="card">
            {/* <img
                srcSet={nextPost.mainImage.asset.fluid.srcSet}
                sizes={nextPost.mainImage.asset.fluid.sizes}
                alt=""
              /> */}
            <h4 className="card-heading">Next Post</h4>
            <h4 className="card-text ">{nextPost.title}</h4>
          </div>
        </Link>
      )}
      {previousPost && (
        <Link
          to={`/${previousPost.slug.current}`}
          style={{ textDecoration: `none` }}
        >
          <div className="card">
            {/* <img
                srcSet={previousPost.mainImage.asset.fluid.srcSet}
                sizes={previousPost.mainImage.asset.fluid.sizes}
                alt=""
              /> */}
            <h4 className="card-heading">Previous Post</h4>
            <h4 className="card-text">{previousPost.title}</h4>
          </div>
        </Link>
      )}
    </div>
  );
}
