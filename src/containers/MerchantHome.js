import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {MerchantPreButtons, MerchantActionButtons, MerchantPostButtons} from '../components/CardComponents'
import {HomepageFilter} from "../components/GiftFilters"
import {WeiToEther} from '../style/Formatter'
import {UserType} from '../components/User'

class MerchantHome extends Component {

  render() {

    const buttons = {
      "pre": ((gift) => MerchantPreButtons(gift)),
      "main": ((charity, actions) => MerchantActionButtons(charity, actions)),
      "post" : ((gift) => MerchantPostButtons(gift))
    }

    const userType = UserType.MERCHANT
    const priceFunc = (gift) => WeiToEther(gift.donorDonationAmt).toFixed(5)
    const filter = HomepageFilter(true)

    return (
      <HomeTemplate store={this.props.store}
                    filter= {filter}
                    buttons={buttons}
                    priceFunc={priceFunc}
                    userType={userType}/>
      )
  }
}


export default MerchantHome

