import React from 'react'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import SEO from '../components/SEO';
import Card from '../components/Card'

export default (props) => (
    <PrimaryLayout>
                {/* <h1 className="portfolio--h1">Portfolio</h1> */}

        <SEO title="Portfolio" />
        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>
        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>
        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>
        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>

        <Card title="Node Project" description="Test" mainstack="JavaScript" date="2019-01-01" spenthours="100" git="test"/>
    </PrimaryLayout>  
)

