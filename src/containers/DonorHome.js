import React, { Component } from "react"

import HomeTemplate from "../components/HomeTemplate"

import {
  DonorPreButtons,
  DonorActionButtons
} from "../components/CardComponents"
import {HomepageFilter} from "../components/GiftFilters"
import {PriceForItems} from '../components/Helpers'

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
    const priceFunc = (gift) => PriceForItems(gift.items)
    const filter = HomepageFilter(false)

    return (
      <HomeTemplate store={this.props.store}
                    filter= {filter}
                    buttons={buttons}
                    priceFunc={priceFunc}
                    userType={userType}/>
      )
  }
}


export default DonorHome
