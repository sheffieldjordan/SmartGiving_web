import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {MerchantPreButtons, MerchantActionButtons, MerchantPostButtons} from '../components/CardComponents'


class MerchantHome extends Component {

  render() {

    const buttons = {
      "pre": ((gift) => MerchantPreButtons(gift)),
      "main": ((charity, actions) => MerchantActionButtons(charity, actions)),
      "post" : ((gift) => MerchantPostButtons(gift))
    }

    const drawerType = "bid"

    return (
      <HomeTemplate store={this.props.store} buttons={buttons} drawerType={drawerType}/>
      )
  }
}


export default MerchantHome

