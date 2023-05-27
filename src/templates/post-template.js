import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <script type="text/javascript">
          amzn_assoc_placement = "adunit0"; amzn_assoc_search_bar = "true";
          amzn_assoc_tracking_id = "homerice05-20"; amzn_assoc_ad_mode =
          "manual"; amzn_assoc_ad_type = "smart"; amzn_assoc_marketplace =
          "amazon"; amzn_assoc_region = "US"; amzn_assoc_title = "My Amazon
          Picks"; amzn_assoc_linkid = "dd041eaf69f042eca55cdd2829cfd5c4";
          amzn_assoc_asins =
          "B00KOBSN7C,B013HB0CC4,B07BDRMFDZ,B01EWVOSXW,B00P2QI8E2";
        </script>
        <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
      </Helmet>
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
