import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { toggleDrawer, selectCharity } from "../redux/actions"
import { GetAllOpenGifts } from "../backend/APIManager"

import CardPage from "../components/CardPage"
import CharityCard from "../components/CharityCard"
import {
  DonorPreButtons,
  DonorActionButtons
} from "../components/CardComponents"
import DrawerFactory from "../components/DrawerFactory"
import { ImageLibrary } from "../components/ImageLibrary"
import {isObjectEmpty} from '../components/Helpers'

import "../style/DonorHome.css"

class DonorHome extends Component {
  constructor(props) {
    super(props)
    this.state = {recipients:this.props.store.getState().globalData.recipients}
  }

  componentDidMount() {
    const dbCompletion = (data, err) => {
      if (err) {
        alert(`${err}\nPerhaps the database isn't running.`)
        return
      }
      this.setState({recipients:data})
    }

    GetAllOpenGifts(dbCompletion)
  }

  render() {
    const storeState = this.props.store.getState()
    const selectDonate = charity => () => {
      this.props.showCharity(true, charity)
    }
    const learnMore = charity => () => {
      this.props.history.push({
        pathname: "/charity/" + charity.ethRecipientAddr,
        state: { charity }
      })
    }

    const recipients = this.state.recipients
    const cards = recipients.map((r, i) => {
      // Assume it is the first gift
      const gift = r.gifts[0]
      return (
        <CharityCard
          key={i}
          title={r.title}
          description={gift.summary}
          image={ImageLibrary(r.image)}
          onImageClick={learnMore(r)}
          preButtons={DonorPreButtons(gift.tags)}
          buttons={DonorActionButtons(learnMore(r), selectDonate(r))}
          postButtons={[]}
        />
      )
    })

    const drawerCharity = () => {
      if (isObjectEmpty(storeState.updateDrawer.selectedCharity)) {
        return undefined
      }
      return storeState.updateDrawer.selectedCharity
    }
    const drawer = (
      <DrawerFactory
        store={this.props.store}
        charity={drawerCharity()}
        type="donate"
      />
    )

    return <CardPage cards={cards} drawer={drawer} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showCharity: (showDrawer, charity = {}) => {
      dispatch(selectCharity(charity))
      dispatch(toggleDrawer(showDrawer))
    }
  }
}

DonorHome = connect(null, mapDispatchToProps)(DonorHome)

export default withRouter(DonorHome)
