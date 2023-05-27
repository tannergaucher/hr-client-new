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
                <section
                  style={{
                    padding: `0 var(--space-sm)`,
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `baseline`,
                  }}
                >
                  <a href={`/${node.slug.current}`}>
                    <p
                      style={{
                        marginBlockStart: `0`,
                      }}
                    >
                      <em>View Post</em>
                    </p>
                  </a>
                  <div>
                    {node.tags.map((tag) => {
                      return (
                        <a
                          href={`/tags/${tag.slug.current}`}
                          key={tag._id}
                          style={{
                            marginRight: `var(--space-sm)`,
                          }}
                        >
                          <small
                            style={{
                              marginBlockStart: `0`,
                            }}
                          >
                            #{tag.text}
                          </small>
                        </a>
                      );
                    })}
                  </div>
                </section>
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
      sort: { publishedAt: DESC }
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
          tags {
            _id
            text
            slug {
              _key
              _type
              current
            }
          }
        }
      }
    }
  }
`;
