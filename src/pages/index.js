import React from "react"
import { Link } from "gatsby"
import PrimaryLayout from "../components/layouts/PrimaryLayout"
export default () => (
  <PrimaryLayout>
    <div className="row">
      <div className="col-sm ">
        <div className="col1">
          <h1 className="main--h1 ">Developers blog</h1>
          <p className="main--lead">
            The contnet on this blog is mainly focused on some analytics topics.
            Yow will find here also many programing topics, like scraping or SEO
            for JavaScript websites. Check some cool stuff clicking the buttom
            below!{" "}
          </p>
          <div className="main__btnarea">
            <button className="main__btnarea--button">
              <Link className="main__btnarea--button--link" to="blog">
                Read more
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <img
          className="img"
          alt="code-block"
          src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/main.svg"
        />
      </div>
    </div>
  </PrimaryLayout>
)
