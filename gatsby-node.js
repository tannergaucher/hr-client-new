const path = require("path");

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ["SanityPost"],
        resolve(source, _args, context, _info) {
          return context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                category: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });
        },
      },
    },
    SanityIngredient: {
      posts: {
        type: ["SanityPost"],
        async resolve(source, _args, context, _info) {
          const ingredientsQuery = await context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                ingredients: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });

          return ingredientsQuery;
        },
      },
    },
    SanityGear: {
      posts: {
        type: ["SanityPost"],
        async resolve(source, _args, context, _info) {
          const gearQuery = await context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                gear: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });

          return gearQuery;
        },
      },
    },
  };

  createResolvers(resolvers);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allPosts = await graphql(`
    query {
      allSanityPost(
        filter: { draft: { eq: false } }
        sort: { publishedAt: DESC }
      ) {
        edges {
          node {
            title
            subtitle
            draft
            youtubeVideoId
            videoMusicCredit
            _rawBody
            mainImage {
              asset {
                gatsbyImageData(layout: CONSTRAINED, width: 800)
              }
            }
            ingredients {
              ASIN
              text
            }
            gear {
              text
              ASIN
            }
            places {
              id
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const posts = allPosts.data.allSanityPost.edges;

  posts.forEach((edge, index) => {
    const previousPost =
      index === posts.length - 1 ? null : posts[index + 1].node;
    const nextPost = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        slug: edge.node.slug.current,
        nextPost,
        previousPost,
      },
    });
  });
};
