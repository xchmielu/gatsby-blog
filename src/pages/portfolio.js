import React from 'react'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import SEO from '../components/SEO';
import Card from '../components/Card'

export default (props) => (
    <PrimaryLayout>
                {/* <h1 className="portfolio--h1">Portfolio</h1> */}

        <SEO title="Portfolio" />
        <Card title="Chmielewski.dev" description="The main puropse of this project is to create a simple and modern looking blog, about web development and web analytics using Google Products like GTM or GA." mainstack="JavaScript" date="2019-08-01" spenthours="30" git="https://github.com/xchmielu/gatsby-blog" maintech="Gatsby" subtech="Sass" database="GraphQL" live="https://chmielewski.dev"/>
        <Card title="PinIt!" description="The main puropse of this projec is to practice React Hooks, GraphQL (to check if it's better than traditional REST API) and Maps API and create more interesting app than just Todo." mainstack="JavaScript" date="2019-05-03" spenthours="60" git="https://github.com/xchmielu/pinIt" maintech="React" subtech="Apollo" database="GraphQL" live="https://pinit.mchmielewski989.now.sh/"/>
        <Card title="OCR" description="Simple OCR build in Node.js with tesseract.js. The API with simply front using ejs, recognize text located on the image and create a pdf file of the content." mainstack="JavaScript" date="2019-09-20" spenthours="2" git="https://github.com/xchmielu/ocr" maintech="Node.js" subtech="EJS" database="none" />

        {/* <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>
        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>

        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/> */}
    </PrimaryLayout>  
)

