import React from "react";
import { withRouter } from "react-router-dom";
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size1, history, linkUrl, match }) => ( // {title} means destruct props, props.title
  <div className= {`${size1} menu-item`}
  //onClick = {()=>{history.push(`${match.url}${linkUrl}`)}} 
  onClick = {()=>{history.push(match.url+linkUrl)}} 
  >
  <div className = 'background-image'  style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="content" style = {{backgroundColor: "white", opacity: 0.7}}>
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default withRouter(MenuItem);
