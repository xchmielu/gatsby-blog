import React from "react"
import {Link} from 'gatsby'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
export default () => (
  <PrimaryLayout>
<div className="row">
  <div className="col-sm ">
    <div className="col1">
    <h1 className="main--h1 ">Developers blog</h1>
    <p className="main--lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus adipisci in praesentium fugit, velit similique, expedita nulla deleniti deserunt odit labore rerum voluptatibus eius molestias quod delectus maiores, amet sit!</p>
    <div className="main__btnarea">
    <button className="main__btnarea--button"><Link className="main__btnarea--button--link" to="blog">Read more</Link></button>
    </div>   
    </div>
  </div>
  <div className="col-sm">
    <img className="img" alt="code-block" src="main.svg" />
  </div>
</div>
  </PrimaryLayout>
  
)
    

 