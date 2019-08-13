import React from 'react'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import SEO from '../components/SEO';

export default () => (
    <PrimaryLayout>
        <SEO title="About" />
        <h1 className="about--h1">About</h1>
        <div className="about">
        <img className="about--image" src="pluto-welcome.png" alt=""/>
        <p className="about--lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus alias sequi debitis, vitae officiis corrupti non harum facilis, nostrum eum sed laudantium illum maxime assumenda a accusantium quis vero!</p>
        </div>
        <h2 className="about--h2">Skills</h2>
        <div className="about__skills">
            <img className="about__skills--item" alt="code-block" src={"firebase.svg"} />
            <img className="about__skills--item" alt="code-block" src={"gcp.svg"} />
            <img className="about__skills--item" alt="code-block" src={"git.svg"} />
            <img className="about__skills--item" alt="code-block" src={"./html.svg"} />
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