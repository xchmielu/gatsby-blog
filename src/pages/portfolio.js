import React from 'react'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import SEO from '../components/SEO';
import Card from '../components/Card'

export default (props) => (
    <PrimaryLayout>
                {/* <h1 className="portfolio--h1">Portfolio</h1> */}

        <SEO title="Portfolio" />
        <Card title="Chmielewski.dev" description="The main puropse of this project is to create a simple and modern looking blog, about web development and web analytics using Google Products like GTM or GA." mainstack="JavaScript" date="2019-08-01" spenthours="30" git="https://github.com/xchmielu/gatsby-blog" maintech="Gatsby" subtech="Sass" database="GraphQL" />
        <Card title="PinIt!" description="The main puropse of this projec is to practice React Hooks and create more interesting app than just Todo. The live version of app is here: https://pinit.mchmielewski989.now.sh/ " mainstack="JavaScript" date="2019-05-03" spenthours="60" git="https://github.com/xchmielu/pinIt" maintech="React" subtech="Apollo" database="GraphQL"/>
        {/* <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>
        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>

        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/> */}
    </PrimaryLayout>  
)

