import React from 'react'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import SEO from '../components/SEO';

export default () => (
    <PrimaryLayout>
        <SEO title="About" />
        <h1 className="about--h1">About</h1>
        <div className="about">
        <img className="about--image" src="pluto-welcome.png" alt=""/>
        <p className="about--lead">Hello, I am 3rd year student of Warsaw School of Computer Science in specialization of Databases. My passion is to create and build software using JavaScript libraries. My free time mostly spend on learning new techs. In this time I'am learnign TypeScript and preapring it to use with <strong>Koa.js</  strong>.</p>
        </div>
        <h2 className="about--h2">Skills</h2>
        <div className="about__skills">
            <img className="about__skills--item" alt="code-block" src={"firebase.svg"} />
            <img className="about__skills--item" alt="code-block" src={"gcp.svg"} />
            <img className="about__skills--item" alt="code-block" src={"git.svg"} />
            <img className="about__skills--item" alt="code-block" src={"html.svg"} />
            <img className="about__skills--item" alt="code-block" src={'js.svg'} />
            <img className="about__skills--item" alt="code-block" src={"mongo.svg"} />
            <img className="about__skills--item" alt="code-block" src={"node.svg"} />
            <img className="about__skills--item" alt="code-block" src={"python.svg"} />
            <img className="about__skills--item" alt="code-block" src={"react.svg"} />
            <img className="about__skills--item" alt="code-block" src={"sql.svg"} />
            <img className="about__skills--item" alt="code-block" src={"angular.svg"} />
            <img className="about__skills--item" alt="code-block" src={"css.svg"} />
        </div>
       
    </PrimaryLayout>  
)