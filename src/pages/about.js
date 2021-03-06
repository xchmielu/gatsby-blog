import React from "react"
import PrimaryLayout from "../components/layouts/PrimaryLayout"
import SEO from "../components/SEO"

export default () => (
  <PrimaryLayout>
    <SEO title="About" />
    <h1 className="about--h1">About</h1>
    <div className="about">
      <img
        className="about--image"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/pluto-welcome.webp"
        alt=""
      />
      <div className="about--container">
        <div className="about__social">
          <a href="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/_Mateusz-Chmielewski-CV-ENG.pdf">
            <img
              className="about__social--item"
              src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/cv.svg"
              alt=""
            />
          </a>
          <a href="https://github.com/xchmielu">
            <img
              className="about__social--item"
              src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/github.svg"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/mateuszchmielewski/">
            <img
              className="about__social--item"
              src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/linkedin.svg"
              alt=""
            />
          </a>
        </div>
        <p className="about--lead">
          Hello, I am 3rd year student of Warsaw School of Computer Science in
          specialization of Databases. My passion is to create and build
          software using JavaScript libraries. My free time mostly spend on
          learning new techs. In this time I'am learnign TypeScript and
          preapring it to use with NestJs.
        </p>
      </div>
    </div>
    <h2 className="about--h2">Skills</h2>
    <div className="about__skills">
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/firebase.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/gcp.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/git.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/html.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/js.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/mongo.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/node.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/python.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/react.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/sql.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/angular.svg"
      />
      <img
        className="about__skills--item"
        alt="code-block"
        src="https://s3.eu-central-1.amazonaws.com/chmielewski.dev/css.svg"
      />
    </div>
  </PrimaryLayout>
)
