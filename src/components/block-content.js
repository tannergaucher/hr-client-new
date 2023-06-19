import React from "react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";

const sanityConfig = {
  projectId: `q6bcj0lp`,
  dataset: `production`,
  graphqlTag: "default",
};

const serializers = {
  types: {
    postImage: ({ node }) => {
      const imageData = getGatsbyImageData(
        node.asset._ref,
        { maxWidth: 1024 },
        sanityConfig
      );

      return (
        <figure>
          <GatsbyImage image={imageData} alt={node.title} />
          <figcaption>{node.caption}</figcaption>
        </figure>
      );
    },
  },
};

export default function MyBlockContent({ blocks }) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
