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
        <figure
          className="figure"
          style={{ marginBottom: `var(--space-lg)`, borderRadius: `0` }}
        >
          <GatsbyImage image={imageData} alt={node.title} />
          <figcaption
            className="figcaption text--sm"
            style={{ fontStyle: ``, marginTop: `var(--space-sm)` }}
          >
            {node.caption}
          </figcaption>
        </figure>
      );
    },
  },
};

export default function MyBlockContent({ blocks }) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
