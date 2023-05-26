import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import BlockContent from "@sanity/block-content-to-react";

const sanityConfig = {
  projectId: `q6bcj0lp`,
  dataset: `production`,
  graphqlTag: "default",
};

const serializers = {
  types: {
    // postImage: ({ node }) => {
    //   const imgData = getFluidGatsbyImage(
    //     node.asset._ref,
    //     { maxWidth: 1200 },
    //     sanityConfig
    //   );
    //   return (
    //     <figure
    //       className="figure"
    //       style={{ marginBottom: `var(--space-lg)`, borderRadius: `0` }}
    //     >
    //       <Img fluid={imgData} imgStyle={{ borderRadius: `0` }} />
    //       <figcaption
    //         className="figcaption text--sm"
    //         style={{ fontStyle: ``, marginTop: `var(--space-sm)` }}
    //       >
    //         {node.caption}
    //       </figcaption>
    //     </figure>
    //   );
    // },
  },
};

export default function MyBlockContent({ blocks }) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
