import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import {kStyleElevation, kStylePaper} from '../style/styleConstants'


class ContactInfo extends Component {
	render() {
		return (
        <div className = "connect-container">
          <Paper elevation={kStyleElevation} style={kStylePaper}>
          <h2>Learn More</h2>
          <div className = "card-text-container">
            <div className = "contact-container">
              {contactSection(titleValueSpan, ['name', 'email'], this.props.store.getState().user.contact,"contact-title")}
            </div>
            <div className = "social-container">
              {contactSection(titleLinkSpan, ['website', 'facebook', 'twitter', 'instagram'], this.props.store.getState().user.contact,"social-info")}
            </div>
          </div>
          </Paper>
        </div>
	    )
	}
}

const contactMapping = {
  "name" : "Contact Name",
  "email" : "Contact Email",
  "website" : "Website",
  "facebook" : "Facebook",
  "instagram" : "Instagram",
  "twitter" : "Twitter"
}



const contactSection = (renderFunc, sections, contact, itemClass=undefined) => {
  return sections.map((key, i) => {
    if (contact[key] === undefined || contactMapping[key] === undefined) return undefined
    return (
      <div key={i} className = {"social-info"}>
        {renderFunc(contactMapping[key], contact[key], itemClass)}
      </div>
  )})
}


// Returns a span in the form of this:
// Twitter: www.twitter.com

const titleValueSpan = (title, value, itemClass) => {
  return (<div><span className = {itemClass}>{title + ": "}</span>{value}</div>)
}

// Returns a span in the form of this:
// Twitter

const titleLinkSpan = (title, link, itemClass) => {
  return (<a className = {itemClass} href={link}>{title}</a>)
}

// const valueContactSection = (sections, contact) => {
//   return sections.map((key, i) => {
//     if (contact[key] === undefined) return
//     return (
//       <div key={i} className={"social-info"}>
//       <a href={contact[key]}>{contactMapping[key]}</a>
//       </div>
//   )})
// }


export default ContactInfo