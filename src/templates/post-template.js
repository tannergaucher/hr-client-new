import React from "react";
import { graphql, Link } from "gatsby";

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link";
import getSortedPostIngredients from "../utils/get-sorted-post-ingredients";

import {
  SEO,
  Layout,
  // IngredientsForm,
  BlockContent,
  AffiliateLinkDisclaimer,
  YoutubeEmbedPlayer,
  NextPreviousPostLinks,
  // ContentCard,
} from "../components";

export default function PostTemplate({ data, pageContext }) {
  const post = data.sanityPost;

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
          {/* {post.ingredients.length > 0 && (
            <IngredientsForm
              ingredients={post.ingredients}
              optionalIngredients={post.optionalIngredients}
            />
          )} */}
          {/* {post.gear.length > 0 && (
            <>
              <h3>Gear</h3>
              <ul>
                {post.gear.map((gearItem) =>
                  gearItem._id ? (
                    <li key={gearItem._id}>
                      <a
                        href={getAmazonAffiliateLink(gearItem.ASIN)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {gearItem.text}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </>
          )} */}
          {post._rawBody && <BlockContent blocks={post._rawBody} />}
          <section style={{ marginBlockStart: `var(--space-xl)` }}>
            {post.youtubeVideoId ? (
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
            ) : (
              <>{/* <Img fluid={post.mainImage.asset.fluid} /> */}</>
            )}
          </section>
        </article>

        <section style={{ marginTop: `var(--space-xl)` }}>
          <AffiliateLinkDisclaimer />
        </section>
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
