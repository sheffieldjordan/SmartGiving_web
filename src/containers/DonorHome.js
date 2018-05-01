import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {
  DonorPreButtons,
  DonorActionButtons
} from "../components/CardComponents"
import {HomepageFilter} from "../components/GiftFilters"
import {PriceForItems} from '../components/Helpers'
import {UserType} from '../components/User'

class DonorHome extends Component {

  render() {
          // preButtons={DonorPreButtons(gift.tags)}
          // buttons={DonorActionButtons(learnMore(r), selectDonate(r))}
    const buttons = {
      "pre": ((gift) => DonorPreButtons(gift)),
      "main": ((charity, actions) => DonorActionButtons(charity, actions)),
      "post" : (() => [])
    }

    const userType = UserType.DONOR
    const priceFunc = (gift) => PriceForItems(gift.items)
    const filter = HomepageFilter(false)

    const sectioningFunc = (charities) => [{charities}]

    return (
      <HomeTemplate store={this.props.store}
                    filter= {filter}
                    buttons={buttons}
                    sectioningFunc={sectioningFunc}
                    priceFunc={priceFunc}
                    userType={userType}/>
      )
  }
}


export default DonorHome
