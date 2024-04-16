// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { Link } from "gatsby"
import { getGatsbyImageData } from 'gatsby-source-sanity';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Demo } from "../components/demo"
import { GatsbyImage } from 'gatsby-plugin-image';

function usingPartialHydration() {
  const imageData = getGatsbyImageData('image-e207f19423b9cfb04d870421f4069a656b5747bb-1140x530-png', {}, {
    projectId: 'ki8bqxrw',
    dataset: 'production',
  });
  return (
    <Layout>
      <h1>
        Gatsby supports <b>Partial Hydration</b>
      </h1>
      <GatsbyImage image={imageData} style={{width: '100%', height: 'auto'}} alt="" />
      <p>
        You can now mark components as client side. This will reduce Javascript
        shipped to the user.
      </p>
      <p>
        The component below is such a component, if you check the Network Tab
        after a "gatsby build". You will see that we only load the component
        code and non of the layout
      </p>
      <Demo />
      <p>
        Checkout <a href="https://gatsby.dev/v5-partial-hydration">the RFC</a>{" "}
        to learn more.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using TypeScript" />

export default usingPartialHydration
