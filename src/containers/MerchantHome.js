import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {MerchantPreButtons, MerchantActionButtons, MerchantPostButtons} from '../components/CardComponents'
import {HomepageFilter} from "../components/GiftFilters"

class MerchantHome extends Component {

  render() {

    const buttons = {
      "pre": ((gift) => MerchantPreButtons(gift)),
      "main": ((charity, actions) => MerchantActionButtons(charity, actions)),
      "post" : ((gift) => MerchantPostButtons(gift))
    }

    const userType = "merchant"

    const filter = HomepageFilter(true)

    return (
      <HomeTemplate store={this.props.store} filter={filter} buttons={buttons} userType={userType}/>
      )
  }
}


export default MerchantHome

