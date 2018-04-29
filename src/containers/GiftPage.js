import React, { Component } from "react"

import NavBar from "../components/NavBar"
import RequestTable from "../components/RequestTable"
import DrawerFactory from "../components/DrawerFactory"
import ContactInfo from "../components/ContactInfo"
import { ImageLibrary } from "../components/ImageLibrary"
import {isObjectEmpty, PriceForItems} from '../components/Helpers'
import {WeiToEther} from '../style/Formatter'
import GiftTextFactory from '../components/GiftTextFactory'
import { GetAllOpenGifts } from "../backend/APIManager"

import {
  Paper,
  Button,
  Card,
  CardMedia,
  TextField,
  FormHelperText,
  FormControl,
  InputAdornment
} from "material-ui"
import { kStyleElevation, kStylePaper } from "../style/styleConstants"

import { toggleDrawer, selectCharity } from "../redux/actions"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import "../style/GiftPage.css"

class GiftPage extends Component {
  constructor(props) {
    super(props)
    const locationState = this.props.location.state
    const charity = locationState === undefined ? {} : locationState.charity
    const gift = locationState === undefined ? { items: [], donorDonationAmt:0} : charity.gifts[0]

    this.state = { charity, gift, donationValue: 0, }
    this.defaultCost.bind(this)
  }

  componentDidMount() {
    // If we got provided a charity already, we don't need to reload it
    if (!isObjectEmpty(this.state.charity)) {
      return
    }

    // Otherwise, load it from the database
    const charityID = this.props.match.params.charityID
    const dbCompletion = (data, err) => {
      if (err) {
        alert(`${err}\nPerhaps the database isn't running.`)
        return
      }
      const charity = data.reduce((finalChar, currentChar) => {
        return currentChar.ethRecipientAddr === charityID ? currentChar : finalChar
      }, undefined)
      if (charity === undefined) {
        console.warn(`Cannot find charity for id ${charityID}`)
        return
      } else if (charity.gifts === undefined || charity.gifts.length === 0) {
          console.warn(`Cannot find gifts for charity with id ${charityID}`)
        }
      else {
        const gift = charity.gifts[0]
        this.setState({ charity, gift })
      }
    }

    GetAllOpenGifts(dbCompletion)
  }

  defaultCost(useDollars, gift) {
    if (useDollars) return PriceForItems(gift.items)
    return WeiToEther(gift.donorDonationAmt).toFixed(5)
  }

  render() {

    const userType = this.props.match.params.userType
    const textInfo = GiftTextFactory(userType, this.state.charity)
    const useDollars = userType === "donor"
    const unit = useDollars ? "$" : "ETH"

    const handleDonationChange = event => {
      let donationValue = this.defaultCost(useDollars)
      const n = event.target.value
      if (!isNaN(parseFloat(n)) && isFinite(n)) {
        // Shout out to StackOverflow for making a max of two digits parseFloat
        const digits = Math.min(2, (n.toString().split(".")[1] || []).length)
        const periodVal = digits === 0 ? "." : ""
        donationValue = Math.floor(parseFloat(n)).toFixed(digits) + periodVal
      }
      this.setState({ donationValue })
    }

    const donationValue = () =>
      this.state.donationValue === 0
        ? this.defaultCost(useDollars, this.state.gift)
        : this.state.donationValue
    const selectDonate = () => {
      this.props.showRequest(true, donationValue(), this.state.charity)
    }

    const shippingSection = (textInfo) => {
      if (textInfo.location === undefined) return
      return (
        <div className="gift-donation-money-section gift-donation-shipping">
          Shipping Address: <span className="gift-donation-shipping-address">{textInfo.location}</span>
        </div>
        )
    }


    return (
      <div>
        <NavBar />
        <div className="page-container">
          <div className="gift-info-container">
            <div className="gift-info-section">
              <Card className="gift-info-image-card">
                <CardMedia
                  className="gift-info-image"
                  title={this.state.charity.title}
                  image={ImageLibrary(this.state.charity.image)}
                >
                  <div className="gift-background-color">
                    <div className="gift-title-container">
                      <h1 className="gift-page-title">{this.state.gift.title}</h1>
                      <div className="gift-page-author">
                        for {this.state.charity.title}
                      </div>
                    </div>
                  </div>
                </CardMedia>
              </Card>
              <Paper elevation={kStyleElevation} style={kStylePaper}>
                <h2 className="gift-background-title"> Background </h2>
                <div className="gift-background">{this.state.gift.background}</div>
                <h2 className="gift-background-title">
                  {" "}
                  Why There Is a Challenge{" "}
                </h2>
                <div className="gift-background">{this.state.gift.challenge}</div>
              </Paper>
            </div>
            <div className="gift-info-section">
              <Paper elevation={kStyleElevation} style={kStylePaper}>
                <h2 className="gift-background-title"> Request Details </h2>
                <RequestTable
                  data={this.state.gift.items}
                  keys={["itemDescription", "quantity", "pricePerUnit"]}
                  titles={["Item", "Quantity", "Cost"]}
                />
                <div className="gift-donation-section">
                  <div className="gift-donation-money-section">
                    {shippingSection(textInfo)}

                    <div className="gift-donation-estimate">
                      {" "}
                      Estimated Cost of Goods:{" "}
                      <span className="gift-donation-cost">
                        {unit + (unit === "$" ? "" : " ")}{Math.floor(this.defaultCost(useDollars, this.state.gift)).toFixed(
                          2
                        )}{" "}
                      </span>
                    </div>
                    <div className="gift-donation-fill-donation">
                      <span className="gift-your-donation">{textInfo.moneyDescription}:</span>
                      <FormControl>
                        <TextField
                          InputProps={{
                            classes: { root: "donation-text-field" },
                            startAdornment: (
                              <InputAdornment
                                className="donation-text-field"
                                position="start"
                              >
                                {unit}
                              </InputAdornment>
                            )
                          }}
                          required={true}
                          id="donation-value"
                          value={donationValue()}
                          onChange={handleDonationChange}
                        />
                        <FormHelperText id="name-helper-text">
                          {textInfo.moneySubDescription}
                        </FormHelperText>
                      </FormControl>
                    </div>
                  </div>
                  <Button
                    size="large"
                    className="gift-donate-button"
                    variant="raised"
                    color="primary"
                    onClick={selectDonate}
                  >
                    {textInfo.donateButton}
                  </Button>
                </div>
              </Paper>
              <Paper elevation={kStyleElevation} style={kStylePaper}>
                <h2 className="gift-background-title"> About Recipient </h2>
                <div className="gift-background">{this.state.charity.about}</div>
                <h2 className="gift-background-title"> Learn More </h2>
                <div className="gift-background">
                  <ContactInfo user={this.state.charity} />
                </div>
              </Paper>
            </div>
          </div>
          <DrawerFactory
            store={this.props.store}
            request={this.state.gift}
            charity={this.state.charity}
            donationValue={parseFloat(donationValue())}
            type={userType}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showRequest: (showDrawer, donationValue, request = {}) => {
      dispatch(selectCharity(request))
      dispatch(toggleDrawer(showDrawer, donationValue))
    }
  }
}

GiftPage = connect(null, mapDispatchToProps)(GiftPage)

export default withRouter(GiftPage)
