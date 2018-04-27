import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {
  DonorPreButtons,
  DonorActionButtons
} from "../components/CardComponents"

class DonorHome extends Component {

  render() {
          // preButtons={DonorPreButtons(gift.tags)}
          // buttons={DonorActionButtons(learnMore(r), selectDonate(r))}
    const buttons = {
      "pre": ((gift) => DonorPreButtons(gift)),
      "main": ((charity, actions) => DonorActionButtons(charity, actions)),
      "post" : (() => [])
    }

    const userType = "donor"

    return (
      <HomeTemplate store={this.props.store} buttons={buttons} userType={userType}/>
      )
  }
}


export default DonorHome
