import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div class="fourofour">
      <h1>404: Not Found</h1>
      <p>
        ERRNO: FOUND NOT PAGE. WIPING SERVER IN T-MINUS 20 SECONDS. GOOD BYE.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
