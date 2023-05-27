import { graphql } from "gatsby";

export const SITE_METADATA_FRAGMENT = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`;

export const POST_FRAGMENT = graphql`
  fragment PostFragment on SanityPost {
    title
    subtitle
    _rawBody
    _rawRecipe
    youtubeVideoId
    mainImage {
      asset {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    ingredients {
      _id
      text
      ASIN
      slug {
        current
      }
    }
    optionalIngredients {
      _id
      text
      ASIN
    }
    places {
      id
      name
      googleMapsPlaceName
    }
    gear {
      _id
      text
      ASIN
      externalHref
    }
  }
`;
