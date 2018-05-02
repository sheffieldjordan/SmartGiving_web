import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {MerchantPreButtons, MerchantActionButtons, MerchantPostButtons} from '../components/CardComponents'
import {HomepageFilter} from "../components/GiftFilters"
import {WeiToEther} from '../style/Formatter'
import {UserType} from '../components/User'

class MerchantHome extends Component {

  render() {

    const buttons = {
      "pre": ((gift) => MerchantPreButtons(gift, this.props.account)),
      "main": ((charity, actions) => MerchantActionButtons(charity, actions, this.props.account)),
      "post" : ((gift) => MerchantPostButtons(gift))
    }

    const userType = UserType.MERCHANT
    const priceFunc = (gift) => WeiToEther(gift.donorDonationAmt)
    const filter = HomepageFilter(true)
    const sectioningFunc = (recipients) => {
      const fulfilledFilter = (fulfilled) => (charity) => {
        const gift = charity.gifts[0]
        return fulfilled !== (gift.ethMerchantAddr === undefined || gift.ethMerchantAddr.length === 0)
      }

      let sections = []
      const activeBids = recipients.filter(fulfilledFilter(true))
      const openBids = recipients.filter(fulfilledFilter(false))

      if (openBids.length !== 0)  sections.push({charities: openBids})
      if (activeBids.length !== 0)  sections.push({title: "Active Bids", charities: activeBids})

      return sections

    }


    return (
      <HomeTemplate store={this.props.store}
                    filter= {filter}
                    buttons={buttons}
                    priceFunc={priceFunc}
                    sectioningFunc={sectioningFunc}
                    userType={userType}
                    account={this.props.account}/>
      )
  }
}


export default MerchantHome

