import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Demo } from "../components/demo"
import { GatsbyImage } from 'gatsby-plugin-image';

const UsingHydration= ({pageContext}) => (
  <Layout>
  <h1>
    Gatsby supports <b>Partial Hydration</b>
  </h1>
  <GatsbyImage image={pageContext.imageData} style={{width: '100%', height: 'auto'}} alt="" />
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

export const Head = () => <Seo title="Using DSG" />

export default UsingHydration
