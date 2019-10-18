import React from "react"
import PrimaryLayout from "../components/layouts/PrimaryLayout"
import SEO from "../components/SEO"
import Card from "../components/Card"

export default props => (
  <PrimaryLayout>
    <SEO title="Portfolio" />
    <Card
      title="Movies API"
      description="Simple REST API that fetch movies details from online movie database and save it to MongoDB. API have test made by Mocha and Chai and also is dockerized."
      mainstack="JavaScript"
      date="2019-10-09"
      spenthours="5"
      git="https://github.com/xchmielu/moviesapi"
      live="https://ngmovieapi.herokuapp.com/"
      maintech="Node.js"
      subtech="MongoDB"
      apitype="REST"
    />
    <Card
      title="JWT Auth"
      description="The main target of this project was to skill-up in Express with TypeScript, and also learn about validation and authetication with JWT token."
      mainstack="TypeScript"
      date="2019-10-15"
      spenthours="5"
      git="https://github.com/xchmielu/jwt-api"
      maintech="Node.js"
      subtech="MongoDB"
      apitype="REST"
    />
    <Card
      title="CRUD Potgres API"
      description="The main puropse of this project was to create some sample backend with all HTTP methods, integrated with PostreSQL and also skill-up in Express with TypeScript."
      mainstack="TypeScript"
      date="2019-10-12"
      spenthours="3"
      git="https://github.com/xchmielu/postgres-crud"
      maintech="Node.js"
      subtech="Postgres"
      apitype="REST"
    />
    <Card
      title="OCR"
      description="Simple OCR build in Node.js with tesseract.js. The API with simply front using ejs, recognize text located on the image and create a pdf file of the content."
      mainstack="JavaScript"
      date="2019-09-20"
      spenthours="2"
      git="https://github.com/xchmielu/ocr"
      maintech="Node.js"
      subtech="EJS"
      apitype="REST"
    />
    <Card
      title="PinIt!"
      description="The main puropse of this projec was to practice React Hooks, GraphQL (to check if it's better than traditional REST API) and Maps API and create more interesting app than just Todo."
      mainstack="JavaScript"
      date="2019-05-03"
      spenthours="60"
      git="https://github.com/xchmielu/pinIt"
      maintech="React"
      subtech="Apollo"
      apitype="GraphQL"
      live="https://pinit.mchmielewski989.now.sh/"
    />

    <Card
      title="Chmielewski.dev"
      description="The main puropse of this project was to create a simple and modern looking blog, about web development and web analytics using Google Products like GTM or GA."
      mainstack="JavaScript"
      date="2019-08-01"
      spenthours="30"
      git="https://github.com/xchmielu/gatsby-blog"
      maintech="Gatsby"
      subtech="Sass"
      apitype="GraphQL"
      live="https://chmielewski.dev"
    />
  </PrimaryLayout>
)
