import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

export default function IndexPage({ data }) {
  const posts = data.allSanityPost.edges;

  return (
    <Layout>
      <title>Home Page</title>
      <div className="container">
        {posts.map(({ node }) => {
          const image = getImage(node.mainImage.asset);
          return (
            <div
              classNamE="card"
              key={node.id}
              style={{
                display: `grid`,
                gap: `var(--space-lg)`,
                gridTemplateColumns: `1fr 2fr`,
                gridTemplateRows: `1fr`,
                marginBlockEnd: `var(--space-lg)`,
              }}
            >
              <GatsbyImage image={image} alt={node.title} />
              <section>
                <h2 className="card-heading">{node.title}</h2>
                <p
                  className="card-text"
                  style={{
                    paddingBottom: `var(--space-sm)`,
                  }}
                >
                  {node.subtitle}
                </p>
                <a href={`/${node.slug.current}`}>
                  <p
                    style={{
                      marginBlockStart: `0`,
                      padding: `0 var(--space-sm)`,
                    }}
                  >
                    <em>View Post</em>
                  </p>
                </a>
              </section>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allSanityPost(
      filter: { draft: { eq: false } }
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          title
          subtitle
          mainImage {
            asset {
              gatsbyImageData(layout: CONSTRAINED, width: 800)
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;
