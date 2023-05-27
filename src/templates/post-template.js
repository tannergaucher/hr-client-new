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

  const gearAsins = post.gear.filter((gear) => gear.ASIN !== null).slice(0, 4);

  const image = getImage(post.mainImage.asset);

  return (
    <Layout>
      <SEO title={`${post.title}`} description={post.subtitle} />
      {/* <iframe
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{
          width: `120px`,
          height: `240px`,
        }}
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=homerice05-20&language=en_US&marketplace=amazon&region=US&placement=B089P3X44P&asins=B089P3X44P&linkId=bbff281188af2dcaba2d817332f56a56&show_border=true&link_opens_in_new_window=true"
      ></iframe> */}
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
          {post.ingredients.length > 0 && (
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
