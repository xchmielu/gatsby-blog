import React from 'react'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import SEO from '../components/SEO';

export default (props) => (
    <PrimaryLayout>
        <SEO title="Portfolio" />
        <h1 className="portfolio--h1">Portfolio</h1>
    </PrimaryLayout>  
)