import React, { Component } from "react"

import NavBar from "../components/NavBar"
import RequestTable from "../components/RequestTable"
import DrawerFactory from "../components/DrawerFactory"
import ContactInfo from "../components/ContactInfo"
import { ImageLibrary } from "../components/ImageLibrary"

import { GetAllOpenGifts } from "../database/public/APIManager"

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

import { toggleDrawer, selectRequest } from "../redux/actions"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { DonateEthereum } from "../ethereum/components/Donate"
import "../style/GiftPage.css"

class GiftPage extends Component {
  constructor(props) {
    super(props)
    this.state = { donationValue: 0, charity: {}, gift: { items: [] } }
    this.giftData.bind(this)
    this.defaultCost.bind(this)
  }

  componentDidMount() {
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

  giftData() {
    const storeState = this.props.store.getState()
    return storeState.globalData.requests.filter(
      request => request.ethGiftAddr === this.props.match.params.giftID
    )[0]
  }

  defaultCost(gift) {
    const price = this.state.gift.items.reduce((total, item) => {
      return total + item.pricePerUnit
    }, 0)
    return price
  }

  render() {
    const handleDonationChange = event => {
      let donationValue = Math.floor(this.state.gift.dollars).toFixed(2)
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
        ? this.defaultCost(this.state.gift)
        : this.state.donationValue
    const selectDonate = () => {
      // CALL MORGANS SHIT
      DonateEthereum(error => {
        if (error !== undefined) {
          console.log(`ERROR : ${error}`)
        }
      })
      this.props.showDonate(true, donationValue(), this.state.charity)
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
                      <h1 className="gift-page-title">{this.state.charity.title}</h1>
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
                    <div className="gift-donation-estimate">
                      {" "}
                      Estimated Cost of Goods:{" "}
                      <span className="gift-donation-cost">
                        ${Math.floor(this.defaultCost(this.state.gift)).toFixed(
                          2
                        )}{" "}
                      </span>
                    </div>
                    <div className="gift-donation-fill-donation">
                      <span className="gift-your-donation">Your Donation:</span>
                      <FormControl>
                        <TextField
                          InputProps={{
                            classes: { root: "donation-text-field" },
                            startAdornment: (
                              <InputAdornment
                                className="donation-text-field"
                                position="start"
                              >
                                $
                              </InputAdornment>
                            )
                          }}
                          required={true}
                          id="donation-value"
                          value={donationValue()}
                          onChange={handleDonationChange}
                        />
                        <FormHelperText id="name-helper-text">
                          How much you want to donate?
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
                    Donate
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
            type="donate"
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showDonate: (showDrawer, donationValue, request = {}) => {
      dispatch(selectRequest(request))
      dispatch(toggleDrawer(showDrawer, donationValue))
    }
  }
}

GiftPage = connect(null, mapDispatchToProps)(GiftPage)

export default withRouter(GiftPage)
