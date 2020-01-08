import React from "react"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo/seo.component"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p>This is the part where I tell you that you've done something wrong...</p>
  </Layout>
)

export default NotFoundPage
