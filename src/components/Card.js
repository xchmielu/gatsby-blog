import React from "react";
import '../styles/_card.scss'

export default (props) => (
  <div className="portfolio__card">
  <div className="portfolio__card--img"></div>
  <div className="portfolio__card--deets">
    <div className="portfolio__card--info portfolio__card--type">
      <h6>{props.mainstack}</h6>
    </div>
    <div className="portfolio__card--info portfolio__card--date pill">
      <h6>{props.date}</h6>
    </div>
    <div className="portfolio__card--info portfolio__card--title">
      <h2 className="portforilio__card--h2">{props.title}</h2>
    </div>
    <div className="portfolio__card--info portfolio__card--time">
      <h2 className="portforilio__card--h2" >{props.spenthours}</h2>
    </div>
  </div>

  <p className="portfolio__card--info portfolio__card--description" >{props.description}</p>


  <div className="portfolio__card--data">
    <div>
      <h6>Main tech</h6>
      <p>{props.maintech}</p>
    </div>
    <div>
      <h6>Sub tech</h6>
      <p>{props.subtech}</p>
    </div>
    <div>
      <h6>Database</h6>
      <p>{props.database}</p>
    </div>
  </div>

  <a className="portfolio__card--btn"  href={props.git}>
    <p>Check code on github</p>
  </a>
</div>
)