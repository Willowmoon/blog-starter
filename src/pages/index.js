import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      Hello world!
      <div>
        <Link to="/post/">Post Page</Link>
      </div>
    </Layout>
  )
}
