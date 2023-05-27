import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
      {nextPost && <Next {...nextPost} />}
      {previousPost && <Previous {...previousPost} />}
    </div>
  );
}

function Next(nextPost) {
  const image = getImage(nextPost.mainImage.asset);

  return (
    <Link to={`/${nextPost.slug.current}`} style={{ textDecoration: `none` }}>
      <div className="card">
        <GatsbyImage image={image} alt={nextPost.title} />
        <h4 className="card-heading">Next Post</h4>
        <h4 className="card-text ">{nextPost.title}</h4>
      </div>
    </Link>
  );
}

function Previous(previousPost) {
  const image = getImage(previousPost.mainImage.asset);

  return (
    <Link
      to={`/${previousPost.slug.current}`}
      style={{ textDecoration: `none` }}
    >
      <div className="card">
        <GatsbyImage image={image} alt={previousPost.title} />
        <h4 className="card-heading">Previous Post</h4>
        <h4 className="card-text">{previousPost.title}</h4>
      </div>
    </Link>
  );
}
