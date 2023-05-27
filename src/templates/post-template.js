import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  SEO,
  Layout,
  BlockContent,
  YoutubeEmbedPlayer,
  NextPreviousPostLinks,
} from "../components";
import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link";

export default function PostTemplate({ data, pageContext }) {
  const post = data.sanityPost;

  const image = getImage(post.mainImage.asset);

  return (
    <Layout>
      <SEO title={`${post.title}`} description={post.subtitle} />
      <div className="container padding">
        <article>
          <h1 className="text--xxxl center" style={{ marginBlockStart: `0` }}>
            {post.title}
          </h1>
          <h2
            className="text--md center"
            style={{
              color: `var(--grey)`,
              marginBlockStart: `var(--space-lg)`,
            }}
          >
            {post.subtitle}
          </h2>
          <GatsbyImage
            image={image}
            alt={post.title}
            style={{
              width: `100%`,
              height: `100%`,
              marginBlockStart: `var(--space-xl)`,
            }}
          />
          {post._rawBody && <BlockContent blocks={post._rawBody} />}
          {post.ingredients && (
            <>
              <hr />
              <h2>Ingredients</h2>
              <ul>
                {post.ingredients.map((ingredient) => (
                  <li key={ingredient._id}>
                    {ingredient.ASIN ? (
                      <a
                        href={getAmazonAffiliateLink(ingredient.ASIN)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p
                          style={{
                            marginBlockEnd: 0,
                          }}
                        >
                          {ingredient.text}
                        </p>
                      </a>
                    ) : (
                      <p>{ingredient.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          {post._rawRecipe && (
            <>
              <hr />
              <h2>Recipe</h2>
              <BlockContent blocks={post._rawRecipe} />
              <hr />
            </>
          )}
          {post.gear && (
            <section>
              <h2>Gear</h2>
              <ul>
                {post.gear.map((gear) => (
                  <li key={gear._id}>
                    {gear.ASIN ? (
                      <a
                        href={getAmazonAffiliateLink(gear.ASIN)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p
                          style={{
                            marginBlockEnd: 0,
                          }}
                        >
                          {gear.text}
                        </p>
                      </a>
                    ) : (
                      <p>{gear.text}</p>
                    )}
                  </li>
                ))}
              </ul>
              <hr />
            </section>
          )}
          {post.youtubeVideoId ? (
            <section style={{ marginBlockStart: `var(--space-xl)` }}>
              <YoutubeEmbedPlayer
                title={post.title}
                youtubeVideoId={post.youtubeVideoId}
                style={{
                  borderBottomLeftRadius: `var(--radius)`,
                  borderBottomRightRadius: `var(--radius)`,
                  width: `100%`,
                  height: `100%`,
                }}
              />
            </section>
          ) : null}
        </article>
        <hr className="hr" />
        <section>
          <NextPreviousPostLinks
            nextPost={pageContext.nextPost}
            previousPost={pageContext.previousPost}
          />
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...PostFragment
    }
  }
`;
