import React, { Component } from 'react';

import NavBar from '../components/NavBar'
import { FetchGift } from '../backend/APIHelper'
import {isObjectEmpty} from '../components/Helpers'

import {ItemReceived} from '../ethereum/components/ItemReceived'
import {ConfirmRequest} from '../backend/EthereumRequestManager'
import {UpdateDatabase} from '../backend/APIManager'

import {Button} from 'material-ui'

class ItemReceivedPage extends Component {

  constructor(props) {
    super(props)
    this.state = { charity: {}, gift: {}}
  }

  componentDidMount() {
    // If we got provided a charity already, we don't need to reload it
    if (!isObjectEmpty(this.state.charity)) {
      return
    }
    // Otherwise, load it from the database
    const charityID = this.props.account
    FetchGift(charityID, (charity, gift) => this.setState({charity, gift}))
  }


  render() {

    const itemReceived = () => {
      const charity = this.state.charity
      ItemReceived(ConfirmRequest(charity), (err) => {
        if (err !== undefined) alert(err)
        else UpdateDatabase(() => console.log("Finished confirming shipment"))
     })
    }

    return (
    <div>
      <NavBar/>
      <div className="page-container">
        <h1>Hey there, {this.state.charity ? this.state.charity.title : "charity"}!</h1>
        <Button size="medium" variant="raised" color="primary" onClick={itemReceived}>I received my shit</Button>

      </div>
    </div>
    )
  }
}

export default ItemReceivedPage


