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
      <div>
        <article>
          <h1>{post.title}</h1>
          <GatsbyImage image={image} alt={post.title} />
          <h2>{post.subtitle}</h2>
          {post._rawBody && <BlockContent blocks={post._rawBody} />}
          {post.ingredients.length > 0 && (
            <>
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
          {post.gear.length > 0 && (
            <section>
              <h2>Gear</h2>
              <ul>
                {post.gear
                  .filter((gear) => gear._id)
                  .map((gear) => (
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
            <section>
              <YoutubeEmbedPlayer
                title={post.title}
                youtubeVideoId={post.youtubeVideoId}
              />
            </section>
          ) : null}
        </article>
        <section>
          <NextPreviousPostLinks
            nextPost={pageContext.nextPost}
            previousPost={pageContext.previousPost}
          />
          <hr />
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
