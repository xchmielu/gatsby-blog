import React from 'react';
import Header from '../Header'
import SEO from '../SEO'

const PrimaryLayout =  (props) => (
    <div className="container">
        <SEO />
        <Header />
        <div className="row justify-content-md-center">
        {props.children}
    </div>
    </div>
)
export default PrimaryLayout