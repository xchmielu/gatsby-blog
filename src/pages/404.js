import React from "react"
import PrimaryLayout from "../components/layouts/PrimaryLayout"

export default () => (
  <PrimaryLayout>
    <div className="notfound">
      <h1>Page not found!</h1>
      <img
        alt="404"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/pluto-page-not-found.webp"
      />
    </div>
  </PrimaryLayout>
)
